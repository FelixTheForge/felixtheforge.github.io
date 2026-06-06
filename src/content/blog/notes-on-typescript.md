---
title: "Notes on TypeScript"
date: "2026-04-12"
description: "After three years of daily TypeScript, here's what I actually think about it."
tags: ["typescript", "programming"]
cover: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80"
---

TypeScript is now old enough that the initial arguments about it have settled. The debates of 2018 — *do types even help?* — feel distant. Most serious JavaScript projects use it. The question has shifted from *whether* to *how*.

Here are the things I've actually come to believe after years of daily use.

## Types are documentation that runs

The best argument for TypeScript isn't safety — it's communication. When I read a function signature, I know what it expects and what it returns. I don't have to hunt through the implementation or find example call sites.

```typescript
// This tells me everything I need to know
async function fetchPost(id: string): Promise<Post | null>

// This tells me nothing
async function fetchPost(id)
```

The types are a contract, stated explicitly, enforced by the compiler.

## `any` is a code smell, not a feature

Every `any` in a codebase is a hole in the type system. Sometimes holes are necessary — especially at system boundaries. But they should be deliberate and documented, not reflexive.

When I find myself reaching for `any`, I try to pause and ask: what do I *actually* know about this value? Usually the answer is more than "anything."

## Generics are worth learning properly

Generics are where TypeScript gets hard. They're also where it gets genuinely powerful.

```typescript
function first<T>(arr: T[]): T | undefined {
  return arr[0];
}
```

This seems trivial. But the ability to express "this function preserves the type of its input" is exactly the kind of thing that makes a type system useful rather than merely present.

## The escape hatches are load-bearing

`as`, `!`, `any` — these exist because TypeScript is trying to be useful in the real world, where not everything can be typed perfectly. Using them isn't defeat. Using them without thought is.

---

*Still writing TypeScript every day. Still finding things to learn.*
