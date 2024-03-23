import Image from "next/image";
import styles from "./ArtworkTile.module.css";
import Link from "next/link";

export interface ArtworkProps {
  id: string;
  src: string;
  width: number;
  height: number;
  dbId: number;
}

export const ArtworkTile = ({id, src, width, height, dbId}: ArtworkProps) => {
  return (
    <Link href={`/${dbId}`}>
      <Image src={src} alt={id} className={styles["artwork"]} width={width} height={height} />
    </Link>
  );
};
