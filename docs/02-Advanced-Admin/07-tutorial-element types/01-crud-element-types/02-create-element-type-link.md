---
sidebar_position: 2
---

# Add new element type LINK

This guide will help you create a **Link Element type** in the programme.

## **Prerequisites**
1.	**User ID** and **Password** to access APXGIS programme.
2.	Assigned **Admin Role** to the given user ID.


------------

**Version**: 00
**Date**: February-2024

------------
## **Step by Step**

1\. Navigate to [https://app.apx-gis.net/#/](https://app.apx-gis.net/#/)


2\. Click "**Administration**" option.

![](/img/downloads/02-create-element-type-link_1.jpeg)


3\. Click "**Element types**" option.

![](/img/downloads/02-create-element-type-link_2.jpeg)


4\. Element types window will open, click "**\+Add**" button.

![](/img/downloads/02-create-element-type-link_3.jpeg)


5\. The new element type window will open. From this point you must enter the data corresponding to the new element you are creating.


 Click "**Name**" field and type the name. This name is used to identify the element in APX-GIS tables. The best practice is to use lower case and no spaces.

 For this example "**south-link**" was typed.

![](/img/downloads/02-create-element-type-link_4.jpeg)


6\. Click "**Type**" dropdown and select a type for the element.

**Important**: There are three general types of elements:

The "**Node**" element is set as an icon on the map.

The "**Link**" element is set as a line or series of lines, marking the points where it passes through (start and end) (no icon is needed on the map)

The "**Polygon**" element is set by drawing the lines that define its shape (no icon is needed on the map).

Select "**Link**" type.

![](/img/downloads/02-create-element-type-link_5.jpeg)


7\. Click "**Title**" field and type the tilte. This title is used to display an element's reference or name that the user will see in the programme. The best practice is to use lower case and no spaces and use a similar string as the "**Name**" field.

\
 For this example, "**south-link**" was typed.

![](/img/downloads/02-create-element-type-link_6.jpeg)


8\. Click "**Descriptive icon**" field and the available icons will be display for selection. Click the appropriate icon.

![](/img/downloads/02-create-element-type-link_7.jpeg)


9\. Click "**Unique Codes**" checkbox.

![](/img/downloads/02-create-element-type-link_8.jpeg)


10\. Click "**Map options**" option.

![](/img/downloads/02-create-element-type-link_9.jpeg)


11\. Click "**Show in map**" option.

![](/img/downloads/02-create-element-type-link_10.jpeg)


12\. One way to assign a **Map Style** is:

**Option 1**: Type the name of the **Map style** that represent the style for the new element type you are creating and hit &lt;Enter&gt;. All Map styles are available on the route:

 **Administration &gt; Map Styles** (See Map Styles documentation)

![](/img/downloads/02-create-element-type-link_11.jpeg)


13\. Another way to assign a **Map Style** is:

**Option 2**: If you do not want to assign a previous Map Style, you are able to do it on the way. Click on the default Style field and type a name for the map. For this example "**newfacade**" was typed.

![](/img/downloads/02-create-element-type-link_12.jpeg)


14\. **Option 2:** Click the "**Edit**" button.

![](/img/downloads/02-create-element-type-link_13.jpeg)


15\. **Option 2:** The new Map Style window will open. Click "**Type**" dropdown and select **Link**.

![](/img/downloads/02-create-element-type-link_14.jpeg)


16\. **Option 2:** Click "**Color**" field and select the color.

![](/img/downloads/02-create-element-type-link_15.jpeg)


17\. **Option 2:** Click "**Width**" field and selec the width.

![](/img/downloads/02-create-element-type-link_16.jpeg)


18\. **Option 2:** Click "**Apply**" button.

![](/img/downloads/02-create-element-type-link_17.jpeg)


**Tip:** The map style at this pont has beed defined.


19\. Click "**Add/Edit**" option.

![](/img/downloads/02-create-element-type-link_18.jpeg)


20\. Remember that an element can be added to the project and layer by right clicking on the map or by following the menu "**Operations &gt; New element**". 

When creating a new element type, in this section you define where the element can be added from:


Map, menu or both options.
from menu -
from map -
Add url -
Display type in map selector -
Display in popup -

![](/img/downloads/02-create-element-type-link_19.jpeg)


21\. Click "**Relations**" option.

![](/img/downloads/02-create-element-type-link_20.jpeg)


22\. As a link element type, the relation that can be defined id: 

Can end in -

![](/img/downloads/02-create-element-type-link_21.jpeg)


23\. For this example "**Central Node**" was selected.

![](/img/downloads/02-create-element-type-link_22.jpeg)


24\. Click "**Apply**" button.

![](/img/downloads/02-create-element-type-link_23.jpeg)


25\. Click "**Close**" button.

![](/img/downloads/02-create-element-type-link_24.jpeg)


26\. Click "**Close**" button.

![](/img/downloads/02-create-element-type-link_25.jpeg)


**Tip:** Link element type created.

**Important**: At this point you have created the element type that can only be used in the general layer.

So that this new element type can be used in other layers, you have to assign it to the layer via the menu: **Administration &gt; Admin Layers &gt; "Layer" &gt; Allowed Element Types.**

See "**Add element type to a layer**" procedure.

