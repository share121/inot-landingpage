import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_rGoEsLB8.mjs';
import { manifest } from './manifest_BKdtyWPr.mjs';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/about.astro.mjs');
const _page3 = () => import('./pages/articles/api/search.json.astro.mjs');
const _page4 = () => import('./pages/articles.astro.mjs');
const _page5 = () => import('./pages/articles/_---slug_.astro.mjs');
const _page6 = () => import('./pages/community.astro.mjs');
const _page7 = () => import('./pages/pricing.astro.mjs');
const _page8 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/.pnpm/astro@4.15.1_@types+node@16.18.11_rollup@4.21.2_typescript@5.5.4/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about.astro", _page2],
    ["src/pages/articles/api/search.json.ts", _page3],
    ["src/pages/articles/index.astro", _page4],
    ["src/pages/articles/[...slug].astro", _page5],
    ["src/pages/community.astro", _page6],
    ["src/pages/pricing.astro", _page7],
    ["src/pages/index.astro", _page8]
]);
const serverIslandMap = new Map();

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "79febe82-0a16-4f27-9b3c-bdf2381f5a6f",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
