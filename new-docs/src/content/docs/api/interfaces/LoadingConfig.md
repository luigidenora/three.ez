---
editUrl: false
next: false
prev: false
title: "LoadingConfig"
---

Configuration options for resource loading.

## Properties

### onError()?

> `optional` **onError**: (`error`) => `void`

A callback function for handling errors during resource loading.
This function is called with an `error` object in case of loading errors.

#### Parameters

• **error**: `unknown`

#### Returns

`void`

#### Defined in

[utils/Asset.ts:16](https://github.com/luigidenora/three.ez/blob/57bd50835d7b63a4eed7f77bf46f98834d85a05c/src/utils/Asset.ts#L16)

***

### onProgress()?

> `optional` **onProgress**: (`ratio`) => `void`

A callback function for reporting progress during resource loading.
This function is called with a ratio (0 to 1) to indicate the loading progress.

#### Parameters

• **ratio**: `number`

#### Returns

`void`

#### Defined in

[utils/Asset.ts:11](https://github.com/luigidenora/three.ez/blob/57bd50835d7b63a4eed7f77bf46f98834d85a05c/src/utils/Asset.ts#L11)
