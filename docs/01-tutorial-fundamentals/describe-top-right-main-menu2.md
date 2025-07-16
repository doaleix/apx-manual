---
sidebar_position: 6
---
# Element Selection Menu

This guide will help you understand the **Element Selection Menu**.

## **Prerequisites**
1.	**User ID** and **Password** to access APXGIS programme.
2. **Project** already selected. For this example "**Project-01**".
3. Have the installation param map.feature.elementCollection set to true.


------------

**Version**: 5.3
**Date**: July-2025

------------

## Introduction

This functionality allows the creation of arbitrary lists of elements, services and box2boxes, and highlights them on the map.
These collections can be saved with a name and description, previously saved collections can be loaded, and previously saved ones can be deleted.
When APX starts, a new element collection is instantiated, which becomes the active collection. There is always an active collection; in this way, there is no need to do anything beforehand to start adding elements, as they are always added to the active collection.

## Feature description

The menu shows 3 main parts:

   1. Toolbar with actions.

   2. Active collection data.

   3. Active collection element list.

![](/img/GEN-MEN-02/Element-collection-02.png)

### Toolbar

- **Load** — Button always active. Allows loading a previously saved element collection. If the active collection has unsaved changes, it asks for confirmation before loading another (or the same) collection.

- **Save** — Button only active if there are unsaved changes in a previously saved collection.

- **Save as** — Button always active. Allows saving the active collection with a name and description. If the current collection already exists and is saved with the same name, it will be overwritten. If the name is already used by another collection, an error is shown: “Collection with the same name already exists.”

- **Delete** — Button only active if a collection is loaded. Prompts for confirmation and, if accepted, permanently deletes the collection.

- **New Collection** — Button only active if a collection is loaded or there are unsaved changes in a new collection. If there are unsaved changes (either in a loaded or new collection), a warning appears notifying that changes will be lost, and it asks for confirmation. Sets the active collection to a new, unnamed, and empty state (same as when APX is first launched).

### Active Collection Data

- **Header:**
  - `"New"` — Shown only when it's a new collection that hasn't been saved yet.
  - `"Element Collection"` — Title always displayed on the component.
  - `"With unsaved changes"` — Shown when there are unsaved changes.

- **Name** — Read-only. Only visible if it’s a saved collection, either via “Save As” or after using “Load”.

- **Description** — Read-only. Only visible if it’s a saved collection, either via “Save As” or after using “Load”.

- **Number of elements** — Read-only counter showing the number of elements in the collection and its sub-collections.

### Active Collection Element List

- **Toolbar:**
  - **Highlight all** — Highlights all elements of the collection on the map.
  - **Hide all** — Stops highlighting all elements of the collection on the map.
  - **Remove all elements** — Removes all elements and sub-collections from the active collection (this results in unsaved changes).

- **Element List:**
  - For each element:
    - Element type: **Name** – Description
    - Highlight color selector
    - Center-on-map button
    - Delete button

  - For each sub-collection:
    - Expand/collapse button
      - List of elements with **“Element type: Name – Description”** and center-on-map button
    - Tag showing the sub-collection type (e.g., `Box2Box` or `Service`)
    - Highlight color selector
    - Center-on-map button
    - Delete button

- **Create a Service button** — Appears in the footer of the component only if the collection is composed of elements (no sub-collections), and the element types are valid for creating a service: they are either cables or elements that can serve as cable endpoints. When clicked, the system attempts to create a Service from the elements in the active collection. The P2P Service creation form opens, the route is pre-filled, and a message is shown if any elements could not be included in the service.

![](/img/GEN-MEN-02/Element-collection-09.png)

## **Step by Step**

1\. To pull down the top right menu click on the square shape at the top right of the screen.

![](/img/GEN-MEN-02/Element-collection-01.png)

2\. A previous element collection can be loaded by clicking the folder shaped button.

![](/img/GEN-MEN-02/Element-collection-03.png)

And then selecting the collection from the list:

![](/img/GEN-MEN-02/Element-collection-04.png)

3\. Elements can be added to the current selection from different places. They can either be added one by one from the pop-up in the map:

![](/img/GEN-MEN-02/Element-collection-05.png)

Or in bulk from the route calculator, a box2box route or a P2P service:

![](/img/GEN-MEN-02/Element-collection-06.png) ![](/img/GEN-MEN-02/Element-collection-07.png) ![](/img/GEN-MEN-02/Element-collection-08.png)


4\. Once all desired elements have been added to the selection it can be saved for future reference by pressing the `"Save As"` button.


![](/img/GEN-MEN-02/Element-collection-10.png)


