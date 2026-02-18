## Element Lease

This tab can be found on  ducts, subducts, cables and fibre  forms. The tab contains a history of all the leases assigned to the element (ordered by active leases first), a section to include the element in a lease if the element is leasable (check the validation rules section) and finally, two buttons, one to navigate to the Admin Leases screen and another to directly create a new lease. In case the lease is not leasable, a warning with the reason will be displayed.

![](/img/leases/image_9.png)

In the case of leasable ducts, the occupancy field is mandatory in order to assign the element to a lease.

![](/img/leases/image_10.png)

## Leased Elements Sed

To acces the standard SED component for leases go to Network Summary &gt Leased Elements List .

![](/img/leases/image_11.png)

### Filters

Area:  Filter leased elements that intersect with the specified area

Code:  Filter leased elements by lease code

Element Code:  Filter leased elements by element code

Operator:  Filter leased elements by lease operator

### Exports

CSV:  Export the list of filtered leased elements in CSV format.

XLSX:  Export the list of filtered leased elements in XLSX format.

KML:  Export the list of filtered leased elements in KML format. Contains the additional columns  the_geom  and  geom_type .


## Validation Rules

Leases may include four main types of elements: ducts, subducts, cables, and fibres.

To determine whether an element can be leased, a set of validation rules is applied to ensure that the element is not already leased to another operator and that capacity constraints are respected.

For validation purposes, both  PLANNED  and  ACTIVE  leases are considered.

**Fibre**:  A fibre cannot be leased if the fibre itself  or its parent cable  is already part of a lease.

**Cable**:  A cable cannot be leased if the cable itself  or any of its fibres  is already part of a lease.

**Subduct**:  A subduct cannot be leased if the subduct itself  or any of the ducts it passes through  is already part of a lease.

**Duct**: A duct cannot be leased if the  total occupancy  of the duct exceeds  100% , or
 any of its subducts  is already part of a lease.

These validation messages will show up when trying to select elements into a lease in the  Lease Form  or if the element is not leasable in the  Element Lease  tab.

![](/img/leases/image_12.png)