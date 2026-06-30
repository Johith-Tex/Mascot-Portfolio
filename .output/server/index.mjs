globalThis.__nitro_main__ = import.meta.url;
import { a as FastResponse, n as HTTPError, r as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/assets/bebas-neue-latin-400-normal-9mHNbWWO.woff2": {
		"type": "font/woff2",
		"etag": "\"35c8-HwY72aPfqN/QTgccChg2mpcfg1E\"",
		"mtime": "2026-06-30T12:06:57.199Z",
		"size": 13768,
		"path": "../public/assets/bebas-neue-latin-400-normal-9mHNbWWO.woff2"
	},
	"/assets/bebas-neue-latin-400-normal-Bi-ndsyu.woff": {
		"type": "font/woff",
		"etag": "\"2bac-eEj3nehPbQ71i2QuxVclm03KwLw\"",
		"mtime": "2026-06-30T12:06:57.199Z",
		"size": 11180,
		"path": "../public/assets/bebas-neue-latin-400-normal-Bi-ndsyu.woff"
	},
	"/assets/bebas-neue-latin-ext-400-normal-DWiEslNC.woff2": {
		"type": "font/woff2",
		"etag": "\"22e0-mzPqRLuD3PyHiYXLyEc0J5G7qos\"",
		"mtime": "2026-06-30T12:06:57.201Z",
		"size": 8928,
		"path": "../public/assets/bebas-neue-latin-ext-400-normal-DWiEslNC.woff2"
	},
	"/assets/bebas-neue-latin-ext-400-normal-HFKRJXnW.woff": {
		"type": "font/woff",
		"etag": "\"1d60-ft2TUJBxdO2bxlvUsr1cy9Aohts\"",
		"mtime": "2026-06-30T12:06:57.201Z",
		"size": 7520,
		"path": "../public/assets/bebas-neue-latin-ext-400-normal-HFKRJXnW.woff"
	},
	"/assets/jetbrains-mono-cyrillic-400-normal-BEIGL1Tu.woff2": {
		"type": "font/woff2",
		"etag": "\"14d0-wP6+M+HGdr9/ksFVSvTe+I0Y0rI\"",
		"mtime": "2026-06-30T12:06:57.201Z",
		"size": 5328,
		"path": "../public/assets/jetbrains-mono-cyrillic-400-normal-BEIGL1Tu.woff2"
	},
	"/assets/jetbrains-mono-cyrillic-400-normal-ugxPyKxw.woff": {
		"type": "font/woff",
		"etag": "\"1b40-oGh4jaPe06qJnXZqmnfGfJQP4Ag\"",
		"mtime": "2026-06-30T12:06:57.201Z",
		"size": 6976,
		"path": "../public/assets/jetbrains-mono-cyrillic-400-normal-ugxPyKxw.woff"
	},
	"/assets/index-C-KFRGey.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"54444-R0s1UH/B/JYotTcpQ1V5Pg+iz6I\"",
		"mtime": "2026-06-30T12:06:57.197Z",
		"size": 345156,
		"path": "../public/assets/index-C-KFRGey.js"
	},
	"/assets/jetbrains-mono-cyrillic-500-normal-DJqRU3vO.woff": {
		"type": "font/woff",
		"etag": "\"1b70-ULliHx6NDb6WoprjCD9cN6A3H2M\"",
		"mtime": "2026-06-30T12:06:57.203Z",
		"size": 7024,
		"path": "../public/assets/jetbrains-mono-cyrillic-500-normal-DJqRU3vO.woff"
	},
	"/assets/jetbrains-mono-cyrillic-500-normal-DmUKJPL_.woff2": {
		"type": "font/woff2",
		"etag": "\"14ec-QTcY+/vMX0UPkoTgSddbaoRkEuY\"",
		"mtime": "2026-06-30T12:06:57.203Z",
		"size": 5356,
		"path": "../public/assets/jetbrains-mono-cyrillic-500-normal-DmUKJPL_.woff2"
	},
	"/assets/jetbrains-mono-greek-400-normal-B9oWc5Lo.woff": {
		"type": "font/woff",
		"etag": "\"1620-uF5DPKyxthnzZIfm2hBQUEmcCDI\"",
		"mtime": "2026-06-30T12:06:57.203Z",
		"size": 5664,
		"path": "../public/assets/jetbrains-mono-greek-400-normal-B9oWc5Lo.woff"
	},
	"/assets/jetbrains-mono-greek-400-normal-C190GLew.woff2": {
		"type": "font/woff2",
		"etag": "\"1084-bKcqPuNhRWWCQbsWLqSOoRkxv70\"",
		"mtime": "2026-06-30T12:06:57.203Z",
		"size": 4228,
		"path": "../public/assets/jetbrains-mono-greek-400-normal-C190GLew.woff2"
	},
	"/assets/jetbrains-mono-greek-500-normal-D7SFKleX.woff": {
		"type": "font/woff",
		"etag": "\"1658-H/mjwdfS4m1yKQXgRUK+RKkuFfo\"",
		"mtime": "2026-06-30T12:06:57.205Z",
		"size": 5720,
		"path": "../public/assets/jetbrains-mono-greek-500-normal-D7SFKleX.woff"
	},
	"/assets/jetbrains-mono-greek-500-normal-JpySY46c.woff2": {
		"type": "font/woff2",
		"etag": "\"10bc-KUCG+hIKwoSOUbV7fpNmCS3FLvM\"",
		"mtime": "2026-06-30T12:06:57.205Z",
		"size": 4284,
		"path": "../public/assets/jetbrains-mono-greek-500-normal-JpySY46c.woff2"
	},
	"/assets/jetbrains-mono-latin-400-normal-6-qcROiO.woff": {
		"type": "font/woff",
		"etag": "\"6b68-PjVYVbMXaGEDnHrQQmycVNcGrEA\"",
		"mtime": "2026-06-30T12:06:57.205Z",
		"size": 27496,
		"path": "../public/assets/jetbrains-mono-latin-400-normal-6-qcROiO.woff"
	},
	"/assets/jetbrains-mono-latin-400-normal-V6pRDFza.woff2": {
		"type": "font/woff2",
		"etag": "\"52b0-OuYhUYIQ5ljyzsko4MOu3m0M7+I\"",
		"mtime": "2026-06-30T12:06:57.205Z",
		"size": 21168,
		"path": "../public/assets/jetbrains-mono-latin-400-normal-V6pRDFza.woff2"
	},
	"/assets/jetbrains-mono-latin-500-normal-BWZEU5yA.woff2": {
		"type": "font/woff2",
		"etag": "\"5548-NcKnK3WfWhmDT/Dd1/lKnL5VeGA\"",
		"mtime": "2026-06-30T12:06:57.207Z",
		"size": 21832,
		"path": "../public/assets/jetbrains-mono-latin-500-normal-BWZEU5yA.woff2"
	},
	"/assets/jetbrains-mono-latin-500-normal-CJOVTJB7.woff": {
		"type": "font/woff",
		"etag": "\"6e30-1zAcLD7/opfpWjVLFZBVG0EzKds\"",
		"mtime": "2026-06-30T12:06:57.207Z",
		"size": 28208,
		"path": "../public/assets/jetbrains-mono-latin-500-normal-CJOVTJB7.woff"
	},
	"/assets/jetbrains-mono-latin-ext-400-normal-Bc8Ftmh3.woff2": {
		"type": "font/woff2",
		"etag": "\"1ca8-sBWBn421OuV4ZHOZxHJjafE1huU\"",
		"mtime": "2026-06-30T12:06:57.207Z",
		"size": 7336,
		"path": "../public/assets/jetbrains-mono-latin-ext-400-normal-Bc8Ftmh3.woff2"
	},
	"/assets/jetbrains-mono-latin-ext-400-normal-fXTG6kC5.woff": {
		"type": "font/woff",
		"etag": "\"2790-MZORDuKd3VMoaYVXmW8yROWL9sY\"",
		"mtime": "2026-06-30T12:06:57.209Z",
		"size": 10128,
		"path": "../public/assets/jetbrains-mono-latin-ext-400-normal-fXTG6kC5.woff"
	},
	"/assets/jetbrains-mono-latin-ext-500-normal-ckzbgY84.woff": {
		"type": "font/woff",
		"etag": "\"2860-o0XUF4uBh1xmGSf1BGPgnX+rm+M\"",
		"mtime": "2026-06-30T12:06:57.209Z",
		"size": 10336,
		"path": "../public/assets/jetbrains-mono-latin-ext-500-normal-ckzbgY84.woff"
	},
	"/assets/jetbrains-mono-latin-ext-500-normal-Cut-4mMH.woff2": {
		"type": "font/woff2",
		"etag": "\"1d68-vgxZ8wbhZM0rlqgWMhUKb0zsbWM\"",
		"mtime": "2026-06-30T12:06:57.209Z",
		"size": 7528,
		"path": "../public/assets/jetbrains-mono-latin-ext-500-normal-Cut-4mMH.woff2"
	},
	"/assets/jetbrains-mono-vietnamese-400-normal-CqNFfHCs.woff": {
		"type": "font/woff",
		"etag": "\"14fc-wa8Pi/SxAFg9ve8x5GbO/sMJWEo\"",
		"mtime": "2026-06-30T12:06:57.211Z",
		"size": 5372,
		"path": "../public/assets/jetbrains-mono-vietnamese-400-normal-CqNFfHCs.woff"
	},
	"/assets/jetbrains-mono-vietnamese-500-normal-DNRqzVM1.woff": {
		"type": "font/woff",
		"etag": "\"1564-06JmuoIOvhZDwhIY/WiPtAooaNw\"",
		"mtime": "2026-06-30T12:06:57.211Z",
		"size": 5476,
		"path": "../public/assets/jetbrains-mono-vietnamese-500-normal-DNRqzVM1.woff"
	},
	"/assets/project-oblivion-DDMr4SK_.jpg": {
		"type": "image/jpeg",
		"etag": "\"10fa6-cvYu/bwBpBjZln7tE0L5OlY1SSw\"",
		"mtime": "2026-06-30T12:06:57.211Z",
		"size": 69542,
		"path": "../public/assets/project-oblivion-DDMr4SK_.jpg"
	},
	"/assets/project-tx-CE2clHhe.jpg": {
		"type": "image/jpeg",
		"etag": "\"11d33-oqU+IgiTy5naLgi0aS0DqTjp8YI\"",
		"mtime": "2026-06-30T12:06:57.211Z",
		"size": 73011,
		"path": "../public/assets/project-tx-CE2clHhe.jpg"
	},
	"/assets/project-undefined-ClVVtDEI.jpg": {
		"type": "image/jpeg",
		"etag": "\"21c7b-YpAzbbYmOwdB9l3r7pnSjsIlg0c\"",
		"mtime": "2026-06-30T12:06:57.213Z",
		"size": 138363,
		"path": "../public/assets/project-undefined-ClVVtDEI.jpg"
	},
	"/assets/routes-VVqbsdV6.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2c147-ACjN/SCH2tMURDcxamQlkptjFHw\"",
		"mtime": "2026-06-30T12:06:57.199Z",
		"size": 180551,
		"path": "../public/assets/routes-VVqbsdV6.js"
	},
	"/assets/space-grotesk-latin-400-normal-BnQMeOim.woff": {
		"type": "font/woff",
		"etag": "\"426c-ghmNOmJRvnMHZL5v05+7tCgOuLs\"",
		"mtime": "2026-06-30T12:06:57.213Z",
		"size": 17004,
		"path": "../public/assets/space-grotesk-latin-400-normal-BnQMeOim.woff"
	},
	"/assets/space-grotesk-latin-400-normal-CJ-V5oYT.woff2": {
		"type": "font/woff2",
		"etag": "\"344c-4RfT7aFk3EnbF6Hh/aQS0Dwt6dI\"",
		"mtime": "2026-06-30T12:06:57.214Z",
		"size": 13388,
		"path": "../public/assets/space-grotesk-latin-400-normal-CJ-V5oYT.woff2"
	},
	"/assets/space-grotesk-latin-500-normal-CNSSEhBt.woff": {
		"type": "font/woff",
		"etag": "\"425c-1Gf7i6aAUt1Fd7tGn4+HkNYVOw0\"",
		"mtime": "2026-06-30T12:06:57.214Z",
		"size": 16988,
		"path": "../public/assets/space-grotesk-latin-500-normal-CNSSEhBt.woff"
	},
	"/assets/space-grotesk-latin-500-normal-lFbtlQH6.woff2": {
		"type": "font/woff2",
		"etag": "\"3400-3SdZBxxMFqhCiNds2b7VWFQknAo\"",
		"mtime": "2026-06-30T12:06:57.214Z",
		"size": 13312,
		"path": "../public/assets/space-grotesk-latin-500-normal-lFbtlQH6.woff2"
	},
	"/assets/space-grotesk-latin-700-normal-CwsQ-cCU.woff": {
		"type": "font/woff",
		"etag": "\"4020-6+Lv6SyfClI9gHZHIfMCmlje8BE\"",
		"mtime": "2026-06-30T12:06:57.216Z",
		"size": 16416,
		"path": "../public/assets/space-grotesk-latin-700-normal-CwsQ-cCU.woff"
	},
	"/assets/space-grotesk-latin-700-normal-RjhwGPKo.woff2": {
		"type": "font/woff2",
		"etag": "\"3228-CUaBya012LbSd7QFPXYy34srV9k\"",
		"mtime": "2026-06-30T12:06:57.216Z",
		"size": 12840,
		"path": "../public/assets/space-grotesk-latin-700-normal-RjhwGPKo.woff2"
	},
	"/assets/space-grotesk-latin-ext-400-normal-CfP_5XZW.woff2": {
		"type": "font/woff2",
		"etag": "\"2fe0-c3xYOMmU2wqZgHAe410CnfS5OGE\"",
		"mtime": "2026-06-30T12:06:57.218Z",
		"size": 12256,
		"path": "../public/assets/space-grotesk-latin-ext-400-normal-CfP_5XZW.woff2"
	},
	"/assets/space-grotesk-latin-ext-400-normal-DRPE3kg4.woff": {
		"type": "font/woff",
		"etag": "\"4194-65sd2rUQ1RXSRzlf/UdsfnxLy8Q\"",
		"mtime": "2026-06-30T12:06:57.220Z",
		"size": 16788,
		"path": "../public/assets/space-grotesk-latin-ext-400-normal-DRPE3kg4.woff"
	},
	"/assets/space-grotesk-latin-ext-500-normal-3dgZTiw9.woff": {
		"type": "font/woff",
		"etag": "\"4194-lEc2+CK+OmFY8daY+Wm75LFagxg\"",
		"mtime": "2026-06-30T12:06:57.220Z",
		"size": 16788,
		"path": "../public/assets/space-grotesk-latin-ext-500-normal-3dgZTiw9.woff"
	},
	"/assets/space-grotesk-latin-ext-500-normal-DUe3BAxM.woff2": {
		"type": "font/woff2",
		"etag": "\"2ff0-mtGWYEDYMf3fdjHjQ1RuTjmuuKI\"",
		"mtime": "2026-06-30T12:06:57.220Z",
		"size": 12272,
		"path": "../public/assets/space-grotesk-latin-ext-500-normal-DUe3BAxM.woff2"
	},
	"/assets/space-grotesk-latin-ext-700-normal-BQnZhY3m.woff2": {
		"type": "font/woff2",
		"etag": "\"2ed8-TBMRoktioCogW6/NM520zKySXcU\"",
		"mtime": "2026-06-30T12:06:57.222Z",
		"size": 11992,
		"path": "../public/assets/space-grotesk-latin-ext-700-normal-BQnZhY3m.woff2"
	},
	"/assets/space-grotesk-latin-ext-700-normal-HVCqSBdx.woff": {
		"type": "font/woff",
		"etag": "\"404c-FfjgS7J3XUuOSTAwuPCMJSSAvt0\"",
		"mtime": "2026-06-30T12:06:57.222Z",
		"size": 16460,
		"path": "../public/assets/space-grotesk-latin-ext-700-normal-HVCqSBdx.woff"
	},
	"/assets/space-grotesk-vietnamese-400-normal-B7xT_GF5.woff2": {
		"type": "font/woff2",
		"etag": "\"10c8-1JGRw5hFjWC+pPUJ6csycnKgHxA\"",
		"mtime": "2026-06-30T12:06:57.222Z",
		"size": 4296,
		"path": "../public/assets/space-grotesk-vietnamese-400-normal-B7xT_GF5.woff2"
	},
	"/assets/space-grotesk-vietnamese-400-normal-BIWiOVfw.woff": {
		"type": "font/woff",
		"etag": "\"1660-Gmat2y5b870gScU9KClIjJn3GqI\"",
		"mtime": "2026-06-30T12:06:57.224Z",
		"size": 5728,
		"path": "../public/assets/space-grotesk-vietnamese-400-normal-BIWiOVfw.woff"
	},
	"/assets/space-grotesk-vietnamese-500-normal-BTqKIpxg.woff": {
		"type": "font/woff",
		"etag": "\"1654-JlaMSeciVxCokGS+Dt+IN52KVoc\"",
		"mtime": "2026-06-30T12:06:57.224Z",
		"size": 5716,
		"path": "../public/assets/space-grotesk-vietnamese-500-normal-BTqKIpxg.woff"
	},
	"/assets/space-grotesk-vietnamese-500-normal-BmEvtly_.woff2": {
		"type": "font/woff2",
		"etag": "\"10e4-UNTFOrnCmfOI7UspLiuWXm466zw\"",
		"mtime": "2026-06-30T12:06:57.224Z",
		"size": 4324,
		"path": "../public/assets/space-grotesk-vietnamese-500-normal-BmEvtly_.woff2"
	},
	"/assets/space-grotesk-vietnamese-700-normal-DMty7AZE.woff2": {
		"type": "font/woff2",
		"etag": "\"106c-OvrbrxRBqhaoWMfcV7ZXQfDd/bQ\"",
		"mtime": "2026-06-30T12:06:57.226Z",
		"size": 4204,
		"path": "../public/assets/space-grotesk-vietnamese-700-normal-DMty7AZE.woff2"
	},
	"/assets/space-grotesk-vietnamese-700-normal-Duxec5Rn.woff": {
		"type": "font/woff",
		"etag": "\"15d4-G/yewNcLknFzx6or6nPJYti8zRg\"",
		"mtime": "2026-06-30T12:06:57.228Z",
		"size": 5588,
		"path": "../public/assets/space-grotesk-vietnamese-700-normal-Duxec5Rn.woff"
	},
	"/assets/styles-CTnD6cBD.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"1ee98-1ZOwJg6unXihaXen8slNcLZb1hc\"",
		"mtime": "2026-06-30T12:06:57.228Z",
		"size": 126616,
		"path": "../public/assets/styles-CTnD6cBD.css"
	},
	"/assets/texio-character-DiW5tuVn.jpg": {
		"type": "image/jpeg",
		"etag": "\"3e50a-u2g5Glx9cYR77kNsxmZ1XLlqMgg\"",
		"mtime": "2026-06-30T12:06:57.228Z",
		"size": 255242,
		"path": "../public/assets/texio-character-DiW5tuVn.jpg"
	},
	"/assets/ShieldScene-B6KCq62t.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f5e53-Jd0V4UkRe0h89fn15HZSzYwDSb4\"",
		"mtime": "2026-06-30T12:06:57.197Z",
		"size": 1007187,
		"path": "../public/assets/ShieldScene-B6KCq62t.js"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_agfRGw = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_agfRGw
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
