import {DETAILED_IMAGE_QUERY_FIELDS} from "../constants/api";
import {ArtworkGridResponse, ArtworkResponse} from "../models/artwork";
import {getIdsFromLocalStorage} from "../utils/helpers";

export const fetchArtworks = async (
  page: number,
  limit: number,
  fields: string[],
  filters?: Record<string, string>,
  searchQuery?: string
) => {
  const url = new URL(`https://api.artic.edu/api/v1/artworks${filters || searchQuery ? "/search" : ""}`);
  if (filters) {
    Object.entries(filters).forEach(([key, val]) => {
      url.searchParams.append(`query[term][${key}]`, val);
    });
  }
  if (searchQuery) {
    url.searchParams.append("q", searchQuery);
  }
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

export const fetchArtwork = async (id: string) => {
  const url = new URL(`https://api.artic.edu/api/v1/artworks/${id}`);
  url.searchParams.append("fields", DETAILED_IMAGE_QUERY_FIELDS.join(","));
  const res = await fetch(url);
  const jsonRes = await res.json();
  return jsonRes.data as ArtworkResponse;
};

export const fetchBookmarkedArtworks = async () => {
  const existingIds = getIdsFromLocalStorage(localStorage.getItem("bookmarkedArtwork") || "");
  const url = new URL(`https://api.artic.edu/api/v1/artworks`);
  url.searchParams.append("ids", existingIds.join(","));
  const res = await fetch(url);
  const data = await res.json();

  return data as ArtworkGridResponse;
};
