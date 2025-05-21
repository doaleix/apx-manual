---
sidebar_position: 1
---
# Introduction

This guide will help you understand how to manage the different **Duct distributions** in APX GIS.

------------

**Version**: 5.3
**Date**: May 2025

------------

APX allows to store information on how the subducts are arranged inside a duct. Different arrangements can be stored and managed by an admin and chosen from a dropdown in each duct.

# Step by step

First, to see all created distributions go to **Administration** &gt **Duct distribution**

![](/img/duct-distribution/duct-distribution-01.png)

A list of existing distributions will be shown. 

![](/img/duct-distribution/duct-distribution-02.png)

Click on a distribution from the list to view and/or modify it's information.

It is also possible to create a new one by clicking the green button **+Add**.

![](/img/duct-distribution/duct-distribution-03.png)

## Distribution fields

The form will have the following fields:

* **Name**: Free text field to give a name  to identify the distribution in a future. This is the name that will be seen in the picklist on the duct form.

* **Rows**: Number of rows in the distribution.

* **Columns**: Number of columns in the distribution.

* **Slots**: Maximum number of subducts that can be added to the distribution. This field is relevant when the distribution doesn't follow a square/rectangle pattern. "for example a distribution for 7 subducts cannot be represented by a number of rows and columns"

* **Mirror slots**: Checkbox to indicate if the subducts will be layed straight so the distribution will be reciprocal at each end of the duct.
  * **Note**: If active the ending distribution will be blocked and modified automatically when modifying the starting distribution following a "mirror" logic

* **Times used**: Indicates how many ducts are using this distribution. Whenever a disribution is beiing used by at least one duct the number of slots, columns and slots cannot be modified to ensure data integrity, and the fields will appear greyed out.

![](/img/duct-distribution/duct-distribution-04.png)

## Rearanging Slots

When any number of rows, columns or slots is modified, the distribution will be rearanged in numerical ascending order.

**Tip**: Make sure you have the right numbers in the matrix before starting to rearange the slots or you will lose any progress done when you modify the matrix.

To assign a slot to an empty space simply click on the slot you want to move and it will turn green.

![](/img/duct-distribution/duct-distribution-05.png)

Then click on the position you want the slot to be and it will be moved there.

![](/img/duct-distribution/duct-distribution-06.png)

Slots can be swapped in the same manner, first pick one slot that will turn green.

![](/img/duct-distribution/duct-distribution-07.png)

And then pick the slot you want to swap with.

![](/img/duct-distribution/duct-distribution-08.png)

