---
sidebar_position: 1
---

# Interconnections

This guide will help you understand how **interconnections** are managed in APX.

## **Prerequisites**
1.	**User ID** and **Password** to access APXGIS programme.

------------

**Version**: 5.5
**Date**: January 2026

------------

## Introduction

In fiber optic network management, understanding and managing the interconnections between network elements is crucial for maintaining optimal performance and troubleshooting. This section of the documentation provides a comprehensive guide on how interconnections are defined, visualized, and managed within the software tool. It covers the process of mapping physical and logical connections, how elements like nodes, links, and ports interact within the network topology, and how the software allows for dynamic tracking and modification of these interconnections. Whether you're configuring new links or analyzing network flow, this section will help you effectively navigate and utilize the interconnection features of the tool.

## Distribution

The layout of the interconnexions screen has been designed to have an intuitive behaviour and improve the user experience. The header takes the full width of the screen to properly display the element type and code, the interconnections at the parent level and the last changes. Moreover, the view mode selector can be found in this header. 

![](/img/downloads/intercon-01.png)

The distribution of the screen is composed of:

1. **Header**: Interconnection element type and code, last changes, parent element interconnection and view mode selector

2. **Interactive whiteboard**: Interactive zone where users can interact with the interconnection elements, performing actions like dragging, connecting, rearranging…

3. **Whiteboard options**: Template management and whiteboard general options like zoom, background colour, opacity and the show info button (which displays the connector, tray and the service if they are set in a floating label near the interconnection). This section is only available while in visual schema mode.

4. **Elements list**: List of the interconnection elements, users can filter the elements, check/uncheck the elements or perform the “center” or “move to” actions in specific elements.

![](/img/downloads/intercon-02.png)

## Templates

The interconnections feature has it's own template system to allow users saving different configurations for the same interconnection view. By default, when users enter the screen, the “default” configuration is selected and they can select among the multiple templates previously stored for that element. This template section offers a set of different actions:

1. **New**: Create a new template, only available while no template is selected
2. **Save** a preexisting template
3. **Create** a new template given another template
4. **Rename**: Change the template name
5. **Delete** the template

The preexisting template for each element, takes the name of “ICX”. The fields stored for each template are:
* Zoom
* Background color
* Opacity
* Elements UI
  * Position
  * Visibility
  * Rotated (if possible)
  * Stacked (if possible)

![](/img/downloads/intercon-03.png)

## Functionalities

### Patch panel

This is a built-in networkclient functionality and a type named patch panel. Network clients with this functionality have their connectors arranged in a single dimension (x or y axis) depending on the rotation value.

![](/img/downloads/intercon-04.png)

### Rotate

**Cables, distribution points, ducts, microducts, olts and patch panels** have a semi-circular button that changes the orientation of the element and the connectors.

![](/img/downloads/intercon-05.png)

### Stack

**Cables, distribution points, ducts and microducts** have an inverted triangle to collapse and stack the connectors by shrinking their size and hiding the connector name.

![](/img/downloads/intercon-06.png)

### Colorpattern tubes

The colorpattern tubes are visually displayed with a small gap to allow users to recognise in an easier way the colorpattern distribution of the cable.

![](/img/downloads/intercon-07.png)

### Port labels

Within the visual schema, interconnection objects are created including labels for each corresponding port. These labels are displayed with a dashed outline and grey color.
This visual representation makes port labels clearly identifiable while keeping them visually secondary to the main objects.

![](/img/downloads/intercon-11.png)

On the right-hand side of the interface, a toggle button allows users to activate or deactivate port labels.


When the toggle state changes, the page is refreshed and Interconnection objects are recreated with labels enabled/disabled.

This provides flexibility to switch between a more detailed or a cleaner visual representation as needed.

![](/img/downloads/intercon-12.png)

Additionally, in the **Operator View** screen Port labels are displayed in parentheses next to the port name within the table.
This ensures that port labeling information is consistently available to operators, both in the visual schema and in the tabular representation.

## Screenshots

Visual Schema

![](/img/downloads/intercon-08.png)
![](/img/downloads/intercon-09.png)
![](/img/downloads/intercon-10.png)