import {ArtworkGridResponse} from "../models/artwork";

export const fetchArtworks = async (page: number, limit: number, fields: string[]) => {
  const url = new URL("https://api.artic.edu/api/v1/artworks");
  url.searchParams.append("page", page.toString());
  url.searchParams.append("limit", limit.toString());
  url.searchParams.append("fields", fields.join(","));
  const res = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  return data as ArtworkGridResponse;
};
