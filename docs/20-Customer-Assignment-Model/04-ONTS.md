---
sidebar_position: 4
---
# By ONTs

This guide will help you understand how to Assing Customers by **ONT**.

------------

**Version**: 5.3
**Date**: March 2025

------------

## Screens

### Subscribers

The menu point to manage Subscribers can be found under the “Administration” section of the menu with the text “Subscribers”. It will display the list of the subscribers using a paginated table where each contains the code and the name of a subscriber.

![](/img/Customer-Assignment-Model/CAM-ont01.png)

#### Actions

* **Search**: The user can search by a term that can be contained either in the code or the name of the subscriber, using a case-insensitive matching. The search action is triggered by pressing enter or the search button. The paginated table is refreshed with the results of the filter.
* **Table navigation**: The user can navigate to the previous/next page and to the first/last page using the paginated table controls.
* *Click Row*: The user navigates to the subscribers form to edit an existing subscriber.
* **Add**: The user navigates to the subscribers form to create a new subscriber.
* **Close**: Closes the actual form.

![](/img/Customer-Assignment-Model/CAM-ont02.png)

### Create a subscriber

By clicking the "**+Add**" button you will get to the "**New Subscriber**" screen:

![](/img/Customer-Assignment-Model/CAM-ont03.png)

With the following fields:

* **Code** (required): Unique identifier of the subscriber in the system
* **Name** (required): Full name of the subscriber
* **Email**: Subscriber email
* **Address**: Subscriber address
* **Phone**: Subscriber phone
* **Service Onts**: List of OceNTs assigned to the subscriber

![](/img/Customer-Assignment-Model/CAM-ont04.png)

### Edit a subscriber

Subscribers created manually or imported via the UI importer can be edited by selecting them from the [Subscribers list](#subscribers)

![](/img/Customer-Assignment-Model/CAM-ont05.png)

However, subscribers related to third-party integrations are displayed in a read-only form and cannot be edited, an informative message is displayed at the top of the form and some additional information such as the name of the third-party integration, the origin external ID and the origin external code.

![](/img/Customer-Assignment-Model/CAM-ont06.png)