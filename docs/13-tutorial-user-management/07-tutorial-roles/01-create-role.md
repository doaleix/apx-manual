---
sidebar_position: 1
---

# Create Role

This guide will help you create a **Role** in APX GIS programme.

## **Standard roles allowed to perform the following steps in the programme **

1.	**Administrator**

------------

**Version**: 5.3
**Date**: March 2025

------------
## **Step by Step**

1. To access **Roles** menu follow the path: **Administration** &gt **Roles**

![](/img/1.Roles/roles-create01.png)

<table>
  <tr>
    <td class="secondary-td">
        <p>2. The “<b>Roles</b>” window ( form ) will open showing a list of the default roles and/or any roles previously created.</p>
        <p>In this example "admin", "operators", "planner" and "training user" are roles already created.</p>      
        <p>3. To add a new Role click “<b>+Add</b>>” button.</p>
    </td>
    <td class="main-td">
      <img src="/img/1.Roles/roles-create02.png" alt="Roles window" width="300"/>
    </td>
  </tr>
</table>


<table>
  <tr>
    <td class="secondary-td">
        <ol start="4">
            <li>
               Once the <strong>“+Add”</strong> button has been clicked, the <strong>“Role”</strong> configuration window will open.
            </li>
            <li>
               Type the name you wish to assign to the new role.
            </li>
            <li>
               If you need to assign privileges from another role, click <strong>“Load”</strong> button. This option is very useful when you want to create a new role very similar to an existing role to which you want to add or delete privileges.
            </li>
            <li>
               <strong>“Set”</strong> action button is not used for new roles; it is used for updating existing roles. This button will take effect immediately once clicked.
            </li>
            <li>
               If you need to set this new role in B2B routes, select the box. This behavior will take place when <strong>“Apply”</strong> button is clicked (does not work retroactively).
            </li>
         </ol>
    </td>
    <td class="main-td">
      <img src="/img/1.Roles/roles-create03.png" alt="Roles window" width="300"/>
    </td>
  </tr>
</table>

<table>
  <tr>
      <td class="secondary-td">
         <ol start="9">
            <li>
               The resources section lists the privileges for which access is enabled (<strong>true</strong>) or disabled (<strong>false</strong>).
            </li>
         </ol>
         <p>These privileges are stored in the new role.</p>
         <p>For this example, when resource "activity" was clicked, 3 options were listed:</p>
         <ul>
            <li>
               <strong>activity_get: true</strong> – will allow user with this role to perform this resource.
            </li>
            <li>
               <strong>activity_get: false</strong> – will deny user with this role to perform this resource.
            </li>
            <li>
               <strong>activity_get: undefined</strong> – resource allowed, unless the user has another role that does not allow the resource.
            </li>
         </ul>
      </td>
    <td class="main-td">
      <img src="/img/1.Roles/roles-create04.png" alt="Roles window" width="300"/>
    </td>
  </tr>
</table>
<table>
  <tr>
      <td class="secondary-td">
         <ol start="10">
            <li>
               Each <strong>resource  group</strong> will have 1 or more resources and for each resource 3 options are considered:
               <ul>
                  <li>
                     <strong>true</strong> – allow user with this role to perform this resource. 
                  </li>
                  <li>
                     <strong>false</strong> – will deny user with this role to perform  this resouce.
                  </li>
                  <li>
                     <strong>undefined</strong> – resource allowed, unless the user has another role that has the resource rerestricted.
                  </li>
               </ul>
            </li>
            <li>
               Once all the resources are set, click “<strong>Apply</strong>” button.
            </li>
         </ol>
      </td>
    <td class="main-td">
      <img src="/img/1.Roles/roles-create05.png" alt="Roles window" width="300"/>
    </td>
  </tr>
</table>

In the situation where the same resource is assigned in two different roles and both roles are assigned to the same user, 
the programme logic will be as follows:


![](/img/1.Roles/roles-create06.png)

## Main Menu privileges

A list of **interface options** is displayed in the role form to manage the visualization privileges. Options can be either set to **true** or **false** (true by default). These privileges are restrictive meaning that if a user has a set of n roles where at least one has the menu privilege set to false, the user will not be able to see the option. Moreover, if a parent option is restricted, all the child options will not be displayed even if they have the privilege set to **true**.

![](/img/1.Roles/roles-create07.png)