---
title: Why bread rises
author: The Quorum examples
theme: midnight           # a preset: try editorial, bold, paper, studio, signal, terminal
transition: morph         # titles with the same {#name} glide between slides
reactions: 👏 🤯 🍞 ❤️
phone-welcome: Welcome! *Bread questions* are coming.
phone-thanks: Thanks for baking with us.
duration: 15
footer: Why bread rises · {section} | {n} / {total}
---

<!-- layout: title -->
<!-- footer: off -->

# Why bread rises {#title}

A short talk about yeast, gas and gluten. With your phone.

::: join Scan to join
:::

---

<!-- layout: agenda -->

## Today {#title}

---

<!-- layout: section -->
<!-- section: Ingredients, 4 -->

# What goes in

---

## Four ingredients {#title}

::: cards {.steps}
### Flour {icon=wheat}
Proteins that become gluten.

+++

### Water {icon=droplet}
Wakes up the enzymes.

+++

### Yeast {icon=sparkles}
A living fungus that makes gas.

+++

### Salt {icon=gem}
Slows the yeast, adds taste.
:::

---

<!-- layout: split -->

## Yeast eats sugar

![A bowl of rising dough](images/dough.svg)

It turns sugar into **carbon dioxide** and alcohol.

--

The gas gets trapped in a web of *gluten*, and the dough grows.

---

::: poll {#guess .wide chart=donut reveal=spotlight} What makes the holes in bread?
- Air you knead in
- [x] Gas from the yeast
- Steam from the water

Yeast gas makes most of them. Steam helps them grow in the oven.
:::

---

<!-- layout: section -->
<!-- section: History, 5 -->

# A little history

---

## From Egypt to sliced bread

::: timeline {.steps}
- Around 3000 BC: Egyptians bake leavened bread
- 1857: Pasteur publishes his work on fermentation
- 1928: sliced bread goes on sale in Missouri
- 1961: the Chorleywood process speeds up baking
:::

---

::: estimate {#pasteur chart=beeswarm} Pasteur on fermentation: which year?
answer: 1857
min: 1500
max: 2025
format: year

Pasteur, "Mémoire sur la fermentation appelée lactique", 1857.
:::

---

<!-- layout: quote -->

> Bread is the king of the table, and all else is merely the court.

A saying, often quoted by bakers.

---

<!-- layout: section -->
<!-- section: In the kitchen, 6 -->

# In the kitchen

---

## One loaf, step by step

::: steps
- Mix: flour, water, yeast, salt
- Knead: ten minutes, until smooth
- Prove: until doubled in size
- Bake: hot oven, steam at first
:::

---

## Where the time goes

::: chart column {unit=min title="Minutes for each step of our recipe"}
Mix: 10
Knead: 10
First rise: 90
Shape: 10
Second rise: 60
Bake: 35
:::

---

::: kpis
- 215 min: from flour to bread
- 4: ingredients
- 2: rises
:::

---

## Timing the rise, in code

```js {lines=1-2|4-6}
const start = Date.now();
const doubled = (v) => v >= 2 * startVolume;

while (!doubled(volume())) {
  await wait(minutes(10));
}
```

--

The first range shows first; the next click moves the highlight.

---

<!-- layout: compare -->

## Fresh or sliced?

::: columns
### Fresh
Crisp crust, best on the day.

+++

### Sliced
Lasts longer, ready for toast.
:::

---

<!-- layout: full -->

![A wheat field at sunset](images/field.svg)

## It starts in a field

A grain of wheat is mostly starch, the sugar store that yeast feeds on.

---

<!-- layout: grid -->

## Three loaves

![A small loaf](images/loaf-1.svg)

![A medium loaf](images/loaf-2.svg)

![A large loaf](images/loaf-3.svg)

---

<!-- layout: statement -->

## Good bread is mostly *patience*.

---

<!-- layout: center -->
<!-- section: Questions, 3 -->

::: questions {chart=wall}
:::

---

<!-- layout: closing -->

# Thank you {#title}

Now go and bake something. :icon[croissant]
