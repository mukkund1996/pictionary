import Image from "next/image";
import styles from "./ArtworkTile.module.css";

export interface ArtworkProps {
  id: string;
  src: string;
  width: number;
  height: number;
}

export const ArtworkTile = ({id, src, width, height}: ArtworkProps) => {
  return <Image src={src} alt={id} className={styles["artwork"]} width={width} height={height} />;
};
