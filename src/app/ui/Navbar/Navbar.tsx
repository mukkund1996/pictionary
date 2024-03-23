import RefreshIcon from "@mui/icons-material/Refresh";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import {IconButton} from "@mui/material";
import Link from "next/link";

import styles from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <header className={styles["header"]}>
      <div className={styles["header-container"]}>
        <div className={styles["main-nav-container"]}>
          <Link href="/" className={styles["link"]}>
            <IconButton className={styles["icon"]} aria-label="Home">
              <RefreshIcon />
            </IconButton>
          </Link>
          <Link href="/saved" className={styles["link"]}>
            <IconButton className={styles["icon"]} aria-label="Home">
              <BookmarkIcon />
            </IconButton>
          </Link>
        </div>
        <h1>Pictionary</h1>
      </div>
    </header>
  );
};
