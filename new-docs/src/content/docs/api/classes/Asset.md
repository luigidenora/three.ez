---
editUrl: false
next: false
prev: false
title: "Asset"
---

The Asset class is a manager for loading and handling resources in a scene.

## Constructors

### new Asset()

> **new Asset**(): [`Asset`](/three.ez/api/classes/asset/)

#### Returns

[`Asset`](/three.ez/api/classes/asset/)

## Properties

### onError()

> `static` **onError**: (`error`) => `void`

Default callback function for handling errors during resource loading.
This function is called with an `error` object in case of loading errors.

#### Parameters

• **error**: `unknown`

#### Returns

`void`

#### Defined in

[utils/Asset.ts:63](https://github.com/luigidenora/three.ez/blob/57bd50835d7b63a4eed7f77bf46f98834d85a05c/src/utils/Asset.ts#L63)

***

### onProgress()

> `static` **onProgress**: (`ratio`) => `void`

Default callback function for reporting progress during resource loading.
This function is called with a ratio (0 to 1) to indicate the loading progress.

#### Parameters

• **ratio**: `number`

#### Returns

`void`

#### Defined in

[utils/Asset.ts:58](https://github.com/luigidenora/three.ez/blob/57bd50835d7b63a4eed7f77bf46f98834d85a05c/src/utils/Asset.ts#L58)

## Methods

### get()

#### get(path)

> `static` **get**\<`T`\>(`path`): `T`

Get a previously loaded result object for a specific path.

##### Type Parameters

• **T**

##### Parameters

• **path**: `string`

The path of the resource.

##### Returns

`T`

A previously loaded result object.

##### Defined in

[utils/Asset.ts:73](https://github.com/luigidenora/three.ez/blob/57bd50835d7b63a4eed7f77bf46f98834d85a05c/src/utils/Asset.ts#L73)

#### get(path)

> `static` **get**\<`T`\>(...`path`): `T`[]

Get a list of previously loaded result objects for a series of specific paths.

##### Type Parameters

• **T**

##### Parameters

• ...**path**: `string`[]

An array of resource paths.

##### Returns

`T`[]

An array of previously loaded result objects.

##### Defined in

[utils/Asset.ts:79](https://github.com/luigidenora/three.ez/blob/57bd50835d7b63a4eed7f77bf46f98834d85a05c/src/utils/Asset.ts#L79)

***

### getLoader()

> `static` **getLoader**\<`T`\>(`loaderType`): `T`

Get a specific loader based on the resource type.

#### Type Parameters

• **T** *extends* `Loader`

#### Parameters

• **loaderType**

The desired loader type.

#### Returns

`T`

The loader associated with the resource type.

#### Defined in

[utils/Asset.ts:95](https://github.com/luigidenora/three.ez/blob/57bd50835d7b63a4eed7f77bf46f98834d85a05c/src/utils/Asset.ts#L95)

***

### load()

> `static` **load**\<`T`\>(`loaderType`, `path`, `onProgress`?, `onError`?): `Promise`\<`T`\>

Load a resource using a specified loader type and path.

#### Type Parameters

• **T**

#### Parameters

• **loaderType**: `any`

The type of loader to use for loading the resource.

• **path**: `string`

The path to the resource to be loaded.

• **onProgress?**

(optional) A callback function to report loading progress with a ProgressEvent.

• **onError?**

#### Returns

`Promise`\<`T`\>

A Promise that resolves with the loaded resource when loading is complete.

#### Defined in

[utils/Asset.ts:109](https://github.com/luigidenora/three.ez/blob/57bd50835d7b63a4eed7f77bf46f98834d85a05c/src/utils/Asset.ts#L109)

***

### loadAll()

> `static` **loadAll**(`config`, ...`resources`): `Promise`\<`void`[]\>

Load all specified resources and return a promise that resolves when all resources are loaded.

#### Parameters

• **config**: [`LoadingConfig`](/three.ez/api/interfaces/loadingconfig/) = `{}`

Configuration for the loading process.

• ...**resources**: [`Resource`](/three.ez/api/interfaces/resource/)[]

An array of resource objects to load.

#### Returns

`Promise`\<`void`[]\>

A promise that resolves when all resources are loaded.

#### Defined in

[utils/Asset.ts:149](https://github.com/luigidenora/three.ez/blob/57bd50835d7b63a4eed7f77bf46f98834d85a05c/src/utils/Asset.ts#L149)

***

### preload()

> `static` **preload**(`loader`, ...`paths`): `void`

Preload resources for future use.

#### Parameters

• **loader**: `any`

The loader type to be used for preloading.

• ...**paths**: (`string` \| [`ResourceConfig`](/three.ez/api/interfaces/resourceconfig/))[]

An array of resource paths or configurations to preload.

#### Returns

`void`

#### Defined in

[utils/Asset.ts:128](https://github.com/luigidenora/three.ez/blob/57bd50835d7b63a4eed7f77bf46f98834d85a05c/src/utils/Asset.ts#L128)

***

### preloadAllPending()

> `static` **preloadAllPending**(`config`): `Promise`\<`void`[]\>

Preload all pending resources and return a promise that resolves when all resources are loaded.

#### Parameters

• **config**: [`LoadingConfig`](/three.ez/api/interfaces/loadingconfig/) = `{}`

Optional configuration for the loading process.

#### Returns

`Promise`\<`void`[]\>

A promise that resolves when all pending resources are loaded.

#### Defined in

[utils/Asset.ts:137](https://github.com/luigidenora/three.ez/blob/57bd50835d7b63a4eed7f77bf46f98834d85a05c/src/utils/Asset.ts#L137)
