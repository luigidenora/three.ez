---
editUrl: false
next: false
prev: false
title: "MaterialExtPrototype"
---

Represents the prototype for extended Material functionality.

## Methods

### tween()

> **tween**\<`T`\>(`id`?): [`Tween`](/three.ez/api/classes/tween/)\<`T`\>

Initiates a Tween animation for the material.

#### Type Parameters

• **T** *extends* [`MaterialExtPrototype`](/three.ez/api/interfaces/materialextprototype/)

The type of the target.

#### Parameters

• **id?**: `string`

Unique identifier. If you start a new tween, the old one with the same id (if specified) will be stopped.

#### Returns

[`Tween`](/three.ez/api/classes/tween/)\<`T`\>

A Tween instance for further configuration.

#### Defined in

[patch/Material.ts:14](https://github.com/luigidenora/three.ez/blob/57bd50835d7b63a4eed7f77bf46f98834d85a05c/src/patch/Material.ts#L14)
