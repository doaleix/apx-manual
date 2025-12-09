---
sidebar_position: 1
---

# Add new element type

This guide will help you create a new **Element type** in the programme.

## **Prerequisites**
1.	**User ID** and **Password** to access APXGIS programme.
2.	Assigned **Admin Role** to the given user ID.


------------

**Version**: 5.5
**Date**: December 2025

------------

## **Step by Step**


1\. Navigate to [https://app.apx-gis.net/#/](https://app.apx-gis.net/#/)


2\. Click "**Administration**" option.

![](/img/downloads/01-create-element-type-node_1.jpeg)


3\. Click "**Element types**" option.

![](/img/downloads/01-create-element-type-node_2.jpeg)


4\. Click "**Add**" button.

![](/img/downloads/01-create-element-type-node_3.jpeg)

### Basic Fields

5\. The new element type window will open. From this point you must enter the data corresponding to the new element you are creating.

Click "**Name**" field and type the name. This name is used to identify the element in APX-GIS tables. The best practice is to use lower case and no spaces.

For this example, "major-cabinet-north" was typed.

![](/img/downloads/01-create-element-type-node_4.jpeg)


6\. Click "**Type**" dropdown and select a type for the element.

**Important**: There are three general types of elements:

1. The "**Node**" element is set as an icon on the map.
2. The "**Link**" element is set as a line or series of lines, marking the points where it passes through (start and end) (no icon is needed on the map)
3. The "**Polygon**" element is set by drawing the lines that define its shape (no icon is needed on the map).

Select one of the three types to continue.

![](/img/downloads/01-create-element-type-node_5.jpeg)


7\. Click "**Title**" field and type the tilte. This title is to display an element's reference or name that the user will see in the programme. The best practice is to use lower case and no spaces and use a similar text as the "Name" field.

 For this example, "major-cabinet-north" was typed.

![](/img/downloads/01-create-element-type-node_6.jpeg)


8\. Click "**Descriptive icon**" field and the available icons will be display for selection. Click the appropriate icon.
The descriptive icon is to represent the element type in general (not a specific element og that type), anywhere else other than the map, for exemple in the element creation pop up.

![](/img/downloads/01-create-element-type-node_7.jpeg)


9\. Click "**Unique Codes**" option if you don't want any element of this type to have the same code.

![](/img/downloads/01-create-element-type-node_8.jpeg)

### Styles

10\. Click "**Map**" option and then select "**Show in map**" option.

![](/img/downloads/01-create-element-type-node_9.jpeg)

11\. In this section you can select how the element type will be drawn in the map. Write the name of an existing map style in the appropiate row and column or click on the pencil icon to create a new map style on the spot.

![](/img/downloads/02-create-element-type-link_13.jpeg)

More information about styles in the **Map styles** <u>[section](../../09-Styles/01-create-style.md)</u>

![](/img/downloads/01-create-element-type-node_17.jpeg)

### Element type management

12\. Click "**Add/Edit**" option.

13\. Remember that an element can be added to the project and layer by right clicking on the map or by following the menu "**Operations &gt; New element**". When creating a new element type, in this section you define where the element can be added from:

Map, menu or both options.

- from menu -
- from map -
- Add url -
- Display type in map selector -
- Display in popup -

![](/img/downloads/01-create-element-type-node_18.jpeg)

### Relationships

14\. Click the "**Relations**" tab.

* If it has the node type, the relations that can be defined are:

    - Maximum conected links -
    - Can be end of -

* If it is a Link the relations can be:

    - Can end in -

**Note** for Polygons the Relations tab will not be displayed.

![](/img/downloads/01-create-element-type-node_19.jpeg)

### Icons Size

Only when creating an element type of **node** type that have the descriptive icon option selected, the Icons Size tab will be available.

This tab allows to set the icon size of each element type individually, so that every element type can have a different size for each zoom level, divided into smSize, mdSize, and lgSize.

![](/img/downloads/iconSize.png)

The component includes a preview showing how the selected size will look at different zoom levels, and a button called "Set Default Icon Size". This button applies the values from the parameter used for the global size of all icons, making the element type subject to that parameter. If the parameter value changes, the size of that element type will also change accordingly.

The parameters mentioned are:

* style.map.node.lg.size
* style.map.node.md.size
* style.map.node.sm.size

15\. Click "**Apply**" button.

![](/img/downloads/01-create-element-type-node_20.jpeg)

17\. Click "**Close**" button.

![](/img/downloads/01-create-element-type-node_22.jpeg)


**Important:** At this point you have created the element type that can only be used in the general layer. 


To be able to use this element type in other layers, you have to assign it to the layer via the menu: **Administration > Admin Layers > "Layer" > Allowed Element Types**.


See [**Add element type to a layer**](../../04-tutorial-layers/02-add-elemtype-layer.md) procedure.
