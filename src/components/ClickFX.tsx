import { useEffect } from "react";

/**
 * Global click effect: spawns a transient "shield burst" DOM node at every click.
 * - Concentric ring + star burst + radial web strands
 * - DOM-only (no React rerenders) for perf
 */
export default function ClickFX() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const onDown = (e: PointerEvent) => {
      const root = document.createElement("div");
      root.className = "click-fx";
      root.style.left = `${e.clientX}px`;
      root.style.top = `${e.clientY}px`;
      root.innerHTML = `
        <span class="cfx-ring"></span>
        <span class="cfx-ring cfx-ring--2"></span>
        <span class="cfx-star"></span>
        ${Array.from({ length: 10 })
          .map((_, i) => `<span class="cfx-strand" style="--a:${(i * 36)}deg"></span>`)
          .join("")}
      `;
      document.body.appendChild(root);
      window.setTimeout(() => root.remove(), 750);
    };

    window.addEventListener("pointerdown", onDown);
    return () => window.removeEventListener("pointerdown", onDown);
  }, []);

  return null;
}
