import { a as __toESM } from "../_runtime.mjs";
import { A as Shape, S as Path, p as ExtrudeGeometry, s as Color, u as CylinderGeometry } from "../_libs/@monogrid/gainmap-js+[...].mjs";
import { i as useFrame, n as Environment, o as require_jsx_runtime, r as Canvas, s as require_react, t as AdaptiveDpr } from "../_libs/@react-three/drei+[...].mjs";
import { a as motion, i as useMotionValue, n as useTransform, t as useSpring } from "../_libs/framer-motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ShieldScene-D3XIYfrm.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var C_RED = new Color("#cc1515");
var C_WHITE = new Color("#ede8dc");
var C_BLUE = new Color("#0b2660");
var PBR_BASE = {
	clearcoat: 1,
	clearcoatRoughness: .05,
	envMapIntensity: 3.2,
	reflectivity: 1
};
function CapRing({ innerR, outerR, color, metalness = .92, roughness = .07 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
		geometry: (0, import_react.useMemo)(() => {
			const s = new Shape();
			s.absarc(0, 0, outerR, 0, Math.PI * 2, false);
			const h = new Path();
			h.absarc(0, 0, innerR, 0, Math.PI * 2, true);
			s.holes.push(h);
			return new ExtrudeGeometry(s, {
				depth: .048,
				bevelEnabled: true,
				bevelThickness: .013,
				bevelSize: .013,
				bevelSegments: 5
			});
		}, [innerR, outerR]),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshPhysicalMaterial", {
			color,
			metalness,
			roughness,
			...PBR_BASE
		})
	});
}
function CentreDisc() {
	const discGeo = (0, import_react.useMemo)(() => new CylinderGeometry(.375, .375, .062, 128), []);
	const starGeo = (0, import_react.useMemo)(() => {
		const sh = new Shape();
		for (let i = 0; i < 10; i++) {
			const r = i % 2 === 0 ? .21 : .09;
			const a = i / 10 * Math.PI * 2 - Math.PI / 2;
			i === 0 ? sh.moveTo(Math.cos(a) * r, Math.sin(a) * r) : sh.lineTo(Math.cos(a) * r, Math.sin(a) * r);
		}
		sh.closePath();
		return new ExtrudeGeometry(sh, {
			depth: .055,
			bevelEnabled: false
		});
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
		rotation: [
			Math.PI / 2,
			0,
			0
		],
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
			geometry: discGeo,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshPhysicalMaterial", {
				color: C_BLUE,
				metalness: .9,
				roughness: .08,
				...PBR_BASE
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
			geometry: starGeo,
			position: [
				0,
				.066,
				0
			],
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshPhysicalMaterial", {
				color: C_WHITE,
				metalness: .86,
				roughness: .14,
				...PBR_BASE
			})
		})]
	});
}
function KeyLight({ mouseRef }) {
	const ref = (0, import_react.useRef)(null);
	useFrame(() => {
		const { x, y } = mouseRef.current;
		ref.current.position.set(x * 8, -y * 7, 9);
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("directionalLight", {
		ref,
		intensity: 4.5,
		color: "#ffffff"
	});
}
function ShieldMesh({ mouseRef }) {
	const grp = (0, import_react.useRef)(null);
	const tiltX = (0, import_react.useRef)(0);
	const tiltY = (0, import_react.useRef)(0);
	const spinTarget = (0, import_react.useRef)(0);
	const spinCurrent = (0, import_react.useRef)(0);
	useFrame(({ clock }) => {
		const t = clock.getElapsedTime();
		const { x, y } = mouseRef.current;
		tiltX.current += (-y * .38 - tiltX.current) * .055;
		tiltY.current += (x * .52 - tiltY.current) * .055;
		spinCurrent.current += (spinTarget.current - spinCurrent.current) * .065;
		grp.current.rotation.x = tiltX.current;
		grp.current.rotation.y = tiltY.current;
		grp.current.rotation.z = spinCurrent.current;
		grp.current.position.y = Math.sin(t * .5) * .09;
	});
	const handleClick = () => {
		spinTarget.current += Math.PI * 2;
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
		ref: grp,
		onClick: handleClick,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CapRing, {
				innerR: 1.22,
				outerR: 1.62,
				color: C_RED
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CapRing, {
				innerR: .95,
				outerR: 1.22,
				color: C_WHITE,
				metalness: .88,
				roughness: .13
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CapRing, {
				innerR: .375,
				outerR: .95,
				color: C_RED
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CentreDisc, {})
		]
	});
}
function Scene({ mouseRef }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ambientLight", {
			intensity: .55,
			color: "#aac8f0"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeyLight, { mouseRef }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pointLight", {
			position: [
				-5,
				3,
				2
			],
			intensity: 7,
			color: "#e62429",
			distance: 15
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pointLight", {
			position: [
				4,
				-3,
				1.5
			],
			intensity: 4.5,
			color: "#1c3b8a",
			distance: 12
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pointLight", {
			position: [
				0,
				0,
				-5
			],
			intensity: 2.5,
			color: "#5eb8e0",
			distance: 10
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Environment, { preset: "studio" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdaptiveDpr, { pixelated: true }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldMesh, { mouseRef })
	] });
}
function NebulaBackdrop({ mouseRef }) {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		let raf = 0;
		let cx = 0;
		let cy = 0;
		const tick = () => {
			if (ref.current) {
				cx += (mouseRef.current.x * 28 - cx) * .04;
				cy += (mouseRef.current.y * 18 - cy) * .04;
				ref.current.style.transform = `translate(${cx}px,${cy}px)`;
			}
			raf = requestAnimationFrame(tick);
		};
		tick();
		return () => cancelAnimationFrame(raf);
	}, [mouseRef]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"aria-hidden": true,
		className: "absolute inset-0 pointer-events-none overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref,
			className: "absolute inset-[-5%]",
			style: {
				background: "radial-gradient(ellipse at 42% 48%, oklch(0.55 0.24 25 / 0.25) 0%, transparent 48%),radial-gradient(ellipse at 62% 52%, oklch(0.50 0.22 280 / 0.20) 0%, transparent 48%),radial-gradient(ellipse at 52% 68%, oklch(0.45 0.20 255 / 0.18) 0%, transparent 42%)",
				filter: "blur(45px)"
			}
		})
	});
}
function ShieldScene() {
	const wrapRef = (0, import_react.useRef)(null);
	const mouseRef = (0, import_react.useRef)({
		x: 0,
		y: 0
	});
	const mx = useMotionValue(0);
	const my = useMotionValue(0);
	const sx = useSpring(mx, {
		stiffness: 65,
		damping: 20,
		mass: .9
	});
	const rotateX = useTransform(useSpring(my, {
		stiffness: 65,
		damping: 20,
		mass: .9
	}), [-1, 1], [14, -14]);
	const rotateY = useTransform(sx, [-1, 1], [-18, 18]);
	(0, import_react.useEffect)(() => {
		const el = wrapRef.current;
		if (!el) return;
		const onMove = (e) => {
			const r = el.getBoundingClientRect();
			const x = ((e.clientX - r.left) / r.width - .5) * 2;
			const y = ((e.clientY - r.top) / r.height - .5) * 2;
			mouseRef.current = {
				x,
				y
			};
			mx.set(x);
			my.set(y);
		};
		const onLeave = () => {
			mouseRef.current = {
				x: 0,
				y: 0
			};
			mx.set(0);
			my.set(0);
		};
		el.addEventListener("pointermove", onMove, { passive: true });
		el.addEventListener("pointerleave", onLeave);
		return () => {
			el.removeEventListener("pointermove", onMove);
			el.removeEventListener("pointerleave", onLeave);
		};
	}, [mx, my]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		ref: wrapRef,
		"aria-hidden": true,
		className: "absolute inset-0 overflow-hidden pointer-events-auto",
		style: {
			perspective: 1400,
			rotateX,
			rotateY,
			transformStyle: "preserve-3d"
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NebulaBackdrop, { mouseRef }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Canvas, {
			camera: {
				position: [
					0,
					0,
					4.2
				],
				fov: 40,
				near: .1,
				far: 50
			},
			dpr: [1, 2],
			gl: {
				antialias: true,
				alpha: true,
				toneMapping: 4,
				toneMappingExposure: 1.35
			},
			style: {
				position: "absolute",
				inset: 0,
				width: "100%",
				height: "100%"
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
				fallback: null,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scene, { mouseRef })
			})
		})]
	});
}
//#endregion
export { ShieldScene as default };
