---
sidebar_position: 5
---

# Element Street View

This guide will help you understand how the Street view of an **Element** from a APX works.

## **Prerequisites**
1.	**User ID** and **Password** to access APXGIS programme.

------------

**Version**: 5.5
**Date**: December-2025

------------
## **Introducion**

 Starting with version 5.5 in the element form as a new tab that displays the surrounding street view area of the element. In this version, we introduce two modes: dynamic, where users can navigate through the street view using the move, pan, and zoom functions, while displaying a 3D representation of the elements on the screen. On the other hand, the static mode just offers an image of the surrounding area. As a
 limitation, the polygon element types do not provide support for this new functionality.

## **Technical information**

### Params

The installation param “maps.googleapis.element.streetview” is created to handle the tab and mode visualisation. When the param is set to 1, it enables the element tab in dynamic mode, and when the param is set to 2, it enables the element tab in static mode. Any other value disables the element's street view tab.

More information about Params in the <u> [Installation Setup Section](../01-tutorial-fundamentals/installation-setup.md#params)</u>

### Google API

This feature needs a previous setup since it reuses the API key set in the parameter “maps.googleapis.javascript.key”. This parameter is used to load the Google API script in the APX app, which is needed in the dynamic mode. Moreover, the Street View and Static view functionalities should be enabled using the Google Console. The pricing of each of the modes differs significantly between the dynamic and static modes. Additionally, it is important to consider that Google registers each pano call in the dynamic mode (initial call and when moving the camera) or each static image call in the static mode.

Please contact support to enable it if it is still not done in your installation.

### Model representation 

In the dynamic mode, users can visualise the target element and some additional information, such as children, parents, siblings and in the case of links, starting and ending nodes. This information is displayed on the screen with the proper representation. Moreover, in the case of links, the style and colour are respected and resistant to potential theme changes. Finally, we introduced some navigation buttons to go back to the target element or traverse the links (starting, centre or ending points).

## **Screens**

### Dynamic mode

![](/img/downloads/street-view01.png)

-----

![](/img/downloads/street-view02.png)

### Static mode

![](/img/downloads/street-view03.png)
