---
editUrl: false
next: false
prev: false
title: "InstancedMesh2"
---

Extends the InstancedMesh class to provide individual management of each instance, similar to an Object3D.

:::caution[Deprecated]
This API is no longer supported and may be removed in a future release.
:::

## Extends

- `unknown`

## Constructors

### new InstancedMesh2()

> **new InstancedMesh2**(`geometry`, `material`, `count`, `singleInstanceType`, `animate`, `color`?): [`InstancedMesh2`](/three.ez/api/classes/instancedmesh2/)

#### Parameters

• **geometry**: `BufferGeometry`

The geometry for the instanced mesh.

• **material**: `Material`

The material to apply to the instanced mesh.

• **count**: `number`

The number of instances to create.

• **singleInstanceType**: *typeof* [`InstancedMeshEntity`](/three.ez/api/classes/instancedmeshentity/)

The type of individual instance to create.

• **animate**: `boolean` = `false`

A flag indicating whether the 'animate' event will be triggered for each instance (optional, default: false).

• **color?**: `ColorRepresentation`

The default color to apply to each instance (optional).

#### Returns

[`InstancedMesh2`](/three.ez/api/classes/instancedmesh2/)

#### Overrides

`InstancedMesh.constructor`

#### Defined in

[instancedMesh/InstancedMesh2.ts:66](https://github.com/luigidenora/three.ez/blob/57bd50835d7b63a4eed7f77bf46f98834d85a05c/src/instancedMesh/InstancedMesh2.ts#L66)

## Properties

### ~~instances~~

> **instances**: [`InstancedMeshEntity`](/three.ez/api/classes/instancedmeshentity/)[] = `[]`

An array storing individual InstancedMeshEntity instances associated with this InstancedMesh2.
Each element represents a separate instance that can be managed individually.

#### Defined in

[instancedMesh/InstancedMesh2.ts:26](https://github.com/luigidenora/three.ez/blob/57bd50835d7b63a4eed7f77bf46f98834d85a05c/src/instancedMesh/InstancedMesh2.ts#L26)

***

### ~~isInstancedMesh2~~

> **isInstancedMesh2**: `boolean` = `true`

A flag indicating that this is an instance of InstancedMesh2.

#### Defined in

[instancedMesh/InstancedMesh2.ts:21](https://github.com/luigidenora/three.ez/blob/57bd50835d7b63a4eed7f77bf46f98834d85a05c/src/instancedMesh/InstancedMesh2.ts#L21)

## Accessors

### ~~clickingInstance~~

#### Get Signature

> **get** **clickingInstance**(): [`InstancedMeshEntity`](/three.ez/api/classes/instancedmeshentity/)

Gets the currently clicking instance.

##### Returns

[`InstancedMeshEntity`](/three.ez/api/classes/instancedmeshentity/)

#### Defined in

[instancedMesh/InstancedMesh2.ts:51](https://github.com/luigidenora/three.ez/blob/57bd50835d7b63a4eed7f77bf46f98834d85a05c/src/instancedMesh/InstancedMesh2.ts#L51)

***

### ~~draggingInstance~~

#### Get Signature

> **get** **draggingInstance**(): [`InstancedMeshEntity`](/three.ez/api/classes/instancedmeshentity/)

Gets the currently dragging instance.

##### Returns

[`InstancedMeshEntity`](/three.ez/api/classes/instancedmeshentity/)

#### Defined in

[instancedMesh/InstancedMesh2.ts:56](https://github.com/luigidenora/three.ez/blob/57bd50835d7b63a4eed7f77bf46f98834d85a05c/src/instancedMesh/InstancedMesh2.ts#L56)

***

### ~~focusedInstance~~

#### Get Signature

> **get** **focusedInstance**(): [`InstancedMeshEntity`](/three.ez/api/classes/instancedmeshentity/)

Gets the currently focused instance.

##### Returns

[`InstancedMeshEntity`](/three.ez/api/classes/instancedmeshentity/)

#### Defined in

[instancedMesh/InstancedMesh2.ts:46](https://github.com/luigidenora/three.ez/blob/57bd50835d7b63a4eed7f77bf46f98834d85a05c/src/instancedMesh/InstancedMesh2.ts#L46)

***

### ~~hoveredInstance~~

#### Get Signature

> **get** **hoveredInstance**(): [`InstancedMeshEntity`](/three.ez/api/classes/instancedmeshentity/)

Gets the currently hovered instance.

##### Returns

[`InstancedMeshEntity`](/three.ez/api/classes/instancedmeshentity/)

#### Defined in

[instancedMesh/InstancedMesh2.ts:41](https://github.com/luigidenora/three.ez/blob/57bd50835d7b63a4eed7f77bf46f98834d85a05c/src/instancedMesh/InstancedMesh2.ts#L41)

## Methods

### ~~focus()~~

> **focus**(`target`?): `void`

Set the focus to the specified instance, if focus is enabled for the InstancedMesh2, or clears the focus if no target is provided.

#### Parameters

• **target?**: [`InstancedMeshEntity`](/three.ez/api/classes/instancedmeshentity/)

Optional. The instance to focus on. If not provided, the focus is cleared.

#### Returns

`void`

#### Defined in

[instancedMesh/InstancedMesh2.ts:101](https://github.com/luigidenora/three.ez/blob/57bd50835d7b63a4eed7f77bf46f98834d85a05c/src/instancedMesh/InstancedMesh2.ts#L101)
