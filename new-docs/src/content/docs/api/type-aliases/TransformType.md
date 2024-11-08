---
editUrl: false
next: false
prev: false
title: "TransformType"
---

> **TransformType**\<`T`, `U`, `V`\>: \{ \[P in keyof T\]: T\[P\] extends U ? T\[P\] \| V : T\[P\] \}

## Type Parameters

• **T**

• **U**

• **V**

## Defined in

[src/tweening/Actions.ts:11](https://github.com/agargaro/three.ez/blob/b06e30e89a1cb80df2de9df7c48590de59a134ce/src/tweening/Actions.ts#L11)