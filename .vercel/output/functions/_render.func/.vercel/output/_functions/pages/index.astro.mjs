/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, d as addAttribute, b as createAstro } from '../chunks/astro/server_Clts2hpF.mjs';
import 'kleur/colors';
import { $ as $$Container, a as $$Layout } from '../chunks/Layout_CvvZSb-u.mjs';
import { a as $$Topic, $ as $$Team } from '../chunks/Team_CQ2f6RNA.mjs';
export { renderers } from '../renderers.mjs';

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Container", $$Container, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="relative flex flex-col-reverse items-center md:flex-row" id="hero"> <div class="row items-center py-5 md:w-6/12 md:pb-20 md:pt-10"> <div class="text-left space-y-3"> <h1 class="text-5xl font-medium leading-none md:text-6xl hero1">InotNext<br> 新一代绳网 <br> 客户端</h1> <p class="mt-6 mb-8  text-xl font-normal leading-7 sm:mb-12 sub1">InotNet使用全新Flutter架构，可以构建兼容全平台的客户端；MaterialDesign3设计风格，加入了分区和收藏功能，更丰富的用户体验。</p> <a class="px-9 py-5 bg-zinc-900 hover:bg-white text-white hover:text-black border rounded-2xl justify-items-center md:justify-items-start gap-2.5 inline-flex" rel="noopener noreferrer" href="https://next.inot.top/" target="_blank"> <h2 class="text-center text-xl font-normal leading-7">立即体验</h2> </a> </div> </div> <div class="flex items-center py-5 md:w-6/12 md:pb-20 md:pt-10"> <img src="/Hero.svg" width="100%" alt="Hero"> </div> </div>  ` })}`;
}, "D:/Dev/Landingpage/src/components/Hero.astro", void 0);

const servicesData = [
	{
		id: 1,
		name1: "下载客户端",
		name2: "Download Client",
		background: "h-[310px] p-12 bg-zinc-100 rounded-[45px] shadow-card border border-black justify-between items-center flex text-black",
		arrow: "./services/ag.svg",
		link: "https://github.com/share121/inter-knot/releases",
		image: "./services/01.svg"
	},
	{
		id: 2,
		name1: "在线体验",
		name2: "Inot Online",
		background: "h-[310px] p-12 bg-lime rounded-[45px] shadow-card border border-black justify-between items-center flex text-black",
		arrow: "./services/ag.svg",
		link: "https://next.inot.top",
		image: "./services/02.svg"
	},
	{
		id: 3,
		name1: "加入社区",
		name2: "Discord Community",
		background: "h-[310px] p-12 bg-black rounded-[45px] shadow-card border border-black justify-between items-center flex text-white",
		arrow: "./services/aw.svg",
		link: "/community",
		image: "./services/03.svg"
	},
	{
		id: 4,
		name1: "查看文档",
		name2: "Docs",
		background: "h-[310px] p-12 bg-zinc-100 rounded-[45px] shadow-card border border-black justify-between items-center flex text-black",
		arrow: "./services/ag.svg",
		link: "https://d.inot.top",
		image: "./services/04.svg"
	},
	{
		id: 5,
		name1: "新内容介绍",
		name2: "What's New",
		background: "h-[310px] p-12 bg-lime rounded-[45px] shadow-card border border-black justify-between items-center flex text-black",
		arrow: "./services/ag.svg",
		link: "./",
		image: "./services/05.svg"
	},
	{
		id: 6,
		name1: "开发计划",
		name2: "Development Plan",
		background: "h-[310px] p-12 bg-black rounded-[45px] shadow-card border border-black justify-between items-center flex text-white",
		arrow: "./services/aw.svg",
		link: "./",
		image: "./services/06.svg"
	}
];

const $$Services = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Container", $$Container, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="relative flex flex-col items-center md:flex-row ser" id="services"> ${renderComponent($$result2, "Topic", $$Topic, { "title": "\u5168\u5E73\u53F0\u517C\u5BB9", "description": "\u57FA\u4E8EFlutter\u7684\u8DE8\u5E73\u53F0\u7279\u6027\uFF0C\u4E00\u5957\u4EE3\u7801\u53EF\u4EE5\u7F16\u8BD1\u51FAWindows\u3001MacOS\u3001Android\u3001Linux\u3001Web\u4E94\u79CD\u5E38\u89C1\u5E73\u53F0\u5BA2\u6237\u7AEF\u3002" })}</div> <div class="flex-row items-center py-5"> <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4"> <!-- card start--> ${servicesData.map(({ background, name1, name2, arrow, link, image }) => renderTemplate`<div${addAttribute(background, "class")}> <div class="flex-col justify-center items-start gap-[93px] inline-flex"> <div class="flex-col justify-start items-start flex"> <div class="px-[7px] bg-lime-300 rounded-[7px] flex-col justify-start items-start gap-2.5 flex"> <div class=" text-3xl font-medium">${name1}</div> </div> <div class="px-[7px] bg-lime-300 rounded-[7px] flex-col justify-start items-start gap-2.5 flex"> <div class="text-3xl font-medium">${name2}</div> </div> </div> <a class="justify-start items-center gap-[15px] inline-flex"${addAttribute(link, "href")}> <div class="w-[41px] h-[41px] relative"> <img class="w-[41px] h-[41px] left-0 top-0 absolute"${addAttribute(arrow, "src")}> </div> <div class="text-xl font-normal leading-7">查看更多</div> </a> </div> <div class="w-[210px] h-[170px] pt-0.5 pb-[1.95px] justify-center items-center flex"> <img class="hidden md:block"${addAttribute(image, "src")}> </div> </div>`)} <!-- card end--> </div> </div> <div class="flex-row items-center my-6 p-14 bg-zinc-100 rounded-[45px]"> <div class="grid grid-cols-1 md:grid-cols-2 gap-4"> <div class="justify-start items-center gap-[275px] flex"> <div class="flex-col justify-start items-start gap-[26px] inline-flex text-black"> <div class="text-3xl font-medium">Minecraft Server</div> <div class="text-lg font-normal">社区内用户AetherLude开设的公益生存服，建立自己的国度，并于其他国家竞争，在社区内申请白名单。</div> <a href="https://www.minebbs.com/threads/1-21-infmc.28887/" class="px-[35px] py-5 bg-zinc-900 hover:bg-white text-white hover:text-black border rounded-[14px] justify-start items-start gap-2.5 inline-flex"> <div class="text-center text-xl font-normal leading-7">MineBBS</div> </a> </div> </div> <div class="hidden md:grid justify-items-center -m-20"> <img src="/services/Illustration.svg" width="50%" alt="cat"> </div> </div> </div> ` })}`;
}, "D:/Dev/Landingpage/src/components/Services.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`<!-- POSITIVUS Official Astro theme -->${renderComponent($$result, "Layout", $$Layout, { "title": "Positivus" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="space-y-20"> ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Services", $$Services, {})} <!-- <Case/> --> ${renderComponent($$result2, "Team", $$Team, {})} <!-- <Testimonial/> --> <!-- <Contact/> --> </main> ` })}`;
}, "D:/Dev/Landingpage/src/pages/index.astro", void 0);

const $$file = "D:/Dev/Landingpage/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
