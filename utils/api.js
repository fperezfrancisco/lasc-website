export async function fetchSlides() {
  const res = await fetch("http://localhost:1337/api/slides?populate=*");
  const json = await res.json();
  return json.data;
}
