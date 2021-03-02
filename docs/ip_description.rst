.. _ip_description:

IP description files
====================

Every IP wrapped by Topwrap needs a description file in YAML format.

The ports of an IP should be placed in global `signals` node, followed by the direction of `in`, `out` or `inout`.
Here's an example description of ports of Clock Crossing IP:

.. code-block:: yaml

    # file: clock_crossing.yaml
    signals:
        in:
            - clkA
            - A
            - clkB
        out:
            - B


The previous example is enough to make use of any IP. However, in order to benefit from connecting whole interfaces at once, ports must belong to a named interface like in this example:


.. code-block:: yaml

    #file: axis_width_converter.yaml
    s_axis:
        interface: AXIStream
        mode: slave
        signals:
            in:
                TDATA: [s_axis_tdata, 63, 0]
                TKEEP: [s_axis_tkeep, 7, 0]
                TVALID: s_axis_tvalid
                TLAST: s_axis_tlast
                TID: [s_axis_tid, 7, 0]
                TDEST: [s_axis_tdest, 7, 0]
                TUSER: s_axis_tuser
            out:
                TREADY: s_axis_tready

    m_axis:
        interface: AXIStream
        mode: master
        signals:
            in:
                TREADY: m_axis_tready
            out:
                TDATA: [m_axis_tdata, 31, 0]
                TKEEP: [m_axis_tkeep, 3, 0]
                TVALID: m_axis_tvalid
                TLAST: m_axis_tlast
                TID: [m_axis_tid, 7, 0]
                TDEST: [m_axis_tdest, 7, 0]
                TUSER: m_axis_tuser
    signals: # These ports don't belong to any interface
        in:
            - clk
            - rst

Names `s_axis` and `m_axis` will be used to group the selected ports.
Each signal in an interface has a name which must match with the signal it's supposed to be connected to, for example `TDATA: port_name` will be connected to `TDATA: other_port_name`.


Port widths
-----------

The width of every port defaults to `1`.
You can specify the width using this notation:


.. code-block:: yaml

    s_axis:
        interface: AXIStream
        mode: slave
        signals:
            in:
                TDATA: [s_axis_tdata, 63, 0] # 64 bits 
                ...
                TVALID: s_axis_tvalid # defaults to 1 bit

    signals:
        in:
            - [gpio_io_i, 31, 0] # 32 bits

.. _port_slicing:

Port slicing
------------

You can also slice a port, to use some bits of the port as a signal that belongs to an interface.
The example below means: 

`Port m_axi_bid of the IP core is 36 bits wide. Use bits 23..12 as the BID signal of AXI master named m_axi_1`

.. code-block:: yaml

    m_axi_1:
        interface: AXI
        mode: master
        signals:
            in:
                BID: [m_axi_bid, 35, 0, 23, 12]

