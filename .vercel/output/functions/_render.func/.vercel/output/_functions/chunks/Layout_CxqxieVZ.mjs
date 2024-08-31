import { c as createComponent, r as renderTemplate, m as maybeRenderHead, i as renderSlot, a as renderComponent, d as addAttribute, b as createAstro, j as renderHead } from './astro/server_W4RunM5f.mjs';
import 'kleur/colors';
/* empty css                         */
import 'clsx';

const $$Container = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="max-w-screen-xl mx-auto px-6 md:px-14 xl:px-14"> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "D:/Dev/Landingpage/src/components/Container.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  const navLinks = [
    // { href: '/about', label: 'About us' },
    // { href: '/#services', label: 'Services' },
    // { href: '/#projects', label: 'Use Cases' },
    // { href: '/pricing', label: 'Pricing' },
    // { href: '/articles', label: '更新日志'},
    { href: "https://d.inot.top/", label: "\u6587\u6863" },
    { href: "https://github.com/share121/inter-knot/releases", label: "\u4E0B\u8F7D" },
    { href: "/articles", label: "\u65E5\u5FD7" }
  ];
  const navButton = { href: "https://github.com/share121/inter-knot", label: "GithubRepo" };
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<header class="mt-20"> <nav class="w-full top-0 left-0 z-50 fixed bg-white"> ', ` </nav> </header> <script>
document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.getElementById('navbar-default');

  // Check if navbar exists before adding event listeners
  if (navbar) {
    const toggleButton = document.querySelector('[data-collapse-toggle="navbar-default"]');
    const navLinks = navbar.querySelectorAll('a');

    if (toggleButton) {
      toggleButton.addEventListener('click', () => navbar.classList.toggle('hidden'));
    } else {
      console.warn("Navbar toggle button not found. Toggle functionality might be affected.");
    }

    navLinks.forEach(link => link.addEventListener('click', () => navbar.classList.add('hidden')));
  } else {
    console.warn("Navbar element with ID 'navbar-default' not found. Navigation functionality might be affected.");
  }
});

<\/script>`])), maybeRenderHead(), renderComponent($$result, "Container", $$Container, {}, { "default": ($$result2) => renderTemplate` <div class="flex flex-wrap items-center justify-between mx-auto py-3"> <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse"> <img src="/Logo.svg" class="h-8" alt="Logo"> </a> <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 " aria-controls="navbar-default" aria-expanded="false"> <span class="sr-only">Open main menu</span> <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"></path> </svg> </button> <div class="hidden w-full md:block md:w-auto" id="navbar-default"> <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white "> ${navLinks.map((link) => renderTemplate`<li> <a${addAttribute(link.href, "href")} class="block py-2 px-3 text-black rounded md:bg-transparent md:p-0">${link.label}</a> </li>`)} <li> <a class="md:hidden px-9 py-5 rounded-2xl border border-zinc-900 bg-white hover:bg-black text-black hover:text-white inline-flex"${addAttribute(navButton.href, "href")} target="_blank"> <h2 class="text-center text-xl font-normal leading-7">${navButton.label}</h2> </a> </li> </ul> </div> <div class="hidden w-full md:block md:w-auto" id="navbar-default"> <a class="px-9 py-5 rounded-2xl border border-zinc-900 bg-white hover:bg-black text-black hover:text-white inline-flex"${addAttribute(navButton.href, "href")} target="_blank"><h2 class="text-center text-xl font-normal leading-7">${navButton.label}</h2> </a> </div> </div> ` }));
}, "D:/Dev/Landingpage/src/components/Navbar.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", '<footer class="bg-lime bg-fixed bg-bottom text-black"> ', ' </footer> <script>\n    const year = new Date().getFullYear();\n    document.getElementById("currentYear").innerHTML = `${year}`;\n<\/script>'], ["", '<footer class="bg-lime bg-fixed bg-bottom text-black"> ', ' </footer> <script>\n    const year = new Date().getFullYear();\n    document.getElementById("currentYear").innerHTML = \\`\\${year}\\`;\n<\/script>'])), maybeRenderHead(), renderComponent($$result, "Container", $$Container, {}, { "default": ($$result2) => renderTemplate` <div class="py-6"> <div class="flex flex-col items-center justify-between md:flex-row"> <div class="flex items-center space-x-3 rtl:space-x-reverse"> <img class="w-auto" src="/Logo.svg" alt="Logo"> </div> <div class="flex mt-4 md:m-0"> <div class="-mx-4">
@ <span id="currentYear"></span> VacuolePao | Made with ❤</div> </div> </div> </div> ` }));
}, "D:/Dev/Landingpage/src/components/Footer.astro", void 0);

const $$Astro$1 = createAstro();
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "D:/Dev/Landingpage/node_modules/.pnpm/astro@4.15.1_@types+node@16.18.11_rollup@4.21.2_typescript@5.5.4/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Inot - 新一代绳网</title><meta name="description" content="A beautiful and functional landing page design created specifically for digital marketing agencies. With its clean and modern design, Positivus is the perfect template to showcase your agency's services and case studies to potential clients. Built with astro and tailwindcss"><link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap" rel="stylesheet"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=ZCOOL+QingKe+HuangYou&display=swap" rel="stylesheet">${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head> <body class="bg-white font-SpaceGrotesk"> ${renderComponent($$result, "Navbar", $$Navbar, {})} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "D:/Dev/Landingpage/src/layouts/Layout.astro", void 0);

export { $$Container as $, $$Layout as a };
