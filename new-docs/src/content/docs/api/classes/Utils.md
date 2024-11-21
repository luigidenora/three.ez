---
editUrl: false
next: false
prev: false
title: "Utils"
---

A utility class providing helper methods for various operations.

## Constructors

### new Utils()

> **new Utils**(): [`Utils`](/three.ez/api/classes/utils/)

#### Returns

[`Utils`](/three.ez/api/classes/utils/)

## Methods

### computeBoundingSphereChildren()

> `static` **computeBoundingSphereChildren**(`target`): `void`

Computes bounding spheres for child objects within the specified Object3D hierarchy.

#### Parameters

• **target**: `Object3D`

The root Object3D from which to start computing bounding spheres for children.

#### Returns

`void`

#### Defined in

[utils/Utils.ts:45](https://github.com/luigidenora/three.ez/blob/57bd50835d7b63a4eed7f77bf46f98834d85a05c/src/utils/Utils.ts#L45)

***

### getNodes()

> `static` **getNodes**(`target`): [`Nodes`](/three.ez/api/type-aliases/nodes/)

Retrieves a map of objects in the scene graph (Object3D) starting from a root object.
Each object is mapped using its unique name as the key in the resulting object.

#### Parameters

• **target**: `Object3D`

The root object to begin generating the object map from.

#### Returns

[`Nodes`](/three.ez/api/type-aliases/nodes/)

An object containing objects mapped by their names.

#### Defined in

[utils/Utils.ts:60](https://github.com/luigidenora/three.ez/blob/57bd50835d7b63a4eed7f77bf46f98834d85a05c/src/utils/Utils.ts#L60)

***

### getSceneIntersection()

> `static` **getSceneIntersection**(`ray`, `camera`, `distance`): `Vector3`

Calculates the intersection point of a ray with a plane in world coordinates.

#### Parameters

• **ray**: `Ray`

The ray to intersect with the plane.

• **camera**: `Camera`

The camera used as a reference for the plane's orientation.

• **distance**: `number`

The distance from the camera to the plane.

#### Returns

`Vector3`

The intersection point as Vector3.

#### Defined in

[utils/Utils.ts:23](https://github.com/luigidenora/three.ez/blob/57bd50835d7b63a4eed7f77bf46f98834d85a05c/src/utils/Utils.ts#L23)

***

### setChildrenDragTarget()

> `static` **setChildrenDragTarget**(`target`, `dragTarget`): `void`

Set for all children of the target, the draggable flag to true and a dragTarget.

#### Parameters

• **target**: `Object3D`

The Object3D whose children you want to enable as draggable elements.
  *

• **dragTarget**: `Object3D`

The Object3D that will act as the drag target for the children.

#### Returns

`void`

#### Defined in

[utils/Utils.ts:34](https://github.com/luigidenora/three.ez/blob/57bd50835d7b63a4eed7f77bf46f98834d85a05c/src/utils/Utils.ts#L34)
