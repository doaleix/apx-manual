---
sidebar_position: 2
---
## ONT

This guide will describe the screens involved in **Customer Assignment Model** by ONT.

------------

**Version**: 5.3
**Date**: May 2025

------------

### Import ONT
- Located in **Administration** → "Import ONTs"
- Fields:
  - `SERIAL` *(required)*
  - `MODEL`
  - `MANUFACTURER`
  - `UPRN` *(required)*
  - `SUBSCRIBER_CODE`
  - `STATUS`
  - `UBICATION`
  - `SPEED`
  - `CADASTRAL`
  - `ACTIVE_SERVICE`
  - `STARTING_SERVICE_DATE`
  - `ENDING_SERVICE_DATE`

![](/img/Customer-Assignment-Model/CAM-screens01.PNG)

### ONT SED

- The menu point can be found under the “Network summary” section of the menu with the text “ONT List”. Displays the list of all ONTs with meaningful information and allows the filtering and export of the results.
- Fields:
  - Serial: Unique identifier of the ONT
  - Model: ONT model
  - Manufacturer: ONT manufacturer
  - UPRN: UPRN where the ONT is placed
  - Node: Node code servicing this ONT
  - Subscriber: Subscriber code assigned to this ONT
  - Integration: Name of the integration that fetched the ONT information
- Filters:
  - Serial: Filter by input string contained in the ONT serial (case insensitive)
  - Model: Filter by input string contained in the ONT model (case insensitive)
  - Manufacturer: Filter by input string contained in the ONT manufacturer (case insensitive)
  - UPRN: Filter by input string contained in the ONT UPRN (case insensitive)
  - Subscriber: Filter by input string contained in the ONT subscriber code (case insensitive)
  - Project: Filter by the project area (auto-selected if the user is within a project)
  - Third-Party Integration: Filter by the integration r
- Export:
  - CSV with the list of results displayed on the screen, with the same information fields

![](/img/Customer-Assignment-Model/CAM-screens02.PNG)

---

## ONT Form

### Behavior
- Add ONT: Users pick node/port manually
- Delete ONT: Modal for reassigning or freeing client
- Activity viewer to display the changes performed on the ONT.

![](/img/Customer-Assignment-Model/CAM-screens03.PNG)

---

## Splitterbox Clients 

- **New ONT**: When adding a new ONT, if nodes are already pointing to the UPRN, after user confirmation, the frontend displays a list of available nodes and ports for the user to choose from and associate with the ONT. Additionally, there is the option to create a new port in the selected node if there are no available ports.

![](/img/Customer-Assignment-Model/CAM-screens04.PNG)

- **Delete ONT**: Deleting an ONT associated with a node displays a new modal to select the behaviour of the associated client. The user can decide to delete the interconnections and reassign the client to the parent UPRN (otherwise, the client is freed).

![](/img/Customer-Assignment-Model/CAM-screens05.PNG)

---

## Alarms

A new alarm is displayed on alarmed ONTs with the detailed alarm information retrieved from the third-party integration origin flattened JSON data.

![](/img/Customer-Assignment-Model/CAM-screens12.png)