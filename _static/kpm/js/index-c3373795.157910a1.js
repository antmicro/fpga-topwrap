(self.webpackChunkpipeline_manager=self.webpackChunkpipeline_manager||[]).push([[627],{88991:()=>{},66067:()=>{},31865:()=>{},38740:()=>{},99421:()=>{},79359:(e,t,i)=>{"use strict";i.d(t,{h:()=>r});const r=" data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPCEtLSBVcGxvYWRlZCB0bzogU1ZHIFJlcG8sIHd3dy5zdmdyZXBvLmNvbSwgVHJhbnNmb3JtZWQgYnk6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPgo8c3ZnIGZpbGw9IiNmZmZmZmYiIHZlcnNpb249IjEuMSIgaWQ9IkNhcGFfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjgwMHB4IiBoZWlnaHQ9IjgwMHB4IiB2aWV3Qm94PSIwIDAgODcyIDg3MiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgc3R5bGU9Ii0tZGFya3JlYWRlci1pbmxpbmUtZmlsbDogIzE4MWExYjsiIGRhdGEtZGFya3JlYWRlci1pbmxpbmUtZmlsbD0iIj4KDTxnIGlkPSJTVkdSZXBvX2JnQ2FycmllciIgc3Ryb2tlLXdpZHRoPSIwIi8+Cg08ZyBpZD0iU1ZHUmVwb190cmFjZXJDYXJyaWVyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KDTxnIGlkPSJTVkdSZXBvX2ljb25DYXJyaWVyIj4gPGc+IDxnPiA8cGF0aCBkPSJNMjg5LjEsMzUxLjNoNjEuOGM3LjMwMSwwLDEzLjEwMS01LjksMTMuMTAxLTEzLjF2LTk3LjRjMC00LjUtMS44LTguOS01LTEyLjFjLTMuMi0zLjItNy41LTUtMTIuMTAxLTVIMTg4LjQgYy01MC4zLDAtOTcuNiwxOS42LTEzMy4yLDU1LjJTMCwzNjEuOCwwLDQxMi4xdjIuOWMwLDUwLjI5OSwxOS42LDk3LjYsNTUuMiwxMzMuMnM4Mi45LDU1LjE5OSwxMzMuMiw1NS4xOTlIMzQ3IGM0LjUsMCw4Ljg5OS0xLjc5OSwxMi4xLTVjMy4yLTMuMTk5LDUtNy41LDUtMTIuMXYtODQuMTk5YzAtNy4zMDEtNS44OTktMTMuMS0xMy4xLTEzLjFoLTYxLjhjLTcuMzAxLDAtMTMuMTAxLDUuODk4LTEzLjEwMSwxMy4xIHYxMy4xaC04Ny42Yy01NS40LDAtMTAwLjItNDQuOS0xMDAuMi0xMDAuMnYtMi45YzAtNTUuMzk5LDQ0LjktMTAwLjIsMTAwLjItMTAwLjJoODcuNnYyNi40QzI3NiwzNDUuNSwyODEuODk5LDM1MS4zLDI4OS4xLDM1MS4zIHoiLz4gPHBhdGggZD0iTTYwMi4xLDEwOS42Yy00LjMtMi4zLTkuMS0zLjUtMTMuODk5LTMuNWMtMTEuMiwwLTIxLjQsNi4xLTI2LjYwMSwxNmwtNTIuMSw5OWMtNy43LDE0LjYtMi4xMDEsMzIuOCwxMi42LDQwLjUgYzQuMywyLjMsOS4xMDEsMy41LDEzLjksMy41YzExLjIsMCwyMS4zOTktNi4xLDI2LjYtMTZsNTIuMTAxLTk5YzMuNjk5LTcuMSw0LjUtMTUuMiwyLjEtMjIuOSBDNjE0LjM5OSwxMTkuNiw2MDkuMiwxMTMuMyw2MDIuMSwxMDkuNnoiLz4gPHBhdGggZD0iTTQzMS44OTksOTcuM0M0MjgsODQuNyw0MTYuNSw3Ni4yLDQwMy4zLDc2LjJjLTMsMC02LDAuNS04LjksMS40Yy0xNS44LDQuOS0yNC42OTksMjEuOC0xOS44LDM3LjZMNDA3LjgsMjIyIGMzLjksMTIuNiwxNS40LDIxLjEsMjguNiwyMS4xYzMsMCw2LTAuNSw4LjktMS40YzcuNy0yLjQsMTMuOS03LjYsMTcuNy0xNC43YzMuNy03LjEsNC41LTE1LjIsMi4xLTIyLjlMNDMxLjg5OSw5Ny4zeiIvPiA8cGF0aCBkPSJNNTg0LjYsMzE1YzMuOSwxMi42LDE1LjQsMjEuMSwyOC42MDEsMjEuMWMzLDAsNi0wLjUsOC44OTktMS40bDEwNi44LTMzLjJjMTUuODAxLTQuOSwyNC43LTIxLjgsMTkuNy0zNy41IGMtMy44OTktMTIuNi0xNS4zOTktMjEuMS0yOC42LTIxLjFjLTMsMC02LDAuNS04LjksMS40bC0xMDYuOCwzMy4xQzU4OC41LDI4Mi4zLDU3OS43LDI5OS4yLDU4NC42LDMxNXoiLz4gPC9nPiA8cGF0aCBkPSJNNTY3LjMsNTc5LjEwMWwtNDMuNy00My43MDFjLTUuMS01LjEtMTMuNS01LjEtMTguNiwwbC02OC44LDY4LjljLTMuMiwzLjIwMS01LDcuNS01LDEyLjFjMCw0LjUsMS44LDguOSw1LDEyLjEwMiBsMTEyLjEsMTEyLjFjMzUuNiwzNS42LDgyLjksNTUuMTk5LDEzMy4yLDU1LjE5OXM5Ny42LTE5LjYsMTMzLjItNTUuMTk5bDIuMS0yLjFjMzUuNi0zNS42MDIsNTUuMi04Mi45LDU1LjItMTMzLjIwMSBjMC01MC4yOTktMTkuNjAxLTk3LjYtNTUuMi0xMzMuMTk5bC0xMTIuMi0xMTJjLTMuMi0zLjItNy41LTUtMTIuMS01Yy00LjUsMC04LjksMS44LTEyLjEwMSw1bC01OS41LDU5LjUgYy01LjEsNS4xMDEtNS4xLDEzLjUsMCwxOC42bDQzLjcsNDMuNjk5YzUuMTAxLDUuMTAyLDEzLjUsNS4xMDIsMTguNjAxLDBsOS4zLTkuMjk5bDYyLDYyYzM5LjEsMzkuMSwzOS4xLDEwMi42LDAsMTQxLjc5OSBsLTIuMTAxLDIuMTAyYy0zOS4xLDM5LjEtMTAyLjYsMzkuMS0xNDEuOCwwbC02Mi02MmwxOC43LTE4LjcwMUM1NzIuNSw1OTIuNjAxLDU3Mi41LDU4NC4zLDU2Ny4zLDU3OS4xMDF6Ii8+IDwvZz4gPC9nPgoNPC9zdmc+"},64215:e=>{"use strict";e.exports=JSON.parse('{"$id":"common_types","$defs":{"empty":{"description":"Empty object definition","type":"object","additionalProperties":false},"null_or_empty":{"description":"Empty or missing object definition","type":["object","null"],"additionalProperties":false},"node_object":{"description":"Schema that identifies a node in a graph","type":"object","properties":{"graph_id":{"description":"Id of the graph","type":"string"},"node_id":{"description":"Id of the node","type":"string"}},"required":["graph_id","node_id"]},"dataflow_object":{"description":"Definition containing `dataflow` object","type":"object","properties":{"dataflow":{"description":"JSON with graph definition in PM format","type":"object"}},"additionalProperties":false},"properties_diff":{"description":"Schema that represents differences in properties of the node","allOf":[{"$ref":"common_types#/$defs/node_object"}],"type":"object","properties":{"properties":{"type":"array","description":"Properties to change specified by either a name or id","items":{"type":"object","oneOf":[{"type":"object","properties":{"id":{"description":"Id of the property to alter","type":"string"},"new_value":{"description":"New value of the property"}},"required":["id","new_value"],"additionalProperties":false},{"type":"object","properties":{"name":{"description":"Name of the property to alter","type":"string"},"new_value":{"description":"New value of the property"}},"required":["name","new_value"],"additionalProperties":false}]}}},"unevaluatedProperties":false,"required":["properties"]},"position_diff":{"description":"Schema that represent differences in position of the node","allOf":[{"$ref":"common_types#/$defs/node_object"}],"type":"object","properties":{"position":{"type":"object","description":"Position to change specified by either a name or id","properties":{"x":{"description":"X coordinate","type":"number"},"y":{"description":"Y coordinate","type":"number"}}}},"unevaluatedProperties":false,"required":["position"]},"nodes_diff":{"description":"Schema that represents nodes\' differences in a graph","type":"object","properties":{"graph_id":{"description":"Id of the graph","type":"string"},"nodes":{"description":"","type":"object","properties":{"added":{"description":"List with created nodes","type":"array","items":{"description":"JSON with node definition","type":"object"}},"deleted":{"description":"List with removed nodes","type":"array","items":{"description":"ID of node to delete","type":"string"}}}},"remove_with_connections":{"description":"Should node be removed with connections","type":"boolean"}},"required":["graph_id","nodes"]},"connections_diff":{"description":"Schema that represents connections\' differences in a graph","type":"object","properties":{"graph_id":{"description":"Id of the graph","type":"string"},"connections":{"description":"","type":"object","properties":{"added":{"description":"List with created connections","type":"array","items":{"description":"JSON with connection definition","type":"object"}},"deleted":{"description":"List with removed connections","type":"array","items":{"description":"Connection defined with its beginning and end","type":"object","properties":{"from":{"description":"ID of output interface","type":"string"},"to":{"description":"ID of input interface","type":"string"}}}}}}},"required":["graph_id","connections"]},"metadata":{"description":"Type with PM metadata","type":"object","properties":{"metadata":{"description":"JSON with metadata description in PM format","type":"object"}},"required":["metadata"],"additionalProperties":false},"external_endpoint_return_type":{"description":"Common type returned by external app","type":"object","properties":{"type":{"description":"[MessageType](message-type) specifying success, error or progress","type":"number"},"content":{"description":"Additional information, either message or dataflow","type":["object","string"]}},"additionalProperties":false,"required":["type"]}}}')},28768:e=>{"use strict";e.exports=JSON.parse('{"Mk":{"graph_get":{"description":"Returns dataflow used by frontend","params":{"$ref":"common_types#/$defs/null_or_empty"},"returns":{"$ref":"common_types#/$defs/dataflow_object"}},"node_get":{"description":"Procedure to read node state","params":{"allOf":[{"$ref":"common_types#/$defs/node_object"}]},"returns":{"type":"object","properties":{"node":{"description":"State of the node","type":"object"}},"additionalProperties":false,"required":["node"]}},"properties_get":{"description":"Procedure to alter values of a node","params":{"allOf":[{"$ref":"common_types#/$defs/node_object"}],"type":"object","properties":{"properties":{"type":["array","null"],"description":"Properties which values are going to be read specified by either a name of id. If undefined then all properties are returned","items":{"type":"object","oneOf":[{"type":"object","properties":{"id":{"description":"Id of the property to read","type":"string"}},"required":["id"],"additionalProperties":false},{"type":"object","properties":{"name":{"description":"Name of the property to read","type":"string"}},"required":["name"],"additionalProperties":false}]}}},"unevaluatedProperties":false},"returns":{"type":"array","items":{"type":"object","description":"Values of the searched properties","properties":{"id":{"description":"Id of the property","type":"string"},"name":{"description":"Name of the property","type":"string"},"value":{"description":"Value of the property. Its type depends on the property"}},"required":["id","name","value"],"additionalProperties":false}}},"properties_change":{"description":"Procedure to alter properties of a node","params":{"$ref":"common_types#/$defs/properties_diff"},"returns":{"$ref":"common_types#/$defs/null_or_empty"}},"position_change":{"description":"Procedure to alter position of a node","params":{"$ref":"common_types#/$defs/position_diff"},"returns":{"$ref":"common_types#/$defs/null_or_empty"}},"nodes_change":{"description":"Procedure to add and delete nodes","params":{"$ref":"common_types#/$defs/nodes_diff"},"returns":{"$ref":"common_types#/$defs/null_or_empty"}},"connections_change":{"description":"Procedure to add and delete connections","params":{"$ref":"common_types#/$defs/connections_diff"},"returns":{"$ref":"common_types#/$defs/null_or_empty"}},"graph_change":{"description":"Procedure to add and delete nodes","params":{"$ref":"common_types#/$defs/dataflow_object"},"returns":{"$ref":"common_types#/$defs/null_or_empty"}},"progress_change":{"description":"Notification with progress of job ran by external application","params":{"description":"Parameters for notification","type":"object","properties":{"method":{"description":"Name of the method used to run the job","type":"string"},"progress":{"description":"Progress of job ran be external application. If between 0 and 100 progress will be set and if -1, animation will ran.","type":"number"}},"required":["progress","method"],"additionalProperties":false},"returns":null},"metadata_change":{"description":"Updates the editor\'s metadata","params":{"$ref":"common_types#/$defs/metadata"},"returns":null},"viewport_center":{"description":"Center the editor","params":{"$ref":"common_types#/$defs/null_or_empty"},"returns":null},"terminal_add":{"description":"Create new terminal instance","params":{"description":"Parameters for request","type":"object","properties":{"name":{"description":"Unique name for the new terminal instance. This name is used for any communication.","type":"string"},"readonly":{"description":"Specifies whether the terminal should be read-only, or editable by user","type":"boolean","default":true}},"required":["name"]},"returns":{"$ref":"common_types#/$defs/null_or_empty"}},"terminal_write":{"description":"Writes a message line to a terminal instance. Allows to send both text and hterm\'s control sequences. For more details on available control sequences check [hterm Control Sequences](https://chromium.googlesource.com/apps/libapps/+/master/hterm/doc/ControlSequences.md).\\n\\n```{warning}\\nSince data is sent in JSON format, the hexadecimal values need to be escaped with `\\\\u`, not `\\\\x`, e.g. `\\\\u001b[38:2:238:178:17mexample`.\\n```","params":{"description":"Parameters for request","type":"object","properties":{"name":{"description":"Name of the terminal to which the message is written.","type":"string"},"message":{"description":"Message to be written to the terminal","type":"string"}},"required":["name","message"]},"returns":{"$ref":"common_types#/$defs/null_or_empty"}},"notification_send":{"description":"Sends a notification to the frontend. It will display the message both in the notifications and in the default terminal","params":{"description":"Parameters for notification","type":"object","properties":{"type":{"description":"Type of the notification.","enum":["error","warning","info"]},"title":{"description":"Title of the notification, appearing both in the terminal and notification","type":"string"},"details":{"description":"Details of the notification, displayed only in the terminal","type":"string"}},"required":["type","title","details"]},"returns":{"$ref":"common_types#/$defs/null_or_empty"}}},"r1":{"status_get":{"description":"Returns status of connection with external application","params":{"$ref":"common_types#/$defs/null_or_empty"},"returns":{"description":"Description of backend status","type":"object","properties":{"status":{"description":"Status","type":"object","properties":{"connected":{"description":"Connection with external application","type":"boolean"}},"required":["connected"],"additionalProperties":false}},"required":["status"],"additionalProperties":false}},"external_app_connect":{"description":"Request to wait till connection with external application is established","params":{"$ref":"common_types#/$defs/null_or_empty"},"returns":{"$ref":"common_types#/$defs/empty"}},"connected_frontends_get":{"description":"Request the number of connected fronteds","params":{"$ref":"common_types#/$defs/null_or_empty"},"returns":{"type":"object","properties":{"connections":{"type":"number","description":"Number of connections"}},"additionalProperties":false,"required":["connections"]}}},"V2":{"specification_get":{"description":"Request specification used by external application","params":{"$ref":"common_types#/$defs/null_or_empty"},"returns":{"$ref":"common_types#/$defs/external_endpoint_return_type"}},"app_capabilities_get":{"description":"Request external application capabilities","params":{"$ref":"common_types#/$defs/null_or_empty"},"returns":{"description":"External application capabilities","type":"object","properties":{"stoppable_methods":{"description":"List with methods that can be stopped with [dataflow_stop](#external-dataflow-stop) request","type":"array","items":{"description":"Name of the stoppable method","type":"string"}}},"additionalProperties":false}},"dataflow_import":{"description":"Request to convert dataflow in external app to Pipeline Manager format and import it","params":{"description":"Parameters for request","type":"object","properties":{"external_application_dataflow":{"description":"Dataflow in external application format. If loaded file cannot be represented as text, it will be sent as base64 string. To make sure received data are in readable format `convert_message_to_string` from `pipeline_manager_backend_communication.utils` can be used. Optionally, for conversion to bytes `convert_message_to_bytes` function is available","type":"string"},"mime":{"description":"MIME type","type":"string"},"base64":{"description":"Specifies whether `external_application_dataflow` is in byte64 format","type":"boolean"}},"required":["external_application_dataflow","mime","base64"],"additionalProperties":false},"returns":{"$ref":"common_types#/$defs/external_endpoint_return_type"}},"dataflow_validate":{"description":"Request external application to validate dataflow","params":{"$ref":"common_types#/$defs/dataflow_object"},"returns":{"$ref":"common_types#/$defs/external_endpoint_return_type"}},"dataflow_run":{"description":"Request external application to run dataflow","params":{"$ref":"common_types#/$defs/dataflow_object"},"returns":{"$ref":"common_types#/$defs/external_endpoint_return_type"}},"dataflow_stop":{"description":"Request external application to run dataflow","params":{"description":"Parameters for stopping dataflow","type":"object","properties":{"method":{"description":"Name of the method used to start run","type":"string"}},"required":["method"],"additionalProperties":false},"returns":{"$ref":"common_types#/$defs/external_endpoint_return_type"}},"dataflow_export":{"description":"Request external application to export dataflow","params":{"$ref":"common_types#/$defs/dataflow_object"},"returns":{"description":"Common type returned by external app","type":"object","properties":{"type":{"description":"[MessageType](message-type) specifying success or error","type":"number"},"content":{"description":"Exported dataflow, which is then saved by the frontend user. Should be either a json object, or a base64 encoded string. If any error occurred then it should contain a proper message.","type":["object","string"]},"filename":{"description":"Suggested filename used to save the file","type":"string"}},"additionalProperties":false,"required":["type"]}},"frontend_on_connect":{"description":"Request send when Pipeline Manager frontend connects to backend","params":{"$ref":"common_types#/$defs/null_or_empty"},"returns":{"$ref":"common_types#/$defs/null_or_empty"}},"properties_on_change":{"description":"Request send when properties of any node changes","params":{"$ref":"common_types#/$defs/properties_diff"},"returns":{"$ref":"common_types#/$defs/null_or_empty"}},"position_on_change":{"description":"Request send when position of any node changes","params":{"$ref":"common_types#/$defs/position_diff"},"returns":{"$ref":"common_types#/$defs/null_or_empty"}},"nodes_on_change":{"description":"Request send when node was added or deleted","params":{"$ref":"common_types#/$defs/nodes_diff"},"returns":{"$ref":"common_types#/$defs/null_or_empty"}},"connections_on_change":{"description":"Request send when connection was added or deleted","params":{"$ref":"common_types#/$defs/connections_diff"},"returns":{"$ref":"common_types#/$defs/null_or_empty"}},"graph_on_change":{"description":"Request send when whole dataflow changed, e.g. when dataflow is loaded","params":{"$ref":"common_types#/$defs/dataflow_object"},"returns":{"$ref":"common_types#/$defs/null_or_empty"}},"metadata_on_change":{"description":"Request send when metadata was changed","params":{"$ref":"common_types#/$defs/metadata"},"returns":{"$ref":"common_types#/$defs/null_or_empty"}},"viewport_on_center":{"description":"Request send when editor was centered","params":{"$ref":"common_types#/$defs/null_or_empty"},"returns":{"$ref":"common_types#/$defs/null_or_empty"}},"terminal_read":{"description":"Request sent by the frontend when terminal received an input","params":{"description":"Parameters for request","type":"object","properties":{"name":{"description":"Name of the terminal to which the message was written. Terminal has to be not read-only","type":"string"},"message":{"description":"Terminal input","type":"string"}},"required":["name","message"]},"returns":{"$ref":"common_types#/$defs/null_or_empty"}}}}')},36950:e=>{"use strict";e.exports=JSON.parse('{"$id":"dataflow_schema.json","description":"Schema used to validate dataflows","type":"object","properties":{"version":{"description":"Version of the dataflow","type":"string"},"metadata":{"$ref":"metadata_schema.json"},"graphs":{"type":"array","minItems":1,"items":{"type":"object","allOf":[{"$ref":"graph_schema.json"}],"unevaluatedProperties":false}},"entryGraph":{"description":"Id of a graph that is displayed when a dataflow is loaded","type":"string"}},"required":["graphs"],"unevaluatedProperties":false}')},78957:e=>{"use strict";e.exports=JSON.parse('{"$id":"graph_schema.json","description":"Schema used to validate a single subgraph","type":"object","properties":{"id":{"description":"Unique identifier of a graph","type":"string"},"nodes":{"type":"array","items":{"type":"object","properties":{"name":{"description":"Name of the node type as defined in the specification","type":"string"},"id":{"description":"Unique identifier of a node","type":"string"},"instanceName":{"description":"Optional field defining a node name rendered to the user","type":"string"},"title":{"description":"Optional field defining an instance name rendered to the user","type":"string"},"properties":{"description":"List describing the node parameterized values","type":"array","items":{"type":"object","properties":{"id":{"description":"Unique value assigned to the property","type":"string"},"name":{"description":"Name of the property","type":"string"},"value":{"description":"Actual value of the property","type":["number","string","boolean","object","array","null"]}},"required":["id","name","value"],"additionalProperties":false}},"interfaces":{"description":"List describing the node interfaces","type":"array","items":{"type":"object","properties":{"id":{"description":"Unique value assigned to the interface","type":"string"},"name":{"description":"name of the interface","type":"string"},"direction":{"description":"Determines the type of the interfaces","enum":["input","output","inout"]},"side":{"description":"Determines side of the node the interface that the interface is placed on","enum":["left","right"]},"sidePosition":{"description":"Determines the order of interfaces rendered","type":"number"},"externalName":{"description":"Name of the external socket displayed in the node","type":["string","null"]}},"required":["id","name","direction"],"additionalProperties":false}},"enabledInterfaceGroups":{"description":"List of names of chosen interface groups","type":"array","items":{"type":"object","properties":{"name":{"type":"string"},"direction":{"enum":["input","output","inout"]}},"required":["name","direction"],"additionalProperties":false}},"width":{"description":"Width of the node","type":"number"},"twoColumn":{"description":"Determines whether sockets should be rendered in the top part of the node and properties below them","type":"boolean"},"subgraph":{"description":"Optional field defining the id of the subgraph that this node represents","type":"string"},"position":{"description":"Position of a node in an editor","allOf":[{"$ref":"#/$defs/coordinates"}]}},"required":["name","interfaces"],"additionalProperties":false}},"connections":{"type":"array","items":{"type":"object","properties":{"id":{"type":"string","description":"Unique identifier of a connection"},"from":{"type":"string","description":"Identifier of a from interface"},"to":{"type":"string","description":"Identifier of a to interface"},"anchors":{"type":"array","description":"Definition of anchor points that are used for orthogonal connections","items":{"$ref":"#/$defs/coordinates"}}},"required":["from","to"],"additionalProperties":false}},"panning":{"description":"Defines the position of the top-left corner in the rendered editor","allOf":[{"$ref":"#/$defs/coordinates"}]},"scaling":{"description":"Floating-point number that defines the zoom level in the editor","type":"number"},"name":{"type":"string","description":"Name of the graph"},"additionalData":{"description":"Any JSON data that provides additional information regarding the graph","type":["number","string","boolean","object","array","null"]}},"$defs":{"coordinates":{"type":"object","properties":{"x":{"description":"x coordinate of the corner","type":"number"},"y":{"description":"y coordinate of the corner","type":"number"}},"required":["x","y"],"additionalProperties":false}},"required":["nodes","connections"]}')},15441:e=>{"use strict";e.exports=JSON.parse('{"$id":"metadata_schema.json","description":"Schema used to validate specification metadata","type":"object","properties":{"interfaces":{"description":"Styling of the nodes","type":"object","patternProperties":{"^.*$":{"type":"object","properties":{"interfaceColor":{"type":"string","description":"Color of the interface instance"},"interfaceConnectionPattern":{"description":"Pattern of the connection going from the interface","enum":["solid","dashed","dotted"],"default":"solid"},"interfaceConnectionColor":{"description":"Color of the connection going from the interface","type":"string","default":"#FFFFFF"}},"additionalProperties":false}},"default":{}},"navbarItems":{"type":"array","description":"List of buttons displayed in the application navbar","items":{"type":"object","description":"Description of a single button.","properties":{"name":{"description":"Name displayed in the tooltip","type":"string"},"stopName":{"description":"Name displayed in the tooltip when the corresponding procedure is running and is stoppable. If not specified simply Stop is added as a prefix to the name","type":"string"},"iconName":{"description":"Name of the icon displayed in the navbar. Name should correspond to a file in the asset directory or to an icon in `frontend/src/icons`","type":"string"},"procedureName":{"description":"Name of the procedure used when button is pressed. The currently displayed graph is used as an argument","type":"string"},"allowToRunInParallelWith":{"description":"List of procedures which can be run when this `navbarItem` is still running","type":"array","items":{"type":"string","description":"`procedureName` of `navbarItem`"},"default":[]}},"required":["name","iconName","procedureName"],"additionalProperties":false},"default":[]},"allowLoopbacks":{"type":"boolean","description":"Flag allowing connections with endpoints at the same node","default":false},"readonly":{"type":"boolean","description":"Flag determining whether the editor is in readonly mode","default":false},"twoColumn":{"type":"boolean","description":"Flag determining whether displaying nodes as two columns","default":false},"connectionStyle":{"enum":["curved","orthogonal"],"description":"Defines connection style","default":"curved"},"hideHud":{"type":"boolean","description":"Hides HUD elements, such as popup notifications, navbar or terminal","default":false},"layers":{"type":"array","default":[],"description":"Layers of interfaces and nodes that can be ignored using settings.","items":{"type":"object","description":"Description of a single layer.","properties":{"name":{"description":"Name of the layer","type":"string"},"nodeLayers":{"type":"array","description":"Types of nodes that are ignored in this layer","items":{"type":"string"}},"nodeInterfaces":{"type":"array","description":"Types of interfaces that are ignored in this layer","items":{"type":"string"}}},"required":["name"],"additionalProperties":false}},"urls":{"type":"object","description":"URL description put in node palette and nodes","patternProperties":{"^.*$":{"type":"object","description":"A single entry representing an URL group","properties":{"name":{"type":"string","description":"Name of the url group, appearing in hints"},"icon":{"type":"string","description":"Path of the icon in assets"},"url":{"type":"string","description":"Base of URL for group"}},"required":["name","icon","url"],"additionalProperties":false}},"default":{}},"collapseSidebar":{"type":"boolean","description":"Defines whether nodes sidebar should be collapsed by default","default":true},"movementStep":{"type":"number","description":"Defines offset to which nodes snap in the grid","default":1},"backgroundSize":{"type":"number","description":"Defines size of the background grid","default":100},"layout":{"type":"string","description":"Defines the default autolayout algorithm","default":"CytoscapeEngine - dagre-longest-path"},"randomizedOffset":{"type":"boolean","description":"Determines whether connections should have randomized, but deterministic offset","default":false},"icons":{"type":"object","description":"Mapping from icon URL class to URL prefix","patternProperties":{"^.*$":{"type":"string","description":"URL prefix for a given icon class"}},"default":{}},"notifyWhenChanged":{"type":"boolean","description":"Determines whether external application should be informed about changes in dataflow. Works only when Pipeline Manager is run in server-app mode","default":false},"logLevel":{"description":"Verbosity of pop-up notifications","enum":["INFO","WARNING","ERROR"],"default":"WARNING"}},"additionalProperties":false}')},9658:e=>{"use strict";e.exports=JSON.parse('{"$id":"specification_schema.json","type":"object","description":"Schema used to validate specification that has resolved inheritance","allOf":[{"$ref":"unresolved_specification_schema.json"},{"properties":{"nodes":{"type":"array","minItems":1,"items":{"type":"object","properties":{"category":{"description":"Category of a node in a side bar","type":"string"}},"required":["category"]}}},"required":["nodes"]}],"unevaluatedProperties":false}')},94967:e=>{"use strict";e.exports=JSON.parse('{"version":"20240723.13","$id":"unresolved_specification_schema.json","description":"Schema used to validate specification that hasn\'t resolved inheritance","type":"object","properties":{"version":{"description":"Version of the specification.","type":"string"},"metadata":{"$ref":"metadata_schema.json"},"include":{"description":"List of paths to other specifications that should be included","type":"array","items":{"type":"string"}},"includeGraphs":{"description":"List of paths to dataflow files that should be included as graphs","type":"array","items":{"description":"Definition of the graphs included from the dataflow file","type":"object","properties":{"category":{"description":"Category of the graph in the node palette. If no category is provided \'default\' is used","type":["string","null"]},"name":{"description":"Name of the subgraph","type":["string","null"]},"url":{"description":"URL of the dataflow file","type":"string"}},"required":["url"],"additionalProperties":false}},"nodes":{"description":"Definition of the available nodes","type":"array","items":{"$ref":"#/$defs/node"}},"graphs":{"description":"Definition of the available graphs","type":"array","items":{"type":"object","allOf":[{"$ref":"#/$defs/graph_with_categories"}],"unevaluatedProperties":false}}},"$defs":{"node":{"type":"object","allOf":[{"type":"object","properties":{"name":{"description":"Name displayed in a node","type":"string"},"abstract":{"description":"Tells if the given node type is abstract or not","type":"boolean","default":false},"layer":{"description":"Layer that defines styling of a node","type":"string"},"category":{"description":"Category of a node in a side bar","type":["string","null"]},"isCategory":{"description":"Determines whether the nodes defines a category","type":"boolean","default":false},"icon":{"description":"Icon of a node. Can be a string with relative path, URL, or tuple {\'icon_type\': \'url_suffix\'}","type":["object","string"]},"defaultInterfaceGroups":{"description":"List of names of chosen interface groups that are enabled by default","type":"array","items":{"type":"object","properties":{"name":{"type":"string"},"direction":{"enum":["input","output","inout"]}},"required":["name","direction"],"additionalProperties":false}},"interfaces":{"description":"Definition of available interfaces of the node","type":"array","items":{"type":"object","allOf":[{"$ref":"#/$defs/interface"},{"properties":{"array":{"description":"Used to define multiple similar interfaces using only one entry","type":"array","minItems":2,"maxItems":2,"items":{"type":"number"}}}}],"unevaluatedProperties":false}},"interfaceGroups":{"description":"Defines groups of interfaces that use multiple interfaces","type":"array","items":{"type":"object","allOf":[{"$ref":"#/$defs/interface"},{"properties":{"interfaces":{"description":"Describes interfaces that create the interface group","type":"array","items":{"type":"object","properties":{"name":{"description":"Name of the the group of interfaces","type":"string"},"direction":{"description":"Tells whether the connector is input, output, or both","enum":["input","output","inout"]},"array":{"description":"Used to define multiple similar interfaces using only one entry","type":"array","minItems":2,"maxItems":2,"items":{"type":"number"}}},"required":["name","direction"],"additionalProperties":false}}}}],"unevaluatedProperties":false}},"properties":{"description":"Definition of the properties of the node","type":"array","items":{"type":"object","allOf":[{"$ref":"#/$defs/property"},{"properties":{"group":{"description":"Definition of the group properties","type":"array","items":{"$ref":"#/$defs/property"}}}}],"unevaluatedProperties":false}},"urls":{"type":"object","description":"Map containing URL group in key and URL suffix in value","patternProperties":{"^.*$":{"type":"string"}}},"extends":{"type":"array","description":"Node names to extend","items":{"type":"string"}},"description":{"type":"string","description":"Description of the node in markdown"},"additionalData":{"description":"Any JSON data that provides additional information regarding the specification","type":["number","string","boolean","object","array","null"]}}},{"anyOf":[{"properties":{"isCategory":{"const":true}},"required":["isCategory"]},{"properties":{"isCategory":{"const":[null,false]}},"required":["name"]}]}]},"interface":{"type":"object","properties":{"name":{"description":"Name of the socket displayed in the node","type":"string"},"type":{"description":"Type that defines styling of the input socket. It is also used for validation purposes","type":["string","array"]},"direction":{"description":"Tells whether the connector is input, output, or both","enum":["input","output","inout"]},"side":{"description":"Determines the side on which the socket is rendered","enum":["left","right"]},"maxConnectionsCount":{"description":"Tells how many connections can be established with given interface, <= 0 value for unlimited","type":"number","default":0},"sidePosition":{"description":"Determines the order of interfaces rendered","type":"number"},"override":{"description":"Determines whether this interface can should overridden","type":"boolean","default":false}},"required":["name","direction"]},"property":{"type":"object","allOf":[{"type":"object","properties":{"name":{"description":"Name of the property. Can be displayed for some types of properties","type":"string"},"type":{"description":"Type of the property","enum":["text","number","integer","select","bool","slider","list","constant","hex"]},"description":{"description":"Description of the property. Can be displayed to the user","type":"string"},"default":{"description":"Default value of the property","type":["number","string","boolean","object","array","null"]},"min":{"description":"Minimum value of a range for slider, number, integer and hex type","type":["number","string"]},"max":{"description":"Maximum value of a range for slider, number, integer and hex type","type":["number","string"]},"step":{"description":"Step value for slider type","type":["number","string"]},"values":{"description":"Range of values for the select type","type":"array"},"dtype":{"description":"Data types of elements in a list type","type":"string","enum":["integer","number","string","boolean"]},"override":{"description":"Determines whether this property should be overridden","type":"boolean","default":false}}},{"anyOf":[{"properties":{"type":{"const":"slider"},"default":{"type":"number"}},"required":["default","min","max"]},{"properties":{"type":{"const":"bool"},"default":{"type":"boolean"}},"required":["default"]},{"properties":{"type":{"const":"select"},"values":{"type":"array"}},"required":["values"]},{"properties":{"type":{"enum":["integer","number"]},"default":{"type":"number"},"min":{"type":"number"},"max":{"type":"number"}}},{"properties":{"type":{"const":"text"},"default":{"type":["string","null"]}}},{"properties":{"type":{"const":"constant"},"default":{"type":"string"}},"required":["default"]},{"properties":{"type":{"const":"hex"},"default":{"type":"string","format":"hex"},"min":{"type":"string","format":"hex"},"max":{"type":"string","format":"hex"}}},{"properties":{"type":{"const":"list"},"default":{"type":["array","null"]}},"required":["dtype"]}]}],"required":["name","type","default"],"unevaluatedProperties":true},"graph_with_categories":{"type":"object","allOf":[{"$ref":"graph_schema.json"},{"type":"object","properties":{"category":{"description":"Category of a node in a side bar","type":"string"}}}],"unevaluatedProperties":false}},"additionalProperties":false}')}}]);
//# sourceMappingURL=index-c3373795.157910a1.js.map