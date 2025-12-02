---
sidebar_position: 1
---

# Manage User

This guide will help you manage a **User** in the programme.

**Standard roles allowed to perform the following steps in the programme**

1.	**Administrator**

------------

**Version**: 5.3
**Date**: May 2025

------------
## **Step by Step**

1. To creat or update a user follow the path: 
**Administration** &gt **User management** 

![](/img/2.Users/UsersUpdate1.png)

### **Create a user**

2. To create a new user simply click the "**+Add**" button.

![](/img/2.Users/UsersCreate3.png)

3. All fields exept the <i>"Operator"</i> are mandatory to create a User.

![](/img/2.Users/UsersCreate4.png)

4. Make sure the checkbox <i>"Send an email with the password"</i> is marked before clicking the Apply button if you want the credentials to be sent to the new user.

### **Update a user**

2. Select the user to be updated from the user list. In this example user “**Flavia Idun**” was selected. 

![](/img/2.Users/UsersUpdate2.png)

### **User form**

3. **“User”** window ( form ) will open in order to allow changing any of the fields:

![](/img/2.Users/UsersUpdate3.png)

a. **Full name**

b. **User/Mail**

c. **Roles**

d. **Operator**

e. **Login**. When a user is created, a Login is assigned to that user. 
* One user can have one or several Logins assigned. This is useful when there are several people using the same User ID, allowing to have a record of what each one does in the programme. 
* For each Login:

    * "**Can edit username/email**" is a boolean field visually represented by a tick or a cross. If editing is allowed, users can modify their full name and email. If not, the input fields will be disabled, and the Apply button will be hidden.
    * "**last login**" it is a timestamp field displaying the last time someone using that login entered APX.
    * "**last logout**" it is a timestamp field displaying the last time someone using that login exited APX.
    * "**last activity**" it is a timestamp field displaying the last time someone using that login performed a trackable action in APX.

![](/img/2.Users/UsersUpdate4.png)

f. **Projects**
    
* [ Toggle ] = Desselect all

* [Select All]
    
**Note1**: If the user has been created automatically via OpenID Connect the credentials will be ReadOnly and can't be modified in APX. See <u>[Sing in chapter](../../../01-tutorial-fundamentals/sign-in.md#introduction)</u> for more information about OIDC.

![](/img/2.Users/UsersUpdate5.png)

**Note2**: If the user has been created automatically via the API token management there will be no login associated to it.

![](/img/2.Users/UsersUpdate6.png)