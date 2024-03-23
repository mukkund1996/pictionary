"use client";

import {IconButton} from "@mui/material";
import StarBorderPurple500Icon from "@mui/icons-material/StarBorderPurple500";
import styles from "./BookmarkButton.module.css";
import {useEffect, useState} from "react";
import {getIdsFromLocalStorage} from "@/app/lib/utils/helpers";

export const BookmarkButton = ({id}: {id: string}) => {
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const existingIds = getIdsFromLocalStorage(localStorage.getItem("bookmarkedArtwork") || "");
    if (existingIds.includes(id)) {
      setClicked(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const saveToLocalStorage = () => {
    const existingIds = getIdsFromLocalStorage(localStorage.getItem("bookmarkedArtwork") || "");
    if (!existingIds.includes(id)) {
      localStorage.setItem("bookmarkedArtwork", [id, ...existingIds].join(","));
      setClicked(true);
    }
  };

  const removeFromLocalStorage = () => {
    const existingIds = getIdsFromLocalStorage(localStorage.getItem("bookmarkedArtwork") || "");
    const uniqueIds = existingIds.filter(existingId => existingId !== id);
    localStorage.setItem("bookmarkedArtwork", uniqueIds.join(","));
    setClicked(false);
  };

  return (
    <IconButton
      onClick={() => {
        if (clicked) {
          removeFromLocalStorage();
        } else {
          saveToLocalStorage();
        }
      }}
      className={clicked ? styles["bookmark-button-clicked"] : styles["bookmark-button"]}
      aria-label="Saved"
    >
      <StarBorderPurple500Icon />
    </IconButton>
  );
};
