---
sidebar_position: 4
---
# Add a Map

This guide will help you **add a map** in APX GIS programme.

## Standard roles allowed to perform the following steps in the programme **

1.	**Administrator**
2.  **Planner**
3.  **Operator**

------------

**Version**: 01
**Date**: December 2024

------------
## **Step by Step**

1\. Navigate to [https://app.apx-gis.net/#/](https://app.apx-gis.net/#/)


2\. Click "**Administration**" option and then click "**Admin Cartography Layers**" option.

![](/img/3.Maps/create_map_1.png)


3\. Appears a form like normal layers. Click "**Add Button**".

![](/img/3.Maps/create_map_2.png)

4\. Set up a name for the layer and choose a type from the dropdown field. Only **image** and **WMS** options need params.

![](/img/3.Maps/create_map_3.png)

5\. If you choose **image** type you must add and type the params name with its value.

![](/img/3.Maps/create_map_4.png)

6\. If you choose **WMS** type, the list of mandatory parameters is:

· TRANSPARENT  
· CRS (for now we only support EPSG:4326)  
· maxZoom  
· url  
· layers  
· FORMAT  
  
APX has a helper in order to set up these fields. Just click on **Edit** button.

![](/img/3.Maps/create_map_5.png)


7\. Type the URL and click on **Fetch Capabilities** button. Choose the desired format of the dropdown field and the layers that you want. All this fields will appear as non editable fields in the previous form. When setted all parameters just click on **Apply** button.

![](/img/3.Maps/create_map_6.png)

**Tip:** It is important to refresh the browser so that the change is reflected.

