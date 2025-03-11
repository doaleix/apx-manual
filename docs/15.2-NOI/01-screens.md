---
sidebar_position: 1
---
# Screens

This section will help you understand the different screens (forms) in the **NOI** feature.

------------

**Version**: 5.3
**Date**: March 2025

------------

## NOI Menu Entry and Fields  

To get to the NOI menu go to **Operations** &gt **Admin Noi**.

![](/img/Noi/noi-screens01.png)

**NOIs** menu entry provides access to the list of NOIs. This menu is shown under the **Operations** section with the text **Admin NOI**. The following fields are available:  

### Fields  

- **Code**: A mandatory identifying code.  
- **Status**: Reflects the NOI’s current state:  
  - **NOT MANAGED**: NOIs managed externally or predating APX integration.  
  - **INIT**: NOI created in APX but not registered with OpenReach.  
  - **ACKNOWLEDGED**: Registered with OpenReach, with a PIA NOI number.  
  - **ACKNOWLEDGED-EXT1**: A 2-month extension beyond 12 months granted by OpenReach.  
  - **ACKNOWLEDGED-EXT2**: A second 2-month extension granted by OpenReach.  
  - **IN-PROGRESS**: NOI waiting for OpenReach response.  
  - **COMPLETED**: NOI completed and reported to OpenReach.  
  - **ABANDONED**: NOI abandoned and reported.  
- **Days left**: Number of days until OpenReach closes the NOI.  
- **Reservation Number**: Displays the PIA NOI number from OpenReach, or “-” if not registered.  
- **NOI opening date**: The date OpenReach provided the NOI number, or “-” if not registered.  
- **NOI completion date**: The date the NOI was completed in OpenReach, or “-”.  
- **# Elements**: Total PIA elements associated with the NOI.  
- **Actions**: Button to display the NOI details screen.  

### Filters  

Filters allow users to refine the list based on:  

- **Status**: Filter by NOI status.  
- **Reservation number**: Filter by partially matching the NOI number.  
- **Code**: Filter by partial matching code.  
- **Active Blockages**: Filter by a threshold of active blockages (> or =).  
- **Expiration**: Filter NOIs approaching expiration within *N* days.  

### Actions  

- **Add**: Opens the NOI details screen to add a new NOI.  
- **Edit**: Opens the NOI details screen to edit or visualize the NOI information.  
- **Filter**: Refreshes the list based on selected filters.  

### Notes  

- NOIs are not tied to projects, so project-based filters are unnecessary.  
- Access to NOI management depends on user roles, similar to B2B functionality.  
- NOIs with a close expiration date (**30 days left or less**) are highlighted in **red**.  

![](/img/Noi/noi-screens02.png)

## NOI Details Screen  

Click the pen button under the Actions column to get to the details screen of a given NOI.

The **NOI Details** screen enables the creation and management of a NOI, including the ability to add and remove related OpenReach PIA elements. The screen also allows users to manage the NOI's status and interact with OR by changing its status when the required criteria are met.  

### Fields  

- **Code**: A mandatory, unique identifying reference code in APX.  
- **Description**: Free-text description of the NOI.  
- **Status**: Displays the current status of the NOI (e.g., INIT, ACKNOWLEDGED, COMPLETED, etc.). This field is **read-only**.  
- **Roles**: Lists the roles that have permission to view and manage the NOI. At least one role is required.  
- **Last Status Change**: Displays the date of the most recent status change. This field is **read-only**.  
- **Expiration Date**: Displays the expiration date returned by OR. This field is **read-only**.  
- **# Active Blockages**: Displays the number of active blockages related to the OR PIA elements. This field is **read-only**.  
- **Reservation Number**: Assigned by OR when the status changes from **INIT** to **ACKNOWLEDGED**. This field is **read-only**.  
- **Extension Reason**: Displays a list of reasons accepted by OR to send the extension request. This field only appears once the NOI is **ACKNOWLEDGED**.  

![](/img/Noi/noi-screens03.png)

### List of PIA Elements

Scrolling down on the [Noi Details Screen](#noi-details-screen) the list of PIA Elements will be displayed.

* This list shows all PIA elements associated with the NOI, including a total count.
* Elements can be added or removed using one of the following methods:
    - **From a B2B route**: Select elements from a B2B route in APX.
    - **From the Map**: Click on individual elements or select an area on the map to add multiple elements.
**Note**: The elements selected should be PIA elements.

* Each element register displays the following information
    - Search element button
    - Element identifier (code or description)
    - Element type
    - Evidence capture tracker
    - Blockage tracker
    - Remove element button

![](/img/Noi/noi-screens04.png)

### Evidence Capture (EC)

Just below the list of NOI elements we are going to find the **Evidence Capture** section.

* **Evidence Capture List**: Displays a list of evidence captures categorising the status and the target elements using a tab system.
* **Send Ready Evidence Captures Button**: Users can initiate a new bulk evidence capture process directly from this screen.

![](/img/Noi/noi-screens05.png)

### Actions and Buttons

1. **Manage NOI Status**:
    * **Register on OpenReach**: Enabled when a new NOI is created in INIT status. Once reported and assigned an NOI Number by OR, the button is disabled.
    * **Extend Date**: Enabled when the NOI is **ACKNOWLEDGED** or **ACKNOWLEDGED-EXT1**, an extension reason is selected and the NOI is within the specified timeframe. Sends a request to OR for an extension.
    * **Complete**: Enabled when the NOI is **ACKNOWLEDGED** and all criteria are met (no active blockages, all elements have completed EC). This button sets the status to **COMPLETED**.
    * **Abandon**: Always enabled unless the NOI is in **COMPLETED** status. This button allows users to abandon the NOI, setting it to **ABANDONED** and sending the status change to OR if previously **ACKNOWLEDGED**.
2. **Manage NOI Elements**:
    * **Add from B2B**: Opens a list of APX B2B routes to add elements.
    * **Add by Map**: Select elements individually or by area on the map, with a pop-up for element type counts.
    * **Remove**: Remove the selected element from the NOI.
3. **Automated Warnings**:
    * APX will automatically notify users when an NOI is approaching its expiration date. Users can optionally mark expired NOIs as **ABANDONED**.
    * A scheduled notification will alert users before the expiration date, with additional notifications if an extension is requested.

### Element Evidence Captures

Within the element form, a new tab is available to manage evidence captures.  This tab  enables the sending of photos for a single PIA element to Openreach and will display the following information:

1. **Evidence capture fields**: A list of fields representing the evidence captures required for this element type. Each field displays the name of the field and the field type.

2. **NOIs**: A list of NOIs containing the element represented as subtabs. The NOI text will display the reservation number of the NOI (or the code in case the NOI is not registered) and the status of the NOI. Each NOI subtab includes the following elements:

    * Button to navigate to the NOI details screen. ![](/img/Noi/noi-screens06.png)
    * An Evidence capture field block for each required field, containing the field name, the evidence capture status, the photo uploader and the send evidence capture button.

## Evidence capture 

* **Eligible Elements**: Only elements forming part of a NOI in an Acknowledged status can send photos to OR. Otherwise, a warning message will be displayed and the photo fields will be blocked. 
![](/img/Noi/noi-screens07.png)

* **Lifecycle**: Evidence captures have an internal lifecycle controlled by a set of statuses:
    * **Not ready**: The evidence capture is not ready to be sent to OpenReach.
    * **Ready**: The evidence capture is uploaded into the apx system and is ready to be sent to OpenReach.
    * **Sent**: The evidence capture is uploaded into the apx system and has been successfully submitted to OpenReach using the Transflex API.
If a photo is re-uploaded, the "Not Ready" status is reset for the evidence capture field.

![](/img/Noi/noi-screens08.png)

* **Multiple Executions**: The EC process can be executed multiple times from the element form, the record of each execution is saved in the Evidence Captures Sed.

## Actions

**Navigate to NOI**: This button opens the NOI details screen, allowing the user to have a bidirectional navigation between the NOI and the element. Additionally, could be potentially used to to send all the ready evidence captures bulk operation.

**Send Evidence Capture**: This button initiates the process of sending an Evidence Capture for the selected element within a NOI. 

### Evidence Captures Sed

A dedicated SED for evidence capture (EC) processes allows users to generate weekly or monthly reports related to NOIs. This SED is accessible under the **Network Summary** menu section with the text **Evidence Capture List**.  Reports can be filtered by date, user, role, and element type, providing detailed insights into evidence capture submissions within the NOI lifecycle.

The SED includes the following fields for all ECs, whether executed in bulk or individually:
* NOI Number
* NOI Status
* Element Code
* Element Type
* Evidence Capture Field
* Evidence Capture Status
* User
* Roles
* Send Date

This reporting capability enhances oversight by offering clear visibility into EC activities, improving compliance tracking and operational transparency.

![](/img/Noi/noi-screens09.png)