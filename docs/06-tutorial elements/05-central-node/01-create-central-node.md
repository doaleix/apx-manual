---
sidebar_position: 1
---

# Add Central node

This guide will help you create a **central node** in the programme.

** Standard roles allowed to perform the following steps in the programme **

1.	**Administrator**
2.  **Planner**
3. **Operator**

------------

**Version**: 00
**Date**: March 2024

------------
## **Step by Step**

1\. Navigate to [https://app.apx-gis.net/#/](https://app.apx-gis.net/#/)


2\. It is a good practice to first select the project and then start placing the elements.

Click "**Select Project**" option.

![](static/img/downloads/01-create-central-node_1.jpeg)


3\. Select the project. For this example "**valls-project**" was selected.

![](static/img/downloads/01-create-central-node_2.jpeg)


4\. To place the elements in the project, there are two options available to do it:

\
**Option 1:** Through the menu "**Operations &gt; New Central Node**" and then indicate on the map where we want to place it.

**Option 2:** Go to the map first and select the point where we want to place the element and "**right click**". The element window will appear. Select "**Central node**".

For this example, click "**Operations**" option.

![](static/img/downloads/01-create-central-node_3.jpeg)


5\. Click "**New Central Node**" option.

![](static/img/downloads/01-create-central-node_4.jpeg)


6\. The programme will send a message at the top ( \* ) requesting to define a location.

Click the desired location.

![](static/img/downloads/01-create-central-node_5.jpeg)


7\. When creating an element, the basic fields must be filled:

\
**Location :** These are filled automatically indicating the coordinates of the selected location.\
**Id:** if you have a Counter assigned, this field will be filled automatically.\
**Description:** You must enter the description of the element.\
**Layer:** you must assign the element to one or several layers. If no assigned to any layer, it will be placed into "**Default**" layer.

For this example the "**id**" field was automatically filled and for the description it was typed "**central-node-valls-25"**.

![](static/img/downloads/01-create-central-node_6.jpeg)


8\. Click "**Layer**" field.

![](static/img/downloads/01-create-central-node_7.jpeg)


9\. Select the layer or layers you need to assign the element. For this example "**north-planning**" was selected.

![](static/img/downloads/01-create-central-node_8.jpeg)


10\. Click "**Apply**" button.

![](static/img/downloads/01-create-central-node_9.jpeg)


11\. If the layer to which you are assigning the element is not active, the program will send you a message indicating that you will not be able to see the element unless you activate it. Click "**Close**" button.

![](static/img/downloads/01-create-central-node_10.jpeg)


12\. If the layer was not selected, go to "**Maps-Layers-Types**" menu at the top right of the screen ans select the layer to wich the element was assigned. For this example "**north-planning**" layer was selected.

![](static/img/downloads/01-create-central-node_11.jpeg)


13\. Up to this point the element only has the **minimum information,** from this point on we will provide more information to the element.

Click the element that has been created.

![](static/img/downloads/01-create-central-node_12.jpeg)


14\. The "**pop up elemen**t" window will open. Click the description of the element, for this example "**- central-node-valls-25**" was selected.

![](static/img/downloads/01-create-central-node_13.jpeg)


15\. Element window will be opened (Central node), click "**Status**" field and a drop down menu will be shown. The "**Status**" field is assigned to all elements. For this example "**Active**" status was selected.

To edit or add values to "**Status**" field follow the menu:

"**Administration&gt;Codifiers&gt;Element state**".

Please refer to the documentation "**Element types &gt; Codifiers**".

![](static/img/downloads/01-create-central-node_14.jpeg)


16\. To continue entering the element information click on "**Details**" option.

![](static/img/downloads/01-create-central-node_15.jpeg)


17\. Within the information group "**Details**" the fields to be filled in are:

- **Location:** It can be typed or by clicking the "road" icon on the right of the field, it will be autofilled

- **Dimensions:** It can b typed the number value for X, Y, and Z

- **Manufacturer:** The value is a codifier (it has a previous value to select from). You have to follow the menu "**Administration&gt; Codifiers&gt;Central Node Manufacturer**" and click "**+Add "** button to enter the description of the manufacturer. 

Please refer to the documentation (**Element types &gt; Codifiers**)

- **Model**: The value is a codifier (it has a previous value to select from). You have to follow the menu "**Administration&gt; Codifiers&gt;Central Node Type**" and click "**+Add "** button to enter the description of the Central Node Type. 

Please refer to the documentation (**Element types &gt; Codifiers**)

- **Environtment**: The value is a codifier (it has a previous value to select from). You have to follow the menu "**Administration&gt; Codifiers&gt;Chamber environment**" and click "**+Add "** button to enter the description of an Environment. 

Please refer to the documentation (**Element types &gt; Codifiers**)

- **Installation Date**: the value of this fiel should follow date format.

- **Ownership**: The value is a codifier (it has a previous value to select from). 

- **Comments**: If you whish to add information for the Central node, you cas type it in this field.

![](static/img/downloads/01-create-central-node_16.jpeg)


18\. If you have defined "**Custom Fields**" for the Central Node, the section will follow "**Details**" section.

Please refer to "**Element Types &gt; Custom Fields**" documentation.

Click "**Custon fields**" option

![](static/img/downloads/01-create-central-node_17.jpeg)


19\. For this example "**Installer's name**" was set up as a custom field. Youmay have other custom fields or need to configure some. Please refer to the "Element type &gt; Custom Fields" documentation.

Click specific "**Custon field**" dropdown. For this example, "**Installer's name**" was clicked.

![](static/img/downloads/01-create-central-node_18.jpeg)


20\. Next option is "**Connected ducts**".

If there are connected ducts assigned to the Central Node, they will be shown at this point. For this example no ducts are connected.

![](static/img/downloads/01-create-central-node_19.jpeg)


21\. If you need to add specific documents to the central node, you may add documents by:

1. Clicking "**Documents**" dropdown.
2. Clicking "**+ Choose**" button.

![](static/img/downloads/01-create-central-node_20.jpeg)


22\. If you need to add Joints or OLTs, you should:

1. Click "**Joints/OLT**s" dropdown and then
2. Click "+**Add Joint**" or "+**Add Olt**" buttons.

![](static/img/downloads/01-create-central-node_21.jpeg)


23\. If you need to add Network clients, you should:

1. Click "**Network clients**" dropdown and then,
2. Click "+**Add**" button.

![](static/img/downloads/01-create-central-node_22.jpeg)


24\. Click "**Apply**" button.

![](static/img/downloads/01-create-central-node_23.jpeg)


**Tip:** Central node created with detailed information.
