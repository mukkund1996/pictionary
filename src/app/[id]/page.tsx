import Image from "next/image";
import {constructImgSrc} from "../lib/utils/helpers";
import {fetchArtwork} from "../lib/api/fetchArtworks";
import styles from "./ArtworkDetail.module.css";
import {DETAILED_IMAGE_SIZE} from "../lib/constants/api";
import {BookmarkButton} from "../ui/BookmarkButton/BookmarkButton";

export default async function ArtworkDetail({params}: {params: {id: string}}) {
  const artwork = await fetchArtwork(params.id);

  return (
    <main>
      <div className={styles["artwork-detailed-container"]}>
        <Image
          src={constructImgSrc(artwork["image_id"]!, DETAILED_IMAGE_SIZE)}
          alt={params.id}
          width={DETAILED_IMAGE_SIZE}
          height={DETAILED_IMAGE_SIZE}
          className={styles["artwork"]}
        />
        <div className={styles["artwork-text"]}>
          <div className={styles["artwork-title-container"]}>
            <h3>{artwork?.title}</h3>
            <BookmarkButton id={params.id} />
          </div>
          <span>{artwork?.["short_description"]}</span>
        </div>
      </div>
    </main>
  );
}
