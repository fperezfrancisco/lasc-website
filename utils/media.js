export function getStrapiMedia(mediaUrl) {
  const base = process.env.NEXT_PUBLIC_STRAPI_URL || "";
  if (!mediaUrl) return "";
  return mediaUrl.startsWith("/") ? `${base}${mediaUrl}` : mediaUrl;
}
