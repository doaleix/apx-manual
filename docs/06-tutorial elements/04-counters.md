---
sidebar_position: 3
---

# Manage element counters

This guide will help you manage **Element counters** for the whole installation.

## **Prerequisites**
1.	**User ID** and **Password** to access APXGIS programme.

------------

**Version**: 5.3
**Date**: March-2025

------------
## **Step by Step**

# Counter Management

The menu item is located under the administration section. Once inside, several components can be identified on the counter screen.

![](/img/Counters/counters1.png)
---

## 1 Add Counter Button
Clicking this button will open the counter creation form, which includes the fields: **name**, **format**, and **last**. Additionally, a help message will be displayed to explain how the counter works.  

As a restriction, the initial value of the counter (**last**) is set to **1** by default and cannot be lower. The counter's name is completely independent of the entity name and serves purely as an identifier for the user. The **name** and **format** fields are optional.

![](/img/Counters/counters2.png)
---

## Entity Filter
The entity filter is a multi-selector that displays counters linked to specific entities. By default, the filter is preselected with all entities when the form is opened and updates dynamically when counter-entity relationships are modified.  

To search for counters that are not linked to any entity, all options must be selected.

![](/img/Counters/counters3.png)
---

## Counter Table
The counter table displays the records resulting from applying the entity filter. Each record includes four elements:  
1. **Counter Name**  
2. **A section displaying the referencing entities** via tags  
3. **The value of the last generated code**  
4. **An entity edit button**  

![](/img/Counters/counters4.png)

All table records can be clicked to open the counter edit form. The edit form follows the same rules as the creation form.  

Additionally, there is an extra restriction: if the counter is linked to an entity that requires a counter, the **delete button will not be visible**. The user will be informed that they need to return to the counter screen to reassign the entity to another counter.

![](/img/Counters/counters5.png)

---

## Entity Edit Button
Clicking the **Entity Edit** button opens a modal displaying the entities linked to the counter.  

Users can:  
- **Add available entities** (those not linked to any counter) using a multi-selector.  
- **Remove entities** already linked to the counter.  

Entities that **require a counter** due to application logic will be marked in *italics* and labeled as **required**.  

To exit the entity edit modal, users must click the **X** in the top-right corner.

![](/img/Counters/counters6.png)

---

## Form Footer
The footer displays:  
- A **Save Changes** button for updating counter-entity relationships.  
- A **Cancel** button.  

The **Save** button will only be visible if there are changes to the relationships.  

If a user attempts to save a state where a required entity does not have a counter, an **error message** will be displayed.

![](/img/Counters/counters7.png)

---

## Important Considerations
Changes to counter-entity relationships **are not saved** until the user clicks the **Save** button.  

If the user tries to exit the form (by canceling, adding a new counter, or clicking a record) while changes are pending, a **confirmation message** will appear.

![](/img/Counters/counters8.png)
