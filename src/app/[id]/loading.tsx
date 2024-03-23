import {Skeleton} from "@mui/material";
import styles from "./ArtworkDetail.module.css";
import {DETAILED_IMAGE_SIZE} from "../lib/constants/api";

export default function Loading() {
  return (
    <main>
      <div className={styles["artwork-detailed-container"]}>
        <Skeleton
          className={styles["skeleton"]}
          variant="rectangular"
          width={DETAILED_IMAGE_SIZE}
          height={DETAILED_IMAGE_SIZE}
        />
        <Skeleton
          className={styles["skeleton"]}
          variant="rectangular"
          width={DETAILED_IMAGE_SIZE}
          height={DETAILED_IMAGE_SIZE}
        />
      </div>
    </main>
  );
}
