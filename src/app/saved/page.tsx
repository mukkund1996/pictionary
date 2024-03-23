"use client";

import {useEffect, useState} from "react";
import {ArtworkGridResponse} from "../lib/models/artwork";
import {fetchBookmarkedArtworks} from "../lib/api/fetchArtworks";
import {ArtGrid} from "../ui/ArtGrid/ArtGrid";

export default function Saved() {
  const [savedArtworkGrid, setSavedArtworkGrid] = useState<ArtworkGridResponse | null>(null);
  useEffect(() => {
    fetchBookmarkedArtworks().then(res => {
      setSavedArtworkGrid(res);
    });
  }, []);
  return <main>{savedArtworkGrid ? <ArtGrid artworkGrid={savedArtworkGrid} /> : <h3>Nothing to see here...</h3>}</main>;
}
