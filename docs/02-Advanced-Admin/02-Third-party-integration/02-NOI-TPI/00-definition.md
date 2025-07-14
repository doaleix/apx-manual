---
sidebar_position: 0
---
# Definition

This guide will help you understand **Thid party integrations** with NOI in APX GIS programme.

------------

**Version**: 5.3
**Date**: July 2025

------------
## **Introduction**

This APX system enables integration with OpenReache's transflex API.

Our frontend component allows users to visualise and manage the NOI credentials, with all the required NOI fields and some limitations.
When the integration type is set to NOI the following fields become visible and all of them are required:

* TRANSFLEX URL:
* TRANSFLEX Tokeen:
* DUNS: Organisation unique nine-digit identification number (Data Universal Numbering System).
* Customer email: Organisation email.
* Agent email: NOI responsible agent email fallback.
* Agent name: NOI responsible agent name fallback.
* Agent telephone: NOI responsible agent's telephone number.

![](/img/Third-party-integrations/thirdPI-screens16.png)

**Note**: On NOIs, the API and transflex token take the exact format used in the config files password/transflex_password. The format is `<client_key>:<client_secret>`, since our backend already processes and creates the base64 string of this password.