---
sidebar_position: 1
---

# Create Role

This guide will help you create a **Role** in APX GIS programme.

** Standard roles allowed to perform the following steps in the programme **

1.	**Administrator**

------------

**Version**: 5.3
**Date**: May 2025

------------
## **Step by Step**

1. To access **Roles** menu follow the path: **Administration** &gt **Roles**

![](/img/1.Roles/roles-create01.png)



| | |
|------------|------------|
2. The **“Roles”** window (form) will open showing a list of the default roles and/or any roles previously created.  
- In this example **"admin"**, **"operators"**, **"planner"**, and **"training user"** are roles already created.  
3. To add a new Role click the **“+Add”** button. 

![Roles window](/img/1.Roles/roles-create02.png) 

---

|  |  |
|------------|------------|
4. Once the **“+Add”** button has been clicked, the **“Role”** configuration window will open.  
5. Type the name you wish to assign to the new role.  
6. If you need to assign privileges from another role, click the **“Load”** button. This option is very useful when you want to create a new role very similar to an existing role to which you want to add or delete privileges.  
7. The **“Set”** action button is disabled when creating roles.  
8.1 If you need to set this new role in B2B routes, select the box. This behavior will take place when the **“Apply”** button is clicked (does not work retroactively).  
8.2 If a single sign-on is integrated, this checkbox will appear to define a role as default when the application needs to create a new user with external credentials.

 ![Roles window](/img/1.Roles/roles-create03.png)

---

|  |  |
|------------|------------|
9. The resources section lists the privileges for which access is enabled (**true**) or disabled (**false**).  

These privileges are stored in the new role.  

For this example, when resource **"activity"** was clicked, three options were listed:  
- **activity_get: true** – allows the user with this role to perform this resource.  
- **activity_get: false** – denies the user with this role from performing this resource.  
- **activity_get: undefined** – resource allowed, unless the user has another role that does not allow the resource. 

![Roles window](/img/1.Roles/roles-create04.png) 

---

|  |  |
|------------|------------|
- Each **resource group** will have one or more resources, and for each resource three options are considered:  
  - **true** – allow user with this role to perform this resource.  
  - **false** – deny user with this role from performing this resource.  
  - **undefined** – resource allowed, unless the user has another role that has the resource restricted.  
- Once all the resources are set, click the **“Apply”** button. 

![Roles window](/img/1.Roles/roles-create05.png) 


In the situation where the same resource is assigned in two different roles and both roles are assigned to the same user, 
the programme logic will be as follows:


![](/img/1.Roles/roles-create06.png)

## Main Menu privileges

A list of **interface options** is displayed in the role form to manage the visualization privileges. Options can be either set to **true** or **false** (true by default). These privileges are restrictive, meaning that if a user has a set of **'n'** roles where at least one has the menu privilege set to false, the user will not be able to see the option. Moreover, if a parent option is restricted, all the child options will not be displayed even if they have the privilege set to **true**.

![](/img/1.Roles/roles-create07.png)