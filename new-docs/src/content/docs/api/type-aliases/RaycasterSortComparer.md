---
editUrl: false
next: false
prev: false
title: "RaycasterSortComparer"
---

> **RaycasterSortComparer**: (`a`, `b`) => `number`

A custom sorting comparison function used for ordering intersections during raycasting.

## Parameters

• **a**: [`IntersectionExt`](/three.ez/api/interfaces/intersectionext/)

The first intersection to compare.

• **b**: [`IntersectionExt`](/three.ez/api/interfaces/intersectionext/)

The second intersection to compare.

## Returns

`number`

A negative value if `a` should precede `b`, a positive value if `b` should precede `a`, or zero if their order is indeterminate.

## Defined in

[events/RaycasterManager.ts:12](https://github.com/luigidenora/three.ez/blob/57bd50835d7b63a4eed7f77bf46f98834d85a05c/src/events/RaycasterManager.ts#L12)
