---
editUrl: false
next: false
prev: false
title: "MotionConfig"
---

Interface for configuring motion animations in a Tween.
You can specify easing, callback functions, and progress tracking functions.

## Type Parameters

• **T** = `any`

The type of the target object being tweened.

## Properties

### easing?

> `optional` **easing**: [`Easing`](/three.ez/api/type-aliases/easing/)

The easing function to control the animation's progression.

#### Defined in

[tweening/Actions.ts:24](https://github.com/luigidenora/three.ez/blob/57bd50835d7b63a4eed7f77bf46f98834d85a05c/src/tweening/Actions.ts#L24)

***

### onComplete()?

> `optional` **onComplete**: (`target`) => `void`

A callback function to execute when the animation completes.

#### Parameters

• **target**: `T`

The target object that was tweened.

#### Returns

`void`

#### Defined in

[tweening/Actions.ts:29](https://github.com/luigidenora/three.ez/blob/57bd50835d7b63a4eed7f77bf46f98834d85a05c/src/tweening/Actions.ts#L29)

***

### onProgress()?

> `optional` **onProgress**: (`target`, `key`, `start`, `end`, `alpha`) => `boolean` \| `void`

A callback function to be executed before each property is updated.

#### Parameters

• **target**: `T`

The target object that is being tweened.

• **key**: `string`

The key or property being animated.

• **start**: `any`

The initial value of the animated property.

• **end**: `any`

The final value of the animated property.

• **alpha**: `number`

The current animation progress as a normalized value (0 to 1).

#### Returns

`boolean` \| `void`

If `false`, will not assign a new value to the property.

#### Defined in

[tweening/Actions.ts:49](https://github.com/luigidenora/three.ez/blob/57bd50835d7b63a4eed7f77bf46f98834d85a05c/src/tweening/Actions.ts#L49)

***

### onStart()?

> `optional` **onStart**: (`target`) => `void`

A callback function to execute when the animation starts.

#### Parameters

• **target**: `T`

The target object that is being tweened.

#### Returns

`void`

#### Defined in

[tweening/Actions.ts:34](https://github.com/luigidenora/three.ez/blob/57bd50835d7b63a4eed7f77bf46f98834d85a05c/src/tweening/Actions.ts#L34)

***

### onUpdate()?

> `optional` **onUpdate**: (`target`) => `void`

A callback function to be executed after each property has been updated.

#### Parameters

• **target**: `T`

The target object that is being tweened.

#### Returns

`void`

#### Defined in

[tweening/Actions.ts:39](https://github.com/luigidenora/three.ez/blob/57bd50835d7b63a4eed7f77bf46f98834d85a05c/src/tweening/Actions.ts#L39)
