---
sidebar_position: 2
---

# Import CSV

This guide will help you **Import** data from a CSV file.

**Standard roles allowed to perform the following steps in the programme**

1.	**Administrator**
2.	**Planner**
3.	**Operator**

------------

**Version**: 5.6

**Date**: March 2026

------------
## **Step by Step**

![](/img/15.Imports/Imports8.png)
![](/img/15.Imports/Imports9.png)
![](/img/15.Imports/Imports10.png)

It is also possbible to download a template including all custom fields for a given element type. To do so, on APX versions 5.6 or older a new button next to **Download template** is available.

![](/img/15.Imports/Imports10-1.png)
![](/img/15.Imports/Imports11.png)
![](/img/15.Imports/Imports12.png)
![](/img/15.Imports/Imports13.png)
![](/img/15.Imports/Imports14.png)
![](/img/15.Imports/Imports15.png)

### Import Layers

On v5.6 and older, a new checkbox will appear to include the layer or layers of each imported element in a column of the import file. This can be useful to import elements that belong each to different layers in one single import.

Instead of selecting layers globally through the standard import form input, each row can explicitly define the target layers. The system validates:
* That the layers exist.
* That they are valid for the element type being imported.
* That they are accessible based on the importing user’s role.
* That they are not dynamic layers (dynamic layers remain excluded, as in the standard import process).
* That there are no duplicate layer names.
If the layer field is empty for a row, the element will remain in the default/general layer.

If the checkbox is selected:
* The standard layer input becomes disabled.
* A button labeled "Config Layer Params" becomes enabled.
* Clicking this button opens a configuration form where the user can temporarily modify:
  * The CSV column name.
  * The layer separator.

![](/img/15.Imports/Imports16.png)