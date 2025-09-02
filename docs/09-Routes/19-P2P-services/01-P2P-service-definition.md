---
sidebar_position: 1
---
# P2P Service definition

This guide will help you understand **P2P Service** in APX GIS programme.

## **Prerequisites**

1.	Elements created like chambers, poles, Splitter Boxes, with cables connected.

**Standard roles allowed to perform the following steps in the programme **

1.	**Administrator**
2.  **Planner**
3.  **Operator**

------------

**Version**: 5.4
**Date**: Septembre 2025

------------
## Definition

P2P services are broadband access services based on a point-to-point fiber architecture, where each subscriber is assigned an individual optical fiber link from their premises to the provider’s central office or point of presence. This ensures dedicated bandwidth, high scalability, and easier service upgrades, as the fiber is not shared with other users.

## P2P Services List

To view a list of existing P2P go to "**Network Summary**" and then click "**P2P Services List**" option.

![](/img/19.p2p-services/p2p_service_1.png)

This will display a standard SED screen with the following options:

### Filters

* **Area**: Given an input area, select only those P2P services with at least one element inside this area.
* **Name**: Filter the results by a non-case-sensitive string matching the P2P service name.

### Exports

* **CSV**: Export all the selected P2P Services steps into a CSV file ordered by the service name, the step section and the step index.

* **XLSX**: Export all the selected P2P Services steps into an XLSX file ordered by the service name, the step section and the step index.

* **KML**: Export all the selected P2P Services elements (remember that a step can be composed of a splicebox and a cable) into a KML file with some useful metadata.

![](/img/19.p2p-services/p2p_service_1a.png)

## P2P Services administration

### Step by step

1\. Go to **Operations** and click **Admin P2P Services**.


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


5\. Click on the "**Attenuations**" section. This section is a table showing the total attenuation in dBs of the indicated number of fibers for every existing wavelength registered at the installation.
A warning line may appear at the end of the corresponding fiber if there’s any problem at the fiber route.

![](/img/19.p2p-services/p2p_service_5.png)

6\. Create the route by clicking on "**Search First element**" button.

![](/img/19.p2p-services/p2p_service_6.png)


7\. In this form you can change the Radius field in meters. Click on "**Select location**" button.

![](/img/19.p2p-services/p2p_service_7.png)


8\. You must click on the map near to your desired first element. Then the program will show you all the elements next to this location within the radius value.

![](/img/19.p2p-services/p2p_service_8.png)


9\. Click on the dropdown and choose the first element of the route.

![](/img/19.p2p-services/p2p_service_9.png)


10\. Your first element will appear in a table. This can be undone by clicking on "**Delete**" button and choosing another element as your first element. Then click on "**Select**" button.

![](/img/19.p2p-services/p2p_service_10.png)


11\. Now you can see your first element in the **Route** section. Click on the dropdown selector and choose a cable.

![](/img/19.p2p-services/p2p_service_11.png)


12\. When you choose the cable, automatically appears the other node where this cable is connected. And you can continue creating your route.

![](/img/19.p2p-services/p2p_service_12.png)


13\. By clicking the blue "**Fibers**" button, you can select the fibers of the cable. 

![](/img/19.p2p-services/p2p_service_13.png)


14\. In the route section you can see the following information:

- **Step:** The first and bigger number indicates the step index, that’s the position of the step inside of a section. The second number indicates the section. If at some point the route is divided and not connected, it will be separated in sections.  
- **Node:** Code of the current step node. Every step is related to a node.  
- **Cable:** If a cable is added, it will show the code of the selected cable.  
When there is no cable added yet, it will show a drop-down with the cables connected at the step node and a button to add that cable. When adding a cable apx will add another step with the node at the cable end.  
- **Continuity:** Indicates if the step has continuity. The continuity is calculated in three different ways depending if the step is the first step of a section, a middle step or the last step of a section.  
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