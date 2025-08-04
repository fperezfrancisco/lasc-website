export const BASE_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

export async function fetchSlides() {
  const res = await fetch(`${BASE_URL}/api/slides?populate=*`);
  const json = await res.json();
  return json.data;
}
