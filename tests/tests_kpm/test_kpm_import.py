# Copyright (c) 2023-2024 Antmicro <www.antmicro.com>
# SPDX-License-Identifier: Apache-2.0


from typing import List, Optional

import pytest

from topwrap.design import DesignDescription
from topwrap.design_to_kpm_dataflow_parser import (
    create_entry_graph,
    create_subgraphs,
    kpm_connections_from_design_descr,
    kpm_constant_metanodes_from_design_descr,
    kpm_constant_metanodes_from_nodes,
    kpm_dataflow_from_design_descr,
    kpm_external_metanodes_from_design_descr,
    kpm_metanodes_connections_from_design_descr,
    kpm_nodes_from_design_descr,
)
from topwrap.kpm_common import (
    EXT_OUTPUT_NAME,
    get_graph_with_id,
    is_metanode,
    is_subgraph_node,
)

from .common import AXI_NAME, PS7_NAME, PWM_NAME

# PWM
PWM_IPCORE_NODES = 3  # All IP Cores from examples/pwm/project.yaml

PWM_EXTERNAL_METANODES = 1  # Unique external metanodes
PWM_CONSTANT_METANODES = 0  # Unique constant metanodes
PWM_METANODES = PWM_EXTERNAL_METANODES + PWM_CONSTANT_METANODES

PWM_CORE_AXI_CONNECTIONS = 4  # Connections to AXI bridge
PWM_CORE_PS7_CONNECTIONS = 7  # Connections to PS7 module
PWM_CORE_PWM_CONNECTIONS = 3  # Connections to PWM module

# HDMI
HDMI_IPCORE_NODES = 15  # All IP Cores from examples/hdmi/project.yaml

HDMI_EXTERNAL_METANODES = 29  # Unique external metanodes
HDMI_CONSTANT_METANODES = 2  # Unique constant metanodes
HDMI_METANODES = HDMI_EXTERNAL_METANODES + HDMI_CONSTANT_METANODES

HDMI_IPCORES_CONNECTIONS = 59  # Connections between IP Cores
HDMI_EXTERNAL_CONNECTIONS = 29  # Connections to external metanodes
HDMI_CONSTANT_CONNECTIONS = 8  # Connections to constant metanodes

# HIERARCHY
HIERARCHY_IPCORE_NODES = 8
HIERARCHY_SUBGRAPH_NODES = 4

HIERARCHY_EXTERNAL_METANODES = 3
HIERARCHY_CONSTANT_METANODES = 2
HIERARCHY_SUBGRAPH_METANODES = 15
HIERARCHY_METANODES = (
    HIERARCHY_EXTERNAL_METANODES + HIERARCHY_CONSTANT_METANODES + HIERARCHY_SUBGRAPH_METANODES
)

HIERARCHY_CONNECTIONS = 26


def remove_id_and_side_position_from_interfaces(interfaces: List[dict]):
    for prop in interfaces:
        del prop["id"]


class TestPWMDataflowImport:
    """Tests that check validity of generated PWM dataflow from design description YAML
    (i.e. PWM dataflow import feature).
    """

    def test_pwm_nodes(self, pwm_design: DesignDescription, pwm_specification):
        """Check the validity of generated KPM nodes - test their properties values
        and interfaces names.
        """
        kpm_nodes = kpm_nodes_from_design_descr(pwm_design, pwm_specification)
        nodes_json = [node.to_json_format() for node in kpm_nodes]
        assert len(nodes_json) == PWM_IPCORE_NODES
        [axi_node] = list(filter(lambda node: node["instanceName"] == AXI_NAME, nodes_json))
        [ps7_node] = list(filter(lambda node: node["instanceName"] == PS7_NAME, nodes_json))
        [pwm_node] = list(filter(lambda node: node["instanceName"] == PWM_NAME, nodes_json))

        # check imported properties
        for prop in axi_node["properties"]:
            del prop["id"]
        assert sorted(axi_node["properties"], key=lambda prop: prop["name"]) == [
            {"name": "ADDR_WIDTH", "value": "32"},
            {"name": "AXIL_DATA_WIDTH", "value": "32"},
            {"name": "AXIL_STRB_WIDTH", "value": "AXIL_DATA_WIDTH/8"},
            {"name": "AXI_DATA_WIDTH", "value": "32"},
            {"name": "AXI_ID_WIDTH", "value": "12"},
            {"name": "AXI_STRB_WIDTH", "value": "AXI_DATA_WIDTH/8"},
        ]
        assert pwm_node["properties"] == []
        assert ps7_node["properties"] == []

        # check imported interfaces
        remove_id_and_side_position_from_interfaces(axi_node["interfaces"])
        assert sorted(axi_node["interfaces"], key=lambda iface: iface["name"]) == [
            {"name": "clk", "direction": "input", "side": "left"},
            {"name": "m_axi", "direction": "output", "side": "right"},
            {"name": "rst", "direction": "input", "side": "left"},
            {"name": "s_axi", "direction": "input", "side": "left"},
        ]

        remove_id_and_side_position_from_interfaces(pwm_node["interfaces"])
        assert sorted(pwm_node["interfaces"], key=lambda iface: iface["name"]) == [
            {"name": "pwm", "direction": "output", "side": "right"},
            {"name": "s_axi", "direction": "input", "side": "left"},
            {"name": "sys_clk", "direction": "input", "side": "left"},
            {"name": "sys_rst", "direction": "input", "side": "left"},
        ]

        remove_id_and_side_position_from_interfaces(ps7_node["interfaces"])
        assert sorted(ps7_node["interfaces"], key=lambda iface: iface["name"]) == [
            {"name": "FCLK0", "direction": "output", "side": "right"},
            {"name": "FCLK_RESET0_N", "direction": "output", "side": "right"},
            {"name": "MAXIGP0ACLK", "direction": "input", "side": "left"},
            {"name": "MAXIGP0ARESETN", "direction": "output", "side": "right"},
            {"name": "M_AXI_GP0", "direction": "output", "side": "right"},
        ]

    def test_pwm_metanodes(self, pwm_design: DesignDescription, pwm_specification):
        """Check the number of generated metanodes and their contents. External metanodes should
        always contain one "External Name" property and one "external" interface.
        """
        kpm_ext_metanodes = kpm_external_metanodes_from_design_descr(pwm_design)
        kpm_const_metanodes = kpm_constant_metanodes_from_design_descr(
            pwm_design, pwm_specification
        )
        kpm_metanodes = kpm_ext_metanodes + kpm_const_metanodes

        ext_metanodes_json = [node.to_json_format() for node in kpm_ext_metanodes]
        const_metanodes_json = [node.to_json_format() for node in kpm_const_metanodes]
        metanodes_json = [node.to_json_format() for node in kpm_metanodes]
        # PWM design should contain only 1 `External Output` metanode
        assert len(ext_metanodes_json) == PWM_EXTERNAL_METANODES
        assert len(const_metanodes_json) == PWM_CONSTANT_METANODES
        assert len(metanodes_json) == PWM_METANODES

        # check the property of the `External Output` metanode
        assert len(metanodes_json[0]["properties"]) == 1
        del metanodes_json[0]["properties"][0]["id"]
        assert metanodes_json[0]["properties"][0] == {"name": "External Name", "value": "pwm"}

        # check the interface of the `External Output` metanode
        assert len(metanodes_json[0]["interfaces"]) == 1
        remove_id_and_side_position_from_interfaces(metanodes_json[0]["interfaces"])
        assert metanodes_json[0]["interfaces"][0] == {
            "name": "external",
            "direction": "input",
            "side": "left",
        }

    def _find_node_name_by_iface_id(self, iface_id: str, nodes_json: list) -> Optional[dict]:
        for node in nodes_json:
            if iface_id in [iface["id"] for iface in node["interfaces"]]:
                return node["instanceName"]

    def test_pwm_connections(self, pwm_design: DesignDescription, pwm_specification):
        """Check the number of generated connections between two nodes representing IP cores
        (i.e. `ipcore_1`<->`ipcore_2` connections).
        """
        kpm_nodes = kpm_nodes_from_design_descr(pwm_design, pwm_specification)
        connections_json = [
            conn.to_json_format()
            for conn in kpm_connections_from_design_descr(pwm_design, kpm_nodes)
        ]
        nodes_json = [node.to_json_format() for node in kpm_nodes]
        assert len(connections_json) == 7

        # we have 7 ipcore<->ipcore connections, each one is represented as a pair of ids
        # let's check the number of connections for each node
        node_names = []

        for conn in connections_json:
            assert sorted(list(conn.keys())) == ["from", "id", "to"]
            node_names.append(self._find_node_name_by_iface_id(conn["from"], nodes_json))
            node_names.append(self._find_node_name_by_iface_id(conn["to"], nodes_json))
        assert node_names.count(AXI_NAME) == PWM_CORE_AXI_CONNECTIONS
        assert node_names.count(PS7_NAME) == PWM_CORE_PS7_CONNECTIONS
        assert node_names.count(PWM_NAME) == PWM_CORE_PWM_CONNECTIONS

    def test_pwm_metanodes_connections(self, pwm_design: DesignDescription, pwm_specification):
        """Check the number of generated connections between a node representing IP core and
        an metanode (i.e. `ipcore`<->`metanode` connections).
        """
        kpm_nodes = kpm_nodes_from_design_descr(pwm_design, pwm_specification)
        kpm_metanodes = kpm_external_metanodes_from_design_descr(pwm_design)

        connections_json = [
            conn.to_json_format()
            for conn in kpm_metanodes_connections_from_design_descr(
                pwm_design, kpm_nodes, list(kpm_metanodes)
            )
        ]
        nodes_json = [node.to_json_format() for node in kpm_nodes]
        metanodes_json = [metanode.to_json_format() for metanode in kpm_metanodes]
        assert len(connections_json) == 1
        assert self._find_node_name_by_iface_id(connections_json[0]["from"], nodes_json) == PWM_NAME
        assert (
            self._find_node_name_by_iface_id(connections_json[0]["to"], metanodes_json)
            == EXT_OUTPUT_NAME
        )


class TestHDMIDataflowImport:
    def test_hdmi_nodes(self, hdmi_design: DesignDescription, hdmi_specification):
        """Check the validity of generated KPM nodes - test some of their properties values."""
        kpm_nodes = kpm_nodes_from_design_descr(hdmi_design, hdmi_specification)
        nodes_json = [node.to_json_format() for node in kpm_nodes]
        assert len(nodes_json) == HDMI_IPCORE_NODES
        # check overrode {'value': ..., 'width': ...} parameter value
        [axi_interconnect_node] = list(
            filter(lambda node: node["instanceName"] == "axi_interconnect0", nodes_json)
        )
        [m_addr_width] = list(
            filter(lambda prop: prop["name"] == "M_ADDR_WIDTH", axi_interconnect_node["properties"])
        )
        assert m_addr_width["value"] == "96'h100000001000000010"

    def test_hdmi_metanodes(self, hdmi_design: DesignDescription, hdmi_specification):
        """Check the number of generated external and constant metanodes."""
        kpm_ext_metanodes = kpm_external_metanodes_from_design_descr(hdmi_design)
        kpm_const_metanodes = kpm_constant_metanodes_from_design_descr(
            hdmi_design, hdmi_specification
        )
        kpm_metanodes = kpm_ext_metanodes + kpm_const_metanodes

        ext_metanodes_json = [node.to_json_format() for node in kpm_ext_metanodes]
        const_metanodes_json = [node.to_json_format() for node in kpm_const_metanodes]
        metanodes_json = [node.to_json_format() for node in kpm_metanodes]

        assert len(ext_metanodes_json) == HDMI_EXTERNAL_METANODES
        assert len(const_metanodes_json) == HDMI_CONSTANT_METANODES
        assert len(metanodes_json) == HDMI_METANODES

    def test_hdmi_connections(self, hdmi_design: DesignDescription, hdmi_specification):
        """Check the number of generated connections between nodes representing IP cores
        (i.e. `ipcore_1`<->`ipcore_2` connections).
        """
        kpm_nodes = kpm_nodes_from_design_descr(hdmi_design, hdmi_specification)
        connections = kpm_connections_from_design_descr(hdmi_design, kpm_nodes)

        assert len(connections) == HDMI_IPCORES_CONNECTIONS

    def test_hdmi_metanodes_connections(self, hdmi_design: DesignDescription, hdmi_specification):
        """Check the number of generated connections between a node representing IP core and
        a metanode (i.e. `ipcore`<->`metanode` connections).
        """
        kpm_nodes = kpm_nodes_from_design_descr(hdmi_design, hdmi_specification)
        ext_metanodes = kpm_external_metanodes_from_design_descr(hdmi_design)
        const_metanodes = kpm_constant_metanodes_from_nodes(kpm_nodes)

        ext_metanodes_connections = kpm_metanodes_connections_from_design_descr(
            hdmi_design, kpm_nodes, ext_metanodes
        )
        const_metanodes_connections = kpm_metanodes_connections_from_design_descr(
            hdmi_design, kpm_nodes, const_metanodes
        )

        assert len(ext_metanodes_connections) == HDMI_EXTERNAL_CONNECTIONS
        assert len(const_metanodes_connections) == HDMI_CONSTANT_CONNECTIONS


class TestHierarchyDataflowImport:
    @pytest.fixture
    def design_graphs(self, hierarchy_design: DesignDescription, hierarchy_specification):
        entry_graph, subgraph_maps = create_entry_graph(hierarchy_design, hierarchy_specification)
        subgraphs = create_subgraphs(
            hierarchy_design.design,
            hierarchy_specification,
            entry_graph.nodes,
            subgraph_maps,
        )
        subgraphs.append(entry_graph)
        return subgraphs

    @pytest.fixture
    def nodes_from_graphs(self, design_graphs):
        all_nodes = []
        for graph in design_graphs:
            all_nodes += graph.nodes
        return all_nodes

    def test_core_nodes(self, nodes_from_graphs):
        core_nodes = list(
            filter(
                lambda node: (not is_metanode(node) and not is_subgraph_node(node)),
                [node.to_json_format() for node in nodes_from_graphs],
            )
        )
        assert len(core_nodes) == HIERARCHY_IPCORE_NODES
        [c_mod_1] = list(filter(lambda node: node["instanceName"] == "c_mod_1", core_nodes))
        [s1_mod_2] = list(filter(lambda node: node["instanceName"] == "s1_mod_2", core_nodes))

        [max_value] = list(filter(lambda prop: prop["name"] == "MAX_VALUE", c_mod_1["properties"]))
        assert max_value["value"] == "16"
        assert s1_mod_2["properties"] == []

        # check interfaces on nodes that are on different depths
        remove_id_and_side_position_from_interfaces(c_mod_1["interfaces"])
        assert sorted(c_mod_1["interfaces"], key=lambda iface: iface["name"]) == [
            {"direction": "output", "name": "c_int_out_1", "side": "right"},
            {"direction": "input", "name": "c_mod_in_1", "side": "left"},
        ]

        remove_id_and_side_position_from_interfaces(s1_mod_2["interfaces"])
        assert sorted(s1_mod_2["interfaces"], key=lambda iface: iface["name"]) == [
            {"direction": "output", "name": "cs_s1_f_int_out_1", "side": "right"},
            {"direction": "input", "name": "cs_s1_mint_in_1", "side": "left"},
        ]

    def test_subgraph_nodes(self, nodes_from_graphs):
        subgraph_nodes = list(
            filter(
                lambda node: is_subgraph_node(node),
                [node.to_json_format() for node in nodes_from_graphs],
            )
        )
        assert len(subgraph_nodes) == HIERARCHY_SUBGRAPH_NODES

        [counter] = list(filter(lambda node: node["instanceName"] == "counter", subgraph_nodes))
        [complex_sub] = list(
            filter(lambda node: node["instanceName"] == "complex_sub", subgraph_nodes)
        )
        [sub_2] = list(filter(lambda node: node["instanceName"] == "sub_2", subgraph_nodes))

        remove_id_and_side_position_from_interfaces(counter["interfaces"])
        assert sorted(counter["interfaces"], key=lambda iface: iface["name"]) == [
            {"direction": "input", "name": "c_in_1", "side": "left"},
            {"direction": "input", "name": "c_in_2", "side": "left"},
            {"direction": "output", "name": "c_out_1", "side": "right"},
        ]

        remove_id_and_side_position_from_interfaces(complex_sub["interfaces"])
        assert sorted(complex_sub["interfaces"], key=lambda iface: iface["name"]) == [
            {"direction": "input", "name": "cs_empty_port_in", "side": "left"},
            {"direction": "input", "name": "cs_in_1", "side": "left"},
            {"direction": "output", "name": "cs_out_1", "side": "right"},
        ]

        remove_id_and_side_position_from_interfaces(sub_2["interfaces"])
        assert sorted(sub_2["interfaces"], key=lambda iface: iface["name"]) == [
            {"direction": "input", "name": "cs_s2_int_in_1", "side": "left"},
            {"direction": "input", "name": "cs_s2_int_in_2", "side": "left"},
            {"direction": "output", "name": "cs_s2_mod_out_1", "side": "right"},
        ]

    def test_hierarchy_metanodes(self, nodes_from_graphs):
        metanodes = list(
            filter(
                lambda node: is_metanode(node),
                [node.to_json_format() for node in nodes_from_graphs],
            )
        )
        assert len(metanodes) == HIERARCHY_METANODES

    def test_hierarchy_connections(self, design_graphs):
        def all_connections(design_graphs):
            all_conn = []
            for graph in design_graphs:
                all_conn += graph.connections
            return all_conn

        def find_node_with_interface_id(design_graphs, iface_id, conn_id):
            for graph in design_graphs:
                # find correct graph
                for conn in graph.connections:
                    if conn.id == conn_id:
                        # find correct node
                        for node in graph.nodes:
                            for interface in node.interfaces:
                                if interface.id == iface_id:
                                    return node.name

        design_connections_json = [conn.to_json_format() for conn in all_connections(design_graphs)]
        assert len(design_connections_json) == HIERARCHY_CONNECTIONS

        node_names = []
        for conn in design_connections_json:
            node_names.append(find_node_with_interface_id(design_graphs, conn["to"], conn["id"]))
            node_names.append(find_node_with_interface_id(design_graphs, conn["from"], conn["id"]))
        node_occurrence_dict = {item: node_names.count(item) for item in node_names}
        conn_dict = {
            "Constant": 2,
            "External Input": 2,
            "External Output": 1,
            "c_mod_1": 2,
            "c_mod_2": 2,
            "c_mod_3": 4,
            "complex_sub": 2,
            "complex_sub cs_in_1": 1,
            "complex_sub cs_out_1": 1,
            "counter": 3,
            "counter c_in_1": 1,
            "counter c_in_2": 1,
            "counter c_out_1": 1,
            "s1_mod_1": 4,
            "s1_mod_2": 2,
            "s1_mod_3": 2,
            "s2_mod_1": 4,
            "s2_mod_2": 3,
            "sub_1": 4,
            "sub_1 cs_s1_int_const_in": 1,
            "sub_1 cs_s1_int_out_1": 1,
            "sub_1 cs_s1_int_out_2": 1,
            "sub_1 cs_s1_mod_in_1": 1,
            "sub_2": 3,
            "sub_2 cs_s2_int_in_1": 1,
            "sub_2 cs_s2_int_in_2": 1,
            "sub_2 cs_s2_mod_out_1": 1,
        }

        assert node_occurrence_dict == conn_dict


class TestComplexDesignImport:
    @pytest.fixture
    def _design_same_names(self) -> DesignDescription:
        des = "design: { hierarchies: { SUB: { design: { hierarchies: { SUB: {}}}}}}"
        return DesignDescription.from_yaml(des)

    def test_has_hierarchies_same_names(
        self, _design_same_names: DesignDescription, hierarchy_specification
    ):
        dataflow = kpm_dataflow_from_design_descr(_design_same_names, hierarchy_specification)
        assert "entryGraph" in dataflow and dataflow["entryGraph"] and len(dataflow["graphs"]) == 3

        graph0 = get_graph_with_id(dataflow, dataflow["entryGraph"])
        assert graph0 is not None and len(graph0["nodes"]) == 1

        graph1 = get_graph_with_id(dataflow, graph0["nodes"][0]["subgraph"])
        assert graph1 is not None and graph0 != graph1 and len(graph1["nodes"]) == 1

        graph2 = get_graph_with_id(dataflow, graph1["nodes"][0]["subgraph"])
        assert (
            graph2 is not None
            and graph2 != graph0
            and graph2 != graph1
            and len(graph2["nodes"]) == 0
        )
