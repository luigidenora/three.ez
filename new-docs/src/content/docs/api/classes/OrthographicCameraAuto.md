---
editUrl: false
next: false
prev: false
title: "OrthographicCameraAuto"
---

Extends the OrthographicCamera to automatically resize based on a fixed width or height dimension.

## Extends

- `unknown`

## Constructors

### new OrthographicCameraAuto()

> **new OrthographicCameraAuto**(`size`, `fixedWidth`, `near`?, `far`?): [`OrthographicCameraAuto`](/three.ez/api/classes/orthographiccameraauto/)

#### Parameters

• **size**: `number` = `2`

Fixed width or height dimension based on the 'fixedWidth' property. Default `2`.

• **fixedWidth**: `boolean` = `true`

If true, the 'size' property will refer to the width. If not, to the height. Default `true`.

• **near?**: `number`

Camera frustum near plane. Default `0.1`.

• **far?**: `number`

Camera frustum far plane. Default `2000`.

#### Returns

[`OrthographicCameraAuto`](/three.ez/api/classes/orthographiccameraauto/)

#### Overrides

`OrthographicCamera.constructor`

#### Defined in

[cameras/OrthographicCameraAuto.ts:36](https://github.com/luigidenora/three.ez/blob/57bd50835d7b63a4eed7f77bf46f98834d85a05c/src/cameras/OrthographicCameraAuto.ts#L36)

## Accessors

### fixedWidth

#### Get Signature

> **get** **fixedWidth**(): `boolean`

Determines whether the 'size' property refers to the width (true) or height (false).

##### Returns

`boolean`

#### Set Signature

> **set** **fixedWidth**(`value`): `void`

##### Parameters

• **value**: `boolean`

##### Returns

`void`

#### Defined in

[cameras/OrthographicCameraAuto.ts:24](https://github.com/luigidenora/three.ez/blob/57bd50835d7b63a4eed7f77bf46f98834d85a05c/src/cameras/OrthographicCameraAuto.ts#L24)

***

### size

#### Get Signature

> **get** **size**(): `number`

Gets or sets the fixed width or height dimension based on the 'fixedWidth' property.

##### Returns

`number`

#### Set Signature

> **set** **size**(`value`): `void`

##### Parameters

• **value**: `number`

##### Returns

`void`

#### Defined in

[cameras/OrthographicCameraAuto.ts:15](https://github.com/luigidenora/three.ez/blob/57bd50835d7b63a4eed7f77bf46f98834d85a05c/src/cameras/OrthographicCameraAuto.ts#L15)
