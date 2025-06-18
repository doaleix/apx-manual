---
sidebar_position: 1
---
# Basic Setup

This guide will help you understand the different **Screens** for thid party integrations in APX.

------------

**Version**: 5.3
**Date**: May 2025

------------
## Third-party Integration list

This menu point can be found under the Administration” section of the menu with the text “Third party config”. The screen displays the list of all available third-party integrations in a table with the columns “Name” and “API URL”.

![](/img/Third-party-integrations/thirdPI-screens01.png)

### Limitations

The system is designed to have at most one of each of the available integrations, preventing multiple fetches from the same data and possible data overrides. If the user reaches the limit the add button will be hidden and a new alert will be displayed.

![](/img/Third-party-integrations/thirdPI-screens02.png)

### Actions

* Click Row: The user navigates to the third-party [integration form](#edit) to edit an existing subscriber.
* Add: The user navigates to the third-party [integration form](#new) to create a new integration.
* Close: Closes the actual form.

## Third-party Integration form

Displays the extended information of the third-party integration.

**Fields**

* Name (required): Integration name
* Type (required): Integration type
* API URL (required): Integration base URL
* API token (required): Integration authorization token NOTE: In case of Basic auth please provide the base64 string produced by user:password.
* CRM type:  CRM type
* CRM URL: Additional CRM base URL used where the ont information does not retrieve the UPRN information (for example in 7Sigma)
* CRM token: CRM authorization token  NOTE: In case of Basic auth please provide the base64 string produced by user:password.
**Note**: If CRM fields are used, all of them should be informed.

### Functionalities

Displays the list of the third-party integration functionalities displaying meaningful information and allowing some actions on them. This component is only available in edition mode.

**Actions**

* Apply: Create or edit an integration 
* Delete config (Edit): Deletes the integration. All the elements created by the integration will be unassigned and maintained in the APX system.
* Cancel: Closes the actual form and returns to the [third-party integration list](#third-party-integration-list) form.
* Add functionality (Edit): The user navigates to the third-party integration functionality form to create a new functionality
* Click functionality row (Edit): The user navigates to the third-party integration functionality form to edit an existing functionality
* Manual Sync (Edit): The user schedules the next execution interval of the functionality to the current time. This option will be blocked until the next execution is started.

#### NEW

![](/img/Third-party-integrations/thirdPI-screens03.png)

#### EDIT

![](/img/Third-party-integrations/thirdPI-screens04.png)

## Third-party Integration functionality form

Displays the extended information of the third-party integration functionality.

**Fields**

* Name (required): Functionality name
* Type (required): Functionality type
* Request type (required): Functionality request type 
* Endpoint: Functionality endpoint NOTE: The endpoint string will be added to the integration API URL to perform the requests
* Headers:  Functionality request headers. Should be in a valid JSON format. Note: api_token dynamic parse is allowed setting “{{api_token}}”.
* Params: Functionality request params. Should be in a valid JSON format. Note: api_token dynamic parse is allowed setting “{{api_token}}”.
* Interval: Interval for the scheduler to execute the next iteration in seconds. The default minimum amount for ONT/Subscriber is 28800 (8 hours) and for the alarms 600 (10 min)
* Active: Activate or deactivate the functionality.
* Sync elements: True to synchronise relationships in origin (calculate subscribers when fetching ONTs and ONTs when fetching subscribers), false to fetch only the elements without the synchronised relationships, in this case, APX relationships of existing elements will be preserved.
* Overwrite info: True if the user wants to update the APX existing data with the origin data. False if the user wants to ignore updates from the origin source.

**Actions**

* Apply: Create or edit a functionality 
* Delete functionality (Edit): Deletes the functionality.
* Cancel: Closes the actual form and returns to [the third-party integration form](#third-party-integration-form).

**NEW**

![](/img/Third-party-integrations/thirdPI-screens05.png)

**EDIT**

![](/img/Third-party-integrations/thirdPI-screens06.png)

## Third-party Integration dashboard

This menu point can be found under the **Administration** section of the menu with the text “Third party dashboard”. Displays the dashboard of all the available integrations. There is an accordion “integrations” that displays a table with a quick overview of the integrations created in the apx system. Each table row is clickable and redirects to the [the third-party integration form](#third-party-integration-form). Moreover, there is another accordion “integration details”, which presents an accordion tab for each integration with detailed information on the functionalities, logs, ONTs, subscribers and alarms.

![](/img/Third-party-integrations/thirdPI-screens07.png)

### Functionalities

Functionalities information of the third-party integration.

![](/img/Third-party-integrations/thirdPI-screens08.png)

**Fields**

* Name: Third-party functionality name
* Type: Third-party functionality type
* Active: Third-party functionality is active
* Sync: Element synchronisation is activated
* Interval: Interval between executions in seconds
* Next exec: UTC timestamp of the next execution
* Action: Button to manually trigger the next execution to the current time

**Actions**

* Manual Sync: Set the value of the functionality's next execution to the current time

## Logs

Paginated table of logs of the third-party integration.

![](/img/Third-party-integrations/thirdPI-screens09.png)

**Fields**

* Functionality: Third-party functionality name
* Status: Third-party functionality status (RUNNING/PARTIAL/ERROR/SUCCESS)
* Start time: UTC timestamp where the functionality execution started
* End time: UTC timestamp where the functionality execution started
* Fetched: Third-party functionality execution fetched elements
* Inserted: Third-party functionality execution inserted elements
* Updated: Third-party functionality execution updated elements
* Deleted: Third-party functionality execution deleted elements

**Actions**

* Apply filter: Refresh the paginated table with all the filters applied
* Click row: User opens the log detail modal
* Table navigation: The user can navigate to the previous/next page or the first/last page

**Filters**

* Functionality Name: Case-insensitive filter by functionality name containing the term.
* Status: Filter by allowed status
* Start time: Date filter by execution start time
* End time: Date filter by execution end time

### Log detail

Displays extended information on the functionality execution

![](/img/Third-party-integrations/thirdPI-screens10.png)

### Download logs

The third-party integration dashboard allows the user to download the list of all the logs for each functionality in CSV format. The action is triggered by clicking a new button at the bottom of the integration log information modal.

![](/img/Third-party-integrations/thirdPI-screens15.png)

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