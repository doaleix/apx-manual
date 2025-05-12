---
sidebar_position: 1
---
# Introduction

This guide will help you understand the **Customer Assignment Model** of APX GIS.

------------

**Version**: 5.3
**Date**: April 2025

------------

This section is aimed at improving the management of splitterbox clients, giving users greater visibility and control over client connections through a designed edit screen and a set of configuration parameters. In parallel, we will describe how ONTs interact with serviceable nodes, resulting in a more robust and accurate inventory and service relationship management. Finally, the screens — **ONT Import** and **ONT SED** — will be described for user interaction with ONT elements and simple bulk and individual operations.

## Key Concepts


- **Each ONT is assigned to a unique splitterbox client port**  
  Enforces a strict one-to-one relationship.  

- **Support for UPRNs distributed across multiple nodes**  
  A single UPRN can have ONTs serviced by different nodes.

- **Node-level UPRN placeholders**  
  Nodes can register a UPRN as a client without a serviced ONT.

- **ONT relocation to other UPRNs via API & import**  
  Supports ONT moves during import/API operations.

- **Automation of client interactions**  
  Interactions among `clients`, `ports`, and interconnections are automated via trigger logic.

- **ONT activity tracking**  
  All user and system changes related to ONTs are logged with full context.

## Step by step

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