// utils/api.js
const STRAPI_URL =
  process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

// Helper to fetch data
async function fetchAPI(path, options = {}) {
  const res = await fetch(`${STRAPI_URL}/api${path}`, {
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  });

  if (!res.ok) {
    console.error(`Failed to fetch ${path}`, res.status);
    throw new Error(`Fetch error: ${res.status}`);
  }

  const data = await res.json();
  return data.data; // Strapi v4 response shape
}

export async function getSlides() {
  return await fetchAPI("/carousel-slides?populate=*");
}

export async function getNewsArticles() {
  return await fetchAPI("/news-medias?populate=*");
}

export async function getNewsArticle(id) {
  return await fetchAPI(`/news-medias/${id}?populate=*`);
}

export async function getTeams() {
<<<<<<< HEAD
  return await fetchAPI("/teams?populate=*&pagination[pageSize]=100");
=======
  return await fetchAPI("/teams?populate=*&pagination[limit]=100");
>>>>>>> b1b739f98974477df802b5e81ddcf1d736bd779d
}

export async function getStaff() {
  return await fetchAPI("/staffs?populate=*");
}

export async function getAlumni() {
  return await fetchAPI("/alumnis?populate=*&pagination[limit]=100");
}

export async function getPrograms() {
  return await fetchAPI("/programs?populate=*");
}
