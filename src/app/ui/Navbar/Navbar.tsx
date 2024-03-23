import BookmarkIcon from "@mui/icons-material/Bookmark";
import {IconButton} from "@mui/material";
import Link from "next/link";

import styles from "./Navbar.module.css";
import {FilterOptions} from "../Filter/Filter";
import {SearchBar} from "../SearchBar/SearchBar";
import HomeIcon from "@mui/icons-material/Home";

export const Navbar = () => {
  return (
    <header className={styles["header"]}>
      <div className={styles["header-container"]}>
        <div className={styles["main-nav-container"]}>
          <Link href="/?page=1" className={styles["link"]}>
            <IconButton className={styles["icon"]} aria-label="Home">
              <HomeIcon />
            </IconButton>
          </Link>
          <Link href="/saved" className={styles["link"]}>
            <IconButton className={styles["icon"]} aria-label="Saved">
              <BookmarkIcon />
            </IconButton>
          </Link>
        </div>
        <div className={styles["options-nav-container"]}>
          <FilterOptions />
          <SearchBar />
        </div>
      </div>
    </header>
  );
};
