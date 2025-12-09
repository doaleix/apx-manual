---
sidebar_position: 1
---

# Map Styles

In APX GIS, map styles control how elements are displayed on the map (colors, symbols, line thickness, transparency, etc.).  
The styling system is managed centrally and then applied to element types to ensure consistency across projects.

Styles created here are reusable and can be applied to different element types.

** Standard roles allowed to perform the following steps in the programme **

1.	**Administrator**
2.	**Planner**

------------

**Version**: 5.4
**Date**: September 2025

------------

# Creating Styles

All map styles are created and managed from the **Administration > Map Styles** menu.  

![](/img/9.Styles/styles01.png)

The Map styles screen is divided in two tabs:

- **[User defined](#user-defined)**
- **[System](#system)**

![](/img/9.Styles/styles02.png)

## User defined

Each style defines the visual properties of an element, out of three types:

- **[Nodes](#nodes)**
- **[Links](#links)**
- **[Polygon](#polygons)**

To create a new style click the **+Add** button and a "**new**" blank form will open.

![](/img/9.Styles/styles03.png)

Then you can type the name of the new style you are going to create.

Common fields for all types of Map styles are the following:

- **Opacity**: the style can be transparent at different levels. Default value is 1.00 which doesn't allow to see anything under it.

- **Show label**: The checkbox is used to define wether the style will allow to display any label on the element using it or not.

**Note**: This checkbox will only be displayed if the installation param "style.map.label.show" is enabled. More information on installation params found in the <u>[Installation Setup](../../01-tutorial-fundamentals/installation-setup.md#params)</u> chapter.

### Nodes

Select "node" on the type field dropdown to see the fields related to node styles.

Click on the icon field box to see all available icons:

![](/img/9.Styles/styles04.png)

More information on how to manage icons can be found in the <u>[icons section](../06-Icons/02add-new-icon.md)</u>

"**Icon ancor**" is a read-only field, defined in the System styles explained below on this page.


### Links

When selecting "Link" a different set of fields will appear:

![](/img/9.Styles/styles05.png)

Select a colour either from the colour palette or with an RGB value.

Then one out of three different width has to be selected:

- Slim
- Medium
- Thick

Finaly, the last checkbox is used to define whether the line drawn has to be continuous or dashed.

### Polygons

With polygons the same fields as Links can be found exept for the width. In this case, it will be defining the thickness of the countourning line of the polygon.

![](/img/9.Styles/styles06.png)

## System

This styles are used to define all other kinds of styling of the application in general, not tied to an element in particular. 

![](/img/9.Styles/styles07.png)

There are three different styles to be described here:

- **[Project-style](#project-style)**
- **[Element form highlight](#element-form-highlight)**
- **[Third-party integration alarm](#third-party-integration-alarm)**

### Project Style

In this section you can select the colour of the line defining the selected project and the colour of the polygon defining neightbour projects. A neightbour project is a project other than the one currently selected.

### Element form highlight

This group allows users to configure the default highlight style for elements when opening their associated form.

* For nodes, the default marker is the standard Leaflet marker.

* For links and polygons, the default highlight is a blue color with a slim width.

The field named "Icon Anchor" it is only for map styles of type node. This input is only editable from this screen.
The "Icon Anchor" setting allows the user to change the position of the highlight icon (a.k.a marker) relative to the node.

There are nine predefined anchor positions to choose from, letting users customize icon placement according to their preferences.

![](/img/9.Styles/styles08.png)

### Third-party integration alarm

This last style it is only available for installations integrated with third party alarming systems and it is used to define what icons that should be used for the different alarm status.

![](/img/9.Styles/styles09.png)

In this case we can see "alarm", "helathy" and "partial", but depending on the integration, different status could be found.