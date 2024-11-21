---
editUrl: false
next: false
prev: false
title: "MiscEvents"
---

Represents miscellaneous events. These events do not propagate to parents.

## Properties

### afteranimate

> **afteranimate**: [`AnimateEvent`](/three.ez/api/interfaces/animateevent/)

Event triggered every frame, after 'animate'. Usually used if you want to operate after the animation is computed.

#### Defined in

[events/Events.ts:35](https://github.com/luigidenora/three.ez/blob/57bd50835d7b63a4eed7f77bf46f98834d85a05c/src/events/Events.ts#L35)

***

### animate

> **animate**: [`AnimateEvent`](/three.ez/api/interfaces/animateevent/)

Event triggered every frame. Used to animate objects.

#### Defined in

[events/Events.ts:33](https://github.com/luigidenora/three.ez/blob/57bd50835d7b63a4eed7f77bf46f98834d85a05c/src/events/Events.ts#L33)

***

### beforeanimate

> **beforeanimate**: [`AnimateEvent`](/three.ez/api/interfaces/animateevent/)

Event triggered every frame, before 'animate'. Usually used to prepare object animations.

#### Defined in

[events/Events.ts:31](https://github.com/luigidenora/three.ez/blob/57bd50835d7b63a4eed7f77bf46f98834d85a05c/src/events/Events.ts#L31)

***

### viewportresize

> **viewportresize**: [`ViewportResizeEvent`](/three.ez/api/interfaces/viewportresizeevent/)

Event triggered on first render and every time an object is rendered with a different viewport size from the previous one.

#### Defined in

[events/Events.ts:29](https://github.com/luigidenora/three.ez/blob/57bd50835d7b63a4eed7f77bf46f98834d85a05c/src/events/Events.ts#L29)
