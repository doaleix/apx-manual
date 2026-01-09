---
sidebar_position: 1
---
# Element Route Details

This guide will help you understand how the **Element Route Details** work in APX GIS programme.

**Prerequisites**
1.	Elements created like chambers, poles, Splitter Boxes, with cables connected.

** Standard roles allowed to perform the following steps in the programme **

1.	**Administrator**
2.  **Planner**
3.  **Operator**

------------

**Version**: 5.5
**Date**: January 2026

------------

## Access Points

To examine the details of a given route APX offers a feature that can be accessed from various points for a better user experience.

* From the Interconnections screen by clicking a port or a fiber strand.

* From the Cables form, in the Fibers section (if the fiber is interconnected)

* From the Network Clients form.

* From the Splitter Boxes form, in the Clients section.

![](/img/downloads/Elem-rout-details-01.png)

![](/img/downloads/Elem-rout-details-02.png)

## Main Features

A single table is displayed with the selected element highlighted with blue borders and a gray background.

The table includes four columns:

* Code
* Length
* Service Loops
* Attenuations

Above the table, the **total route length** is displayed, along with three main operations:

* **Export** – generates a CSV file.
* Save as **Element Collection** – stores all the elements included in the route on the Element Collection component.
* **Reflectometry** – opens a form where you can specify:
  * The starting node for the search.
  * The direction (upward or downward relative to the table with the target element).
  * The distance in meters.
  *  the reflectometry is done, it automatically scrolls to the newly added row, which reports the distance between the nodes and the option to center the map and add the cable to which it belongs to the current element collection.

## Functionality

* When reaching the **input port of a splitter**, the route can now be continued.


* A button in the last column of the table opens a **popup** with an input field (if the splitter has interconnections on any output ports).


* You can then **select the output port** to continue the route, and repeat this process until reaching the end of the route.


* It is also possible to **switch the selected output port** at any time to view the different interconnections available for that splitter.

![](/img/downloads/Elem-rout-details-03.png)
