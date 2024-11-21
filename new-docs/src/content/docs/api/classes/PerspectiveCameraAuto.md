---
editUrl: false
next: false
prev: false
title: "PerspectiveCameraAuto"
---

Extends the PerspectiveCamera to automatically adjust its aspect ratio on renderer resize.

## Extends

- `unknown`

## Constructors

### new PerspectiveCameraAuto()

> **new PerspectiveCameraAuto**(`fov`?, `near`?, `far`?): [`PerspectiveCameraAuto`](/three.ez/api/classes/perspectivecameraauto/)

#### Parameters

• **fov?**: `number`

Camera frustum vertical field of view in degrees. Default `50`.

• **near?**: `number`

Camera frustum near plane distance. Default `0.1`.

• **far?**: `number`

Camera frustum far plane distance. Default `2000`.

#### Returns

[`PerspectiveCameraAuto`](/three.ez/api/classes/perspectivecameraauto/)

#### Overrides

`PerspectiveCamera.constructor`

#### Defined in

[cameras/PerspectiveCameraAuto.ts:13](https://github.com/luigidenora/three.ez/blob/57bd50835d7b63a4eed7f77bf46f98834d85a05c/src/cameras/PerspectiveCameraAuto.ts#L13)
