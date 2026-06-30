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
		"mtime": "2026-06-30T17:57:32.004Z",
		"size": 13768,
		"path": "../public/assets/bebas-neue-latin-400-normal-9mHNbWWO.woff2"
	},
	"/assets/bebas-neue-latin-400-normal-Bi-ndsyu.woff": {
		"type": "font/woff",
		"etag": "\"2bac-eEj3nehPbQ71i2QuxVclm03KwLw\"",
		"mtime": "2026-06-30T17:57:32.004Z",
		"size": 11180,
		"path": "../public/assets/bebas-neue-latin-400-normal-Bi-ndsyu.woff"
	},
	"/assets/bebas-neue-latin-ext-400-normal-DWiEslNC.woff2": {
		"type": "font/woff2",
		"etag": "\"22e0-mzPqRLuD3PyHiYXLyEc0J5G7qos\"",
		"mtime": "2026-06-30T17:57:32.004Z",
		"size": 8928,
		"path": "../public/assets/bebas-neue-latin-ext-400-normal-DWiEslNC.woff2"
	},
	"/assets/bebas-neue-latin-ext-400-normal-HFKRJXnW.woff": {
		"type": "font/woff",
		"etag": "\"1d60-ft2TUJBxdO2bxlvUsr1cy9Aohts\"",
		"mtime": "2026-06-30T17:57:32.004Z",
		"size": 7520,
		"path": "../public/assets/bebas-neue-latin-ext-400-normal-HFKRJXnW.woff"
	},
	"/assets/jetbrains-mono-cyrillic-400-normal-BEIGL1Tu.woff2": {
		"type": "font/woff2",
		"etag": "\"14d0-wP6+M+HGdr9/ksFVSvTe+I0Y0rI\"",
		"mtime": "2026-06-30T17:57:32.012Z",
		"size": 5328,
		"path": "../public/assets/jetbrains-mono-cyrillic-400-normal-BEIGL1Tu.woff2"
	},
	"/assets/jetbrains-mono-cyrillic-400-normal-ugxPyKxw.woff": {
		"type": "font/woff",
		"etag": "\"1b40-oGh4jaPe06qJnXZqmnfGfJQP4Ag\"",
		"mtime": "2026-06-30T17:57:32.012Z",
		"size": 6976,
		"path": "../public/assets/jetbrains-mono-cyrillic-400-normal-ugxPyKxw.woff"
	},
	"/assets/index-hPtT2vDF.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"54560-qNMMMNF9/XtKiQF1dSv2qs5n8fs\"",
		"mtime": "2026-06-30T17:57:32.000Z",
		"size": 345440,
		"path": "../public/assets/index-hPtT2vDF.js"
	},
	"/assets/jetbrains-mono-cyrillic-500-normal-DJqRU3vO.woff": {
		"type": "font/woff",
		"etag": "\"1b70-ULliHx6NDb6WoprjCD9cN6A3H2M\"",
		"mtime": "2026-06-30T17:57:32.012Z",
		"size": 7024,
		"path": "../public/assets/jetbrains-mono-cyrillic-500-normal-DJqRU3vO.woff"
	},
	"/assets/jetbrains-mono-cyrillic-500-normal-DmUKJPL_.woff2": {
		"type": "font/woff2",
		"etag": "\"14ec-QTcY+/vMX0UPkoTgSddbaoRkEuY\"",
		"mtime": "2026-06-30T17:57:32.014Z",
		"size": 5356,
		"path": "../public/assets/jetbrains-mono-cyrillic-500-normal-DmUKJPL_.woff2"
	},
	"/assets/jetbrains-mono-greek-400-normal-B9oWc5Lo.woff": {
		"type": "font/woff",
		"etag": "\"1620-uF5DPKyxthnzZIfm2hBQUEmcCDI\"",
		"mtime": "2026-06-30T17:57:32.014Z",
		"size": 5664,
		"path": "../public/assets/jetbrains-mono-greek-400-normal-B9oWc5Lo.woff"
	},
	"/assets/jetbrains-mono-greek-400-normal-C190GLew.woff2": {
		"type": "font/woff2",
		"etag": "\"1084-bKcqPuNhRWWCQbsWLqSOoRkxv70\"",
		"mtime": "2026-06-30T17:57:32.014Z",
		"size": 4228,
		"path": "../public/assets/jetbrains-mono-greek-400-normal-C190GLew.woff2"
	},
	"/assets/jetbrains-mono-greek-500-normal-D7SFKleX.woff": {
		"type": "font/woff",
		"etag": "\"1658-H/mjwdfS4m1yKQXgRUK+RKkuFfo\"",
		"mtime": "2026-06-30T17:57:32.014Z",
		"size": 5720,
		"path": "../public/assets/jetbrains-mono-greek-500-normal-D7SFKleX.woff"
	},
	"/assets/jetbrains-mono-greek-500-normal-JpySY46c.woff2": {
		"type": "font/woff2",
		"etag": "\"10bc-KUCG+hIKwoSOUbV7fpNmCS3FLvM\"",
		"mtime": "2026-06-30T17:57:32.014Z",
		"size": 4284,
		"path": "../public/assets/jetbrains-mono-greek-500-normal-JpySY46c.woff2"
	},
	"/assets/jetbrains-mono-latin-400-normal-6-qcROiO.woff": {
		"type": "font/woff",
		"etag": "\"6b68-PjVYVbMXaGEDnHrQQmycVNcGrEA\"",
		"mtime": "2026-06-30T17:57:32.017Z",
		"size": 27496,
		"path": "../public/assets/jetbrains-mono-latin-400-normal-6-qcROiO.woff"
	},
	"/assets/jetbrains-mono-latin-400-normal-V6pRDFza.woff2": {
		"type": "font/woff2",
		"etag": "\"52b0-OuYhUYIQ5ljyzsko4MOu3m0M7+I\"",
		"mtime": "2026-06-30T17:57:32.017Z",
		"size": 21168,
		"path": "../public/assets/jetbrains-mono-latin-400-normal-V6pRDFza.woff2"
	},
	"/assets/car5-j4VchyCy.png": {
		"type": "image/png",
		"etag": "\"f2ef4-Q0VGUSc1WeZejD0d39rufbr2FiQ\"",
		"mtime": "2026-06-30T17:57:32.008Z",
		"size": 995060,
		"path": "../public/assets/car5-j4VchyCy.png"
	},
	"/assets/car7-z-IIDrZI.png": {
		"type": "image/png",
		"etag": "\"fca5a-ulbox2HSRMnyiEAyC16tb67grUA\"",
		"mtime": "2026-06-30T17:57:32.010Z",
		"size": 1034842,
		"path": "../public/assets/car7-z-IIDrZI.png"
	},
	"/assets/avatar_front_with_shield-DQ4Fl3-_.png": {
		"type": "image/png",
		"etag": "\"12e2ab-/aQCwMHJdGGpgUQRVWurR27NbtY\"",
		"mtime": "2026-06-30T17:57:32.004Z",
		"size": 1237675,
		"path": "../public/assets/avatar_front_with_shield-DQ4Fl3-_.png"
	},
	"/assets/car1-CQIDoKNb.png": {
		"type": "image/png",
		"etag": "\"126f9d-WSisbGl7aF6SPLOi66JekMA+Ap0\"",
		"mtime": "2026-06-30T17:57:32.006Z",
		"size": 1208221,
		"path": "../public/assets/car1-CQIDoKNb.png"
	},
	"/assets/car2-D9liH9EP.png": {
		"type": "image/png",
		"etag": "\"1128e3-kHKZr6FdDndRWY3kBlgCMJb1SWI\"",
		"mtime": "2026-06-30T17:57:32.006Z",
		"size": 1124579,
		"path": "../public/assets/car2-D9liH9EP.png"
	},
	"/assets/car3-9OXQzWx9.png": {
		"type": "image/png",
		"etag": "\"119333-7ZBCfn8mqYLFmmK2eIIGqvCoxRQ\"",
		"mtime": "2026-06-30T17:57:32.008Z",
		"size": 1151795,
		"path": "../public/assets/car3-9OXQzWx9.png"
	},
	"/assets/car4-BMBqk_4o.png": {
		"type": "image/png",
		"etag": "\"122a44-Ybbo4pU+UxRV5PAqWZPbvP0Sr+0\"",
		"mtime": "2026-06-30T17:57:32.008Z",
		"size": 1190468,
		"path": "../public/assets/car4-BMBqk_4o.png"
	},
	"/assets/car6-CEzLlCRT.png": {
		"type": "image/png",
		"etag": "\"1337e4-H4QAvEoMRgFD1FjGs/h3rg9e1bU\"",
		"mtime": "2026-06-30T17:57:32.010Z",
		"size": 1259492,
		"path": "../public/assets/car6-CEzLlCRT.png"
	},
	"/assets/car8-CY-1FlI8.png": {
		"type": "image/png",
		"etag": "\"13200f-X6lTbiLxpYRbta8cO06yQI+mtho\"",
		"mtime": "2026-06-30T17:57:32.012Z",
		"size": 1253391,
		"path": "../public/assets/car8-CY-1FlI8.png"
	},
	"/assets/car9-YGqRX0Uu.png": {
		"type": "image/png",
		"etag": "\"1174a6-Bv7RMM1TSsnWNeIKcKsEIgxGSGo\"",
		"mtime": "2026-06-30T17:57:32.012Z",
		"size": 1143974,
		"path": "../public/assets/car9-YGqRX0Uu.png"
	},
	"/assets/jetbrains-mono-latin-500-normal-CJOVTJB7.woff": {
		"type": "font/woff",
		"etag": "\"6e30-1zAcLD7/opfpWjVLFZBVG0EzKds\"",
		"mtime": "2026-06-30T17:57:32.018Z",
		"size": 28208,
		"path": "../public/assets/jetbrains-mono-latin-500-normal-CJOVTJB7.woff"
	},
	"/assets/jetbrains-mono-latin-500-normal-BWZEU5yA.woff2": {
		"type": "font/woff2",
		"etag": "\"5548-NcKnK3WfWhmDT/Dd1/lKnL5VeGA\"",
		"mtime": "2026-06-30T17:57:32.018Z",
		"size": 21832,
		"path": "../public/assets/jetbrains-mono-latin-500-normal-BWZEU5yA.woff2"
	},
	"/assets/jetbrains-mono-latin-ext-400-normal-Bc8Ftmh3.woff2": {
		"type": "font/woff2",
		"etag": "\"1ca8-sBWBn421OuV4ZHOZxHJjafE1huU\"",
		"mtime": "2026-06-30T17:57:32.019Z",
		"size": 7336,
		"path": "../public/assets/jetbrains-mono-latin-ext-400-normal-Bc8Ftmh3.woff2"
	},
	"/assets/jetbrains-mono-latin-ext-400-normal-fXTG6kC5.woff": {
		"type": "font/woff",
		"etag": "\"2790-MZORDuKd3VMoaYVXmW8yROWL9sY\"",
		"mtime": "2026-06-30T17:57:32.020Z",
		"size": 10128,
		"path": "../public/assets/jetbrains-mono-latin-ext-400-normal-fXTG6kC5.woff"
	},
	"/assets/jetbrains-mono-latin-ext-500-normal-ckzbgY84.woff": {
		"type": "font/woff",
		"etag": "\"2860-o0XUF4uBh1xmGSf1BGPgnX+rm+M\"",
		"mtime": "2026-06-30T17:57:32.021Z",
		"size": 10336,
		"path": "../public/assets/jetbrains-mono-latin-ext-500-normal-ckzbgY84.woff"
	},
	"/assets/jetbrains-mono-latin-ext-500-normal-Cut-4mMH.woff2": {
		"type": "font/woff2",
		"etag": "\"1d68-vgxZ8wbhZM0rlqgWMhUKb0zsbWM\"",
		"mtime": "2026-06-30T17:57:32.020Z",
		"size": 7528,
		"path": "../public/assets/jetbrains-mono-latin-ext-500-normal-Cut-4mMH.woff2"
	},
	"/assets/jetbrains-mono-vietnamese-400-normal-CqNFfHCs.woff": {
		"type": "font/woff",
		"etag": "\"14fc-wa8Pi/SxAFg9ve8x5GbO/sMJWEo\"",
		"mtime": "2026-06-30T17:57:32.021Z",
		"size": 5372,
		"path": "../public/assets/jetbrains-mono-vietnamese-400-normal-CqNFfHCs.woff"
	},
	"/assets/jetbrains-mono-vietnamese-500-normal-DNRqzVM1.woff": {
		"type": "font/woff",
		"etag": "\"1564-06JmuoIOvhZDwhIY/WiPtAooaNw\"",
		"mtime": "2026-06-30T17:57:32.021Z",
		"size": 5476,
		"path": "../public/assets/jetbrains-mono-vietnamese-500-normal-DNRqzVM1.woff"
	},
	"/assets/project-oblivion-DDMr4SK_.jpg": {
		"type": "image/jpeg",
		"etag": "\"10fa6-cvYu/bwBpBjZln7tE0L5OlY1SSw\"",
		"mtime": "2026-06-30T17:57:32.022Z",
		"size": 69542,
		"path": "../public/assets/project-oblivion-DDMr4SK_.jpg"
	},
	"/assets/project-tx-CE2clHhe.jpg": {
		"type": "image/jpeg",
		"etag": "\"11d33-oqU+IgiTy5naLgi0aS0DqTjp8YI\"",
		"mtime": "2026-06-30T17:57:32.022Z",
		"size": 73011,
		"path": "../public/assets/project-tx-CE2clHhe.jpg"
	},
	"/assets/routes-DKA8owsZ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f9b3-GZFesWwKiC+R7Fas78nYLwqNsCo\"",
		"mtime": "2026-06-30T17:57:32.002Z",
		"size": 63923,
		"path": "../public/assets/routes-DKA8owsZ.js"
	},
	"/assets/project-undefined-ClVVtDEI.jpg": {
		"type": "image/jpeg",
		"etag": "\"21c7b-YpAzbbYmOwdB9l3r7pnSjsIlg0c\"",
		"mtime": "2026-06-30T17:57:32.023Z",
		"size": 138363,
		"path": "../public/assets/project-undefined-ClVVtDEI.jpg"
	},
	"/assets/space-grotesk-latin-400-normal-BnQMeOim.woff": {
		"type": "font/woff",
		"etag": "\"426c-ghmNOmJRvnMHZL5v05+7tCgOuLs\"",
		"mtime": "2026-06-30T17:57:32.023Z",
		"size": 17004,
		"path": "../public/assets/space-grotesk-latin-400-normal-BnQMeOim.woff"
	},
	"/assets/space-grotesk-latin-400-normal-CJ-V5oYT.woff2": {
		"type": "font/woff2",
		"etag": "\"344c-4RfT7aFk3EnbF6Hh/aQS0Dwt6dI\"",
		"mtime": "2026-06-30T17:57:32.024Z",
		"size": 13388,
		"path": "../public/assets/space-grotesk-latin-400-normal-CJ-V5oYT.woff2"
	},
	"/assets/space-grotesk-latin-500-normal-CNSSEhBt.woff": {
		"type": "font/woff",
		"etag": "\"425c-1Gf7i6aAUt1Fd7tGn4+HkNYVOw0\"",
		"mtime": "2026-06-30T17:57:32.024Z",
		"size": 16988,
		"path": "../public/assets/space-grotesk-latin-500-normal-CNSSEhBt.woff"
	},
	"/assets/space-grotesk-latin-500-normal-lFbtlQH6.woff2": {
		"type": "font/woff2",
		"etag": "\"3400-3SdZBxxMFqhCiNds2b7VWFQknAo\"",
		"mtime": "2026-06-30T17:57:32.025Z",
		"size": 13312,
		"path": "../public/assets/space-grotesk-latin-500-normal-lFbtlQH6.woff2"
	},
	"/assets/ShieldScene-bbEPMvuq.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e4160-7icdBPhqS55HIqp6dCkHYdSoCKI\"",
		"mtime": "2026-06-30T17:57:32.002Z",
		"size": 934240,
		"path": "../public/assets/ShieldScene-bbEPMvuq.js"
	},
	"/assets/space-grotesk-latin-700-normal-CwsQ-cCU.woff": {
		"type": "font/woff",
		"etag": "\"4020-6+Lv6SyfClI9gHZHIfMCmlje8BE\"",
		"mtime": "2026-06-30T17:57:32.025Z",
		"size": 16416,
		"path": "../public/assets/space-grotesk-latin-700-normal-CwsQ-cCU.woff"
	},
	"/assets/space-grotesk-latin-700-normal-RjhwGPKo.woff2": {
		"type": "font/woff2",
		"etag": "\"3228-CUaBya012LbSd7QFPXYy34srV9k\"",
		"mtime": "2026-06-30T17:57:32.025Z",
		"size": 12840,
		"path": "../public/assets/space-grotesk-latin-700-normal-RjhwGPKo.woff2"
	},
	"/assets/space-grotesk-latin-ext-400-normal-CfP_5XZW.woff2": {
		"type": "font/woff2",
		"etag": "\"2fe0-c3xYOMmU2wqZgHAe410CnfS5OGE\"",
		"mtime": "2026-06-30T17:57:32.025Z",
		"size": 12256,
		"path": "../public/assets/space-grotesk-latin-ext-400-normal-CfP_5XZW.woff2"
	},
	"/assets/space-grotesk-latin-ext-400-normal-DRPE3kg4.woff": {
		"type": "font/woff",
		"etag": "\"4194-65sd2rUQ1RXSRzlf/UdsfnxLy8Q\"",
		"mtime": "2026-06-30T17:57:32.027Z",
		"size": 16788,
		"path": "../public/assets/space-grotesk-latin-ext-400-normal-DRPE3kg4.woff"
	},
	"/assets/space-grotesk-latin-ext-500-normal-3dgZTiw9.woff": {
		"type": "font/woff",
		"etag": "\"4194-lEc2+CK+OmFY8daY+Wm75LFagxg\"",
		"mtime": "2026-06-30T17:57:32.027Z",
		"size": 16788,
		"path": "../public/assets/space-grotesk-latin-ext-500-normal-3dgZTiw9.woff"
	},
	"/assets/space-grotesk-latin-ext-500-normal-DUe3BAxM.woff2": {
		"type": "font/woff2",
		"etag": "\"2ff0-mtGWYEDYMf3fdjHjQ1RuTjmuuKI\"",
		"mtime": "2026-06-30T17:57:32.027Z",
		"size": 12272,
		"path": "../public/assets/space-grotesk-latin-ext-500-normal-DUe3BAxM.woff2"
	},
	"/assets/space-grotesk-latin-ext-700-normal-BQnZhY3m.woff2": {
		"type": "font/woff2",
		"etag": "\"2ed8-TBMRoktioCogW6/NM520zKySXcU\"",
		"mtime": "2026-06-30T17:57:32.027Z",
		"size": 11992,
		"path": "../public/assets/space-grotesk-latin-ext-700-normal-BQnZhY3m.woff2"
	},
	"/assets/space-grotesk-latin-ext-700-normal-HVCqSBdx.woff": {
		"type": "font/woff",
		"etag": "\"404c-FfjgS7J3XUuOSTAwuPCMJSSAvt0\"",
		"mtime": "2026-06-30T17:57:32.027Z",
		"size": 16460,
		"path": "../public/assets/space-grotesk-latin-ext-700-normal-HVCqSBdx.woff"
	},
	"/assets/space-grotesk-vietnamese-400-normal-B7xT_GF5.woff2": {
		"type": "font/woff2",
		"etag": "\"10c8-1JGRw5hFjWC+pPUJ6csycnKgHxA\"",
		"mtime": "2026-06-30T17:57:32.027Z",
		"size": 4296,
		"path": "../public/assets/space-grotesk-vietnamese-400-normal-B7xT_GF5.woff2"
	},
	"/assets/space-grotesk-vietnamese-400-normal-BIWiOVfw.woff": {
		"type": "font/woff",
		"etag": "\"1660-Gmat2y5b870gScU9KClIjJn3GqI\"",
		"mtime": "2026-06-30T17:57:32.029Z",
		"size": 5728,
		"path": "../public/assets/space-grotesk-vietnamese-400-normal-BIWiOVfw.woff"
	},
	"/assets/space-grotesk-vietnamese-500-normal-BmEvtly_.woff2": {
		"type": "font/woff2",
		"etag": "\"10e4-UNTFOrnCmfOI7UspLiuWXm466zw\"",
		"mtime": "2026-06-30T17:57:32.029Z",
		"size": 4324,
		"path": "../public/assets/space-grotesk-vietnamese-500-normal-BmEvtly_.woff2"
	},
	"/assets/space-grotesk-vietnamese-500-normal-BTqKIpxg.woff": {
		"type": "font/woff",
		"etag": "\"1654-JlaMSeciVxCokGS+Dt+IN52KVoc\"",
		"mtime": "2026-06-30T17:57:32.029Z",
		"size": 5716,
		"path": "../public/assets/space-grotesk-vietnamese-500-normal-BTqKIpxg.woff"
	},
	"/assets/space-grotesk-vietnamese-700-normal-DMty7AZE.woff2": {
		"type": "font/woff2",
		"etag": "\"106c-OvrbrxRBqhaoWMfcV7ZXQfDd/bQ\"",
		"mtime": "2026-06-30T17:57:32.029Z",
		"size": 4204,
		"path": "../public/assets/space-grotesk-vietnamese-700-normal-DMty7AZE.woff2"
	},
	"/assets/space-grotesk-vietnamese-700-normal-Duxec5Rn.woff": {
		"type": "font/woff",
		"etag": "\"15d4-G/yewNcLknFzx6or6nPJYti8zRg\"",
		"mtime": "2026-06-30T17:57:32.029Z",
		"size": 5588,
		"path": "../public/assets/space-grotesk-vietnamese-700-normal-Duxec5Rn.woff"
	},
	"/assets/styles-COtU0fQ-.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"20d21-3IKaa4QWZgEbMXPKxmZOJcV+C60\"",
		"mtime": "2026-06-30T17:57:32.029Z",
		"size": 134433,
		"path": "../public/assets/styles-COtU0fQ-.css"
	},
	"/assets/texio-character-DiW5tuVn.jpg": {
		"type": "image/jpeg",
		"etag": "\"3e50a-u2g5Glx9cYR77kNsxmZ1XLlqMgg\"",
		"mtime": "2026-06-30T17:57:32.031Z",
		"size": 255242,
		"path": "../public/assets/texio-character-DiW5tuVn.jpg"
	},
	"/assets/texio_idle_katanas_bg-DbF-SvtO.mp4": {
		"type": "video/mp4",
		"etag": "\"383d5-douM5puauGln4kNztqLvkTzhMOk\"",
		"mtime": "2026-06-30T17:57:32.031Z",
		"size": 230357,
		"path": "../public/assets/texio_idle_katanas_bg-DbF-SvtO.mp4"
	},
	"/assets/texio_idle_whistle_bg-BDaBC3Nw.mp4": {
		"type": "video/mp4",
		"etag": "\"4106c-i/8kobIYi2ajN//YrQBsM9npsBY\"",
		"mtime": "2026-06-30T17:57:32.031Z",
		"size": 266348,
		"path": "../public/assets/texio_idle_whistle_bg-BDaBC3Nw.mp4"
	},
	"/assets/texio_idle_pistols_bg-BCLmf1oS.mp4": {
		"type": "video/mp4",
		"etag": "\"58df9-9pIXCKutt3LFIR6EAEzzsmiU+p0\"",
		"mtime": "2026-06-30T17:57:32.031Z",
		"size": 364025,
		"path": "../public/assets/texio_idle_pistols_bg-BCLmf1oS.mp4"
	},
	"/assets/texio_talks_bg-BsSHIyeO.mp4": {
		"type": "video/mp4",
		"etag": "\"3f889-aYle5Y6ZsDVdkQi8hwpo17ABhJI\"",
		"mtime": "2026-06-30T17:57:32.033Z",
		"size": 260233,
		"path": "../public/assets/texio_talks_bg-BsSHIyeO.mp4"
	},
	"/assets/use-spring-DqcVGU9I.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1e1fa-badDC95QEmbhmAF78x2lChYlKVI\"",
		"mtime": "2026-06-30T17:57:32.002Z",
		"size": 123386,
		"path": "../public/assets/use-spring-DqcVGU9I.js"
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
var _lazy_9AO6CP = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_9AO6CP
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
