---
sidebar_position: 3
---

# Add new element type POLYGON

This guide will help you create a **POLYGON Element type** in the programme.

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

![](static/img/downloads/03-create-element-type-polygon_1.jpeg)


3\. Click "**Element types**" option.

![](static/img/downloads/03-create-element-type-polygon_2.jpeg)


4\. Click "**Add**" button.

![](static/img/downloads/03-create-element-type-polygon_3.jpeg)


5\. The new element type window will open. From this point you must enter the data corresponding to the new element you are creating.

 Click "**Name**" field and type the name. This name is used to identify the element in APX-GIS tables. The best practice is to use lower case and no spaces.

 For this example "design-building" was typed.

![](static/img/downloads/03-create-element-type-polygon_4.jpeg)


6\. Click "**Type**" dropdown and select a type for the element.\
 Important: There are three general types of elements:

The "**Node**" element is set as an icon on the map.

The "**Link**" element is set as a line or series of lines, marking the points where it passes through (start and end) (no icon is needed on the map).

The "**Polygon**" element is set by drawing the lines that define its shape (no icon is needed on the map).

Select "**Polygon**" type.

![](static/img/downloads/03-create-element-type-polygon_5.jpeg)


7\. Click "**Title**" field and type the tilte. This title is used to display an element's reference or name that the user will see in the programme. 

The best practice is to use lower case and no spaces and use a similar string as the "Name" field.

For this example "design-building" was typed.

![](static/img/downloads/03-create-element-type-polygon_6.jpeg)


8\. Click "**Descriptive icon**" field and the available icons will be display for selection. Click the appropriate icon.

![](static/img/downloads/03-create-element-type-polygon_7.jpeg)


9\. Click "**Unique Codes**" checkbox.

![](static/img/downloads/03-create-element-type-polygon_8.jpeg)


10\. Click "**Map options**".

![](static/img/downloads/03-create-element-type-polygon_9.jpeg)


11\. Click "**Show in map**" option

![](static/img/downloads/03-create-element-type-polygon_10.jpeg)


12\. Type the name of the Map style that represent the style for the new element type you are creating and hit &lt;**Enter**&gt;. For this example "**default manhole**" was typed.

All Map styles are available on the route: **Administration &gt; Map Styles** (See Map Styles documentation)

![](static/img/downloads/03-create-element-type-polygon_11.jpeg)


13\. Click the "**Add/Edit**" option.

![](static/img/downloads/03-create-element-type-polygon_12.jpeg)


14\. Remember that an element can be added to the project and layer by right clicking on the map or by following the menu "**Operations &gt; New element**".

When creating a new element type, in this section you define where the element can be added from:

Map, menu or both options.

from menu -from map -

Add url -

Display type in map selector -

Display in popup -

![](static/img/downloads/03-create-element-type-polygon_13.jpeg)


15\. Click "**Apply**" button.

![](static/img/downloads/03-create-element-type-polygon_14.jpeg)


16\. Click "**Close**" button.

![](static/img/downloads/03-create-element-type-polygon_15.jpeg)


17\. Click "**Close**" button.

![](static/img/downloads/03-create-element-type-polygon_16.jpeg)


Tip: Polygon element type created.

**Important:** At this point you have created the element type that can only be used in the general layer.

So that this new element type can be used in other layers, you have to assign it to the layer via the menu: **Administration &gt; Admin Layers &gt; "Layer" &gt; Allowed Element Types**.

See "**Add element type to a layer**" procedure.

