import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as createAstro, a as renderComponent, d as addAttribute } from './astro/server_Clts2hpF.mjs';
import 'kleur/colors';
import { $ as $$Container } from './Layout_CvvZSb-u.mjs';
import 'clsx';

const $$Astro = createAstro();
const $$Topic = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Topic;
  const { title, description } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="grid place-items-center gap-5 mb-10 md:flex"> <h2 class="text-4xl sm:text-5xl px-1.5 font-medium bg-lime rounded-md"> ${title} </h2> <p class="text-xl font-normal text-center md:text-start lg:w-2/3"> ${description} </p> </div>`;
}, "D:/Dev/Landingpage/src/components/Topic.astro", void 0);

const team = [
	{
		title: "主力开发者",
		name: "Share121",
		profile: "/team/c1.png"
	},
	{
		title: "社区运维",
		name: "VacuolePao",
		profile: "/team/c2.png"
	},
	{
		title: "贡献者",
		name: "Dave_12138",
		profile: "/team/c3.png"
	}
];
const teamData = {
	team: team
};

const $$Team = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Container", $$Container, {}, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="sub1"> ${renderComponent($$result2, "Topic", $$Topic, { "title": "\u5F00\u53D1\u56E2\u961F", "description": "" })} </div> <div class="flex-row items-center py-5" id="team"> <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4"> ${teamData.team.map(({ title, name, profile }) => renderTemplate`<div class="h-[180px] px-[35px] py-10 bg-white rounded-[45px] shadow-card border border-zinc-900 flex-col justify-start items-start gap-2.5 inline-flex text-black"> <div class="flex-col justify-start items-start gap-7 flex"> <div class="self-stretch justify-start items-start inline-flex"> <div class="grow shrink basis-0 justify-start items-center gap-8 flex"> <div class="h-[102.82px] left-0 top-0 relative"> <img${addAttribute(profile, "src")}${addAttribute(name, "alt")}> </div> <div class="flex-col justify-end items-start inline-flex"> <div class="text-lg font-normal"> ${title} </div> <div class="text-xl font-medium"> ${name} </div> </div> </div>  </div>   </div> </div>`)} </div> </div> <div class="w-full justify-center md:justify-end items-center inline-flex"> <a href="https://github.com/share121/inter-knot"><button class="px-8 py-5 bg-zinc-900 hover:bg-white rounded-2xl text-center text-white hover:text-black border text-xl font-normal leading-7">所有贡献者
</button></a> <br> </div> ` })}`;
}, "D:/Dev/Landingpage/src/components/Team.astro", void 0);

export { $$Team as $, $$Topic as a };
