/* empty css                                    */
import { c as createComponent, r as renderTemplate, a as renderComponent, b as createAstro, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_W4RunM5f.mjs';
import 'kleur/colors';
import { $ as $$Container, a as $$Layout } from '../../chunks/Layout_CxqxieVZ.mjs';
import { a as getEntry } from '../../chunks/_astro_content_DiQUOG3i.mjs';
import { f as formatDate } from '../../chunks/utils_BW1fk8xr.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { slug } = Astro2.params;
  if (slug === void 0) {
    throw new Error("Slug is required");
  }
  const entry = await getEntry("blog", slug);
  if (entry === void 0) {
    return Astro2.redirect("/404");
  }
  const { Content } = await entry.render();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to My site" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="space-y-40 mb-40 pt-24"> ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` <section class="bg-white"> <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-1 lg:py-16 lg:px-6"> <div class="font-light text-gray-500 sm:text-lg"> <a href="/articles" class="inline-flex items-center font-medium text-black hover:text-lime my-4"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18"></path> </svg> <span class="ml-1 font-bold text-lg">All Articles</span> </a> <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">${entry.data.title}</h2> <h3 class="text-lg mb-2">Written by ${entry.data.author} on ${formatDate(entry.data.pubDate)}</h3> <img${addAttribute("/blog/" + entry.data.image, "src")} alt="Article Image" class="w-full h-auto rounded-xl my-6"> <div class="content"> ${renderComponent($$result3, "Content", Content, {})} </div> </div> </div> </section> ` })} </main> ` })}`;
}, "D:/Dev/Landingpage/src/pages/articles/[...slug].astro", void 0);

const $$file = "D:/Dev/Landingpage/src/pages/articles/[...slug].astro";
const $$url = "/articles/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
