import { g as getCollection } from '../../../chunks/_astro_content_DiQUOG3i.mjs';
export { renderers } from '../../../renderers.mjs';

const GET = async ({ url }) => {
  const query = url.searchParams.get("query");
  if (query === null) {
    return new Response(
      JSON.stringify({
        error: "Query param is missing"
      }),
      {
        status: 400,
        // Bad request
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  }
  const allBlogArticles = await getCollection(
    "blog"
  );
  const searchResults = allBlogArticles.filter((article) => {
    const titleMatch = article.data.title.toLowerCase().includes(query.toLowerCase());
    const bodyMatch = article.body.toLowerCase().includes(query.toLowerCase());
    const slugMatch = article.slug.toLowerCase().includes(query.toLowerCase());
    return titleMatch || bodyMatch || slugMatch;
  });
  return new Response(JSON.stringify(searchResults), {
    status: 200,
    headers: {
      "Content-Type": "application/json"
    }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
