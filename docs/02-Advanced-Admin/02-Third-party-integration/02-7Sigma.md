---
sidebar_position: 2
---
# 7Sigma Integration

This guide will help you setup the integration with **7Sigma**.

------------

**Version**: 5.3
**Date**: May 2025

------------
## **Introduction**

The 7Sigma integration configuration has been tested using the following specifications:

* API URL: `https://<domain>/api/v1`
* CRM URL: `https://<domain>/api/v1`

![](/img/Third-party-integrations/7sigma01.png)

## Subscriber's functionality

The following fields have been used to successfully retrieve the data. The number of estimated subscribers fetched from the 7Sigma endpoint is around 27000 registers.

* Endpoint: /report/subscribers
* Headers: 

```
{
  "accept": "application/json",
  "X-API-Key": "{{api_token}}"
}
```

* Params:

```
{
  "cursor": 0,
  "result-size": 1000
}
```

## ONT's functionality

The following fields have been used to successfully fetch the data.

The number of estimated ONTs fetched from the 7Sigma endpoint is around 30000 registers.

* Endpoint: /report/sweep/ont

* Headers: 

```
{
  "accept": "application/json",
  "X-API-Key": "{{api_token}}"
}
```

* Params:

```
{
  "limit": 1000,
  "offset": 0
}
```

## Alarm's functionality

The following fields have been used to successfully fetch the data.

* Endpoint: /report/sweep/ont

* Headers: 

```
{
  "accept": "application/json",
  "X-API-Key": "{{api_token}}"
}
```

* Params:

```
{
  "limit": 1000,
  "offset": 0,
  "alarm_state": "severe"
}
```


