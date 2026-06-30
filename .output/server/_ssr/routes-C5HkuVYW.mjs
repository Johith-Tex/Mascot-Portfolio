import { a as __toESM } from "../_runtime.mjs";
import { o as require_jsx_runtime, s as require_react } from "../_libs/@react-three/drei+[...].mjs";
import { a as motion, i as useMotionValue, n as useTransform, o as AnimatePresence, r as useScroll, t as useSpring } from "../_libs/framer-motion.mjs";
import { t as texio_character_default } from "./texio-character-CyFhnXQh.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-C5HkuVYW.js
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
function AuroraBackground() {
	const [stars, setStars] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => {
		setStars(Array.from({ length: 40 }).map((_, i) => ({
			id: i,
			top: `${Math.random() * 100}%`,
			left: `${Math.random() * 100}%`,
			delay: `${Math.random() * 4}s`,
			duration: `${3 + Math.random() * 4}s`
		})));
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"aria-hidden": true,
		className: "fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[var(--background)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 opacity-[0.03] mix-blend-overlay",
				style: { backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "aurora-blob aurora-a",
				style: { opacity: .15 }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "aurora-blob aurora-b",
				style: { opacity: .12 }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 aurora-grid opacity-30 mix-blend-screen" }),
			stars.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "aurora-star",
				style: {
					top: s.top,
					left: s.left,
					width: "2px",
					height: "2px",
					animationDelay: s.delay,
					animationDuration: s.duration
				}
			}, s.id)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-0 aurora-bolts opacity-40",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "aurora-bolt aurora-bolt-1" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "aurora-bolt aurora-bolt-2" })]
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
						className: "web-target relative border border-border bg-surface/70 backdrop-blur clip-corner p-5 overflow-hidden group transition-colors duration-300 hover:border-[var(--cap-gold)]/50",
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
var CAR_IMAGES = [
	"/assets/car1-CQIDoKNb.png",
	"/assets/car2-D9liH9EP.png",
	"/assets/car3-9OXQzWx9.png",
	"/assets/car4-BMBqk_4o.png",
	"/assets/car5-j4VchyCy.png",
	"/assets/car6-CEzLlCRT.png",
	"/assets/car7-z-IIDrZI.png",
	"/assets/car8-CY-1FlI8.png",
	"/assets/car9-YGqRX0Uu.png"
];
var GITHUB_USER = "Johith-Tex";
function DynamicBackground() {
	const sparks = Array.from({ length: 25 }).map((_, i) => ({
		id: i,
		left: `${Math.random() * 100}%`,
		top: `${Math.random() * 100}%`,
		duration: 3 + Math.random() * 5,
		delay: Math.random() * 5,
		size: Math.random() * 3 + 1
	}));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "absolute inset-0 pointer-events-none overflow-hidden bg-black",
		style: { zIndex: 0 },
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 opacity-40 mix-blend-screen",
				style: { background: "radial-gradient(circle at 50% -20%, rgba(59,130,246,0.3) 0%, transparent 60%), radial-gradient(circle at 50% 120%, rgba(239,68,68,0.2) 0%, transparent 60%)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0",
				style: {
					backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
					backgroundSize: "80px 80px",
					transform: "perspective(1000px) rotateX(75deg) scale(2.5) translateY(20%)",
					transformOrigin: "bottom center",
					opacity: .3
				}
			}),
			sparks.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute rounded-full bg-[var(--cap-gold)] opacity-0 shadow-[0_0_8px_rgba(255,215,0,0.8)]",
				style: {
					left: s.left,
					top: s.top,
					width: `${s.size}px`,
					height: `${s.size}px`,
					animation: `float-spark ${s.duration}s linear ${s.delay}s infinite`
				}
			}, s.id)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `
        @keyframes float-spark {
          0% { transform: translateY(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          80% { opacity: 0.8; }
          100% { transform: translateY(-100vh) scale(0.5); opacity: 0; }
        }
      ` })
		]
	});
}
function StatBar({ label, value, max, color }) {
	const percentage = Math.min(100, Math.max(5, value / max * 100));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex justify-between items-end mb-1",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-mono text-[10px] tracking-widest text-muted-foreground uppercase",
				children: label
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-display text-lg text-white leading-none",
				children: value
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "h-2 w-full bg-white/10 overflow-hidden transform skew-x-[-15deg]",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: { width: 0 },
				animate: { width: `${percentage}%` },
				transition: {
					duration: .8,
					ease: "easeOut"
				},
				className: "h-full",
				style: {
					backgroundColor: color,
					boxShadow: `0 0 10px ${color}`
				}
			})
		})]
	});
}
function GithubProjects() {
	const [vehicles, setVehicles] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [error, setError] = (0, import_react.useState)(false);
	const [selectedIndex, setSelectedIndex] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		let cancelled = false;
		fetch(`https://api.github.com/users/${GITHUB_USER}/repos?sort=updated&per_page=100`).then((r) => r.ok ? r.json() : Promise.reject(/* @__PURE__ */ new Error(`GitHub ${r.status}`))).then((data) => {
			if (cancelled) return;
			setVehicles(data.filter((r) => !r.fork && !r.archived).sort((a, b) => b.stargazers_count - a.stargazers_count || +new Date(b.updated_at) - +new Date(a.updated_at)).map((repo, idx) => ({
				repo,
				image: CAR_IMAGES[idx % CAR_IMAGES.length]
			})));
			setLoading(false);
		}).catch(() => {
			if (!cancelled) {
				setError(true);
				setLoading(false);
			}
		});
		return () => {
			cancelled = true;
		};
	}, []);
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "h-screen flex items-center justify-center bg-black",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "font-mono text-[var(--cap-gold)] animate-pulse tracking-[0.3em]",
			children: "LOADING SHOWROOM..."
		})
	});
	if (error || vehicles.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "h-screen flex items-center justify-center bg-black",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "font-mono text-[var(--cap-red)] border border-[var(--cap-red)] p-6 bg-red-950/20",
			children: "SHOWROOM OFFLINE — UNABLE TO CONNECT TO GITHUB"
		})
	});
	const { repo, image } = vehicles[selectedIndex];
	const THEME_COLORS = [
		"#3b82f6",
		"#ef4444",
		"#10b981",
		"#f59e0b",
		"#8b5cf6",
		"#ec4899",
		"#06b6d4",
		"#f97316",
		"#14b8a6"
	];
	const activeColor = THEME_COLORS[selectedIndex % THEME_COLORS.length];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "github",
		className: "relative h-screen min-h-[800px] w-full bg-[#050508] overflow-hidden flex flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DynamicBackground, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-20 px-8 pt-8 flex justify-between items-start",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "font-mono text-[10px] text-[var(--cap-gold)] mb-2 flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-2 h-2 bg-[var(--cap-gold)] animate-pulse" }), "LIVE GITHUB API"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "font-display text-4xl lg:text-5xl text-white tracking-wide",
					children: ["GITHUB ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						style: { color: activeColor },
						children: "REPOSITORIES"
					})]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: `https://github.com/${GITHUB_USER}`,
					target: "_blank",
					rel: "noreferrer",
					className: "font-mono text-xs border border-white/20 px-6 py-3 hover:border-white transition-colors bg-black/40 backdrop-blur",
					children: "VIEW ALL REPOS ↗"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 flex-1 flex flex-col lg:flex-row items-center justify-between px-8 lg:px-16 gap-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "w-full lg:w-72 hidden md:block",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								x: -30
							},
							animate: {
								opacity: 1,
								x: 0
							},
							className: "bg-black/40 backdrop-blur-md border-l-4 p-6",
							style: { borderLeftColor: activeColor },
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-3xl text-white mb-6 uppercase tracking-wider truncate",
									children: repo.name.replace(/-/g, " ")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatBar, {
									label: "STARS",
									value: repo.stargazers_count,
									max: 50,
									color: activeColor
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatBar, {
									label: "FORKS",
									value: repo.forks_count,
									max: 20,
									color: "#fff"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-8 pt-6 border-t border-white/10",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-mono text-[10px] text-muted-foreground uppercase mb-1",
										children: "PRIMARY LANGUAGE"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-display text-xl text-white",
										style: { color: activeColor },
										children: repo.language || "Hybrid"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-mono text-[10px] text-muted-foreground uppercase mb-1",
										children: "LAST UPDATED"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-mono text-sm text-white",
										children: new Date(repo.updated_at).toLocaleDateString()
									})]
								})
							]
						}, `specs-${repo.id}`)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex-1 relative w-full h-full flex items-center justify-center -mt-20 lg:mt-0",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
							mode: "wait",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								initial: {
									opacity: 0,
									scale: .9,
									x: 100
								},
								animate: {
									opacity: 1,
									scale: 1,
									x: 0
								},
								exit: {
									opacity: 0,
									scale: 1.1,
									filter: "blur(10px)"
								},
								transition: {
									type: "spring",
									damping: 20,
									stiffness: 100
								},
								className: "relative w-full max-w-4xl flex justify-center items-center pointer-events-none",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-1/3 w-[80%] h-[30px] rounded-[100%] opacity-70 blur-xl",
									style: { backgroundColor: activeColor }
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
									src: image,
									alt: repo.name,
									className: "relative z-10 w-full object-contain filter drop-shadow-[0_20px_20px_rgba(0,0,0,0.5)]",
									animate: { y: [
										0,
										-8,
										0
									] },
									transition: {
										duration: 4,
										repeat: Infinity,
										ease: "easeInOut"
									}
								})]
							}, `car-${repo.id}`)
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "w-full lg:w-72 hidden md:flex flex-col justify-end h-full pb-16",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								x: 30
							},
							animate: {
								opacity: 1,
								x: 0
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "font-mono text-xs text-gray-300 leading-relaxed mb-6 italic border-l-2 pl-4 border-white/20",
								children: [
									"\"",
									repo.description || "Classified project files. No description provided.",
									"\""
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: repo.html_url,
								target: "_blank",
								rel: "noreferrer",
								className: "group relative inline-flex items-center justify-center w-full px-8 py-4 font-mono text-sm font-bold text-white bg-white/5 border border-white/20 overflow-hidden",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute inset-0 w-0 transition-all duration-300 ease-out group-hover:w-full",
									style: { backgroundColor: activeColor }
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "relative flex items-center gap-2",
									children: ["VIEW REPOSITORY ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										"aria-hidden": true,
										children: "→"
									})]
								})]
							})]
						}, `info-${repo.id}`)
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-30 h-32 md:h-40 bg-black/60 backdrop-blur-xl border-t border-white/10 flex flex-col justify-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute top-0 left-0 w-full h-1",
					style: { background: `linear-gradient(90deg, transparent, ${activeColor}, transparent)` }
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex gap-4 overflow-x-auto px-8 pb-4 pt-6 snap-x hide-scrollbar",
					children: vehicles.map((v, idx) => {
						const isSelected = selectedIndex === idx;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setSelectedIndex(idx),
							className: `
                  relative shrink-0 w-32 md:w-48 h-20 md:h-24 rounded-lg snap-center overflow-hidden transition-all duration-300
                  ${isSelected ? "scale-105 opacity-100 z-10 shadow-2xl ring-2" : "scale-95 opacity-40 hover:opacity-70 ring-1 ring-white/10"}
                `,
							style: {
								backgroundColor: "#111",
								"--tw-ring-color": isSelected ? activeColor : void 0,
								boxShadow: isSelected ? `0 10px 30px ${activeColor}40` : void 0
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: v.image,
								alt: "car thumbnail",
								className: "absolute inset-0 w-full h-full object-contain p-2"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute inset-x-0 bottom-0 bg-gradient-to-t from-black to-transparent p-2 text-left",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-mono text-[8px] md:text-[10px] text-white truncate drop-shadow-md",
									children: v.repo.name.toUpperCase()
								})
							})]
						}, v.repo.id);
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      ` })
		]
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
var texio_idle_katanas_bg_default = "/assets/texio_idle_katanas_bg-DbF-SvtO.mp4";
var texio_idle_pistols_bg_default = "/assets/texio_idle_pistols_bg-BCLmf1oS.mp4";
var texio_idle_whistle_bg_default = "/assets/texio_idle_whistle_bg-BDaBC3Nw.mp4";
var texio_talks_bg_default = "/assets/texio_talks_bg-BsSHIyeO.mp4";
var SECTION_DIALOGUE = {
	hero: "Welcome to the Texioverse. I am your guide.",
	character: "This is my origin. Forged in Blender, unleashed in Unreal Engine.",
	projects: "My creator's arsenal. Take a look at these high-performance builds.",
	devlog: "Transmission logs from the frontline of development.",
	hire: "Need a top-tier engineer? You found him.",
	community: "Join the network. Connect with the elite.",
	contact: "Ready to initiate a project? Send a transmission."
};
var RANDOM_FACTS = [
	"Did you know my blades are infused with 10,000 volts?",
	"I can process 1 million calculations while you blink.",
	"My creator Johith built this entire site using React and Framer Motion.",
	"The glowing eyes aren't for show. They're tactical HUDs.",
	"I never sleep. I just compile."
];
function MascotAssistant() {
	const [currentVideo, setCurrentVideo] = (0, import_react.useState)(texio_idle_whistle_bg_default);
	const [dialogue, setDialogue] = (0, import_react.useState)("");
	const [isTalking, setIsTalking] = (0, import_react.useState)(false);
	const videoRef = (0, import_react.useRef)(null);
	const idleTimeoutRef = (0, import_react.useRef)(null);
	const factTimeoutRef = (0, import_react.useRef)(null);
	const idles = [
		texio_idle_katanas_bg_default,
		texio_idle_pistols_bg_default,
		texio_idle_whistle_bg_default
	];
	const playTalk = (text) => {
		setDialogue(text);
		setCurrentVideo(texio_talks_bg_default);
		setIsTalking(true);
		if (factTimeoutRef.current) clearTimeout(factTimeoutRef.current);
	};
	const handleVideoEnd = () => {
		if (isTalking) {
			setIsTalking(false);
			scheduleRandomFact();
		}
		const randomIdle = idles[Math.floor(Math.random() * idles.length)];
		setCurrentVideo(randomIdle);
	};
	const scheduleRandomFact = () => {
		if (factTimeoutRef.current) clearTimeout(factTimeoutRef.current);
		factTimeoutRef.current = setTimeout(() => {
			const fact = RANDOM_FACTS[Math.floor(Math.random() * RANDOM_FACTS.length)];
			playTalk(fact);
		}, 15e3 + Math.random() * 1e4);
	};
	(0, import_react.useEffect)(() => {
		scheduleRandomFact();
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					const id = entry.target.id;
					if (SECTION_DIALOGUE[id]) playTalk(SECTION_DIALOGUE[id]);
				}
			});
		}, { threshold: .5 });
		document.querySelectorAll("section[id]").forEach((sec) => observer.observe(sec));
		return () => {
			observer.disconnect();
			if (idleTimeoutRef.current) clearTimeout(idleTimeoutRef.current);
			if (factTimeoutRef.current) clearTimeout(factTimeoutRef.current);
		};
	}, []);
	(0, import_react.useEffect)(() => {
		if (videoRef.current) {
			videoRef.current.load();
			videoRef.current.play().catch((e) => console.log("Video autoplay blocked:", e));
		}
	}, [currentVideo]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		className: "fixed bottom-6 right-6 z-[9999] flex flex-col items-end pointer-events-none",
		initial: {
			opacity: 0,
			y: 50
		},
		animate: {
			opacity: 1,
			y: 0
		},
		transition: {
			duration: 1,
			ease: "easeOut",
			delay: 1
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: isTalking && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			initial: {
				opacity: 0,
				scale: .8,
				y: 20
			},
			animate: {
				opacity: 1,
				scale: 1,
				y: 0
			},
			exit: {
				opacity: 0,
				scale: .8,
				y: 10
			},
			transition: {
				type: "spring",
				bounce: .5
			},
			className: "relative bg-[var(--surface-2)] border border-[var(--cap-gold)] text-[var(--cap-cream)] p-4 rounded-xl mb-4 max-w-[250px] shadow-[0_0_20px_rgba(126,24,235,0.4)] pointer-events-auto",
			style: {
				fontFamily: "var(--font-mono)",
				fontSize: "12px",
				borderBottomRightRadius: "2px"
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
					initial: { opacity: 0 },
					animate: { opacity: 1 },
					transition: { duration: .5 },
					children: dialogue
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -bottom-3 right-6 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[12px] border-t-[var(--cap-gold)]" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -bottom-[10px] right-[25px] w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[10px] border-t-[var(--surface-2)]" })
			]
		}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			className: "relative w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-2 border-[var(--cap-blue)] shadow-[0_0_30px_rgba(230,36,41,0.3)] pointer-events-auto cursor-pointer",
			whileHover: {
				scale: 1.05,
				borderColor: "var(--cap-gold)",
				boxShadow: "0 0 40px rgba(126,24,235,0.6)"
			},
			whileTap: { scale: .95 },
			onClick: () => playTalk("Do not tap the glass. I am armed.", 3e3),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
				ref: videoRef,
				src: currentVideo,
				autoPlay: true,
				muted: true,
				playsInline: true,
				onEnded: handleVideoEnd,
				className: "w-full h-full object-cover mix-blend-screen contrast-125",
				style: { backgroundColor: "black" }
			})
		})]
	});
}
var avatar_front_with_shield_default = "/assets/avatar_front_with_shield-DQ4Fl3-_.png";
var project_oblivion_default = "/assets/project-oblivion-DDMr4SK_.jpg";
var project_undefined_default = "/assets/project-undefined-ClVVtDEI.jpg";
var project_tx_default = "/assets/project-tx-CE2clHhe.jpg";
(0, import_react.lazy)(() => import("./ShieldScene-D3XIYfrm.mjs"));
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative inline-block text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-center gap-3 mb-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-[2px] w-10 bg-[var(--cap-red)]" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-sm tracking-[0.4em] text-[var(--cap-cream)]",
						children: "PRESENTS"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-[2px] w-10 bg-[var(--cap-red)]" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 -m-8 opacity-50 blur-2xl animate-burst",
					style: { background: "radial-gradient(ellipse at center, #e62429, transparent 60%)" }
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "marvel-title relative text-[clamp(1.8rem,5.5vw,4.5rem)] leading-[0.85]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "marvel-title-inner",
						children: "TEXIO"
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 inline-block clip-tag bg-[var(--cap-red)] text-[var(--cap-cream)] font-mono text-xs tracking-[0.3em] px-5 py-1.5",
				children: "JOHITH // GAME DEVELOPER · SOFTWARE ENGINEER"
			})
		]
	});
}
function Hero() {
	const webScroll = useWebScroll();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "home",
		className: "relative min-h-[82vh] pt-24 pb-16 flex items-center justify-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "absolute inset-0 pointer-events-none",
				style: { background: "radial-gradient(ellipse at 50% 60%, oklch(0.35 0.14 25 / 0.13) 0%, transparent 55%), radial-gradient(ellipse at 50% 35%, oklch(0.35 0.1 280 / 0.09) 0%, transparent 48%)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 mx-auto max-w-3xl px-6 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: {
							opacity: 0,
							y: 20,
							filter: "blur(10px)"
						},
						animate: {
							opacity: 1,
							y: 0,
							filter: "blur(0px)"
						},
						transition: {
							duration: .9,
							ease: [
								.22,
								1,
								.36,
								1
							]
						},
						className: "relative",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MarvelTitleCard, {})
					}),
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
							delay: .35,
							ease: [
								.22,
								1,
								.36,
								1
							]
						},
						className: "mt-9 flex flex-wrap gap-3 justify-center",
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
							delay: .65
						},
						className: "mt-10 flex gap-12 justify-center",
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
							className: "font-display text-4xl text-[var(--cap-gold)]",
							children: s.n
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-mono text-[10px] tracking-widest text-muted-foreground mt-1",
							children: s.l
						})] }, s.l))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: { opacity: 0 },
				animate: { opacity: 1 },
				transition: {
					delay: 1.6,
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
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
				src: avatar_front_with_shield_default,
				alt: "Texio Avatar",
				className: "absolute -bottom-24 right-4 md:-bottom-48 md:right-32 w-[300px] md:w-[500px] object-contain z-10 pointer-events-auto opacity-95",
				animate: {
					y: [
						0,
						-15,
						0
					],
					rotate: [
						0,
						-1,
						2,
						-1,
						0
					],
					filter: [
						"drop-shadow(0 0 20px rgba(126,24,235,0.4)) drop-shadow(0 0 10px rgba(126,24,235,0.2))",
						"drop-shadow(0 0 40px rgba(126,24,235,0.8)) drop-shadow(0 0 20px rgba(126,24,235,0.4))",
						"drop-shadow(0 0 20px rgba(126,24,235,0.4)) drop-shadow(0 0 10px rgba(126,24,235,0.2))"
					]
				},
				transition: {
					duration: 6,
					repeat: Infinity,
					ease: "easeInOut",
					times: [
						0,
						.5,
						1
					]
				},
				whileHover: {
					scale: 1.05,
					rotate: 3,
					filter: "drop-shadow(0 0 50px rgba(126,24,235,1)) drop-shadow(0 0 30px rgba(230,36,41,0.8))",
					transition: {
						duration: .4,
						ease: "easeOut"
					}
				},
				whileTap: {
					scale: .95,
					rotate: -3,
					filter: "drop-shadow(0 0 15px rgba(230,36,41,0.6))"
				}
			})
		]
	});
}
var EASE = [
	.22,
	1,
	.36,
	1
];
var REVEAL = {
	hidden: {
		opacity: 0,
		y: 22,
		filter: "blur(8px)"
	},
	visible: (i = 0) => ({
		opacity: 1,
		y: 0,
		filter: "blur(0px)",
		transition: {
			duration: .75,
			delay: i * .11,
			ease: EASE
		}
	})
};
var REVEAL_LEFT = {
	hidden: {
		opacity: 0,
		x: -28,
		filter: "blur(6px)"
	},
	visible: (i = 0) => ({
		opacity: 1,
		x: 0,
		filter: "blur(0px)",
		transition: {
			duration: .7,
			delay: i * .1,
			ease: EASE
		}
	})
};
function Character() {
	const secRef = (0, import_react.useRef)(null);
	const { scrollYProgress } = useScroll({
		target: secRef,
		offset: ["start end", "end start"]
	});
	const imgY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "section-divider" })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		ref: secRef,
		id: "character",
		className: "relative py-24 px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				variants: REVEAL_LEFT,
				initial: "hidden",
				whileInView: "visible",
				viewport: {
					once: true,
					amount: .3
				},
				className: "font-mono text-xs text-[var(--cap-red)] mb-4 flex items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "inline-block w-8 h-px bg-[var(--cap-red)]" }), "// CHARACTER FILE"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid lg:grid-cols-2 gap-16 items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					variants: REVEAL,
					initial: "hidden",
					whileInView: "visible",
					viewport: {
						once: true,
						amount: .2
					},
					className: "relative overflow-hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -inset-4 bg-gradient-to-br from-[var(--cap-red)]/30 via-[var(--cap-gold)]/15 to-transparent blur-3xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative clip-corner border-2 border-[var(--cap-gold)]/40 overflow-hidden hud-frame",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
								src: texio_character_default,
								alt: "TEXIO character render",
								width: 1280,
								height: 1600,
								className: "w-full aspect-[4/5] object-cover",
								style: {
									y: imgY,
									scale: 1.08
								}
							}),
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
					variants: REVEAL,
					custom: .1,
					initial: "hidden",
					whileInView: "visible",
					viewport: {
						once: true,
						amount: .2
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "font-display text-5xl lg:text-6xl leading-none",
							children: ["MEET ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "marvel-title",
								children: "TEXIO"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 font-mono text-[var(--cap-red)] tracking-widest text-xs flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-1.5 h-1.5 bg-[var(--cap-red)]" }), "AKA JOHITH"]
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
								className: "font-mono text-[10px] tracking-widest border border-border px-3 py-1.5 bg-surface/60 cursor-default transition-colors",
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
		className: "relative py-24 px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-end justify-between mb-16 flex-wrap gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					variants: REVEAL,
					initial: "hidden",
					whileInView: "visible",
					viewport: {
						once: true,
						amount: .3
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "font-mono text-xs text-[var(--cap-red)] mb-3 flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "inline-block w-8 h-px bg-[var(--cap-red)]" }), "// MISSION LOG"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "font-display text-5xl lg:text-6xl",
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
					variants: REVEAL,
					custom: i * .5,
					initial: "hidden",
					whileInView: "visible",
					viewport: {
						once: true,
						amount: .1
					},
					className: "group grid lg:grid-cols-12 gap-6 items-stretch",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-7 relative overflow-hidden clip-corner border border-border transition-colors duration-300 group-hover:border-[var(--cap-red)]/60",
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
								className: "absolute top-4 left-4 font-mono text-[10px] tracking-widest bg-background/70 backdrop-blur px-2.5 py-1 border border-[var(--cap-red)]/50 text-[var(--cap-red)]",
								children: p.status
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-5 bg-surface/60 backdrop-blur border border-border clip-corner p-7 flex flex-col transition-colors duration-300 group-hover:border-[var(--cap-gold)]/50",
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
										duration: 1.4,
										delay: .3,
										ease: EASE
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
		className: "relative py-24 px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					variants: REVEAL,
					initial: "hidden",
					whileInView: "visible",
					viewport: {
						once: true,
						amount: .3
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "font-mono text-xs text-[var(--cap-red)] mb-3 flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "inline-block w-8 h-px bg-[var(--cap-red)]" }), "// FIELD JOURNAL"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "font-display text-5xl lg:text-6xl",
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
						className: `web-target font-mono text-xs px-4 py-2 border transition-colors ${i === 0 ? "border-[var(--cap-gold)] text-[var(--cap-gold)] bg-[var(--cap-gold)]/10" : "border-border text-muted-foreground hover:text-foreground hover:border-[var(--cap-gold)]/40"}`,
						children: f
					}, f))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 relative timeline-connector pl-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-5",
						children: DEVLOG.map((d, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							variants: REVEAL_LEFT,
							custom: i * .5,
							initial: "hidden",
							whileInView: "visible",
							viewport: {
								once: true,
								amount: .2
							},
							className: "relative border border-border bg-surface/40 backdrop-blur p-6 clip-corner transition-colors duration-300 hover:border-[var(--cap-gold)]/50",
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
		className: "relative py-24 px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid lg:grid-cols-12 gap-12 items-start",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					variants: REVEAL,
					initial: "hidden",
					whileInView: "visible",
					viewport: {
						once: true,
						amount: .2
					},
					className: "lg:col-span-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "font-mono text-xs text-[var(--cap-gold)] mb-3 flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-2 h-2 rounded-full bg-[var(--cap-gold)] animate-pulse-glow" }), "// AVAILABLE FOR WORK"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "font-display text-5xl lg:text-6xl leading-none",
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
						variants: REVEAL,
						custom: i * .5,
						initial: "hidden",
						whileInView: "visible",
						viewport: {
							once: true,
							amount: .2
						},
						whileHover: {
							y: -6,
							transition: {
								type: "spring",
								stiffness: 300,
								damping: 22
							}
						},
						className: "border border-border bg-surface/50 backdrop-blur p-6 clip-corner transition-colors duration-300 hover:border-[var(--cap-gold)]/60",
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
		className: "relative py-24 px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "font-mono text-xs text-[var(--cap-red)] mb-3",
				children: "// THE COMMUNITY"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid lg:grid-cols-2 gap-12 items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "font-display text-5xl lg:text-6xl leading-none",
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
		className: "relative py-24 px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-mono text-xs text-[var(--cap-gold)] mb-3",
					children: "// TRANSMIT"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "font-display text-5xl lg:text-6xl",
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
						onSubmit: (e) => {
							e.preventDefault();
							const formData = new FormData(e.currentTarget);
							const name = formData.get("user_name");
							const email = formData.get("user_email");
							const type = formData.get("project_type");
							const details = formData.get("details");
							const subject = encodeURIComponent(`Portfolio Inquiry: ${type} - from ${name}`);
							const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nProject Type: ${type}\n\nDetails:\n${details}`);
							window.location.href = `mailto:johithjr@gmail.com?subject=${subject}&body=${body}`;
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "font-mono text-[10px] tracking-widest text-muted-foreground",
								children: "YOUR NAME"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								name: "user_name",
								type: "text",
								required: true,
								placeholder: "Enter your name",
								className: "mt-1.5 w-full bg-background/60 border border-border px-4 py-3 font-sans text-sm focus:border-[var(--cap-gold)] focus:outline-none transition-colors"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "font-mono text-[10px] tracking-widest text-muted-foreground",
								children: "EMAIL"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								name: "user_email",
								type: "email",
								required: true,
								placeholder: "you@domain.com",
								className: "mt-1.5 w-full bg-background/60 border border-border px-4 py-3 font-sans text-sm focus:border-[var(--cap-gold)] focus:outline-none transition-colors"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "font-mono text-[10px] tracking-widest text-muted-foreground",
								children: "PROJECT TYPE"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
								name: "project_type",
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
								name: "details",
								required: true,
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
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MascotAssistant, {}),
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
