---
editUrl: false
next: false
prev: false
title: "Omitype"
---

> **Omitype**\<`T`, `U`\>: `{ [P in keyof T as T[P] extends U ? never : P]: T[P] }`

## Type Parameters

• **T**

• **U**

## Defined in

[src/tweening/Actions.ts:9](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/tweening/Actions.ts#L9)