// ==========================
// 🎨 COLOR SYSTEM
// ==========================

function generateShadesHSL(h, s) {
  const shades = {};
  for (let i = 1; i <= 9; i++) {
    const lightness = 95 - i * 8;
    shades[i * 100] = `hsl(${h}, ${s}%, ${lightness}%)`;
  }
  return shades;
}

const colors = {
  red: generateShadesHSL(0, 80),
  blue: generateShadesHSL(220, 80),
  green: generateShadesHSL(140, 70),
  yellow: generateShadesHSL(50, 90),
  pink: generateShadesHSL(330, 80),
  purple: generateShadesHSL(270, 75),
  gray: generateShadesHSL(0, 0),
  black: { 500: "#000" },
  white: { 500: "#fff" }
};


// ==========================
// ⚡ SIMPLE HANDLERS
// ==========================

const simpleHandlers = {
  p: (el, v) => el.style.padding = v,
  pt: (el, v) => el.style.paddingTop = v,
  pb: (el, v) => el.style.paddingBottom = v,
  pl: (el, v) => el.style.paddingLeft = v,
  pr: (el, v) => el.style.paddingRight = v,

  m: (el, v) => el.style.margin = v,
  mt: (el, v) => el.style.marginTop = v,
  mb: (el, v) => el.style.marginBottom = v,
  ml: (el, v) => el.style.marginLeft = v,
  mr: (el, v) => el.style.marginRight = v,

  w: (el, v) => el.style.width = v,
  h: (el, v) => el.style.height = v,

  fs: (el, v) => el.style.fontSize = v,
  lh: (el, v) => el.style.lineHeight = v,
  ls: (el, v) => el.style.letterSpacing = v,

  br: (el, v) => el.style.borderRadius = v,
  bw: (el, v) => el.style.borderWidth = v,
  bs: (el, v) => el.style.borderStyle = v,

  gap: (el, v) => el.style.gap = v,

  pos: (el, v) => el.style.position = v,
  top: (el, v) => el.style.top = v,
  left: (el, v) => el.style.left = v,
  right: (el, v) => el.style.right = v,
  bottom: (el, v) => el.style.bottom = v,

  z: (el, v) => el.style.zIndex = v,
  op: (el, v) => el.style.opacity = v / 10
};


// ==========================
// 🎯 FEATURE HANDLERS
// ==========================

function handleColor(el, type, rest) {
  const [color, shadeRaw] = rest;
  const shade = Number(shadeRaw) || 500;

  if (!colors[color]?.[shade]) return;

  if (type === "bg") el.style.backgroundColor = colors[color][shade];
  if (type === "text") el.style.color = colors[color][shade];
  if (type === "bc") el.style.borderColor = colors[color][shade];
}

function handleFlex(el, type, rest) {
  if (type === "flex") el.style.display = "flex";

  if (type === "fd") {
    el.style.flexDirection = rest[0] === "col" ? "column" : "row";
  }

  if (type === "jc") {
    const map = {
      center: "center",
      between: "space-between",
      around: "space-around",
      evenly: "space-evenly"
    };
    el.style.justifyContent = map[rest[0]];
  }

  if (type === "ai") {
    const map = {
      center: "center",
      start: "flex-start",
      end: "flex-end"
    };
    el.style.alignItems = map[rest[0]];
  }
}

function handleGrid(el, type, rest) {
  if (type === "grid") el.style.display = "grid";

  if (type === "grid" && rest[0] === "cols") {
    el.style.gridTemplateColumns = `repeat(${rest[1]}, 1fr)`;
  }

  if (type === "grid" && rest[0] === "rows") {
    el.style.gridTemplateRows = `repeat(${rest[1]}, 1fr)`;
  }

  if (type === "col" && rest[0] === "span") {
    el.style.gridColumn = `span ${rest[1]}`;
  }

  if (type === "row" && rest[0] === "span") {
    el.style.gridRow = `span ${rest[1]}`;
  }
}

function handleTransform(el, type, rest) {
  const val = Number(rest[0]);
  let current = el.style.transform || "";

  if (type === "tx") el.style.transform = `${current} translateX(${val * 5}px)`;
  if (type === "ty") el.style.transform = `${current} translateY(${val * 5}px)`;
  if (type === "scale") el.style.transform = `${current} scale(${val})`;
  if (type === "rotate") el.style.transform = `${current} rotate(${val}deg)`;
}

function handleHover(el, rest) {
  const [type, color, shadeRaw] = rest;
  const shade = Number(shadeRaw) || 500;

  el.addEventListener("mouseenter", () => {
    handleColor(el, type, [color, shade]);
  });
}


// ==========================
// 🚀 CORE ENGINE
// ==========================

export function applyChaiStyles(root = document) {
  const elements = root.querySelectorAll('[class*="chai-"]');

  elements.forEach(el => {
    for (const cls of el.classList) {
      if (!cls.startsWith("chai-")) continue;

      const parts = cls.split("-");
      const [, type, ...rest] = parts;

      if (["bg", "text", "bc"].includes(type)) {
        handleColor(el, type, rest);
        continue;
      }

      if (type === "hover") {
        handleHover(el, rest);
        continue;
      }

      if (["flex", "fd", "jc", "ai"].includes(type)) {
        handleFlex(el, type, rest);
        continue;
      }

      if (["grid", "col", "row"].includes(type)) {
        handleGrid(el, type, rest);
        continue;
      }

      if (["tx", "ty", "scale", "rotate"].includes(type)) {
        handleTransform(el, type, rest);
        continue;
      }

      const raw = rest[0];
      if (!raw) continue;

      const value =
        type === "op" || type === "z"
          ? raw
          : raw * 5 + "px";

      simpleHandlers[type]?.(el, value);
    }
  });
}