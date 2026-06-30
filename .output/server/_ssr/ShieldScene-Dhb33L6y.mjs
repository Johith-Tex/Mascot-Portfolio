import { a as __toESM } from "../_runtime.mjs";
import { I as Path, J as Shape, Y as ShapeGeometry, p as CylinderGeometry, tt as Vector2, u as Color, x as ExtrudeGeometry } from "../_libs/@monogrid/gainmap-js+[...].mjs";
import { a as useFrame, c as require_jsx_runtime, l as require_react, n as Canvas, t as Environment } from "../_libs/@react-three/drei+[...].mjs";
import { i as BlendFunction, n as wt, r as yt, t as dt } from "../_libs/@react-three/postprocessing+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ShieldScene-Dhb33L6y.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var RED = new Color("#e62429");
var WHITE = new Color("#f5f0e8");
var BLUE = new Color("#1c3b8a");
var GOLD = new Color("#5eb8e0");
function ShieldRing({ innerR, outerR, color, metalness = .92, roughness = .12, emissive, emissiveIntensity = 0 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
		geometry: (0, import_react.useMemo)(() => {
			const shape = new Shape();
			shape.absarc(0, 0, outerR, 0, Math.PI * 2, false);
			const hole = new Path();
			hole.absarc(0, 0, innerR, 0, Math.PI * 2, true);
			shape.holes.push(hole);
			return new ExtrudeGeometry(shape, {
				depth: .08,
				bevelEnabled: true,
				bevelThickness: .015,
				bevelSize: .015,
				bevelSegments: 6
			});
		}, [innerR, outerR]),
		castShadow: true,
		receiveShadow: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshPhysicalMaterial", {
			color,
			metalness,
			roughness,
			clearcoat: 1,
			clearcoatRoughness: .1,
			reflectivity: 1,
			emissive: emissive ?? color,
			emissiveIntensity
		})
	});
}
function CentreDisc() {
	const discGeo = (0, import_react.useMemo)(() => new CylinderGeometry(.38, .38, .14, 128), []);
	const starGeo = (0, import_react.useMemo)(() => {
		const shape = new Shape();
		const pts = 5;
		for (let i = 0; i < pts * 2; i++) {
			const r = i % 2 === 0 ? .22 : .1;
			const a = i / (pts * 2) * Math.PI * 2 - Math.PI / 2;
			i === 0 ? shape.moveTo(Math.cos(a) * r, Math.sin(a) * r) : shape.lineTo(Math.cos(a) * r, Math.sin(a) * r);
		}
		shape.closePath();
		return new ExtrudeGeometry(shape, {
			depth: .06,
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
				color: BLUE,
				metalness: .9,
				roughness: .15,
				clearcoat: 1,
				clearcoatRoughness: .08
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
			geometry: starGeo,
			position: [
				0,
				.11,
				0
			],
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshPhysicalMaterial", {
				color: WHITE,
				metalness: .85,
				roughness: .18,
				clearcoat: 1
			})
		})]
	});
}
function OrbitLight() {
	const ref = (0, import_react.useRef)(null);
	useFrame(({ clock }) => {
		const t = clock.getElapsedTime();
		ref.current.position.set(Math.sin(t * .4) * 6, Math.cos(t * .25) * 4 + 2, 5);
		ref.current.lookAt(0, 0, 0);
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("spotLight", {
		ref,
		intensity: 80,
		distance: 18,
		angle: .45,
		penumbra: .6,
		color: "#ffffff",
		castShadow: true
	});
}
function EnergyHalo() {
	const ref = (0, import_react.useRef)(null);
	useFrame(({ clock }) => {
		const t = clock.getElapsedTime();
		ref.current.rotation.z = t * .3;
		const pulse = .85 + Math.sin(t * 1.8) * .15;
		ref.current.scale.setScalar(pulse);
		ref.current.material.opacity = .18 + Math.sin(t * 2.2) * .08;
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
		ref,
		geometry: (0, import_react.useMemo)(() => {
			const shape = new Shape();
			shape.absarc(0, 0, 1.72, 0, Math.PI * 2, false);
			const hole = new Path();
			hole.absarc(0, 0, 1.6, 0, Math.PI * 2, true);
			shape.holes.push(hole);
			return new ShapeGeometry(shape, 128);
		}, []),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshBasicMaterial", {
			color: GOLD,
			transparent: true,
			opacity: .22,
			side: 2
		})
	});
}
function Sparks() {
	const count = 120;
	const ref = (0, import_react.useRef)(null);
	const data = (0, import_react.useMemo)(() => {
		const positions = new Float32Array(count * 3);
		const velocities = new Float32Array(count * 3);
		const lifetimes = new Float32Array(count);
		for (let i = 0; i < count; i++) {
			const a = Math.random() * Math.PI * 2;
			const r = 1.2 + Math.random() * .6;
			positions[i * 3] = Math.cos(a) * r;
			positions[i * 3 + 1] = Math.sin(a) * r;
			positions[i * 3 + 2] = (Math.random() - .5) * .3;
			const speed = .004 + Math.random() * .008;
			velocities[i * 3] = (Math.random() - .5) * speed;
			velocities[i * 3 + 1] = (Math.random() - .5) * speed;
			velocities[i * 3 + 2] = (Math.random() - .5) * speed;
			lifetimes[i] = Math.random();
		}
		return {
			positions,
			velocities,
			lifetimes
		};
	}, []);
	useFrame(() => {
		if (!ref.current) return;
		const pos = ref.current.geometry.attributes.position.array;
		for (let i = 0; i < count; i++) {
			data.lifetimes[i] += .004;
			if (data.lifetimes[i] > 1) {
				const a = Math.random() * Math.PI * 2;
				const r = 1.2 + Math.random() * .6;
				pos[i * 3] = Math.cos(a) * r;
				pos[i * 3 + 1] = Math.sin(a) * r;
				pos[i * 3 + 2] = (Math.random() - .5) * .3;
				data.lifetimes[i] = 0;
			} else {
				pos[i * 3] += data.velocities[i * 3];
				pos[i * 3 + 1] += data.velocities[i * 3 + 1];
				pos[i * 3 + 2] += data.velocities[i * 3 + 2];
			}
		}
		ref.current.geometry.attributes.position.needsUpdate = true;
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("points", {
		ref,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("bufferGeometry", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("bufferAttribute", {
			attach: "attributes-position",
			args: [data.positions, 3]
		}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pointsMaterial", {
			color: GOLD,
			size: .018,
			transparent: true,
			opacity: .9,
			sizeAttenuation: true
		})]
	});
}
function ShieldAssembly({ targetX, targetY }) {
	const groupRef = (0, import_react.useRef)(null);
	const currentX = (0, import_react.useRef)(0);
	const currentY = (0, import_react.useRef)(0);
	useFrame(({ clock }) => {
		const t = clock.getElapsedTime();
		currentX.current += (targetY * .45 - currentX.current) * .06;
		currentY.current += (targetX * .6 - currentY.current) * .06;
		groupRef.current.rotation.x = currentX.current;
		groupRef.current.rotation.y = currentY.current;
		groupRef.current.position.y = Math.sin(t * .6) * .12;
		groupRef.current.rotation.z = Math.sin(t * .3) * .03;
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
		ref: groupRef,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldRing, {
				innerR: 1.22,
				outerR: 1.65,
				color: RED,
				emissive: RED,
				emissiveIntensity: .08
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldRing, {
				innerR: .95,
				outerR: 1.22,
				color: WHITE,
				metalness: .85,
				roughness: .2
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldRing, {
				innerR: .38,
				outerR: .95,
				color: RED,
				emissive: RED,
				emissiveIntensity: .06
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CentreDisc, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparks, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EnergyHalo, {})
		]
	});
}
function Scene({ targetX, targetY }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ambientLight", {
			intensity: .35,
			color: "#8ab4e8"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrbitLight, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pointLight", {
			position: [
				-5,
				3,
				4
			],
			intensity: 12,
			color: "#e62429",
			distance: 14
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pointLight", {
			position: [
				4,
				-3,
				3
			],
			intensity: 8,
			color: "#1c3b8a",
			distance: 12
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pointLight", {
			position: [
				0,
				0,
				6
			],
			intensity: 6,
			color: "#5eb8e0",
			distance: 10
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Environment, { preset: "night" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldAssembly, {
			targetX,
			targetY
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(dt, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(wt, {
			luminanceThreshold: .3,
			luminanceSmoothing: .9,
			intensity: 1.8,
			mipmapBlur: true
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(yt, {
			blendFunction: BlendFunction.NORMAL,
			offset: new Vector2(8e-4, 8e-4)
		})] })
	] });
}
function NebulaBackdrop() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"aria-hidden": true,
		className: "absolute inset-0 pointer-events-none",
		style: {
			background: "radial-gradient(ellipse at 35% 40%, oklch(0.55 0.24 25 / 0.35) 0%, transparent 40%),radial-gradient(ellipse at 70% 55%, oklch(0.50 0.22 280 / 0.30) 0%, transparent 40%),radial-gradient(ellipse at 50% 80%, oklch(0.45 0.20 255 / 0.25) 0%, transparent 45%)",
			filter: "blur(50px)"
		}
	});
}
function ShieldScene() {
	const wrapRef = (0, import_react.useRef)(null);
	const [mouse, setMouse] = (0, import_react.useState)({
		x: 0,
		y: 0
	});
	(0, import_react.useEffect)(() => {
		const el = wrapRef.current;
		if (!el) return;
		const onMove = (e) => {
			const r = el.getBoundingClientRect();
			setMouse({
				x: ((e.clientX - r.left) / r.width - .5) * 2,
				y: ((e.clientY - r.top) / r.height - .5) * 2
			});
		};
		const onLeave = () => setMouse({
			x: 0,
			y: 0
		});
		el.addEventListener("pointermove", onMove, { passive: true });
		el.addEventListener("pointerleave", onLeave);
		return () => {
			el.removeEventListener("pointermove", onMove);
			el.removeEventListener("pointerleave", onLeave);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: wrapRef,
		"aria-hidden": true,
		className: "absolute inset-0 overflow-hidden pointer-events-auto",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NebulaBackdrop, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Canvas, {
			camera: {
				position: [
					0,
					0,
					4.5
				],
				fov: 42
			},
			gl: {
				antialias: true,
				alpha: true,
				toneMapping: 4,
				toneMappingExposure: 1.4
			},
			style: {
				position: "absolute",
				inset: 0,
				width: "100%",
				height: "100%"
			},
			shadows: true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
				fallback: null,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scene, {
					targetX: mouse.x,
					targetY: mouse.y
				})
			})
		})]
	});
}
//#endregion
export { ShieldScene as default };
