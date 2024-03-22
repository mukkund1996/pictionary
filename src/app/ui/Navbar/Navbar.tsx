import {IssueReopenedIcon, PinIcon} from "@primer/octicons-react";
import {Button, Header, IconButton} from "@primer/react";
import Link from "next/link";

import styles from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <Header className={styles["header"]}>
      <div className={styles["header-container"]}>
        <div className={styles["main-nav-container"]}>
          <Link href="/" className={styles["link"]}>
            <Button className={styles["icon"]} aria-label="Home">
              <IssueReopenedIcon size={15} />
            </Button>
          </Link>
          <Link href="/saved" className={styles["link"]}>
            <Button className={styles["icon"]} aria-label="Home">
              <PinIcon size={15} />
            </Button>
          </Link>
        </div>
        <h1>Pictionary</h1>
      </div>
    </Header>
  );
};
