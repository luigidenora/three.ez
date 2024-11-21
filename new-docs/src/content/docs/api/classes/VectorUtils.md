---
editUrl: false
next: false
prev: false
title: "VectorUtils"
---

## Constructors

### new VectorUtils()

> **new VectorUtils**(): [`VectorUtils`](/three.ez/api/classes/vectorutils/)

#### Returns

[`VectorUtils`](/three.ez/api/classes/vectorutils/)

## Properties

### DEFAULT\_NORMAL

> `readonly` `static` **DEFAULT\_NORMAL**: `any`

#### Defined in

[utils/VectorUtils.ts:9](https://github.com/luigidenora/three.ez/blob/57bd50835d7b63a4eed7f77bf46f98834d85a05c/src/utils/VectorUtils.ts#L9)

## Methods

### angleSignedByPoints()

> `static` **angleSignedByPoints**(`p1`, `p2`, `center`, `normal`): `number`

#### Parameters

• **p1**: `any`

• **p2**: `any`

• **center**: `any`

• **normal**: `any` = `...`

#### Returns

`number`

#### Defined in

[utils/VectorUtils.ts:90](https://github.com/luigidenora/three.ez/blob/57bd50835d7b63a4eed7f77bf46f98834d85a05c/src/utils/VectorUtils.ts#L90)

***

### angleSignedFromOrigin()

> `static` **angleSignedFromOrigin**(`a`, `b`, `normal`): `number`

#### Parameters

• **a**: `Vector3`

• **b**: `Vector3`

• **normal**: `any` = `...`

#### Returns

`number`

#### Defined in

[utils/VectorUtils.ts:86](https://github.com/luigidenora/three.ez/blob/57bd50835d7b63a4eed7f77bf46f98834d85a05c/src/utils/VectorUtils.ts#L86)

***

### arePointsOnSameSide()

> `static` **arePointsOnSameSide**(`origin`, `dir`, `points`): `boolean`

#### Parameters

• **origin**: `any`

• **dir**: `Vector3`

• **points**: `any`[]

#### Returns

`boolean`

#### Defined in

[utils/VectorUtils.ts:66](https://github.com/luigidenora/three.ez/blob/57bd50835d7b63a4eed7f77bf46f98834d85a05c/src/utils/VectorUtils.ts#L66)

***

### arePointsOnSameSideByPoints()

> `static` **arePointsOnSameSideByPoints**(`p1`, `p2`, `points`, `normal`): `boolean`

#### Parameters

• **p1**: `any`

• **p2**: `any`

• **points**: `any`[]

• **normal**: `any` = `...`

#### Returns

`boolean`

#### Defined in

[utils/VectorUtils.ts:75](https://github.com/luigidenora/three.ez/blob/57bd50835d7b63a4eed7f77bf46f98834d85a05c/src/utils/VectorUtils.ts#L75)

***

### bisector()

> `static` **bisector**(`v1`, `v2`, `target`): `any`

#### Parameters

• **v1**: `Vector3`

• **v2**: `Vector3`

• **target**: `any` = `...`

#### Returns

`any`

#### Defined in

[utils/VectorUtils.ts:55](https://github.com/luigidenora/three.ez/blob/57bd50835d7b63a4eed7f77bf46f98834d85a05c/src/utils/VectorUtils.ts#L55)

***

### bisectorByPoints()

> `static` **bisectorByPoints**(`p1`, `p2`, `center`, `target`): `any`

#### Parameters

• **p1**: `any`

• **p2**: `any`

• **center**: `any`

• **target**: `any` = `...`

#### Returns

`any`

#### Defined in

[utils/VectorUtils.ts:61](https://github.com/luigidenora/three.ez/blob/57bd50835d7b63a4eed7f77bf46f98834d85a05c/src/utils/VectorUtils.ts#L61)

***

### computeSign()

> `static` **computeSign**(`point`, `origin`, `normal`): `number`

#### Parameters

• **point**: `Vector3`

• **origin**: `Vector3`

• **normal**: `Vector3`

#### Returns

`number`

#### Defined in

[utils/VectorUtils.ts:23](https://github.com/luigidenora/three.ez/blob/57bd50835d7b63a4eed7f77bf46f98834d85a05c/src/utils/VectorUtils.ts#L23)

***

### getPositionFromObject3D()

> `static` **getPositionFromObject3D**(`item`): `Vector3`

#### Parameters

• **item**: `any`

#### Returns

`Vector3`

#### Defined in

[utils/VectorUtils.ts:11](https://github.com/luigidenora/three.ez/blob/57bd50835d7b63a4eed7f77bf46f98834d85a05c/src/utils/VectorUtils.ts#L11)

***

### getPositionsFromObject3D()

> `static` **getPositionsFromObject3D**(`items`): `Vector3`[]

#### Parameters

• **items**: `any`[]

#### Returns

`Vector3`[]

#### Defined in

[utils/VectorUtils.ts:15](https://github.com/luigidenora/three.ez/blob/57bd50835d7b63a4eed7f77bf46f98834d85a05c/src/utils/VectorUtils.ts#L15)

***

### haveOppositeDirection()

> `static` **haveOppositeDirection**(`v1`, `v2`, `tolerance`): `boolean`

#### Parameters

• **v1**: `Vector3`

• **v2**: `Vector3`

• **tolerance**: `number` = `...`

#### Returns

`boolean`

#### Defined in

[utils/VectorUtils.ts:31](https://github.com/luigidenora/three.ez/blob/57bd50835d7b63a4eed7f77bf46f98834d85a05c/src/utils/VectorUtils.ts#L31)

***

### haveSameDirection()

> `static` **haveSameDirection**(`v1`, `v2`, `tolerance`): `boolean`

#### Parameters

• **v1**: `Vector3`

• **v2**: `Vector3`

• **tolerance**: `number` = `...`

#### Returns

`boolean`

#### Defined in

[utils/VectorUtils.ts:27](https://github.com/luigidenora/three.ez/blob/57bd50835d7b63a4eed7f77bf46f98834d85a05c/src/utils/VectorUtils.ts#L27)

***

### perpendicular()

> `static` **perpendicular**(`dir`, `target`, `normal`): `any`

#### Parameters

• **dir**: `Vector3`

• **target**: `any` = `...`

• **normal**: `any` = `...`

#### Returns

`any`

#### Defined in

[utils/VectorUtils.ts:35](https://github.com/luigidenora/three.ez/blob/57bd50835d7b63a4eed7f77bf46f98834d85a05c/src/utils/VectorUtils.ts#L35)

***

### perpendicularByPoints()

> `static` **perpendicularByPoints**(`p1`, `p2`, `target`, `normal`): `any`

#### Parameters

• **p1**: `any`

• **p2**: `any`

• **target**: `any` = `...`

• **normal**: `any` = `...`

#### Returns

`any`

#### Defined in

[utils/VectorUtils.ts:44](https://github.com/luigidenora/three.ez/blob/57bd50835d7b63a4eed7f77bf46f98834d85a05c/src/utils/VectorUtils.ts#L44)

***

### perpendicularSigned()

> `static` **perpendicularSigned**(`dir`, `referencePoint`, `target`, `normal`): `any`

#### Parameters

• **dir**: `Vector3`

• **referencePoint**: `Vector3`

• **target**: `any` = `...`

• **normal**: `any` = `...`

#### Returns

`any`

#### Defined in

[utils/VectorUtils.ts:39](https://github.com/luigidenora/three.ez/blob/57bd50835d7b63a4eed7f77bf46f98834d85a05c/src/utils/VectorUtils.ts#L39)

***

### perpendicularSignedByPoints()

> `static` **perpendicularSignedByPoints**(`p1`, `p2`, `refPoint`, `target`, `normal`): `any`

#### Parameters

• **p1**: `any`

• **p2**: `any`

• **refPoint**: `any`

• **target**: `any` = `...`

• **normal**: `any` = `...`

#### Returns

`any`

#### Defined in

[utils/VectorUtils.ts:49](https://github.com/luigidenora/three.ez/blob/57bd50835d7b63a4eed7f77bf46f98834d85a05c/src/utils/VectorUtils.ts#L49)

***

### projectOnLine()

> `static` **projectOnLine**(`point`, `l1`, `l2`, `target`): `Vector3`

#### Parameters

• **point**: `any`

• **l1**: `any`

• **l2**: `any`

• **target**: `any` = `...`

#### Returns

`Vector3`

#### Defined in

[utils/VectorUtils.ts:97](https://github.com/luigidenora/three.ez/blob/57bd50835d7b63a4eed7f77bf46f98834d85a05c/src/utils/VectorUtils.ts#L97)
