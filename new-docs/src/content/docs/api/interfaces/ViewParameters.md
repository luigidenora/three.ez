---
editUrl: false
next: false
prev: false
title: "ViewParameters"
---

Represents a set of parameters for configuring a view.

## Properties

### backgroundAlpha?

> `optional` **backgroundAlpha**: `number`

Background alpha value of the view (optional, default: 1).

#### Defined in

[rendering/RenderView.ts:37](https://github.com/luigidenora/three.ez/blob/57bd50835d7b63a4eed7f77bf46f98834d85a05c/src/rendering/RenderView.ts#L37)

***

### backgroundColor?

> `optional` **backgroundColor**: `ColorRepresentation`

Background color of the view (optional, default: 'black').

#### Defined in

[rendering/RenderView.ts:35](https://github.com/luigidenora/three.ez/blob/57bd50835d7b63a4eed7f77bf46f98834d85a05c/src/rendering/RenderView.ts#L35)

***

### camera

> **camera**: `Camera`

Camera used to view the scene (avoid using the same camera for different scenes).

#### Defined in

[rendering/RenderView.ts:25](https://github.com/luigidenora/three.ez/blob/57bd50835d7b63a4eed7f77bf46f98834d85a05c/src/rendering/RenderView.ts#L25)

***

### composer?

> `optional` **composer**: `EffectComposer`

Effect composer used for post-processing (optional).

#### Defined in

[rendering/RenderView.ts:39](https://github.com/luigidenora/three.ez/blob/57bd50835d7b63a4eed7f77bf46f98834d85a05c/src/rendering/RenderView.ts#L39)

***

### enabled?

> `optional` **enabled**: `boolean`

Determines whether InteractionEvents will be triggered for the view (optional, default: true).

#### Defined in

[rendering/RenderView.ts:33](https://github.com/luigidenora/three.ez/blob/57bd50835d7b63a4eed7f77bf46f98834d85a05c/src/rendering/RenderView.ts#L33)

***

### onAfterRender()?

> `optional` **onAfterRender**: () => `void`

Function called after rendering the view (optional).

#### Returns

`void`

#### Defined in

[rendering/RenderView.ts:43](https://github.com/luigidenora/three.ez/blob/57bd50835d7b63a4eed7f77bf46f98834d85a05c/src/rendering/RenderView.ts#L43)

***

### onBeforeRender()?

> `optional` **onBeforeRender**: () => `void`

Function called before rendering the view (optional).

#### Returns

`void`

#### Defined in

[rendering/RenderView.ts:41](https://github.com/luigidenora/three.ez/blob/57bd50835d7b63a4eed7f77bf46f98834d85a05c/src/rendering/RenderView.ts#L41)

***

### scene

> **scene**: `Scene`

Scene rendered in the view.

#### Defined in

[rendering/RenderView.ts:23](https://github.com/luigidenora/three.ez/blob/57bd50835d7b63a4eed7f77bf46f98834d85a05c/src/rendering/RenderView.ts#L23)

***

### tags?

> `optional` **tags**: `string`[]

Tags of the view (optional).

#### Defined in

[rendering/RenderView.ts:29](https://github.com/luigidenora/three.ez/blob/57bd50835d7b63a4eed7f77bf46f98834d85a05c/src/rendering/RenderView.ts#L29)

***

### viewport?

> `optional` **viewport**: [`Viewport`](/three.ez/api/interfaces/viewport/)

Normalized viewport defining dimensions and position of the view (optional). Values range from 0 to 1.

#### Defined in

[rendering/RenderView.ts:27](https://github.com/luigidenora/three.ez/blob/57bd50835d7b63a4eed7f77bf46f98834d85a05c/src/rendering/RenderView.ts#L27)

***

### visible?

> `optional` **visible**: `boolean`

Determines if the view is visible (optional, default: true).

#### Defined in

[rendering/RenderView.ts:31](https://github.com/luigidenora/three.ez/blob/57bd50835d7b63a4eed7f77bf46f98834d85a05c/src/rendering/RenderView.ts#L31)
