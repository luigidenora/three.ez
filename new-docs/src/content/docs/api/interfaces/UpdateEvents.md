---
editUrl: false
next: false
prev: false
title: "UpdateEvents"
---

Represents events related to updates. These events do not propagate to parents.

## Properties

### enabledchange

> **enabledchange**: [`PropertyChangeEvent`](/three.ez/api/interfaces/propertychangeevent/)\<`boolean`\>

Event triggered when the enabledState of the object changes (either its own or the parent's `enabled` property).

#### Defined in

[events/Events.ts:19](https://github.com/luigidenora/three.ez/blob/57bd50835d7b63a4eed7f77bf46f98834d85a05c/src/events/Events.ts#L19)

***

### positionchange

> **positionchange**: `never`

Event triggered when the position of the object changes.

#### Defined in

[events/Events.ts:13](https://github.com/luigidenora/three.ez/blob/57bd50835d7b63a4eed7f77bf46f98834d85a05c/src/events/Events.ts#L13)

***

### rotationchange

> **rotationchange**: `never`

Event triggered when the rotation of the object changes.

#### Defined in

[events/Events.ts:17](https://github.com/luigidenora/three.ez/blob/57bd50835d7b63a4eed7f77bf46f98834d85a05c/src/events/Events.ts#L17)

***

### scalechange

> **scalechange**: `never`

Event triggered when the scale of the object changes.

#### Defined in

[events/Events.ts:15](https://github.com/luigidenora/three.ez/blob/57bd50835d7b63a4eed7f77bf46f98834d85a05c/src/events/Events.ts#L15)

***

### visiblechange

> **visiblechange**: [`PropertyChangeEvent`](/three.ez/api/interfaces/propertychangeevent/)\<`boolean`\>

Event triggered when the visibilityState of the object changes (either its own or the parent's `visible` property).

#### Defined in

[events/Events.ts:21](https://github.com/luigidenora/three.ez/blob/57bd50835d7b63a4eed7f77bf46f98834d85a05c/src/events/Events.ts#L21)
