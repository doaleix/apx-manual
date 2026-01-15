---
sidebar_position: 0
---
# Fiber Schematics

This guide will help you understand **Fiber Schematics** reports in APX GIS programme.

------------

**Version**: 5.5 January 2026

------------

## 1. Overview

The **Fiber Schematic** feature provides a logical, diagrammatic representation of the fiber optic network, independent of geographic scale or map coordinates. While the GIS map shows *where* assets are located, the fiber schematic shows *how* fibers, cables, and equipment are connected.

This view is especially useful for:

* Understanding complex fiber routes and splices
* Tracing fiber continuity end-to-end
* Troubleshooting connectivity issues
* Planning capacity usage and future expansions
* Communicating network design to technical and non-technical stakeholders

The schematic is generated dynamically from GIS data and always reflects the current state of the network.

---

## 2. Conceptual Model

### 2.1 Logical vs Geographic Representation

The fiber schematic is a **logical model**, not a geographically accurate one. Distances, angles, and positions are optimized for clarity rather than real-world location.

| Geographic Map         | Fiber Schematic       |
| ---------------------- | --------------------- |
| Real-world coordinates | Logical connectivity  |
| Accurate distances     | Simplified layout     |
| Spatial context        | Signal and fiber flow |

### 2.2 Core Network Elements

The schematic is composed of the following logical elements:

* **Nodes** – Physical locations such as manholes, cabinets, closures, central nodes, or joints
* **Cables** – Fiber optic cables connecting nodes
* **Fibers** – Individual fiber strands within a cable
* **Splices** – Connections between fibers
* **Ports** – Termination points on equipment or panels
* **Equipment** – ODFs, splitters, patch panels, active devices (if applicable)

Each element in the schematic is directly linked to its corresponding GIS feature and database record.

---

## 3. Accessing the Fiber Schematic

Users can open the fiber schematic from multiple entry points:

* From a Joint
* From a Splitterbox
* From an OLT

![](/img/downloads/Fiber-schem01.png)

---

## 4. Schematic Layout and Navigation

Once the tab is selected a button will appear with the name **Schematics** and the number of previously generated schematics in parenthesis, if any.

![](/img/downloads/Fiber-schem02.png)![](/img/downloads/Fiber-schem03.png)

### 4.1 Previously generated schematics

This tab will be open by default after clicking the button if there is at least one previously generated report.

![](/img/downloads/Fiber-schem05.png)

It will have the followig information and action buttons:

* **User**: The  user that generated the report. In case of multiple reports it can be sorted by User alphabetical order in ascending or descending order.
* **Date**: When the report was generated. In case of multiple reports it can be sorted by Date numerical order in ascending or descending order.
* **Filters**: Specifies the type of report generated and the _Depth_ if any.
* **SVG**: Action button to see the report on the screen. On that screen a button to download the report as an SVG file will be available
* **PDF**: Action button to download a PDF of the report.

### 4.2 Generate fibre schematics(Reduced)

This will generate a simplified report, select the cable or cables you want the report to follow or click the top checkbox to select them all.
![](/img/downloads/Fiber-schem06.png)![](/img/downloads/Fiber-schem07.png)

For complex networks a depth can be specified to tell the algorithm how far do you want the report to go. If none is specified it will generate the report until the end of all cables selected.

![](/img/downloads/Fiber-schem08.png)

### 4.3 Generate fibre schematics(Complete)

In case that a more in detail report is necessary this feature allows to generate a schematic including all fibers for each cable selected.

![](/img/downloads/Fiber-schem09.png)

This can be accomplished in the same manner than previous report but when selecting the cable, all fibers of the cable will be listed.

Please note that a given fibre can't be selected individually.

### 4.4 Generate port schematics

When accessing this feature from an OLT, this tab will be available to generate reports for a given port.
To do so, select the port from the dropdown menu and the depth if necessary as with previous schematics.

![](/img/downloads/Fiber-schem10.png)

---

## 5. Customization

### 5.1 Schematic Colors

Fiber schematic reports can be customized by giving different colors to the nodes depicted depending on the element type and other conditions.

This can be achieved by going to Administration &gt Schematic colors

![](/img/downloads/Fiber-schem-colors01.png)

A screen containing a dropdown for each possible type of node will appear.

![](/img/downloads/Fiber-schem-colors02.png)

Each element type can be given a default color and a conditional color using the filtersets described in the <u>[Advanced Filter Section](../../04-Data-flux/17-tutorial-exports/02-advanced-filter.md)</u> of this manual.

To do so, select a color from the dropdown for the default color and click the button **+Add/Edit** if there is an exisitng Fiterset to use or **Manage Filtersets** if there is none.

![](/img/downloads/Fiber-schem-colors03.png)

**Note**: The **+Add/Edit** button will only appear when there is an existing filterset.

---


## 6. Summary

The Fiber Schematic feature is a critical tool for understanding, managing, and maintaining fiber optic networks. By presenting a clear logical view of fiber connectivity, it complements the GIS map and enables efficient network operations, planning, and troubleshooting.
