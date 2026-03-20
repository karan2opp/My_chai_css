import { applyChaiStyles } from "./engine.js";

let observer = null;

export function initChai(root = document) {
  applyChaiStyles(root);

  observer = new MutationObserver(() => {
    applyChaiStyles(root);
  });

  observer.observe(root.body || root, {
    childList: true,
    subtree: true
  });
}

export function destroyChai() {
  if (observer) observer.disconnect();
}



export { applyChaiStyles };