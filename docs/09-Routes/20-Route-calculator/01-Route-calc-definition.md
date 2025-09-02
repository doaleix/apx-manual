---
sidebar_position: 1
---
# Route calculator

This guide will help you understand how to perform **Route calculations** in APX GIS programme.

## **Prerequisites**
1.	Elements created like chambers, poles, Splitter Boxes, with cables connected.

## **Standard roles allowed to perform the following steps in the programme **

1.	**Administrator**
2.  **Planner**
3.  **Operator**

------------

**Version**: 5.3
**Date**: June 2025

------------

## **Step by Step**

1\. Click "**Operations**" option and then click "**Routes**".

![](/img/Route-calc/routes-calc-01.png)


2\. Click "**Calculate Route**" button to start a route calculation.

![](/img/Route-calc/routes-calc-02.png)



In this form, the following inputs and options are available:

* **Start and End Elements**:
    Two input fields allow the user to select the starting and ending elements of the route by clicking a "Search on the map" button.

* **Route Criteria**:
    The user must choose one of the following route calculation criteria:
    * _Minimum fiber Km_: The path with the minimum physical distance.
    * _Minimum number elements_: The path with the least number of intermediate elements.

* **Cable Restriction Criteria**:
    Users can specify whether:
    * All cables can be considered for the route.
    * Only cables with a minimum number of fibers without service can be used (Cables available fibers).
    This value must be greater than 0 and in this phase less than 10 (1 - 9).

* **Step Elements** _(Optional)_:
    Elements that the user wants the route to explicitly pass through.

* **Avoid Elements** _(Optional)_:
    Elements that the user wants the route to avoid.

![](/img/Route-calc/routes-calc-03.png)

3\. In order to calculate a route you will need to at least select a "start element" and an "end element". To do that click in the "**Search on the map**" button to go into map selection mode to pick the first element of the route.

![](/img/Route-calc/routes-calc-04.png)

4\. Select the element type of the element you want to find and then click the "**Select location**" button. The form will disapear so you can click in the map somewhere close to the area where the first element can be found.

**Note**: Make sure the layer of the element you are looking for is active.

![](/img/Route-calc/routes-calc-05A.png)

5\. After clicking in the map, the Map selection window will open again and the drop down field "_Close elements_" will contain all elements of the selected type or types in the chosen radius from the point clicked in the map. Select the desired element and click the **Add** button.

![](/img/Route-calc/routes-calc-05.png) ![](/img/Route-calc/routes-calc-06.png)

6\. Click the green "**Select**" button at the bottom of the form and you will go back to the "**Calculation Route**" form with the Start element field updated with your selection.

![](/img/Route-calc/routes-calc-07.png)


7\. Repeat steps 4, 5 and 6 to select the end element

![](/img/Route-calc/routes-calc-08.png)


8\. Select the desired calculation criteria, by default it will calculate the route with the minimum number of elements and with no restiction on cables.

![](/img/Route-calc/routes-calc-09.png)

8.1\. If the option _Cables with available fibers_ is selected an input field will appear to define a Minimum number of fibers without service for the calculation.

![](/img/Route-calc/routes-calc-09A.png)

9\. Repeat steps 4, 5 and 6 to select either elements you want the route to go through or to avoid and then click the green "**Calculate**" button.

![](/img/Route-calc/routes-calc-10.png)

The results are shown in two sections:

* **General Route Information**:
Includes summary details such as total length, number of elements, etc.
And a color selector, which modifies the highlight color of the links obtained in the route calculation.

* **Route Elements Table**:
A table listing all the elements included in the calculated route. These elements are also highlighted on the map. The user is redirected to the starting element of the route.

## Additional actions available

* Add to Collection: Add the route elements to a predefined collection. by clicking on the button “Add element collection”
    The top right icon for element selections will illuminate to signal that the elements have been added there.

    ![](/img/Route-calc/routes-calc-11.png)


* Create Another Route: Restart the process to define a new route.

## Route Not Found

If a route cannot be calculated based on the specified criteria and elements:

* The user is returned to the initial form view.

* A yellow background message appears, informing the user that no route could be calculated with the given parameters.

![](/img/Route-calc/routes-calc-12.png)

## Route Error

If there is any other error that precludes APX from calculating the route:

* The user is returned to the initial form view.

* A message appears with a light red background informing the user that a route could not be calculated with the specified parameters.

![](/img/Route-calc/routes-calc-13.png)
