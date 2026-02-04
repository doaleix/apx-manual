---
sidebar_position: 1
---

# Add a layer

This guide will help you **add a layer** in the programme.

**Standard roles allowed to perform the following steps in the programme**

1.	**Administrator**
2.  **Planner**

------------

**Version**: 5.6
**Date**: February 2026

------------
## **Step by Step**


1\. Navigate to [https://app.apx-gis.net/#/](https://app.apx-gis.net/#/)


2\. Click "**Administration**" option.

![](/img/downloads/01-add-layer_1.jpeg)


3\. Click "**Admin layers**" option.

![](/img/downloads/01-add-layer_2.jpeg)


4\. Click "**\+ Add**" button.

![](/img/downloads/01-add-layer_3.jpeg)


5\. Click "**Name**" field and type the layer's name. For this example "north-design" was typed.

![](/img/downloads/01-add-layer_4.jpeg)


6\. Click "**Roles**" field and select the roles that will have access to the layer. For this example, "admin" role was selected.

![](/img/downloads/01-add-layer_5.jpeg)


7\. Close "**Roles**" option.

![](/img/downloads/01-add-layer_6.jpeg)


8\. Click "**Type**" option.

![](/img/downloads/01-add-layer_7.jpeg)

### Layer types

Different options will be shown in the dropdown:

* **Normal**: accepts styles, responds well with less than 10,000 elements per project per layer.

* **APX WMS:** accepts styles, responds well with more than 10,000 elements per project per layer

* **WMS:** does not accept styles, responds well with more than 10,000 elements per project per layer, certain parameters must be set in order for it to work correctly.

* **Special:** Used only to create a <u>[Blockage layer](../../13-Blockages/03-set-layer.md)</u> or a <u>[ONT layer](../../02-Advanced-Admin/02-Third-party-integration/01-NOC-TPI/00-definition.md#special-layer).</u>

9\. Select "**Normal**" layer type.

![](/img/downloads/01-add-layer_8.jpeg)


10\. Click "**Allowed type elements**" option.

![](/img/downloads/01-add-layer_9.jpeg)


11\. Select the elements that will be allowed in the layer being created.

![](/img/downloads/01-add-layer_10.jpeg)


12\. Click "**X**" or close.

![](/img/downloads/01-add-layer_11.jpeg)

## Layer attributes

At the end of the form there are severa checkbox to give different attributes to the layers. Most of them are self-explanatory but the dynamic attribute is worth diving in a little more depth.

In APX, elements can belong to one or multiple layers. Traditionally, this association is always created manually, either by editing an element in the APX interface, using bulk operations, or importing data. Once assigned, the relationship remains unchanged unless a user explicitly modifies it.

A Dynamic Layer is a special type of layer that automatically determines which elements belong to it based on element type filters. Instead of manually assigning or removing elements, the system continuously evaluates these rules and keeps the layer up to date.

When an element matches the filtersets defined for a Dynamic Layer, it is automatically added to that layer. If it no longer matches, it is automatically removed. This evaluation is handled in the background, ensuring that the layer content always reflects the current state of the data.

### Manual Layers

This layers are assigned explicitly. Elements are added or removed directly by the user through the APX interface, bulk operations, or imports.

### Dynamic Layers

Only **Normal** and **APX WMS** layers can have this attribute. When enabled, they  cannot have elements assigned directly. Instead, elements are automatically included or excluded based on whether they meet the criteria defined by the layer’s filtersets. Users can manage the filtersets themselves to control which elements belong to the dynamic layer.

Dynamic layers are marked in the component with a bolt icon. There are two possible statuses for the dynamic layer:

  1. **OK**: The dynamic layer does not have any broken filterset and is displayed in blue.
  2. **Broken**: The dynamic layer has at least one broken filterset and needs manual intervention. The icon is displayed in red.

![](/img/GEN-LAY-DEF/dynamic-layer01.png)
