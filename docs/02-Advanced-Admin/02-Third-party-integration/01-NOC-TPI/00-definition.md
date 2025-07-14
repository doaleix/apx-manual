---
sidebar_position: 0
---
# Definition

This guide will help you understand **Thid party integrations** with NOC in APX GIS programme.

------------

**Version**: 5.3
**Date**: April 2025

------------
## **Introduction**

This APX system enables integration with external APIs to synchronise information on devices, subscribers, and alarms. This integration streamlines real-time management and monitoring, allowing users to configure API calls by defining endpoints, headers, and parameters based on their needs.

## **Data modeling**

APX structures information for three primary entities. Each subscriber may have multiple devices located at different residences. Therefore, the following identifiers are required:

* **Unique property identifier**: e.g., UPRN in the UK or cadastral reference in Spain.

* **Unique device identifier**: Corresponding to its serial number.

* **Subscriber identifier**: This can be an internal ID or an external code defined by the source system. The external code of the subscribers is imported into the APX system as the code to identify them.

## ONTs

Paginated table of ONTs related to the third-party integration.

![](/img/Third-party-integrations/thirdPI-screens11.png)

**Fields**

* ial: Unique serial identifier of the ONT device
* Model: ONT model
* Manufacturer: ONT manufacturer
* UPRN: UPRN code where the ONT is placed
* Created on: Timestamp of ONT creation
* Modified on: Timestamp of ONT last edition

**Actions**

* Apply filter: Refresh the paginated table with all the filters applied
* Click row: The user navigates to the UPRN form where the ONT is placed
* Table navigation: The user can navigate to the previous/next page or the first/last page

**Filters**

* Serial: Case-insensitive filter by serial containing the term.
* Model: Case-insensitive filter by model containing the term.
* Manufacturer: Case-insensitive filter by manufacturer containing the term.
* UPRN: Case-insensitive filter by UPRN code containing the term.
* Created on: Date filter by ONT creation date
* Modified on: Date filter by ONT last edit date

### Special layer

It is possible to create new ont layers that display the affected UPRNs.
To configure a special layer with the param name **TYPE** set to **ONT**. 

UPRNs in this layer have three possible styles: 

* A red triangle when the ont status is **ALL_ALARMED** (all the ONTs are alarmed)
* An orange triangle when the ont status is **PARTIAL_ALARMED** (a subset of ONTs are alarmed)
* A green triangle when the ont status is **HEALTHY** (no alarms). 

The ont special layer admits up to 3 parameters:

* **TYPE** (_required_): This parameter should be set to ONT
* **INTEGRATION** (_optional_): Case-sensitive name of the integration that created the ONT. If not specified, the layer will display all the ONTs.
* **STATUS** (_optional_): Filter to display only the UPRNs with a given ont status; if not specified, the layer will display all the UPRNs with ONTs. The accepted statuses are: HEALTHY, PARTIAL_ALARMED, ALL_ALARMED. The value of status should be a string of statuses separated by commas, for example: HEALTHY, PARTIAL_ALARMED

![](/img/Third-party-integrations/thirdPI-screens14.png)

### Map styling

ONTs can affect map styles different than other elements in two manners:

#### Conditional style

To set up the UPRN vectorial visual style using @ByField the field "ont_status" can be selected as an option and the possible values are the following:

* NONE: UPRN does not have any ont
* HEALTHY: UPRN has ONTs, and none of them are alarmed
* PARTIAL_ALARMED: UPRN has ONTs and some of them are alarmed, but not all.
* ALL_ALARMED: UPRN has ONT,s, and all of them are alarmed.

#### Built in UPRN WMS layer

The UPRNs assigned to the built in WMS layer pointing to the apx uprn.map file will display with a circle those UPRNs that have ONTs. The colour of the circle depends on the ont status of the UPRN

* HEALTHY → green
* PARTIAL_ALARMED → orange
* ALL_ALARMED → red

![](/img/Third-party-integrations/thirdPI-screens16.png)

## Subscribers

Paginated table of subscribers related to the third-party integration.

![](/img/Third-party-integrations/thirdPI-screens12.png)

**Fields**

* Name: Subscriber full name
* Address: Subscriber address
* Email: Subscriber email
* Phone: Subscriber phone
* Created on: Subscriber creation date
* Modified on: Subscriber last edition date

**Actions**

* Apply filter: Refresh the paginated table with all the filters applied
* Click row: The user navigates to the subscriber form
* Table navigation: The user can navigate to the previous/next page or the first/last page

**Filters**

* Name: Case-insensitive filter by subscriber name containing the term.
* Address: Case-insensitive filter by subscriber address containing the term.
* Email: Case-insensitive filter by subscriber email containing the term.
* Phone: Case-insensitive filter by subscriber phone containing the term.
* Created on: Date filter by subscriber creation date
* Modified on: Date filter by subscriber last edit date

## Alarms

Paginated table of alarms related to the third-party integration.

![](/img/Third-party-integrations/thirdPI-screens13.png)

**Fields**

* Serial: Serial of the alarmed ONT device
* UPRN: UPRN code where the device is placed
* Alarm code: Alarm code
* Alarm stamp: Alarm stamp

**Actions**

* Apply filter: Refresh the paginated table with all the filters applied
* Click row: The user navigates to the UPRN form where the device is placed
* Table navigation: The user can navigate to the previous/next page or the first/last page

**Filters**

* Serial: Case-insensitive filter by serial containing the term.
* UPRN: Case-insensitive filter by UPRN code containing the term.
* Alarm code: Case-insensitive filter by alarm code containing the term.
* Alarm stamp: Date filter by alarm stamp.