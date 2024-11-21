---
editUrl: false
next: false
prev: false
title: "MainParameters"
---

Configuration parameters for initializing the Main class.

## Properties

### animate()?

> `optional` **animate**: (`delta`, `total`) => `void`

Callback function executed for each frame.

#### Parameters

• **delta**: `number`

• **total**: `number`

#### Returns

`void`

#### Defined in

[core/Main.ts:33](https://github.com/luigidenora/three.ez/blob/57bd50835d7b63a4eed7f77bf46f98834d85a05c/src/core/Main.ts#L33)

***

### backgroundAlpha?

> `optional` **backgroundAlpha**: `number`

Default background alpha (transparency) value (default: 1).

#### Defined in

[core/Main.ts:31](https://github.com/luigidenora/three.ez/blob/57bd50835d7b63a4eed7f77bf46f98834d85a05c/src/core/Main.ts#L31)

***

### backgroundColor?

> `optional` **backgroundColor**: `ColorRepresentation`

Default background color (default: 'black').

#### Defined in

[core/Main.ts:29](https://github.com/luigidenora/three.ez/blob/57bd50835d7b63a4eed7f77bf46f98834d85a05c/src/core/Main.ts#L29)

***

### disableContextMenu?

> `optional` **disableContextMenu**: `boolean`

Disable the context menu on right-click (default: true).

#### Defined in

[core/Main.ts:27](https://github.com/luigidenora/three.ez/blob/57bd50835d7b63a4eed7f77bf46f98834d85a05c/src/core/Main.ts#L27)

***

### enableCursor?

> `optional` **enableCursor**: `boolean`

Enable cursor handling in the application (default: true).

#### Defined in

[core/Main.ts:37](https://github.com/luigidenora/three.ez/blob/57bd50835d7b63a4eed7f77bf46f98834d85a05c/src/core/Main.ts#L37)

***

### fullscreen?

> `optional` **fullscreen**: `boolean`

Enable full-screen mode and automatic canvas resizing (default: true).

#### Defined in

[core/Main.ts:23](https://github.com/luigidenora/three.ez/blob/57bd50835d7b63a4eed7f77bf46f98834d85a05c/src/core/Main.ts#L23)

***

### multitouch?

> `optional` **multitouch**: `boolean`

Enable multitouch interactions (default: false).

#### Defined in

[core/Main.ts:39](https://github.com/luigidenora/three.ez/blob/57bd50835d7b63a4eed7f77bf46f98834d85a05c/src/core/Main.ts#L39)

***

### renderer?

> `optional` **renderer**: `WebGLRenderer`

#### Defined in

[core/Main.ts:41](https://github.com/luigidenora/three.ez/blob/57bd50835d7b63a4eed7f77bf46f98834d85a05c/src/core/Main.ts#L41)

***

### rendererParameters?

> `optional` **rendererParameters**: `WebGLRendererParameters`

Configuration parameters for the WebGLRenderer. Ignored if renderer is specified.

#### Defined in

[core/Main.ts:35](https://github.com/luigidenora/three.ez/blob/57bd50835d7b63a4eed7f77bf46f98834d85a05c/src/core/Main.ts#L35)

***

### showStats?

> `optional` **showStats**: `boolean`

Display performance statistics (default: true).

#### Defined in

[core/Main.ts:25](https://github.com/luigidenora/three.ez/blob/57bd50835d7b63a4eed7f77bf46f98834d85a05c/src/core/Main.ts#L25)
