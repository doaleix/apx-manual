---
sidebar_position: 1
---
# P2P Service definition

This guide will help you understand **P2P Service** in APX GIS programme.

## **Prerequisites**
1.	Elements created like chambers, poles, Splitter Boxes, with cables connected.

## **Standard roles allowed to perform the following steps in the programme **

1.	**Administrator**
2.  **Planner**
3.  **Operator**

------------

**Version**: 00
**Date**: December 2024

------------
## **Step by Step**

1\. Click "**Network Summary**" option and then click "**P2P Services List**" option.

![](/img/19.p2p-services/p2p_service_1.png)


2\. Click "**New**" button to add a P2P service.

![](/img/19.p2p-services/p2p_service_2.png)


3\. Set up the form fields.

- **Name:** Required. Name of the service.  
- **Num fibers:** Required. Numeric. Number of fibers assigned to the service.  
- **Start date:** Required. Date. Service start date.  
- **End date:** Service end date.  
- **Operator:** Drop-down with existing operators.  
- **Start element:** Readonly. Autofilled. First element of the service route.  
- **End element:** Readonly. Autofilled. Last element of the service route.  
- **Length:** Readonly. Autofilled. Calculated total length of the route. The result is the sum of all cables length that the service goes through.  
- **Continuity:** Readonly. Autofilled. Tells if the continuity of the whole service is correct or incorrect. If any route step does not have continuity it will show that the continuity is incorrect.  
- **Description:** Free text.  

![](/img/19.p2p-services/p2p_service_3.png)


4\. Click on the "**Contact Fields**" section an set up the contact fields.

- **Contact name:** Name of the contact person.  
- **Contact email:** Email of the contact person.  
- **Contact number:** Phone number of the contact person.  

![](/img/19.p2p-services/p2p_service_4.png)


5\. Click on the "**Attenuations**" section. This section is a table showing total attenuation in dBs of the indicated number of fibers for every existing wavelength registered at the installation.
A warning line may appear at the end of the corresponding fiber if there’s any problem at the fiber route.

![](/img/19.p2p-services/p2p_service_5.png)


6\. How to create the route?: click on "**Search First element**" button.

![](/img/19.p2p-services/p2p_service_6.png)


7\. In this form you can change the Radius field. This field contains a quantity in meters. Click on  "**Select location**" byutton.

![](/img/19.p2p-services/p2p_service_7.png)


8\.  You must click on the map near to your desired first element. Then the program will show you all the elements next to this location + the radius value.

![](/img/19.p2p-services/p2p_service_8.png)


9\. Click on the dropdown and choose the desired first element of the route.

![](/img/19.p2p-services/p2p_service_9.png)


10\. Your first element will appear in a table. If you want, you can click on "**Delete**" button and choose another element as your first element. Then click on "**Select**" button.

![](/img/19.p2p-services/p2p_service_10.png)


11\. Now you can see your first element in the **Route** section. Click on the dropdown selector and choose your desired cable.

![](/img/19.p2p-services/p2p_service_11.png)


12\. When you choose the cable, automatically appears the other node where this cable is connected. And you can continue creating your route.

![](/img/19.p2p-services/p2p_service_12.png)


13\. If you click on the blue "**Fibers**" button, you can choose the desired fibers of the cable. In the route section you can see this information:

![](/img/19.p2p-services/p2p_service_13.png)


14\. In the route section you can see this information:

- **Step:** The first and bigger number indicates the step index, that’s the position of the step inside of a section. The second number indicates the section. If at some point the route is divided and not connected, it will be separated in sections.  
- **Node:** Code of the current step node. Every step is related to a node.  
**Cable:** If a cable is added, it will show the code of the selected cable.  
When there is no cable added yet, it will show a drop-down with the cables connected at the step node and a button to add that cable. When adding a cable apx will add another step with the node at the cable end.  
- **Continuity:** Indicates if the step have continuity. The continuity is calculated in three different ways depending if the step is the first step of a section, a middle step or the last step of a section.  
The first step will have continuity if the selected fibers are connected to a networkclient of the step’s node.  
A middle step will have continuity if the selected fibers are interconnected directly or through networkclients to the selected fibers of the previous step.  
The last step will have continuity if the fibers selected at the previous step are connected to a networkclient of the step’s node.  
- **Fibers:** If there are fibers selected, here will be shown the index of every selected fiber. When the step have a cable assigned, a blue button will appear. Pressing this button will open the fiber selection component.
- **Delete:** The last red button of the table is the delete button. It will remove a step from the service. Deleting a middle step will split the section in two.
- **Options:** At the end of every section there’s an option button. Clicking it will open a menu with the option to reverse the section.


![](/img/19.p2p-services/p2p_service_14.png)


15\. If you click on the "**Details**" button will expand the row to show interconnection and attenuation details.

For every selected fiber, it will display the following information:  
- The fiber index.  
- Warning icon: if there is any issue, a warning icon will be displayer. Putting the cursor over the icon will display a tooltip with the warning text.  
- Continuity: Tells if the fiber have continuity.  
- Fiber interconnections inside the node.  
- Attenuations: For every wavelength registered at the installation will show the information of the fiber attenuation, the interconnections connectors attenuations, the total attenuation of the fiber at the step and the accumulated attenuation (total current attenuation plus previous steps total attenuation).  
  
If the fiber splits or have multiple connections, the fiber will show multiple interconnection routes and attenuation details for every route.


![](/img/19.p2p-services/p2p_service_15.png)