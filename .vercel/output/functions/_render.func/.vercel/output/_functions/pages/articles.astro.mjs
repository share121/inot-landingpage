/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent, d as addAttribute, b as createAstro } from '../chunks/astro/server_W4RunM5f.mjs';
import 'kleur/colors';
import { $ as $$Container, a as $$Layout } from '../chunks/Layout_CxqxieVZ.mjs';
import { f as formatDate } from '../chunks/utils_BW1fk8xr.mjs';
import 'clsx';
import { g as getCollection } from '../chunks/_astro_content_DiQUOG3i.mjs';
export { renderers } from '../renderers.mjs';

const $$ArticleIcon = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg class="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clip-rule="evenodd"></path><path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path></svg>`;
}, "D:/Dev/Landingpage/src/components/Icons/ArticleIcon.astro", void 0);

const $$VideoIcon = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg class="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg>`;
}, "D:/Dev/Landingpage/src/components/Icons/VideoIcon.astro", void 0);

const $$Astro$1 = createAstro();
const $$ArticleCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ArticleCard;
  const { article } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="p-6 bg-white rounded-3xl border border-gray-200 shadow-card"> <div class="flex justify-between items-center mb-5 text-gray-500"> <span class="bg-lime text-black text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded"> ${article.data.type == "Article" ? renderTemplate`${renderComponent($$result, "ArticleIcon", $$ArticleIcon, {})}` : renderTemplate`${renderComponent($$result, "VideoIcon", $$VideoIcon, {})}`} ${article.data.type} </span> <span class="text-sm">${formatDate(article.data.pubDate)}</span> </div> <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">${article.data.title}</h2> <p class="mb-5 font-light text-gray-500" style="white-space: pre-line">${article.data.summary}</p> <div class="flex justify-between items-center"> <div class="flex items-center space-x-4"> <img class="w-7 h-7 rounded-full"${addAttribute(article.data.authImage, "src")}${addAttribute(article.data.author + " cover", "alt")}> <span class="font-medium"> ${article.data.author} </span> </div> <a${addAttribute("/articles/" + article.slug, "href")} class="inline-flex items-center font-medium text-black hover:text-lime">
Read more
<svg class="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg> </a> </div> </article>`;
}, "D:/Dev/Landingpage/src/components/ArticleCard.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  +Astro2.url.searchParams.get("page") || 1;
  const allBlogArticles = (await getCollection("blog")).sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Positivus - Blog" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="space-y-20"> ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6"> <div class="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8"> <h2 class="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900">Our Blog</h2> <p class="font-light text-gray-500 sm:text-xl">We use an agile approach to test assumptions and connect with the needs of your audience early and often.</p> </div> <div class="grid gap-8 lg:grid-cols-2"> ${allBlogArticles.map((article) => renderTemplate`${renderComponent($$result3, "ArticleCard", $$ArticleCard, { "article": article })}`)} </div> </div> ` })} </main> ` })}`;
}, "D:/Dev/Landingpage/src/pages/articles/index.astro", void 0);

const $$file = "D:/Dev/Landingpage/src/pages/articles/index.astro";
const $$url = "/articles";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
