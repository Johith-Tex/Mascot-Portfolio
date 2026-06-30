import { a as __toESM } from "../_runtime.mjs";
import { c as require_jsx_runtime, l as require_react } from "../_libs/@react-three/drei+[...].mjs";
import { t as texio_character_default } from "./texio-character-CyFhnXQh.mjs";
import { a as motion, i as useMotionValue, n as useTransform, o as AnimatePresence, r as useScroll, t as useSpring } from "../_libs/framer-motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-B8OyPwsv.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ClientOnly({ children, fallback = null }) {
	const [mounted, setMounted] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => setMounted(true), []);
	if (!mounted) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: fallback });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
/**
* Lightweight superhero cursor:
* - Inner dot tracks pointer with stiff spring
* - Outer ring trails with looser spring (scales up on interactive)
* - No per-frame React state / no SVG trail (perf-safe)
*/
function SpiderCursor() {
	const x = useMotionValue(-100);
	const y = useMotionValue(-100);
	const dotX = useSpring(x, {
		damping: 32,
		stiffness: 700,
		mass: .25
	});
	const dotY = useSpring(y, {
		damping: 32,
		stiffness: 700,
		mass: .25
	});
	const ringX = useSpring(x, {
		damping: 22,
		stiffness: 180,
		mass: .5
	});
	const ringY = useSpring(y, {
		damping: 22,
		stiffness: 180,
		mass: .5
	});
	const [hover, setHover] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (typeof window === "undefined") return;
		const move = (e) => {
			x.set(e.clientX);
			y.set(e.clientY);
		};
		const over = (e) => {
			const el = e.target;
			setHover(!!el?.closest("a, button, [role=button], .web-target, input, textarea, select"));
		};
		window.addEventListener("pointermove", move, { passive: true });
		window.addEventListener("pointerover", over, { passive: true });
		return () => {
			window.removeEventListener("pointermove", move);
			window.removeEventListener("pointerover", over);
		};
	}, [x, y]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		"aria-hidden": true,
		className: "fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2",
		style: {
			x: ringX,
			y: ringY
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			animate: {
				scale: hover ? 1.8 : 1,
				rotate: hover ? 90 : 0
			},
			transition: {
				type: "spring",
				stiffness: 280,
				damping: 22
			},
			className: "w-9 h-9 rounded-full border-[1.5px] relative",
			style: {
				borderColor: "var(--cap-red)",
				boxShadow: "0 0 18px oklch(0.62 0.24 25 / 0.55), inset 0 0 8px oklch(0.62 0.24 25 / 0.35)"
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute top-1/2 left-0 w-full h-px bg-[var(--cap-cream)]/45" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute left-1/2 top-0 h-full w-px bg-[var(--cap-cream)]/45" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute -top-1 left-1/2 -translate-x-1/2 w-px h-2 bg-[var(--cap-gold)]" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute -bottom-1 left-1/2 -translate-x-1/2 w-px h-2 bg-[var(--cap-gold)]" })
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		"aria-hidden": true,
		className: "fixed top-0 left-0 pointer-events-none z-[10000] -translate-x-1/2 -translate-y-1/2",
		style: {
			x: dotX,
			y: dotY
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "w-1.5 h-1.5 rounded-full bg-[var(--cap-cream)]",
			style: { boxShadow: "0 0 8px oklch(0.96 0.02 90 / 0.95), 0 0 14px var(--cap-gold)" }
		})
	})] });
}
/**
* Global click effect: spawns a transient "shield burst" DOM node at every click.
* - Concentric ring + star burst + radial web strands
* - DOM-only (no React rerenders) for perf
*/
function ClickFX() {
	(0, import_react.useEffect)(() => {
		if (typeof window === "undefined") return;
		const onDown = (e) => {
			const root = document.createElement("div");
			root.className = "click-fx";
			root.style.left = `${e.clientX}px`;
			root.style.top = `${e.clientY}px`;
			root.innerHTML = `
        <span class="cfx-ring"></span>
        <span class="cfx-ring cfx-ring--2"></span>
        <span class="cfx-star"></span>
        ${Array.from({ length: 10 }).map((_, i) => `<span class="cfx-strand" style="--a:${i * 36}deg"></span>`).join("")}
      `;
			document.body.appendChild(root);
			window.setTimeout(() => root.remove(), 750);
		};
		window.addEventListener("pointerdown", onDown);
		return () => window.removeEventListener("pointerdown", onDown);
	}, []);
	return null;
}
/**
* Full aurora background — animated blobs, grid, stars, beams, halftone, speedlines, bolts.
* Scroll-responsive: blobs subtly shift on scroll for a living parallax depth effect.
*/
function AuroraBackground() {
	const blobARef = (0, import_react.useRef)(null);
	const blobBRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (typeof window === "undefined") return;
		const onScroll = () => {
			const p = window.scrollY / (document.body.scrollHeight - window.innerHeight);
			if (blobARef.current) blobARef.current.style.transform = `translate(${p * 8}vw, ${p * 5}vh) scale(${1 + p * .15})`;
			if (blobBRef.current) blobBRef.current.style.transform = `translate(${-p * 10}vw, ${p * 8}vh) scale(${1.05 - p * .1})`;
		};
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	const stars = Array.from({ length: 55 }, (_, i) => {
		const seed = i * 137.5 % 100;
		return {
			left: `${seed * 7.3 % 100}%`,
			top: `${seed * 13.1 % 100}%`,
			size: 1 + i % 3,
			delay: `${i % 40 / 10}s`,
			duration: `${3 + i % 4}s`
		};
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"aria-hidden": true,
		className: "fixed inset-0 z-0 pointer-events-none overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0",
				style: { background: "var(--background)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: blobARef,
				className: "aurora-blob aurora-a",
				style: { transition: "transform 0.8s ease-out" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: blobBRef,
				className: "aurora-blob aurora-b",
				style: { transition: "transform 0.8s ease-out" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "aurora-blob aurora-c" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "aurora-blob aurora-d" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 aurora-grid" }),
			stars.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "aurora-star",
				style: {
					left: s.left,
					top: s.top,
					width: s.size,
					height: s.size,
					animationDelay: s.delay,
					animationDuration: s.duration
				}
			}, i)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 aurora-beams" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 aurora-halftone" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 aurora-speedlines" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-0 aurora-bolts",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "aurora-bolt aurora-bolt-1",
						style: { "--r": "8deg" }
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "aurora-bolt aurora-bolt-2",
						style: { "--r": "-6deg" }
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "aurora-bolt aurora-bolt-3",
						style: { "--r": "12deg" }
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 pointer-events-none",
				style: { background: "radial-gradient(ellipse at 50% 0%, transparent 40%, oklch(0.08 0.05 260 / 0.6) 100%)" }
			})
		]
	});
}
var WebContext = (0, import_react.createContext)(() => {});
var useWebPull = () => (0, import_react.useContext)(WebContext);
function WebOverlay({ x, y }) {
	const threads = Array.from({ length: 28 });
	const max = Math.hypot(window.innerWidth, window.innerHeight) * 1.4;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		initial: { opacity: 1 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		transition: { duration: .25 },
		className: "fixed inset-0 pointer-events-none z-[9990]",
		style: { mixBlendMode: "screen" },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			width: "100%",
			height: "100%",
			className: "absolute inset-0",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("radialGradient", {
					id: "webGlow",
					cx: "50%",
					cy: "50%",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: "0%",
							stopColor: "oklch(0.96 0.02 90 / 0.95)"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: "60%",
							stopColor: "oklch(0.96 0.02 90 / 0.4)"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: "100%",
							stopColor: "oklch(0.96 0.02 90 / 0)"
						})
					]
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.circle, {
					cx: x,
					cy: y,
					initial: {
						r: 0,
						opacity: 1
					},
					animate: {
						r: 80,
						opacity: 0
					},
					transition: {
						duration: .5,
						ease: "easeOut"
					},
					fill: "url(#webGlow)"
				}),
				threads.map((_, i) => {
					const a = i / threads.length * Math.PI * 2;
					const ex = x + Math.cos(a) * max;
					const ey = y + Math.sin(a) * max;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.line, {
						x1: x,
						y1: y,
						initial: {
							x2: x,
							y2: y,
							opacity: .9
						},
						animate: {
							x2: ex,
							y2: ey,
							opacity: 0
						},
						transition: {
							duration: .7,
							ease: [
								.16,
								1,
								.3,
								1
							],
							delay: i * .005
						},
						stroke: "oklch(0.96 0.02 90 / 0.85)",
						strokeWidth: "1"
					}, `r${i}`);
				}),
				[
					.25,
					.5,
					.75,
					1
				].map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.circle, {
					cx: x,
					cy: y,
					initial: {
						r: 30 * (i + 1),
						opacity: .6
					},
					animate: {
						r: max * s,
						opacity: 0
					},
					transition: {
						duration: .7,
						ease: "easeOut",
						delay: .05 + i * .04
					},
					fill: "none",
					stroke: "oklch(0.96 0.02 90 / 0.5)",
					strokeWidth: "0.8"
				}, `c${i}`))
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			initial: {
				scaleX: 0,
				transformOrigin: `${x}px ${y}px`
			},
			animate: { scaleX: 1 },
			exit: {
				scaleX: 0,
				transformOrigin: `${window.innerWidth - x}px ${y}px`
			},
			transition: {
				duration: .45,
				ease: [
					.85,
					0,
					.15,
					1
				]
			},
			className: "absolute inset-0 bg-[var(--cap-red)]/15"
		})]
	});
}
function WebTransitionProvider({ children }) {
	const [origin, setOrigin] = (0, import_react.useState)(null);
	const trigger = (0, import_react.useCallback)((action, ev) => {
		if (typeof window === "undefined") {
			action?.();
			return;
		}
		setOrigin({
			x: ev?.clientX ?? window.innerWidth / 2,
			y: ev?.clientY ?? window.innerHeight / 2
		});
		window.setTimeout(() => action?.(), 280);
		window.setTimeout(() => setOrigin(null), 720);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(WebContext.Provider, {
		value: trigger,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: origin && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WebOverlay, {
			x: origin.x,
			y: origin.y
		}) })]
	});
}
/** Helper for anchor-style web navigation. */
function useWebScroll() {
	const trigger = useWebPull();
	return (id, ev) => {
		trigger(() => {
			const el = document.getElementById(id);
			if (el) el.scrollIntoView({
				behavior: "smooth",
				block: "start"
			});
		}, ev ?? null);
	};
}
var HEROES = [
	{
		name: "MY DAD",
		role: "THE FOUNDATION",
		quote: "Before any hero on a screen, he taught me what it means to show up — every single day.",
		accent: "var(--cap-gold)",
		second: "var(--cap-red)",
		glyph: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 100 100",
			className: "w-full h-full",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
					id: "dadG",
					x1: "0",
					x2: "1",
					y1: "0",
					y2: "1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "0%",
						stopColor: "var(--cap-gold)"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "100%",
						stopColor: "var(--cap-red)"
					})]
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "50",
					cy: "50",
					r: "46",
					fill: "url(#dadG)"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "50",
					cy: "50",
					r: "36",
					fill: "oklch(0.12 0.04 280)"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M50 22 L62 38 L78 42 L66 56 L70 74 L50 66 L30 74 L34 56 L22 42 L38 38 Z",
					fill: "var(--cap-gold)"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "50",
					y: "55",
					textAnchor: "middle",
					fontFamily: "Bebas Neue",
					fontSize: "14",
					fill: "oklch(0.12 0.04 280)",
					letterSpacing: "2",
					children: "DAD"
				})
			]
		})
	},
	{
		name: "CAPTAIN AMERICA",
		role: "THE LEADER",
		quote: "Stand for something — even when the world tells you to step aside.",
		accent: "var(--cap-red)",
		second: "var(--cap-blue)",
		glyph: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 100 100",
			className: "w-full h-full",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "50",
					cy: "50",
					r: "46",
					fill: "var(--cap-red)"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "50",
					cy: "50",
					r: "36",
					fill: "var(--cap-cream)"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "50",
					cy: "50",
					r: "26",
					fill: "var(--cap-red)"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "50",
					cy: "50",
					r: "18",
					fill: "var(--cap-blue)"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
					points: "50,35 53.4,46 65,46 55.8,53 59.2,64 50,57 40.8,64 44.2,53 35,46 46.6,46",
					fill: "var(--cap-cream)"
				})
			]
		})
	},
	{
		name: "SPIDER-MAN",
		role: "THE RESPONSIBILITY",
		quote: "Power means nothing without the courage to carry its weight.",
		accent: "var(--spidey-red)",
		second: "var(--spidey-blue)",
		glyph: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 100 100",
			className: "w-full h-full",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "50",
				cy: "50",
				r: "46",
				fill: "var(--spidey-red)"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
				stroke: "oklch(0.12 0.04 270)",
				strokeWidth: "1.2",
				fill: "none",
				children: [Array.from({ length: 12 }).map((_, i) => {
					const a = i / 12 * Math.PI * 2;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
						x1: "50",
						y1: "50",
						x2: 50 + Math.cos(a) * 44,
						y2: 50 + Math.sin(a) * 44
					}, i);
				}), [
					14,
					24,
					34,
					42
				].map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "50",
					cy: "50",
					r
				}, r))]
			})]
		})
	},
	{
		name: "KRATOS",
		role: "THE RECKONING",
		quote: "Be better than the rage you inherit. Build, do not burn.",
		accent: "var(--kratos)",
		second: "oklch(0.20 0.02 30)",
		glyph: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 100 100",
			className: "w-full h-full",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "6",
					y: "6",
					width: "88",
					height: "88",
					fill: "oklch(0.14 0.03 30)"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M50 12 L20 50 L50 88 L80 50 Z",
					fill: "var(--kratos)",
					stroke: "var(--cap-cream)",
					strokeWidth: "2"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M50 28 L34 50 L50 72 L66 50 Z",
					fill: "oklch(0.94 0.04 80)"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "50",
					cy: "50",
					r: "6",
					fill: "var(--kratos)"
				})
			]
		})
	},
	{
		name: "SUPERMAN",
		role: "THE HOPE",
		quote: "Choose hope. Loudly. Even when no one is watching.",
		accent: "var(--superman)",
		second: "var(--cap-gold)",
		glyph: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 100 100",
			className: "w-full h-full",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M50 6 L90 22 L78 80 L50 94 L22 80 L10 22 Z",
					fill: "var(--superman)"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M50 16 L80 28 L70 74 L50 84 L30 74 L20 28 Z",
					fill: "var(--cap-cream)"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M50 24 L72 32 L64 70 L50 78 L36 70 L28 32 Z",
					fill: "var(--cap-red)"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "50",
					y: "60",
					textAnchor: "middle",
					fontFamily: "Bebas Neue",
					fontSize: "36",
					fill: "var(--cap-gold)",
					children: "S"
				})
			]
		})
	}
];
function HeroesGrid() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "heroes",
		className: "relative py-32 px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "font-mono text-xs text-[var(--cap-blue)] mb-3 flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "inline-block w-8 h-px bg-[var(--cap-blue)]" }), "// INSPIRATIONS"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "font-display text-6xl lg:text-7xl",
					children: [
						"THE ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "marvel-title",
							children: "PEOPLE"
						}),
						" THAT SHAPED ME"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 max-w-2xl text-muted-foreground",
					children: "One real-world hero at the start of it all — then a roster of icons that taught me leadership, responsibility, reckoning, and hope."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 grid sm:grid-cols-2 lg:grid-cols-5 gap-5",
					children: HEROES.map((h, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
						initial: {
							opacity: 0,
							y: 30
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: { once: true },
						transition: {
							duration: .6,
							delay: i * .08
						},
						whileHover: {
							y: -8,
							rotateZ: -.4
						},
						className: "web-target relative border border-border bg-surface/70 backdrop-blur clip-corner p-5 overflow-hidden group holo-shimmer neon-border-gold",
						style: { boxShadow: `inset 0 0 0 1px ${h.accent}40` },
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute -top-12 -right-12 w-40 h-40 rounded-full opacity-30 blur-2xl group-hover:opacity-70 transition-opacity",
								style: { background: h.accent }
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute -bottom-16 -left-12 w-44 h-44 rounded-full opacity-0 blur-3xl group-hover:opacity-50 transition-opacity",
								style: { background: h.second }
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative aspect-square mb-4 mx-auto w-24",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute inset-[-8px] rounded-full opacity-40 blur-md",
									style: { background: `radial-gradient(circle, ${h.accent}, transparent 70%)` }
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "relative transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6",
									children: h.glyph
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-mono text-[10px] tracking-widest",
								style: { color: h.accent },
								children: h.role
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-display text-xl mt-1 leading-tight",
								children: h.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-3 text-sm text-muted-foreground italic leading-snug",
								children: [
									"\"",
									h.quote,
									"\""
								]
							})
						]
					}, h.name))
				})
			]
		})
	});
}
var LANG_COLOR = {
	TypeScript: "var(--cap-blue)",
	JavaScript: "var(--cap-gold)",
	Python: "var(--superman)",
	"C++": "var(--cap-red)",
	C: "var(--cap-red)",
	"C#": "var(--accent-purple)",
	Java: "var(--kratos)",
	HTML: "var(--cap-red)",
	CSS: "var(--cap-blue)",
	Shell: "var(--cap-gold)"
};
function GithubProjects() {
	const [repos, setRepos] = (0, import_react.useState)(null);
	const [error, setError] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		let cancelled = false;
		fetch("https://api.github.com/users/Johith-Tex/repos?sort=updated&per_page=100").then((r) => r.ok ? r.json() : Promise.reject(/* @__PURE__ */ new Error(`GitHub ${r.status}`))).then((data) => {
			if (cancelled) return;
			setRepos(data.filter((r) => !r.fork && !r.archived).sort((a, b) => +new Date(b.updated_at) - +new Date(a.updated_at)));
		}).catch((e) => !cancelled && setError(e.message));
		return () => {
			cancelled = true;
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "github",
		className: "relative py-32 px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-end justify-between mb-12 flex-wrap gap-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-mono text-xs text-[var(--accent-purple)] mb-3",
							children: "// LIVE FROM GITHUB"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "font-display text-6xl lg:text-7xl",
							children: ["GITHUB ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "marvel-title",
								children: "REPOSITORIES"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-4 text-muted-foreground max-w-xl",
							children: [
								"Auto-synced from",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "https://github.com/Johith-Tex",
									target: "_blank",
									rel: "noreferrer",
									className: "text-[var(--cap-gold)] hover:underline",
									children: "@Johith-Tex"
								}),
								" ",
								"— every push lands here."
							]
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "https://github.com/Johith-Tex",
						target: "_blank",
						rel: "noreferrer",
						className: "web-target clip-corner border border-[var(--accent-purple)]/60 text-[var(--accent-purple)] font-mono text-xs font-bold px-5 py-2.5 hover:bg-[var(--accent-purple)]/15 transition-all",
						children: "VIEW PROFILE ↗"
					})]
				}),
				error && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border border-[var(--cap-red)]/50 bg-[var(--cap-red)]/10 p-6 clip-corner font-mono text-sm text-[var(--cap-red)]",
					children: [
						"Couldn't reach GitHub right now (",
						error,
						"). Visit",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "https://github.com/Johith-Tex",
							className: "underline",
							children: "github.com/Johith-Tex"
						}),
						"."
					]
				}),
				!repos && !error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-5",
					children: Array.from({ length: 6 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-44 border border-border bg-surface/40 clip-corner animate-pulse" }, i))
				}),
				repos && repos.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-mono text-sm text-muted-foreground",
					children: "No public repositories found."
				}),
				repos && repos.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-5",
					children: repos.slice(0, 12).map((r, i) => {
						const langColor = r.language && LANG_COLOR[r.language] || "var(--cap-cream)";
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.a, {
							href: r.html_url,
							target: "_blank",
							rel: "noreferrer",
							initial: {
								opacity: 0,
								y: 20
							},
							whileInView: {
								opacity: 1,
								y: 0
							},
							viewport: { once: true },
							transition: {
								duration: .5,
								delay: i % 6 * .05
							},
							whileHover: { y: -6 },
							className: "web-target group relative border border-border bg-surface/60 backdrop-blur clip-corner p-5 overflow-hidden flex flex-col",
							style: { boxShadow: `inset 0 0 0 1px ${langColor}30` },
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute -top-16 -right-16 w-44 h-44 rounded-full opacity-20 blur-3xl group-hover:opacity-60 transition-opacity",
									style: { background: langColor }
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative flex items-center justify-between font-mono text-[10px] tracking-widest text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[var(--accent-purple)]",
										children: "▣ REPO"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
										"★ ",
										r.stargazers_count,
										" · ⑂ ",
										r.forks_count
									] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "relative font-display text-2xl mt-3 text-[var(--cap-cream)] group-hover:text-[var(--cap-gold)] transition-colors break-words",
									children: r.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "relative mt-2 text-sm text-muted-foreground line-clamp-3 flex-1",
									children: r.description || "No description provided."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative mt-4 flex items-center justify-between font-mono text-[10px] tracking-widest",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center gap-1.5",
										style: { color: langColor },
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "inline-block w-2 h-2 rounded-full",
											style: {
												background: langColor,
												boxShadow: `0 0 8px ${langColor}`
											}
										}), r.language || "MIXED"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground",
										children: new Date(r.updated_at).toLocaleDateString(void 0, {
											month: "short",
											day: "numeric",
											year: "numeric"
										})
									})]
								})
							]
						}, r.id);
					})
				})
			]
		})
	});
}
/**
* Provides the global scroll progress bar rendered as a fixed right-edge strip.
* Uses Framer Motion's useScroll → transforms scroll 0→1 into height 0→100%.
*/
function ScrollProgressBar() {
	const { scrollYProgress } = useScroll();
	const smoothed = useSpring(scrollYProgress, {
		stiffness: 80,
		damping: 28
	});
	const barRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		return smoothed.on("change", (v) => {
			if (barRef.current) barRef.current.style.height = `${v * 100}%`;
		});
	}, [smoothed]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"aria-hidden": true,
		className: "fixed right-0 top-0 z-50 w-[3px] h-screen",
		style: { background: "oklch(0.18 0.06 260 / 0.5)" },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref: barRef,
			className: "w-full h-0 transition-none",
			style: {
				background: "linear-gradient(180deg, #e62429 0%, #f5f0e8 40%, #1c3b8a 70%, #5eb8e0 100%)",
				boxShadow: "0 0 8px oklch(0.60 0.24 25 / 0.7), 0 0 20px oklch(0.58 0.22 250 / 0.5)"
			}
		})
	});
}
/**
* Infinite horizontal ticker strip — marquee with superhero branding text.
* Pure CSS animation, zero JS overhead.
*/
function Ticker() {
	const ITEMS = [
		"TEXIOVERSE",
		"GAME DEVELOPER",
		"UNREAL ENGINE 5",
		"BLENDER",
		"SOFTWARE ENGINEER",
		"DISCORD BOT DEV",
		"C++",
		"BLUEPRINTS",
		"ACTION RPG",
		"GATE TO OBLIVION",
		"FULL-STACK",
		"3D ARTIST",
		"INDIE DEV"
	];
	const repeated = [
		...ITEMS,
		...ITEMS,
		...ITEMS
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"aria-hidden": true,
		className: "ticker-strip relative overflow-hidden border-y py-3 select-none",
		style: {
			borderColor: "oklch(0.60 0.24 25 / 0.35)",
			background: "linear-gradient(90deg, var(--background) 0%, oklch(0.12 0.06 260 / 0.8) 10%, oklch(0.12 0.06 260 / 0.8) 90%, var(--background) 100%)"
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute left-0 top-0 h-full w-20 z-10 pointer-events-none",
				style: { background: "linear-gradient(90deg, var(--background), transparent)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute right-0 top-0 h-full w-20 z-10 pointer-events-none",
				style: { background: "linear-gradient(270deg, var(--background), transparent)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "ticker-inner flex gap-0 whitespace-nowrap",
				children: repeated.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "ticker-item inline-flex items-center gap-3 px-5 font-mono text-[11px] tracking-[0.3em]",
					style: { color: i % 5 === 1 ? "var(--cap-gold)" : i % 5 === 3 ? "var(--cap-red)" : "var(--muted-foreground)" },
					children: [item, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "inline-block w-1.5 h-1.5 rounded-full",
						style: {
							background: i % 3 === 0 ? "var(--cap-red)" : i % 3 === 1 ? "var(--cap-gold)" : "var(--cap-blue)",
							boxShadow: `0 0 6px ${i % 3 === 0 ? "var(--cap-red)" : i % 3 === 1 ? "var(--cap-gold)" : "var(--cap-blue)"}`
						}
					})]
				}, i))
			})
		]
	});
}
var project_oblivion_default = "/assets/project-oblivion-DDMr4SK_.jpg";
var project_undefined_default = "/assets/project-undefined-ClVVtDEI.jpg";
var project_tx_default = "/assets/project-tx-CE2clHhe.jpg";
var ShieldScene = (0, import_react.lazy)(() => import("./ShieldScene-Dhb33L6y.mjs"));
var NAV = [
	{
		label: "HOME",
		id: "home"
	},
	{
		label: "CHARACTER",
		id: "character"
	},
	{
		label: "PROJECTS",
		id: "projects"
	},
	{
		label: "GITHUB",
		id: "github"
	},
	{
		label: "HEROES",
		id: "heroes"
	},
	{
		label: "DEVLOG",
		id: "devlog"
	},
	{
		label: "HIRE ME",
		id: "hire"
	},
	{
		label: "DISCORD",
		id: "community"
	}
];
var PROJECTS = [
	{
		n: "01",
		status: "IN DEVELOPMENT",
		title: "GATE TO OBLIVION",
		desc: "A mythology-based action RPG with deep branching narratives and mythological combat. Journey through ancient myth and modern chaos.",
		tags: [
			"UNREAL ENGINE",
			"BLUEPRINTS",
			"C++",
			"BLENDER"
		],
		progress: 35,
		img: project_oblivion_default
	},
	{
		n: "02",
		status: "UPCOMING",
		title: "UNDEFINED",
		desc: "Souls-like action in neon-drenched castle ruins. Minimal story, maximum style. Fluid movement and exquisite weapon design.",
		tags: [
			"UNREAL ENGINE",
			"C++",
			"BLUEPRINTS"
		],
		progress: 0,
		img: project_undefined_default
	},
	{
		n: "03",
		status: "UPCOMING",
		title: "PROJECT TX",
		desc: "Procedurally generated survival-exploration game. Base building, uncharted worlds, emergent gameplay in a vast, hostile universe.",
		tags: [
			"UNREAL ENGINE",
			"C++",
			"BLUEPRINTS"
		],
		progress: 0,
		img: project_tx_default
	}
];
var DEVLOG = [
	{
		type: "PROGRESS",
		date: "Jan 14, 2024",
		title: "Gate To Oblivion — Story Development",
		body: "Working on the main storyline. Implementing branching narrative paths based on player choices and mythological lore integration."
	},
	{
		type: "RELEASE",
		date: "Jan 9, 2024",
		title: "New Discord Bot Features",
		body: "Added game announcement channels and automated role assignment. The bot now includes mini-games for community engagement."
	},
	{
		type: "DEVLOG",
		date: "Jan 4, 2024",
		title: "Behind the Scenes: RPG Combat System",
		body: "Developing the turn-based combat system for Gate To Oblivion. Focus on balancing mythological abilities and strategic depth."
	},
	{
		type: "RELEASE",
		date: "Dec 31, 2023",
		title: "Website Redesign Complete",
		body: "Launched the new portfolio website — complete overhaul with split design, character showcase, and dynamic animations."
	}
];
var SERVICES = [
	{
		title: "GAME DEV",
		items: [
			"Unity & Unreal Engine",
			"2D & 3D Game Design",
			"Shader Development",
			"Game Mechanics"
		]
	},
	{
		title: "DISCORD BOTS",
		items: [
			"Custom Discord Bots",
			"Server Management",
			"Game Integration",
			"API Development"
		]
	},
	{
		title: "SOFTWARE",
		items: [
			"Full-Stack Apps",
			"Desktop Software",
			"Automation Tools",
			"System Architecture"
		]
	}
];
function Nav() {
	const webScroll = useWebScroll();
	const onClick = (id) => (e) => {
		e.preventDefault();
		webScroll(id, {
			clientX: e.clientX,
			clientY: e.clientY
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-background/50 border-b border-border/40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6 h-16 flex items-center justify-between",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#home",
					onClick: onClick("home"),
					className: "font-display text-2xl tracking-wider flex items-center gap-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-cap",
							children: "TEX"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-foreground",
							children: ".IO"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "ml-1 inline-block w-1.5 h-5 bg-[var(--cap-gold)] animate-pulse-glow" })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden md:flex items-center gap-6 font-mono text-xs",
					children: NAV.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: `#${n.id}`,
						onClick: onClick(n.id),
						className: "text-muted-foreground hover:text-[var(--cap-gold)] transition-colors",
						children: n.label
					}, n.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#contact",
					onClick: onClick("contact"),
					className: "clip-corner bg-[var(--cap-red)] text-[var(--cap-cream)] font-mono text-xs font-bold px-5 py-2.5 hover:glow-red transition-all",
					children: "CONTACT"
				})
			]
		})
	});
}
function MarvelTitleCard() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		initial: {
			opacity: 0,
			scale: .9
		},
		animate: {
			opacity: 1,
			scale: 1
		},
		transition: {
			duration: .9,
			ease: [
				.16,
				1,
				.3,
				1
			]
		},
		className: "relative inline-block",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3 mb-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-[3px] w-12 bg-[var(--cap-red)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-display text-sm tracking-[0.4em] text-[var(--cap-cream)]",
					children: "PRESENTS"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 -m-8 opacity-60 blur-2xl animate-burst",
					style: { background: "radial-gradient(ellipse at center, #e62429, transparent 60%)" }
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "marvel-title relative text-[clamp(2.5rem,8vw,6rem)] leading-[0.85]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "marvel-title-inner",
						children: "TEXIO"
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 inline-block clip-tag bg-[var(--cap-red)] text-[var(--cap-cream)] font-mono text-xs tracking-[0.3em] px-5 py-2",
				children: "GAME DEVELOPER · SOFTWARE ENGINEER"
			})
		]
	});
}
function Hero() {
	const webScroll = useWebScroll();
	const heroRef = (0, import_react.useRef)(null);
	const { scrollYProgress } = useScroll({
		target: heroRef,
		offset: ["start start", "end start"]
	});
	const textY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
	const opacity = useTransform(scrollYProgress, [0, .8], [1, 0]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		ref: heroRef,
		id: "home",
		className: "relative min-h-screen pt-16 overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClientOnly, {
				fallback: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 flex items-center justify-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-96 h-96 rounded-full bg-[var(--gradient-shield)] opacity-30 animate-pulse" })
				}),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldScene, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 pointer-events-none",
				style: { background: "radial-gradient(ellipse at 30% 50%, rgba(7,5,13,0.88) 0%, rgba(7,5,13,0.58) 38%, rgba(7,5,13,0.18) 68%, rgba(7,5,13,0) 100%)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				style: {
					y: textY,
					opacity
				},
				className: "relative z-10 mx-auto max-w-7xl px-6 pt-16 pb-12 grid lg:grid-cols-2 gap-10 items-center min-h-[calc(100vh-4rem)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MarvelTitleCard, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 12
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .7,
							delay: .4
						},
						className: "mt-10 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#projects",
							onClick: (e) => {
								e.preventDefault();
								webScroll("projects", {
									clientX: e.clientX,
									clientY: e.clientY
								});
							},
							className: "clip-corner bg-[var(--cap-blue)] text-[var(--cap-cream)] font-mono text-sm font-bold px-7 py-3.5 inline-flex items-center gap-3 hover:glow-blue transition-all",
							children: ["VIEW PROJECTS ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"aria-hidden": true,
								children: "→"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#heroes",
							onClick: (e) => {
								e.preventDefault();
								webScroll("heroes", {
									clientX: e.clientX,
									clientY: e.clientY
								});
							},
							className: "clip-corner border border-[var(--cap-gold)] text-[var(--cap-gold)] font-mono text-sm font-bold px-7 py-3.5 inline-flex items-center gap-3 hover:bg-[var(--cap-gold)]/10 transition-all",
							children: "INSPIRATIONS"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: { opacity: 0 },
						animate: { opacity: 1 },
						transition: {
							duration: 1,
							delay: .8
						},
						className: "mt-12 flex gap-10",
						children: [
							{
								n: "2",
								l: "GAMES"
							},
							{
								n: "5",
								l: "YEARS XP"
							},
							{
								n: "100",
								l: "% PASSION"
							}
						].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display text-5xl text-[var(--cap-gold)]",
							children: s.n
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-mono text-[10px] tracking-widest text-muted-foreground mt-1",
							children: s.l
						})] }, s.l))
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative hidden lg:block h-[520px] lg:h-[640px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							x: 30
						},
						animate: {
							opacity: 1,
							x: 0
						},
						transition: {
							duration: .9,
							delay: .8
						},
						className: "absolute top-6 right-2 w-60 bg-surface/80 backdrop-blur-md border border-[var(--cap-gold)]/40 clip-corner p-4 animate-float-y hud-frame",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 font-mono text-[10px] tracking-widest text-[var(--cap-gold)] mb-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-2 h-2 rounded-full bg-[var(--cap-gold)] animate-pulse-glow" }), "MISSION ACTIVE"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-display text-xl",
								children: "GATE TO OBLIVION"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 h-1 bg-secondary overflow-hidden",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-full bg-gradient-to-r from-[var(--cap-red)] to-[var(--cap-gold)] animate-shimmer",
									style: { width: "35%" }
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-2 font-mono text-[10px] tracking-widest text-muted-foreground",
								children: "35% COMPLETE"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							x: 30
						},
						animate: {
							opacity: 1,
							x: 0
						},
						transition: {
							duration: .9,
							delay: 1.2
						},
						className: "absolute bottom-16 right-12 w-52 bg-surface/70 backdrop-blur-md border border-[var(--cap-blue)]/40 clip-corner p-4 animate-float-y",
						style: { animationDelay: "1.5s" },
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-mono text-[10px] tracking-widest text-[var(--cap-blue)] mb-2",
								children: "// STATUS"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 font-mono text-xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-1.5 h-1.5 rounded-full bg-[var(--cap-gold)] animate-pulse-glow" }), "AVAILABLE FOR HIRE"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-2 flex items-center gap-2 font-mono text-xs text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[var(--cap-red)]",
									children: "▸"
								}), " GAME DEV · BOT DEV · SWE"]
							})
						]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: { opacity: 0 },
				animate: { opacity: 1 },
				transition: {
					delay: 2,
					duration: 1
				},
				className: "absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-mono text-[10px] tracking-widest text-muted-foreground",
					children: "SCROLL"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					animate: { y: [
						0,
						8,
						0
					] },
					transition: {
						duration: 1.5,
						repeat: Infinity,
						ease: "easeInOut"
					},
					className: "w-px h-8 bg-gradient-to-b from-[var(--cap-gold)] to-transparent"
				})]
			})
		]
	});
}
function Character() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "section-divider" })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "character",
		className: "relative py-32 px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					x: -20
				},
				whileInView: {
					opacity: 1,
					x: 0
				},
				viewport: { once: true },
				transition: { duration: .5 },
				className: "font-mono text-xs text-[var(--cap-red)] mb-4 flex items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "inline-block w-8 h-px bg-[var(--cap-red)]" }), "// CHARACTER FILE"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid lg:grid-cols-2 gap-16 items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						scale: .95
					},
					whileInView: {
						opacity: 1,
						scale: 1
					},
					viewport: { once: true },
					transition: { duration: .8 },
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -inset-4 bg-gradient-to-br from-[var(--cap-red)]/30 via-[var(--cap-gold)]/15 to-transparent blur-3xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative clip-corner border-2 border-[var(--cap-gold)]/40 overflow-hidden scan-lines hud-frame",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: texio_character_default,
								alt: "TEXIO character render",
								width: 1280,
								height: 1600,
								className: "w-full aspect-[4/5] object-cover"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "scan-beam" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute top-3 left-3 font-mono text-[10px] tracking-widest bg-background/70 backdrop-blur px-2 py-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[var(--cap-red)]",
									children: "●"
								}), " DOSSIER_001"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute bottom-3 right-3 font-mono text-[10px] tracking-widest bg-background/70 backdrop-blur px-2 py-1 text-[var(--cap-gold)]",
								children: "BLENDER · UE5"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute top-3 right-3 font-mono text-[10px] text-[var(--cap-blue)] tracking-widest",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "animate-pulse-glow inline-block w-1.5 h-1.5 rounded-full bg-[var(--cap-blue)] mr-1" }), "LIVE"]
							})
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 24
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					transition: { duration: .8 },
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "font-display text-6xl lg:text-7xl leading-none",
							children: ["MEET ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "marvel-title",
								children: "TEXIO"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-8 text-lg text-muted-foreground leading-relaxed max-w-lg",
							children: "The electrified warrior. Built from scratch in Blender, rigged and animated inside Unreal Engine 5 — protagonist of the entire Texioverse. Lightning-infused blades, a dark trench coat, and glowing purple eyes that pierce through shadow and myth."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 flex flex-wrap gap-2",
							children: [
								"BLENDER",
								"UNREAL ENGINE 5",
								"CUSTOM RIGGING",
								"VFX SHADERS",
								"LIGHTNING SYSTEM"
							].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
								whileHover: {
									scale: 1.05,
									borderColor: "var(--cap-gold)"
								},
								className: "font-mono text-[10px] tracking-widest border border-border px-3 py-1.5 bg-surface/60 neon-border-gold cursor-default",
								children: t
							}, t))
						})
					]
				})]
			})]
		})
	})] });
}
function Projects() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "section-divider" })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "projects",
		className: "relative py-32 px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-end justify-between mb-16 flex-wrap gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 20
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					transition: { duration: .6 },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "font-mono text-xs text-[var(--cap-red)] mb-3 flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "inline-block w-8 h-px bg-[var(--cap-red)]" }), "// MISSION LOG"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "font-display text-6xl lg:text-7xl",
						children: ["MY ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "marvel-title",
							children: "PROJECTS"
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "https://github.com/Johith-Tex",
					target: "_blank",
					rel: "noreferrer",
					className: "font-mono text-xs text-muted-foreground hover:text-[var(--cap-gold)] transition-colors",
					children: "EXPLORE ALL REPOS ON GITHUB →"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-8",
				children: PROJECTS.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
					initial: {
						opacity: 0,
						y: 40
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					transition: {
						duration: .7,
						delay: i * .08,
						ease: [
							.16,
							1,
							.3,
							1
						]
					},
					className: "group grid lg:grid-cols-12 gap-6 items-stretch",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-7 relative overflow-hidden clip-corner border border-border neon-border-red",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: p.img,
								alt: p.title,
								loading: "lazy",
								width: 1600,
								height: 1e3,
								className: "w-full aspect-[16/10] object-cover transition-transform duration-700 group-hover:scale-105"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
								style: { background: "linear-gradient(135deg, transparent 40%, oklch(0.96 0.02 90 / 0.08) 50%, transparent 60%)" }
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute top-4 left-4 font-mono text-[10px] tracking-widest bg-background/70 backdrop-blur px-2.5 py-1 border border-[var(--cap-red)]/50 text-[var(--cap-red)]",
								children: p.status
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-5 bg-surface/60 backdrop-blur border border-border clip-corner p-7 flex flex-col card-3d neon-border-gold",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-baseline justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-7xl text-[var(--cap-red)]/35",
									children: p.n
								}), p.progress > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-mono text-sm text-[var(--cap-gold)]",
									children: [p.progress, "%"]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-4xl mt-2",
								children: p.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-muted-foreground flex-1",
								children: p.desc
							}),
							p.progress > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4 h-1 bg-secondary overflow-hidden rounded-full",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
									className: "h-full bg-gradient-to-r from-[var(--cap-red)] to-[var(--cap-gold)]",
									initial: { width: 0 },
									whileInView: { width: `${p.progress}%` },
									viewport: { once: true },
									transition: {
										duration: 1.2,
										delay: .3,
										ease: "easeOut"
									}
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-5 flex flex-wrap gap-1.5",
								children: p.tags.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-[10px] tracking-widest border border-border/60 px-2 py-1 text-muted-foreground hover:text-[var(--cap-gold)] hover:border-[var(--cap-gold)]/40 transition-colors",
									children: t
								}, t))
							})
						]
					})]
				}, p.n))
			})]
		})
	})] });
}
function Devlog() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "section-divider" })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "devlog",
		className: "relative py-32 px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 20
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					transition: { duration: .6 },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "font-mono text-xs text-[var(--cap-red)] mb-3 flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "inline-block w-8 h-px bg-[var(--cap-red)]" }), "// FIELD JOURNAL"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "font-display text-6xl lg:text-7xl",
						children: ["DEVELOPMENT ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "marvel-title",
							children: "UPDATES"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 flex gap-2 flex-wrap",
					children: [
						"ALL",
						"PROGRESS",
						"RELEASES",
						"DEV LOGS"
					].map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: `web-target font-mono text-xs px-4 py-2 border ${i === 0 ? "border-[var(--cap-gold)] text-[var(--cap-gold)] bg-[var(--cap-gold)]/10" : "border-border text-muted-foreground hover:text-foreground"} transition-colors neon-border-gold`,
						children: f
					}, f))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 relative timeline-connector pl-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-5",
						children: DEVLOG.map((d, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								x: -20
							},
							whileInView: {
								opacity: 1,
								x: 0
							},
							viewport: { once: true },
							transition: {
								duration: .55,
								delay: i * .08,
								ease: [
									.16,
									1,
									.3,
									1
								]
							},
							className: "relative border border-border bg-surface/40 backdrop-blur p-6 clip-corner neon-border-gold",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute -left-[1.85rem] top-7 w-3 h-3 rounded-full border-2 border-[var(--cap-gold)] bg-background",
									style: { boxShadow: "0 0 8px var(--cap-gold)" }
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between font-mono text-[10px] tracking-widest flex-wrap gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: `px-2 py-0.5 ${d.type === "RELEASE" ? "bg-[var(--cap-gold)] text-[var(--cap-blue)]" : d.type === "PROGRESS" ? "bg-[var(--cap-red)] text-[var(--cap-cream)]" : "bg-[var(--cap-blue)] text-[var(--cap-cream)]"}`,
										children: d.type
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground",
										children: d.date
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-4 font-display text-2xl",
									children: d.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm text-muted-foreground",
									children: d.body
								})
							]
						}, d.title))
					})
				})
			]
		})
	})] });
}
var SERVICE_ICONS = [
	"🎮",
	"🤖",
	"💻"
];
function Hire() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "section-divider" })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "hire",
		className: "relative py-32 px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid lg:grid-cols-12 gap-12 items-start",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 30
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					transition: { duration: .7 },
					className: "lg:col-span-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "font-mono text-xs text-[var(--cap-gold)] mb-3 flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-2 h-2 rounded-full bg-[var(--cap-gold)] animate-pulse-glow" }), "// AVAILABLE FOR WORK"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "font-display text-6xl lg:text-7xl leading-none",
							children: [
								"LET'S BUILD",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"SOMETHING",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "marvel-title",
									children: "EPIC."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-8 text-muted-foreground max-w-md",
							children: "Actively seeking opportunities in game development, software engineering, and creative tech. Let's make something unforgettable together."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "lg:col-span-7 grid sm:grid-cols-3 gap-4",
					children: SERVICES.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 30
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: { once: true },
						transition: {
							duration: .55,
							delay: i * .12,
							ease: [
								.16,
								1,
								.3,
								1
							]
						},
						whileHover: { y: -8 },
						className: "border border-border bg-surface/50 backdrop-blur p-6 clip-corner card-3d neon-border-gold",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-3xl mb-3",
								children: SERVICE_ICONS[i]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-display text-2xl text-[var(--cap-gold)]",
								children: s.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-5 space-y-2 text-sm text-muted-foreground",
								children: s.items.map((it) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[var(--cap-red)] mt-1",
											children: "▸"
										}),
										" ",
										it
									]
								}, it))
							})
						]
					}, s.title))
				})]
			})
		})
	})] });
}
function Community() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "community",
		className: "relative py-32 px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "font-mono text-xs text-[var(--cap-red)] mb-3",
				children: "// THE COMMUNITY"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid lg:grid-cols-2 gap-12 items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "font-display text-6xl lg:text-7xl leading-none",
						children: [
							"JOIN THE",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "marvel-title",
								children: "TEXIOVERSE"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-8 text-muted-foreground max-w-md",
						children: "Exclusive dev updates, beta testing, direct access, and a crew of RPG fanatics and indie devs. This is your world too."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 grid grid-cols-2 gap-3 max-w-md",
						children: [
							"Exclusive Updates",
							"Beta Testing Access",
							"Dev Discussions",
							"Community Hub"
						].map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "font-mono text-xs border border-border bg-surface/60 px-3 py-2.5 flex items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[var(--cap-gold)]",
									children: "◇"
								}),
								" ",
								p
							]
						}, p))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "https://discord.gg/FcGq8pjzGt",
						target: "_blank",
						rel: "noreferrer",
						className: "mt-8 inline-flex items-center gap-3 clip-corner bg-[var(--cap-blue)] text-[var(--cap-cream)] font-mono text-sm font-bold px-7 py-3.5 hover:opacity-90 transition-all",
						children: "JOIN TEXIOVERSE →"
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border border-border bg-surface/60 backdrop-blur clip-corner overflow-hidden",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between px-5 py-3 border-b border-border bg-surface-2/60",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "font-display text-xl flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[var(--cap-red)]",
									children: "◈"
								}), " TEXIOVERSE"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-mono text-[10px] tracking-widest text-[var(--cap-gold)] flex items-center gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-1.5 h-1.5 rounded-full bg-[var(--cap-gold)] animate-pulse-glow" }), " LIVE"]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-3 px-5 py-4 border-b border-border text-center",
							children: [
								["ACTIVE", "Community"],
								["24/7", "Chat"],
								["DEVS", "Online"]
							].map(([a, b]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-display text-2xl text-[var(--cap-gold)]",
								children: a
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-mono text-[10px] tracking-widest text-muted-foreground",
								children: b
							})] }, b))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "p-5 space-y-2 font-mono text-sm text-muted-foreground",
							children: [
								"# announcements",
								"# dev-updates",
								"# beta-testing",
								"# general"
							].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "web-target px-3 py-2 hover:bg-surface-2/80 hover:text-[var(--cap-gold)] transition-colors",
								children: c
							}, c))
						})
					]
				})]
			})]
		})
	});
}
function Contact() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		className: "relative py-32 px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-mono text-xs text-[var(--cap-gold)] mb-3",
					children: "// TRANSMIT"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "font-display text-6xl lg:text-7xl",
					children: ["GET IN ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "marvel-title",
						children: "TOUCH"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-16 grid lg:grid-cols-2 gap-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-3xl",
						children: "Let's Build Something Amazing"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 space-y-3 font-mono text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "mailto:johithjr@gmail.com",
								className: "flex items-center gap-3 text-muted-foreground hover:text-[var(--cap-gold)] transition-colors",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[var(--cap-gold)]",
									children: "✉"
								}), " johithjr@gmail.com"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#",
								className: "flex items-center gap-3 text-muted-foreground hover:text-[var(--cap-red)] transition-colors",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[var(--cap-red)]",
									children: "◈"
								}), " @tex.io"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "https://github.com/Johith-Tex",
								target: "_blank",
								rel: "noreferrer",
								className: "flex items-center gap-3 text-muted-foreground hover:text-[var(--cap-cream)] transition-colors",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[var(--cap-cream)]",
									children: "▣"
								}), " Johith-Tex"]
							})
						]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						className: "border border-border bg-surface/50 backdrop-blur p-6 clip-corner space-y-4",
						onSubmit: (e) => e.preventDefault(),
						children: [
							[{
								l: "YOUR NAME",
								t: "text",
								p: "Enter your name"
							}, {
								l: "EMAIL",
								t: "email",
								p: "you@domain.com"
							}].map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "font-mono text-[10px] tracking-widest text-muted-foreground",
								children: f.l
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: f.t,
								placeholder: f.p,
								className: "mt-1.5 w-full bg-background/60 border border-border px-4 py-3 font-sans text-sm focus:border-[var(--cap-gold)] focus:outline-none transition-colors"
							})] }, f.l)),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "font-mono text-[10px] tracking-widest text-muted-foreground",
								children: "PROJECT TYPE"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
								className: "mt-1.5 w-full bg-background/60 border border-border px-4 py-3 font-sans text-sm focus:border-[var(--cap-gold)] focus:outline-none",
								children: [
									"Game Development",
									"Discord Bot",
									"Website",
									"Software",
									"Other"
								].map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: o }, o))
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "font-mono text-[10px] tracking-widest text-muted-foreground",
								children: "PROJECT DETAILS"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								rows: 4,
								placeholder: "Tell me about your idea...",
								className: "mt-1.5 w-full bg-background/60 border border-border px-4 py-3 font-sans text-sm focus:border-[var(--cap-gold)] focus:outline-none resize-none"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								className: "w-full clip-corner bg-[var(--cap-red)] text-[var(--cap-cream)] font-mono text-sm font-bold py-3.5 hover:glow-red transition-all",
								children: "SEND TRANSMISSION →"
							})
						]
					})]
				})
			]
		})
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "relative border-t border-border mt-20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "section-divider mb-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6 py-10 flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-muted-foreground",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "marvel-title font-display text-xl",
					children: "TEXIO"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "// © 2026 · BUILT WITH PURPOSE" })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "UNREAL ENGINE · REACT · THREE.JS" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "flex items-center gap-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-1.5 h-1.5 rounded-full bg-[var(--cap-gold)] animate-pulse-glow" }), "MADE WITH PASSION"]
				})]
			})]
		})]
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "relative",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ticker, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Character, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Projects, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GithubProjects, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "px-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "section-divider" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroesGrid, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Devlog, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hire, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "px-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "section-divider" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Community, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
function IndexWithWeb() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(WebTransitionProvider, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuroraBackground, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ClientOnly, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpiderCursor, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClickFX, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollProgressBar, {})
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Index, {})
	] });
}
//#endregion
export { IndexWithWeb as component };
