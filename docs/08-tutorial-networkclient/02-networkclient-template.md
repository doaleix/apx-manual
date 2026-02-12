---
sidebar_position: 2
---

# Networkclient template

This guide will help you understand **networkclient templates** in the programme.

**Standard roles allowed to perform the following steps in the programme**

1.	**Administrator**
2.  **Planner**

------------

**Version**: 5.6
**Date**: February-2026

------------

## Introduction


## Generic Templates

Generic templates are designed to be reusable across **any NetworkClient type**. They are not bound to a specific NetworkClient type and can be applied broadly wherever needed.

## Specific Templates

Templates can also be created and explicitly assigned to a **specific NetworkClient type**. Once a template is created and associated with a NetworkClient type, **the NetworkClient type cannot be modified afterward**, ensuring data consistency and preventing mismatches between templates and port configurations.

### Port Configuration

When a template is assigned to a specific NetworkClient type, an additional section appears at the bottom of the form corresponding to the **ports supported by that NetworkClient type**.

* The user can specify the **number of ports** they want to configure.


* Based on this number, the system dynamically generates input fields.


* Each input field corresponds to:


  * A specific **NetworkClient port type**


  * A fixed port index


* In these inputs, the user can define the **label** that should be assigned to each individual port.

This mechanism allows precise control over port labeling, tailored to both the type and the position of each port.

![](/img/downloads/netcli-template01.png)

## Predefined Visual Model

After creating a **NetworkClient Type**, the user has the ability to define a **predefined visual template**, as a **predefined visual model**.

This configuration allows administrators to select a default visual template for a given NetworkClient type. As a result:

  * When a new NetworkClient of that type is created,


  * The predefined visual model is **automatically preselected** in the NetworkClient creation form.


This significantly streamlines the creation process and ensures visual consistency across NetworkClients of the same type, without requiring manual selection each time.

![](/img/downloads/netcli-template02.png)


