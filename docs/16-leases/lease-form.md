---
sidebar_position: 1
---

# Lease Form

This form can be accessed via the  Lease List  or  Element Lease . The form will be in read-only format when the lease status is  CANCELLED  or  EXPIRED.

------------

**Version**: 5.6
**Date**: February 2026

------------

## Form fields

![](/img/leases/image_2.png)

* **Code**:  Lease Code _(required)_

* **Description**:  Lease description/notes

* **Operator** : Lease operator _(required)_

* **Type** : Lease type [Infrastructure, Network]. Only editable if no elements are selected. _(required)_

* **Subtype** : Lease subtypes. Depends on the lease type and defines which elements can be included in the lease. Only editable if no elements are selected. _(required)_

* **Network**: [Cable, Fibre, Cable/Fibre]

* **Infrastructure**: [Duct, Subduct, Duct/Subduct]

* **Start element**:  Lease starting node. Informative field.

* **End element** : Lease ending node. Informative field.

* **Start date** : Lease starting date. (required)

* **End date**:  Lease ending date. Must be greater than or equal to today’s date. (required)

* **End date alert days**:  Days before the end date needed to send the close expiration date notification.

* **End date alert login**: User to be informed of the close expiration date notification. Required if end date alert days are set.

* **Status**:  Computed lease status (read-only)

* **Cancel**:  Button to cancel the lease

## Select elements

The select elements button opens the apx element selector, which includes map selection (click on the map to fetch available close elements) and code selection (returns a list of matches by element code).

Moreover, if type is Infrastructure, users can import values from b2b routes and if type is Network, users can import values from p2p services (if subtype is Cable/Fibre user should decide if they want to import the cable or the fibres due to the validation rules)

![](/img/leases/image_3.png)

![](/img/leases/image_4.png)

## Elements List

This section of the form contains the lease elements. The list displays the element code, type and occupancy. The occupancy is only editable for Ducts with the maximum occupancy left pre-calculated. Additionally, users can select an element on the map or remove an element from the list.

![](/img/leases/image_5.png)

## Activity

![](/img/leases/image_6.png)
