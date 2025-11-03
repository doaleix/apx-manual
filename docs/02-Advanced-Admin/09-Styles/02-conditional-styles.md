---
sidebar_position: 2
---

# Conditional Styles

In APX GIS, it is possible to select different styles for the same type of element. In this case, the application will use one style or the other when certain conditions are met.

------------

**Version**: 5.4
**Date**: October 2025

------------

## Direct Conditional Styles

All conditional styles are managed from the screen of each element type **Administration > Element types**

![](/img/downloads/01-create-element-type-node_2.jpeg)

In this example we will look at a splicebox but all conditional styles work the same way for any element type.

To manage conditional styles go to the "**Map options**" tab:

![](/img/9.Styles/cond-styles01.png)

A table will be displayed showing a row for each theme and the following collumns:

* [Style](#style)
* [S. with elements](#s-with-elements)
* [S. inside elements](#s-inside-element)
* [S. alerted](#s-alerted)

In all cases a new style can be created on the spot by typing a new name and clicking the pencil icon.

![](/img/9.Styles/cond-styles05.png)

Please refer to the previous section to learn how to create a new <u>[map style](01-create-style.md)</u>

### Style

This is the style that the element will take in normal conditions or if no other style is set.
To input a style just click in the cell and type the name of the style and hit the enter key.

![](/img/9.Styles/cond-styles02.png)

If the name of the style is correct the descriptive icon of the style will show up.

![](/img/9.Styles/cond-styles03.png)

It is possible that the map style does not have a descriptive icon, in that case, the default icon of a yellow square will be used.

![](/img/9.Styles/cond-styles04.png)

### S. with elements

The first condition that will be checked is if the element has other elements inside.
Type a map style in this cell just as described above.

![](/img/9.Styles/cond-styles06.png)

If an element of this type has elements inside, will be drawn in this style instead of the first column.

In this case a central node with elements inside will be displayed with the map style _"cpd_cpd_with_elements"_ instead of the style _"cpd"_

As an example, following the styles used so far this is how a cpd would look like empty:

![](/img/9.Styles/cond-styles07.png)

And as soon as you put an element inside like a Joint for instance, the style will change to the following:

![](/img/9.Styles/cond-styles08.png)

### S. inside element

As expected there is the reversed conditional style for the times the element is inside other elements.

It works the same way, if the element is found inside another element will take the style definded here however, a usual practice is to use the keyword "**hidden**"

"**Hidden**" is not a map style per se, but when used in this situation will make the program not draw the element while still being there.

In the previous example this is the case of the joint we added to the central node. It wasn't drawn when we created it because it has the keyword "**hidden**" in the column **S. inside element**

![](/img/9.Styles/cond-styles09.png)

### S. alerted

Some elements can have the status alerted. If that's the case, they will take the map style described in this cell.

## Custom conditional styles

In APX it is also possible to have a variety of conditions to display the same element type with diferent styles for each of the previous conditions described.

The custom conditional styles  are the following:

* [By Status](#by-status)
* [By Ufield](#by-ufield)
* [By Field](#by-field)
* [Custom function](#custom-function)

To use this custom conditions type the "@" symbol and then hit the pencil button.

![](/img/9.Styles/cond-styles10.png)

A new screen will appear, click the dropdown menu to choose one of the following.

![](/img/9.Styles/cond-styles11.png)

### By Status

Selecting the "By Status" option allows to have an element type that changes style according to the element status.
Click the "**add**" button as many times as key-style pairs you want to have. Then type the "_code_" of the status under the "**Key**" column followed by the style that the element should have when it has that status.

![](/img/9.Styles/cond-styles12.png)

In this case, Central Nodes will be yellow when they have the status "Planned", orange when they have the status "Installed, light green when they have the status "Tested" and dark green when they have the status "Live". If it doesn't have a status, or another status other than the previously mentioned, it will be black.

**Tip**: To make sure you type the correct "_code_" of the status check under Administration &gt Codifiers &gt Element State.

![](/img/9.Styles/cond-styles13.png)

**Note**: Sometimes the "_code_" of a status is not what you see on the dropdown of the element, so make sure you type it correctly.

### By Ufield

When selecting this option, a dropdow will apear with all the custom fields created for this element type.

![](/img/9.Styles/cond-styles14.png)

Select one and as before add as many key-style pairs as required.

Just like before, when selecting a custom field of the type "codifier", make sure the "_code_" is used as the "_key_"

On the other hand, if the custom field has the boolean type, the key will have to be "true", "false" or blank.

Finally, other types of custom fields will have to match exactly it's value with the key, that includes upper/lower case.

### By Field

This option works the same as the previous one but the dropdown will show all APX native fields of the given element type.

### Custom function

In APX it is also possible to have more complex conditions. Please contact our support team if you want a custom function to be created to exactly fit your needs.
