---
sidebar_position: 4
---
# Netcore Integration

This guide will help you setup the integration with **Netcore**.

------------

**Version**: 5.3
**Date**: May 2025

------------
## **Introduction**

The NETCORE integration configuration has been tested using the following specifications:

* **API URL**: https://netcore.apfutura.net:5000/api

* **API token**: NETCORE uses a bearer token to authorise the request, which is sent in the “Authorization” header.

![](/img/Third-party-integrations/Netcore01.png)

## Subscriber's functionality

The following fields need to be used to successfully fetch the data.

* Endpoint: /customers/customer-dump
* Headers: 

```
{
  "accept": "application/json",
  "X-API-Key": "{{api_token}}"
}
```

## ONT's functionality

The following fields have to be used to successfully fetch the data.

**DEV NOTE**: We added a duplicate values validator since the endpoint returns repeated ONTs placed in different UPRNs.

* Endpoint: /devices/ont-dump

* Headers: 

```
{
  "accept": "application/json",
  "X-API-Key": "{{api_token}}"
}
```

## Alarm's functionality

The following fields have to be used to successfully fetch the data.

* Endpoint: /alerts-snmp/active

* Headers: 

```
{
  "accept": "application/json",
  "X-API-Key": "{{api_token}}"
}
```
