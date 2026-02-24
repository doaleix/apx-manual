---
sidebar_position: 0
---

# Introduction

This guide will help you undestand how to **lease** infrastructure in APX.

------------

**Version**: 5.6
**Date**: February 2026

------------

APX introduces a centralised Lease Management system designed to simplify how users manage the use of network and infrastructure assets.

This functionality provides a clearer and more structured way to understand how capacity and infrastructure elements are being used over time. By consolidating all lease-related information in one place, users gain better visibility, control, and confidence when working with leased elements.

The system improves operational clarity by making it easier to identify which elements are leased, their current status, and their validity period. It also strengthens traceability and governance, helping users ensure that leasing decisions are consistent, well-documented, and aligned with operational rules.

##  Components

This menu entry can be found on Operations &gt Admin Leases. This screen shows the list of all the leases in the system. Leases can be filtered to create sublists and can be exported.

![](/img/leases/image_1.png)

### Columns

* Code
* Operator
* Type
* Subtype
* Start date
* End date
* Status
* Elements
* Actions (Edit Lease)

### Filters

* **Code** : Filter the lease list by lease code matches

* **Operator**:  Filter the lease list by the lease operator

* **Status**:  Filter the lease list by the lease status

* **Type**:  Filter the lease list by the lease type

* **End date from**:  Filter the lease list by the leases with an end date greater than or equal to the specified value

* **End date to**:  Filter the lease list by the leases with an end date less than or equal to the specified value

### Exports

Export the list of displayed leases synchronously in CSV format (with all the filters applied).


### Element Selection

The APX element selection component allows users to select cable fibres. The list is consistent with the map selection format (contains an available elements zone with the results). Additionally, if fibres are available to be selected, the element types selector displays a hint, and the fibre cables include a fibre selection button.

The available elements buttons can be disabled in case of:

**Fibre selection**:  Fibre cable does not contain fibres, or the lease subtype does not allow fibre selection.

**Add cable**:  If the lease subtype is only  Fibre,  or cable already has some fibre selected.

![](/img/leases/image_7.png)

### Fiber selection

Users can select or unselect fibres using the fibre selection button. Users can select or unselect all the fibres using the specific buttons, or click only those fibres that they want to move in any of the directions and then click the corresponding arrow icon.

In this screen, single selection (regular click), additive selection (Ctrl + click) and range selection (Shift + click) are allowed.

Users can also unselect fibres directly from the selected elements section by clicking the minus (-) icon.

![](/img/leases/image_8.png)
