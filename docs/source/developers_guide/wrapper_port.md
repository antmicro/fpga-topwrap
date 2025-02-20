# Wrapper Port

The class {class}`~topwrap.amaranth_helpers.WrapperPort` is an extension to Amaranth's {class}`Signal`.
It wraps a port, adding a new name and optionally slicing the signal.
It adds these attributes:

```python
WrapperPort.internal_name     # name of the port in internal source to be wrapped
WrapperPort.direction         # DIR_FANIN, DIR_FANOUT or DIR_NONE
WrapperPort.interface_name    # name of the group of ports (interface)
WrapperPort.bounds            # range of bits that belong to the port
                              # and the range which is sliced from the port
```

See [IP core port-slicing](../description_files.md#ip-description-files) to know more about `bounds`.

This is used in the {class}`~topwrap.ipwrapper.IPWrapper` class implementation and there should be no need to use {class}`~topwrap.amaranth_helpers.WrapperPort` individually.

:::{warning}
{class}`~topwrap.amaranth_helpers.WrapperPort` is scheduled to be replaced in favor of Amaranth's {class}`Signal` so it should not be used in any new functionality.
:::

```{eval-rst}
.. autoclass:: topwrap.amaranth_helpers.WrapperPort
   :members:

   .. automethod:: __init__
```
