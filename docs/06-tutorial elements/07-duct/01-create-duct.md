---
sidebar_position: 1
---

# Introduction

This guide will help you create and update a **duct** in the programme. It will also serve as an example for any linear element such as cables.

**Standard roles allowed to perform the following steps in the programme **

1.	**Administrator**
2.  **Planner**
3. **Operator**

------------

**Version**: 5.3
**Date**: May 2025

------------

## Add Duct

### Step by step

1\. Navigate to your APX and log in.


2\. It is a good practice to first select the project and then start placing the elements.

Click "**Select Project**" option.

![](/img/downloads/01-create-duct_1.jpeg)


3\. Select the project. For this example "**valls-project**" was selected.

![](/img/downloads/01-create-duct_2.jpeg)


4\. To place the elements in the project, there are two options available to do it:


**Option 1:** Through the menu "**Operations &gt; New Duct**" and then indicate on the map where we want to place it.

**Option 2:** Go to the map and "**right click**". The create element pop up will appear. Select "**Duct**".

For this example, click "**Operations**" option.

![](/img/downloads/01-create-duct_3.jpeg)


5\. Click "**New Duct**" option.

![](/img/downloads/01-create-duct_4.jpeg)


6\. The programme will show a top navbar **( \* )** requesting to define a location.

Click the desired location.

![](/img/downloads/01-create-duct_5.jpeg)


7\. The ducts are represented by straight lines. The system prompts you to enter the starting point and all the vertices through which the duct passes.

![](/img/downloads/01-create-duct_6.jpeg)

8\. To define the end of the duct, click twice the last point.

![](/img/downloads/01-create-duct_7.jpeg)


9\. The duct creation form will be displayed.

When creating an element, the basic fields are requested:

**Location :** This information is filled automatically with the information of the points you marked on the previous steps.

**Id:** if you have a Counter assigned, this field will be filled automatically.

**Description:** You must enter the description of the element.

**Layer:** you must assign the element to one or several layers. If no assigned to any layer, it will be placed into "**Default**" layer.

For this example the "**id**" field was automatically filled and for the description it was typed "DUCT-VALLS-31".

![](/img/downloads/01-create-duct_8.jpeg)


10\. Click "**Layer**" field.

![](/img/downloads/01-create-duct_9.jpeg)


11\. Select the layer or layers you need to assign the element. For this example "**north-planning**" was selected.

![](/img/downloads/01-create-duct_10.jpeg)


13\. Click "**Apply**" button.

![](/img/downloads/01-create-duct_11.jpeg)


**Tip:** If the layer to which you are assigning the element is not active, the program will send you a message indicating that you will not be able to see the element unless you activate it.

If the layer was not selected, go to the top right of the screen and select the layer to wich the element was assigned. 

## Update Duct

### Step by step

1\. Click the element that has been created **(Duct)**.

![](/img/downloads/01-create-duct_12.jpeg)


2\. A "**pop up**" will appear. Click the duct to update, for this example "- **DUCT-VALLS-31**" was selected.

![](/img/downloads/01-create-duct_13.jpeg)


3\. The element window will be opened (Duct), click "**Status**" field and a drop down menu will be shown. The "**Status**" field is assigned to all elements. For this example "**Active**" status was selected.

To edit or add values to "**Status**" field follow the menu:

"**Administration&gt;Codifiers&gt;Element state**".

Please refer to the documentation "**Element types &gt; Codifiers**".

![](/img/downloads/01-create-duct_14.jpeg)

![](/img/downloads/01-create-duct_15.jpeg)


4\. To continue entering element information, click "**Duct Details**" option.

![](/img/downloads/01-create-duct_16.jpeg)


#### Details

The fields to be filled in are:

**Measured length.** This field is auto populated.

**Calculated lengths.** This field is auto populated.

**Type.** This field is a codifier, which means that we must assign values beforehand so that they can be selected in this field.

To edit or add values to "**Type**" field follow the menu:

"**Administration&gt;Codifiers&gt;Duct Model**".

Please refer to the documentation "**Element types &gt; Codifiers**".

**Map Color.** Indicates the color with which the element will be reflected on the map.\
The available colors have to be previously registered following the path "**Administration &gt; Colors** " (Please check the documentation in: "**Element types &gt; Colors**" of this manual).

**Operator.** This field is a codifier, which means that we must assign values beforehand so that they can be selected in this field.

![](/img/downloads/01-create-duct_17.jpeg)

**Depth.** This field is numeric.

**Material**. This field is alphanumeric (Numbers and letters allowed).

**Ownership.** This field is a codifier, which means that we must assign values beforehand so that they can be selected in this field.

**Installation date:** Register the date, whe you click this field, a calendar will be shown for you to select the date.

**Internal disposition:**   This field is a codifier, which means that we must assign values beforehand so that they can be selected in this field.

To edit or add values to "**Internal disposition**" field follow the menu:

"**Administration &gt; Codifiers &gt; Canalization Section Disposition**".

Please refer to the documentation "**Element types &gt; Codifiers**".

**Disposition**: This field is alphanumeric (Numbers and letters allowed).

![](/img/downloads/01-create-duct_18.jpeg)

**Shape**:

- Rectangular
- Circular
- Free

**Diameter**. This field is numeric.

![](/img/downloads/01-create-duct_19.jpeg)


#### Elements

The following actions may be carried out:

1. **Add new Subduct**: Please refer to the path "**Element &gt; Subduct &gt; Add new Subduct"** of this manual.
2. **Add new Microduct:** Please refer to the path "**Element &gt; Microduct &gt; Add new Microduct"** of this manual.
3. **Add new Cable:** Please refer to the path "**Element &gt; Cable &gt; Add new Cable to Subduct or Microduct"** of this manual.
4. **Add existing Cable:** Please refer to the path "**Element &gt; Cable &gt; Add existing Cable to Subduct or Microduct"** of this manual.

For this example a subduct and microduct were created previously.

![](/img/downloads/01-create-duct_20.jpeg)

#### Distribution

A duct distribution can be selected from the drop down.

![](/img/6.Elements/create-duct01.png)

* New duct distributions can be created by an Admin in **Administration &gt Duct distribution**.

* Following the diagram, the distribution can be reorganized with a simple drag and drop mechanism.

![](/img/6.Elements/create-duct02.png)

* A Subduct can be unassigned by drag and droping it to the <i>**Subducts unassigned**</i> section and viceversa.

![](/img/6.Elements/create-duct03.png)

#### Cut at element

The action **Look for Anchor Elements** can be performed. Please refer to the following documentation of this manual :

- Elements &gt; Cable &gt; Cut Cable
- Elements &gt; Subduct &gt; Cut Subduct
- Elements &gt; Microduct &gt; Cut Microduct

![](/img/downloads/01-create-duct_21.jpeg)


#### Blockages

You will be able to add Blockages. 

![](/img/downloads/01-create-duct_22.jpeg)

#### Projects

If you need to assign the element to another project, click "**Projects**" dropdown and you will see the current project (Selected in the firsts steps of this document) click "**Add to project**" button.

![](/img/downloads/01-create-duct_23.jpeg)


#### Documents

If you need to add specific documents to the central node, you may add documents by:

1. Clicking "**Documents**" dropdown.
2. Clicking "**+ Choose**" button.

![](/img/downloads/01-create-duct_24.jpeg)


Click "**Apply**" button.

![](/img/downloads/01-create-duct_25.jpeg)


**Outcome** Duct will be updated with all the detailed information.

