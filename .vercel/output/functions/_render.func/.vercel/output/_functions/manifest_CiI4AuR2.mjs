import 'cookie';
import 'kleur/colors';
import './chunks/astro-designed-error-pages_DviqZm45.mjs';
import { e as decodeKey } from './chunks/astro/server_Clts2hpF.mjs';
import 'clsx';
import { compile } from 'path-to-regexp';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    const path = toPath(sanitizedParams);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///D:/Dev/Landingpage/","adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.D-2wbxhY.js"}],"styles":[{"type":"external","src":"/_astro/about.BpY-Sczl.css"}],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.D-2wbxhY.js"}],"styles":[{"type":"external","src":"/_astro/about.BpY-Sczl.css"}],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/articles/api/search.json","isIndex":false,"type":"endpoint","pattern":"^\\/articles\\/api\\/search\\.json\\/?$","segments":[[{"content":"articles","dynamic":false,"spread":false}],[{"content":"api","dynamic":false,"spread":false}],[{"content":"search.json","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/articles/api/search.json.ts","pathname":"/articles/api/search.json","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.D-2wbxhY.js"}],"styles":[{"type":"external","src":"/_astro/about.BpY-Sczl.css"}],"routeData":{"route":"/articles","isIndex":true,"type":"page","pattern":"^\\/articles\\/?$","segments":[[{"content":"articles","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/articles/index.astro","pathname":"/articles","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.D-2wbxhY.js"}],"styles":[{"type":"external","src":"/_astro/about.BpY-Sczl.css"}],"routeData":{"route":"/articles/[...slug]","isIndex":false,"type":"page","pattern":"^\\/articles(?:\\/(.*?))?\\/?$","segments":[[{"content":"articles","dynamic":false,"spread":false}],[{"content":"...slug","dynamic":true,"spread":true}]],"params":["...slug"],"component":"src/pages/articles/[...slug].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.D-2wbxhY.js"}],"styles":[{"type":"external","src":"/_astro/about.BpY-Sczl.css"}],"routeData":{"route":"/community","isIndex":false,"type":"page","pattern":"^\\/community\\/?$","segments":[[{"content":"community","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/community.astro","pathname":"/community","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.D-2wbxhY.js"}],"styles":[{"type":"external","src":"/_astro/about.BpY-Sczl.css"}],"routeData":{"route":"/pricing","isIndex":false,"type":"page","pattern":"^\\/pricing\\/?$","segments":[[{"content":"pricing","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/pricing.astro","pathname":"/pricing","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.D-2wbxhY.js"}],"styles":[{"type":"external","src":"/_astro/about.BpY-Sczl.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["D:/Dev/Landingpage/src/pages/articles/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/articles/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["D:/Dev/Landingpage/src/pages/articles/api/search.json.ts",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/articles/api/search.json@_@ts",{"propagation":"in-tree","containsHead":false}],["D:/Dev/Landingpage/src/pages/articles/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/articles/index@_@astro",{"propagation":"in-tree","containsHead":false}],["D:/Dev/Landingpage/src/pages/404.astro",{"propagation":"none","containsHead":true}],["D:/Dev/Landingpage/src/pages/about.astro",{"propagation":"none","containsHead":true}],["D:/Dev/Landingpage/src/pages/community.astro",{"propagation":"none","containsHead":true}],["D:/Dev/Landingpage/src/pages/index.astro",{"propagation":"none","containsHead":true}],["D:/Dev/Landingpage/src/pages/pricing.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/articles/api/search.json@_@ts":"pages/articles/api/search.json.astro.mjs","\u0000@astro-page:src/pages/articles/[...slug]@_@astro":"pages/articles/_---slug_.astro.mjs","\u0000@astro-page:src/pages/community@_@astro":"pages/community.astro.mjs","\u0000@astro-page:src/pages/pricing@_@astro":"pages/pricing.astro.mjs","\u0000@astro-page:src/pages/articles/index@_@astro":"pages/articles.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","D:/Dev/Landingpage/node_modules/astro/dist/env/setup.js":"chunks/astro/env-setup_Cr6XTFvb.mjs","D:/Dev/Landingpage/src/content/blog/How to quickly deploy a static website.md?astroContentCollectionEntry=true":"chunks/How to quickly deploy a static website_D0oVGE1w.mjs","D:/Dev/Landingpage/src/content/blog/cannon-excellence.md?astroContentCollectionEntry=true":"chunks/cannon-excellence_D-1NOcA5.mjs","D:/Dev/Landingpage/src/content/blog/cutting-edge-tablets.md?astroContentCollectionEntry=true":"chunks/cutting-edge-tablets_DSNzKSgs.mjs","D:/Dev/Landingpage/src/content/blog/elevate-your-mobile-experience.md?astroContentCollectionEntry=true":"chunks/elevate-your-mobile-experience_6JBHnt1R.mjs","D:/Dev/Landingpage/src/content/blog/guardian-of-the-digital-realm.md?astroContentCollectionEntry=true":"chunks/guardian-of-the-digital-realm_BmZRr2TR.mjs","D:/Dev/Landingpage/src/content/blog/How to quickly deploy a static website.md?astroPropagatedAssets":"chunks/How to quickly deploy a static website_BGnV33uH.mjs","D:/Dev/Landingpage/src/content/blog/cannon-excellence.md?astroPropagatedAssets":"chunks/cannon-excellence_BIQ24CF6.mjs","D:/Dev/Landingpage/src/content/blog/cutting-edge-tablets.md?astroPropagatedAssets":"chunks/cutting-edge-tablets_FWEasSPB.mjs","D:/Dev/Landingpage/src/content/blog/elevate-your-mobile-experience.md?astroPropagatedAssets":"chunks/elevate-your-mobile-experience_CdLThNjd.mjs","D:/Dev/Landingpage/src/content/blog/guardian-of-the-digital-realm.md?astroPropagatedAssets":"chunks/guardian-of-the-digital-realm_zLrXcGT6.mjs","\u0000astro:asset-imports":"chunks/_astro_asset-imports_D9aVaOQr.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_BcEe_9wP.mjs","D:/Dev/Landingpage/src/content/blog/How to quickly deploy a static website.md":"chunks/How to quickly deploy a static website_BwA42Ojq.mjs","D:/Dev/Landingpage/src/content/blog/cannon-excellence.md":"chunks/cannon-excellence_BxyrFf0n.mjs","D:/Dev/Landingpage/src/content/blog/cutting-edge-tablets.md":"chunks/cutting-edge-tablets_BLhZBCpO.mjs","D:/Dev/Landingpage/src/content/blog/elevate-your-mobile-experience.md":"chunks/elevate-your-mobile-experience_3fHNkHQf.mjs","D:/Dev/Landingpage/src/content/blog/guardian-of-the-digital-realm.md":"chunks/guardian-of-the-digital-realm_Trd3OVIz.mjs","\u0000@astrojs-manifest":"manifest_CiI4AuR2.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.D-2wbxhY.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/about.BpY-Sczl.css","/404.svg","/Alimama.ttf","/cover.png","/favicon.svg","/Hero.svg","/join.svg","/Logo.svg","/blog/image1.png","/blog/image2.png","/blog/image3.png","/blog/image4.png","/blog/image5.png","/clients/01.svg","/clients/02.svg","/clients/03.svg","/clients/04.svg","/clients/05.svg","/clients/06.svg","/clients/bubble.svg","/clients/contact.svg","/team/c1.png","/team/c2.png","/team/c3.png","/team/contact.svg","/team/ln.svg","/team/lng.svg","/team/minus.svg","/team/plus.svg","/team/prof.png","/team/vector.svg","/services/01.svg","/services/02.svg","/services/03.svg","/services/04.svg","/services/05.svg","/services/06.svg","/services/ag.svg","/services/agc.svg","/services/aw.svg","/services/Illustration.svg","/_astro/hoisted.D-2wbxhY.js"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"dLdiw3Ext1qFvPLlnKGSFCn01iUNik/4jgRXGaaiGj8=","experimentalEnvGetSecretEnabled":false});

export { manifest };
