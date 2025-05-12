---
sidebar_position: 2
---
## By ONT

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

![](/img/Customer-Assignment-Model/CAM-screens03.PNG)

---

## Splitterbox Clients 

- **New ONT**: When adding a new ONT, if nodes are already pointing to the UPRN, after user confirmation, the frontend displays a list of available nodes and ports for the user to choose from and associate with the ONT. Additionally, there is the option to create a new port in the selected node if there are no available ports.

![](/img/Customer-Assignment-Model/CAM-screens04.PNG)

- **Delete ONT**: Deleting an ONT associated with a node displays a new modal to select the behaviour of the associated client. The user can decide to delete the interconnections and reassign the client to the parent UPRN (otherwise, the client is freed).

![](/img/Customer-Assignment-Model/CAM-screens05.PNG)

The splitterbox clients tab inside the splitterbox form allows a more accurate search and edition to make sure that all the clients end up in the desired port.

To achieve this, the tab displays the list of clients in a read-only format, and all the changes are performed in a modification screen, which is displayed when the user clicks the “edit clients” button. Moreover, there is a tag to show if the port is connected, and the free checkbox is substituted for the client type label.

The frontend keeps a copy of the original state of the clients to be displayed in the previsualization section of the modification screen and stores the list of clients with all the applied changes. 


![](/img/Customer-Assignment-Model/CAM-screens06.PNG)

![](/img/Customer-Assignment-Model/CAM-screens07.png)

---

## Map Search

- Select UPRNs via map selector
- Range-based fetch and multiselector
- Fetch ONTs by location

![](/img/Customer-Assignment-Model/CAM-screens08.png)

---

## Filter Search

- Filters:
  - **Name**: Matching term
    - **Uprn**: For Uprns looks for matching Codes.
    - **ONT**: For Onts looks for matching UPRN or serial numbers.
    - **Client**: For Clients looks for matching Code or name
  - **Range**: Distance in meters
  - **Type**: Dropdown: "Client", "UPRN", "ONT"
  - **Hide Assigned Clients**: We have to consider that the behaviour will change a bit for each client type.
    - **ONT**: The ONTs can be assigned to a unique port; therefore, when filtering by this type, the checkbox will be automatically checked and disabled.
    - **UPRN**: We consider that the UPRN is assigned if it is directly connected or one of its ONTs is already connected to at least one port.
    - **Client**: We consider that the client is assigned if it is directly connected to at least one port.



![](/img/Customer-Assignment-Model/CAM-screens09.png)

### Results

The results section displays a paginated table with the results ordered by distance in case of onts and uprns or by name in case of clients. The users can assign the clients by clicking on the corresponding row in the results table. The results table excludes ONTs that are already connected to other ports and displays a warning when users try to select an already locally assigned ONT.  The results title dynamically changes, displaying whether it is a map or a filter search and the total number of results. Additionally, the table displays a loader when the search is still ongoing.

- Fields:
  - Name
    * Uprn
    * Ont
    * Client
  - Client type
  - Distance

### Assign

- Modal to select available ports
- Behavior controlled by `networkclient_client.delete_interconnections`
- Confirmation if ONT already connected

![](/img/Customer-Assignment-Model/CAM-screens10.PNG)

#### Multi Select

This selection option is represented by a checkbox under the search title and a new button to apply all the selected items. Additionally, there is a dynamic tooltip at the end of the label to hint to the user about the interaction when the multiselect is activated or not. 

The user can either select the rows one by one before applying with the multiselect button or use the shift key special click to select all the rows between the previous click and the shifted click. Selected rows are displayed with a green background to provide visual feedback.

![](/img/Customer-Assignment-Model/CAM-screens13.png)

The logic applied when clicking on the apply multiselect button is similar to the logic applied by the individual select. If there are ONTs already preselected in the edition mode selected, an error message will be displayed. Moreover, if there are selected rows already connected, a confirmation message is prompted. The selected clients are assigned to the next available free ports if possible, and then, additional ports are created to handle all the selections.

![](/img/Customer-Assignment-Model/CAM-screens14.png)

---

## Previsualization

- Compare original vs modified clients
- Actions:
  - **Reset to original**
  - **Modify client count**
  - **Edit free client text**
  - **Clear port**

![](/img/Customer-Assignment-Model/CAM-screens11.PNG)

---

## Apply Changes
- Changes saved only on apply
- Edition screen’s apply button only active on change

---

## Import Splitterbox Clients 

### Params
- Considers:
  - `ont.networkclient_client_uprn`
  - `networkclient_client.delete_interconnections`

### Key Behavior
- ONT disassignment/port reassignment logic based on params

### Important CSV Fields
- `FORCE_CHANGES` (boolean):
  - `true`: overwrite assignments
  - `false`: only assign to free ports
- `PORT`: Now optional

### Rules & Constraints
- A UPRN → multiple ports/splitterboxes
- An ONT → one port/splitterbox
- CLIENT → multiple ports/splitterboxes
- To free a port: specify it and set `FORCE_CHANGES=true`
- `CLIENT` field is required for client types
- No duplicate entries per port/splitterbox

### Import Behavior Summary
When `PORT` is specified:

- **UPRN / CLIENT**:
  - Port is free → assign
  - Port in use → `FORCE_CHANGES=true` to overwrite

- **ONT**:
  - Already assigned → `FORCE_CHANGES=true` to move
  - Port in use → `FORCE_CHANGES=true`, unless it matches parent UPRN

## Alarms

A new is displayed on alarmed ONTs with the detailed alarm information retrieved from the third-party integration origin flattened JSON data.

![](/img/Customer-Assignment-Model/CAM-screens12.png)