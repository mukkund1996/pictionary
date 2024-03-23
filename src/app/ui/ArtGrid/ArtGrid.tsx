import styles from "./ArtGrid.module.css";
import {extractImgSrc} from "../ArtworkTile/ArtworkTile.utils";
import {ArtworkTile} from "../ArtworkTile/ArtworkTile";
import {ArtworkGridResponse} from "@/app/lib/models/artwork";

interface ArtGridProps {
  artworkGrid: ArtworkGridResponse;
}

export const ArtGrid = async ({artworkGrid}: ArtGridProps) => {
  const artworks = extractImgSrc(artworkGrid, 200);

  return (
    <div className={styles["artgrid-container"]}>
      {artworks.map(artworkProps => (
        <ArtworkTile key={artworkProps.id} {...artworkProps} />
      ))}
    </div>
  );
};
