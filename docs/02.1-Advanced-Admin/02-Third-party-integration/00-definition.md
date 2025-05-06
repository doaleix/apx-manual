---
sidebar_position: 0
---
# Definition

This guide will help you understand **Thid party integrations** with APX GIS programme.

------------

**Version**: 5.3
**Date**: April 2025

------------
## **Introduction**

This APX system enables integration with external APIs to synchronise information on devices, subscribers, and alarms. This integration streamlines real-time management and monitoring, allowing users to configure API calls by defining endpoints, headers, and parameters based on their needs.

## **Data modeling**

APX structures information for three primary entities. Each subscriber may have multiple devices located at different residences. Therefore, the following identifiers are required:

* **Unique property identifier**: e.g., UPRN in the UK or cadastral reference in Spain.

* **Unique device identifier**: Corresponding to its serial number.

* **Subscriber identifier**: This can be an internal ID or an external code defined by the source system. The external code of the subscribers is imported into the APX system as the code to identify them.