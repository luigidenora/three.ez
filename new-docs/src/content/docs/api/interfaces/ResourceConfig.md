---
editUrl: false
next: false
prev: false
title: "ResourceConfig"
---

An interface representing the configuration of a resource, including its path and optional callbacks.

## Properties

### onLoad()

> **onLoad**: (`result`) => `void`

A callback function to be called when the resource is successfully loaded.

#### Parameters

• **result**: `unknown`

#### Returns

`void`

#### Defined in

[src/utils/Asset.ts:46](https://github.com/agargaro/three.ez/blob/b06e30e89a1cb80df2de9df7c48590de59a134ce/src/utils/Asset.ts#L46)

***

### path

> **path**: `string`

The path to the resource that needs to be loaded.

#### Defined in

[src/utils/Asset.ts:42](https://github.com/agargaro/three.ez/blob/b06e30e89a1cb80df2de9df7c48590de59a134ce/src/utils/Asset.ts#L42)