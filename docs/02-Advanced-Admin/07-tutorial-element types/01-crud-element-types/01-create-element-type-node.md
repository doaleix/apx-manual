---
sidebar_position: 1
---

# Add new element type NODE

This guide will help you create a **Node Element type** in the programme.

## **Prerequisites**
1.	**User ID** and **Password** to access APXGIS programme.
2.	Assigned **Admin Role** to the given user ID.


------------

**Version**: 00
**Date**: December-2023

------------
## **Step by Step**


1\. Navigate to [https://app.apx-gis.net/#/](https://app.apx-gis.net/#/)


2\. Click "**Administration**" option.

![](/img/downloads/01-create-element-type-node_1.jpeg)


3\. Click "**Element types**" option.

![](/img/downloads/01-create-element-type-node_2.jpeg)


4\. Click "**Add**" button.

![](/img/downloads/01-create-element-type-node_3.jpeg)


5\. The new element type window will open. From this point you must enter the data corresponding to the new element you are creating.

Click "**Name**" field and type the name. This name is used to identify the element in APX-GIS tables. The best practice is to use lower case and no spaces.

For this example, "major-cabinet-north" was typed.

![](/img/downloads/01-create-element-type-node_4.jpeg)


6\. Click "**Type**" dropdown and select a type for the element.

**Important**: There are three general types of elements:

1. The "**Node**" element is set as an icon on the map.
2. The "**Link**" element is set as a line or series of lines, marking the points where it passes through (start and end) (no icon is needed on the map)
3. The "**Polygon**" element is set by drawing the lines that define its shape (no icon is needed on the map).

Select "**Node**" type.

![](/img/downloads/01-create-element-type-node_5.jpeg)


7\. Click "**Title**" field and type the tilte. This title is to display an element's reference or name that the user will see in the programme. The best practice is to use lower case and no spaces and use a similar string as the "Name" field.

 For this example, "major-cabinet-north" was typed.

![](/img/downloads/01-create-element-type-node_6.jpeg)


8\. Click "**Descriptive icon**" field and the available icons will be display for selection. Click the appropriate icon.

![](/img/downloads/01-create-element-type-node_7.jpeg)


9\. Click "**Unique Codes**" option.

![](/img/downloads/01-create-element-type-node_8.jpeg)


10\. Click "**Map**" option and then select "**Show in map**" option.

![](/img/downloads/01-create-element-type-node_9.jpeg)

11\. In this section you can select how the element type will be drawn in the map. More information about styles in the **Map styles** section

12\. Click "**Add/Edit**" option.

![](/img/downloads/01-create-element-type-node_17.jpeg)


13\. Remember that an element can be added to the project and layer by right clicking on the map or by following the menu "**Operations &gt; New element**". When creating a new element type, in this section you define where the element can be added from:

Map, menu or both options.

- from menu -
- from map -
- Add url -
- Display type in map selector -
- Display in popup -

![](/img/downloads/01-create-element-type-node_18.jpeg)


14\. Click "**Relations**" option.As a node element type, the relations that can be defined are:

- Maximum conected links -
- Can be end of -

![](/img/downloads/01-create-element-type-node_19.jpeg)


15\. Click "**Apply**" button.

![](/img/downloads/01-create-element-type-node_20.jpeg)


16\. A program message will apear, indicating the changes are running in the background. Click "**Close**" button.

![](/img/downloads/01-create-element-type-node_21.jpeg)


17\. Click "**Close**" button.

![](/img/downloads/01-create-element-type-node_22.jpeg)


**Tip:** Node element type created.


**Important:** At this point you have created the element type that can only be used in the general layer. 


So that this new element type can be used in other layers, you have to assign it to the layer via the menu: **Administration > Admin Layers > "Layer" > Allowed Element Types**.


See "**Add element type to a layer**" procedure.
