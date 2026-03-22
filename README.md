# ☕ chai-css

> A lightweight, class-based CSS utility engine. Add `chai-*` classes to any HTML element — no build step, no config, no bloat.

[![npm version](https://img.shields.io/npm/v/my-chai-css?color=c97d3a&label=npm)](https://www.npmjs.com/package/my-chai-css)


---

## What is chai-css?

chai-css is a JavaScript-powered styling utility. Instead of writing CSS, you add `chai-*` prefixed classes to your HTML and call `initChai()` once. The engine scans the DOM and applies all matching styles directly.

```html
<div class="chai-bg-blue-100 chai-p-6 chai-br-3">
  <h1 class="chai-text-blue-700 chai-ts-12 chai-fw-bold">Hello Chai!</h1>
  <p class="chai-text-gray-500 chai-mt-2">Styled without writing CSS.</p>
</div>
```

---

## Installation

```bash
npm install my-chai-css
```

Or use the CDN directly — no install required:

```
https://cdn.jsdelivr.net/npm/my-chai-css@1.0.0/src/index.js
```

---

## Usage

### HTML (via CDN)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
</head>
<body>

  <div class="chai-bg-blue-100 chai-p-6 chai-br-3">
    <h1 class="chai-text-blue-700 chai-ts-10 chai-fw-bold">Hello Chai!</h1>
    <p class="chai-text-gray-500 chai-mt-2">Styled without writing CSS.</p>
  </div>

  <script type="module">
    import { initChai } from "https://cdn.jsdelivr.net/npm/my-chai-css@1.0.0/src/index.js";
    initChai();
  </script>

</body>
</html>
```

> **Note:** Place the `<script>` tag before `</body>` so the DOM is ready when `initChai()` runs.

---

### React

```jsx
import { useEffect } from "react";
import { initChai } from "my-chai-css";

export default function App() {
  useEffect(() => {
    initChai();
  }, []);

  return (
    <div className="chai-bg-blue-100 chai-p-6 chai-br-3">
      <h1 className="chai-text-blue-700 chai-ts-10 chai-fw-bold">
        Hello Chai!
      </h1>
      <p className="chai-text-gray-500 chai-mt-2">
        Styled with chai-css.
      </p>
    </div>
  );
}
```

> **Tip:** If your content updates dynamically, call `initChai()` again after the DOM updates, or add your state variable to the `useEffect` dependency array.

---

## Reference

### Colors

Apply background, text, or border colors using a color name and shade `(100–900)`.

```html
chai-bg-{color}-{shade}
chai-text-{color}-{shade}
chai-bc-{color}-{shade}
```

**Available colors:** `red` · `blue` · `green` · `yellow` · `pink` · `purple` · `gray` · `black` · `white`

**Shades:** `100` · `200` · `300` · `400` · `500` · `600` · `700` · `800` · `900`

```html
<div class="chai-bg-blue-100 chai-bc-blue-300 chai-bw-1">
  <p class="chai-text-blue-700">Dark blue text</p>
  <p class="chai-text-red-500">Red text</p>
  <p class="chai-text-gray-400">Muted gray text</p>
</div>
```

---

### Spacing

All spacing values are multiplied by `5px`. So `chai-p-4` = `20px` padding.

| Class | Property | Example |
|-------|----------|---------|
| `chai-p-{n}` | padding | `chai-p-4` → 20px |
| `chai-pt-{n}` | padding-top | `chai-pt-2` → 10px |
| `chai-pb-{n}` | padding-bottom | `chai-pb-3` → 15px |
| `chai-pl-{n}` | padding-left | `chai-pl-6` → 30px |
| `chai-pr-{n}` | padding-right | `chai-pr-1` → 5px |
| `chai-m-{n}` | margin | `chai-m-4` → 20px |
| `chai-mt-{n}` | margin-top | `chai-mt-2` → 10px |
| `chai-mb-{n}` | margin-bottom | `chai-mb-8` → 40px |
| `chai-ml-{n}` | margin-left | `chai-ml-3` → 15px |
| `chai-mr-{n}` | margin-right | `chai-mr-5` → 25px |
| `chai-w-{n}` | width | `chai-w-20` → 100px |
| `chai-h-{n}` | height | `chai-h-10` → 50px |

---

### Typography

Font size uses `n × 2px`. Font weight accepts `bold`, `normal`, or `light`.

| Class | Property | Notes |
|-------|----------|-------|
| `chai-ts-{n}` | font-size | `n × 2px` — `chai-ts-10` → 20px |
| `chai-fw-bold` | font-weight | 700 |
| `chai-fw-normal` | font-weight | 400 |
| `chai-fw-light` | font-weight | 300 |
| `chai-lh-{n}` | line-height | `n × 5px` |
| `chai-ls-{n}` | letter-spacing | `n × 5px` |

```html
<h1 class="chai-ts-14 chai-fw-bold chai-lh-3">Big Heading</h1>
<p  class="chai-ts-8  chai-fw-normal chai-ls-1">Body text</p>
<small class="chai-ts-6 chai-fw-light">Caption text</small>
```

---

### Flex & Grid

**Flexbox:**

```html
<div class="chai-flex chai-fd-row chai-jc-between chai-ai-center chai-gap-4">
  <div>Item A</div>
  <div>Item B</div>
</div>
```

**Grid:**

```html
<div class="chai-grid chai-grid-cols-3 chai-gap-4">
  <div class="chai-col-span-2">Wide column</div>
  <div>Narrow column</div>
</div>
```

| Class | Effect |
|-------|--------|
| `chai-flex` | display: flex |
| `chai-fd-row` | flex-direction: row |
| `chai-fd-col` | flex-direction: column |
| `chai-jc-center` | justify-content: center |
| `chai-jc-between` | justify-content: space-between |
| `chai-jc-around` | justify-content: space-around |
| `chai-jc-evenly` | justify-content: space-evenly |
| `chai-ai-center` | align-items: center |
| `chai-ai-start` | align-items: flex-start |
| `chai-ai-end` | align-items: flex-end |
| `chai-grid` | display: grid |
| `chai-grid-cols-{n}` | grid-template-columns: repeat(n, 1fr) |
| `chai-col-span-{n}` | grid-column: span n |
| `chai-gap-{n}` | gap: n × 5px |

---

### Borders & Radius

```html
<div class="chai-bw-1 chai-bs-solid chai-bc-blue-300 chai-br-3">
  Bordered box with rounded corners
</div>
```

| Class | Property | Example |
|-------|----------|---------|
| `chai-br-{n}` | border-radius | `chai-br-4` → 20px |
| `chai-bw-{n}` | border-width | `chai-bw-1` → 5px |
| `chai-bs-solid` | border-style | solid |
| `chai-bc-{color}-{shade}` | border-color | `chai-bc-red-300` |

---

### Transforms

Translate values use `n × 5px`. Scale and rotate use the raw value.

```html
<div class="chai-tx-4">       <!-- translateX(20px) -->
<div class="chai-ty-2">       <!-- translateY(10px) -->
<div class="chai-rotate-45">  <!-- rotate(45deg)    -->
<div class="chai-scale-2">    <!-- scale(2)         -->
```

| Class | Effect |
|-------|--------|
| `chai-tx-{n}` | translateX(n × 5px) |
| `chai-ty-{n}` | translateY(n × 5px) |
| `chai-rotate-{n}` | rotate(n deg) |
| `chai-scale-{n}` | scale(n) |

---

### Hover

Apply color changes on mouse enter using `chai-hover-`.

```html
<!-- background changes to blue-300 on hover -->
<button class="chai-bg-blue-100 chai-hover-bg-blue-300">
  Hover me
</button>

<!-- text color changes to red-500 on hover -->
<p class="chai-text-gray-400 chai-hover-text-red-500">
  Hover text
</p>
```

| Class | Effect |
|-------|--------|
| `chai-hover-bg-{color}-{shade}` | background-color on hover |
| `chai-hover-text-{color}-{shade}` | color on hover |
| `chai-hover-bc-{color}-{shade}` | border-color on hover |

> **Note:** Hover effects are added via JavaScript event listeners, so they work on any HTML element without needing CSS pseudo-classes.

---

## Quick Reference

```
chai-bg-{color}-{shade}        → background color
chai-text-{color}-{shade}      → text color
chai-bc-{color}-{shade}        → border color
chai-p-{n} / chai-m-{n}        → padding / margin (×5px)
chai-ts-{n}                    → font size (×2px)
chai-fw-bold / normal / light  → font weight
chai-flex / chai-fd-col        → flexbox
chai-grid / chai-grid-cols-{n} → grid
chai-br-{n} / chai-bw-{n}      → border radius / width
chai-hover-bg-{color}-{shade}  → hover background
```

---
