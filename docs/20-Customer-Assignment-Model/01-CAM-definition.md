---
sidebar_position: 1
---
# Introduction

This guide will help you understand the **Customer Assignment Model** of APX GIS.

------------

**Version**: 5.3
**Date**: April 2025

------------

This section is aimed at improving the management of splitterbox clients, giving users greater visibility and control over client connections through a designed edit screen and a set of configuration parameters. In parallel, we will describe how ONTs interact with serviceable nodes, resulting in a more robust and accurate inventory and service relationship management. Finally, the screens — **ONT Import** and **ONT SED** — will be described for user interaction with ONT elements and simple bulk and individual operations.

## Key Concepts


- **Each ONT is assigned to a unique splitterbox client port**  
  Enforces a strict one-to-one relationship.  

- **Support for UPRNs distributed across multiple nodes**  
  A single UPRN can have ONTs serviced by different nodes.

- **Node-level UPRN placeholders**  
  Nodes can register a UPRN as a client without a serviced ONT.

- **ONT relocation to other UPRNs via API & import**  
  Supports ONT moves during import/API operations.

- **Automation of client interactions**  
  Interactions among `clients`, `ports`, and interconnections are automated via trigger logic.

- **ONT activity tracking**  
  All user and system changes related to ONTs are logged with full context.
