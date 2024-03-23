import {ArtworkGridResponse} from "@/app/lib/models/artwork";
import {ArtworkProps} from "./ArtworkTile";

export const extractImgSrc = (artworks: ArtworkGridResponse, size = 843) => {
  return artworks.data.map(artwork => {
    return {
      src: `${artworks.config.iiif_url}/${artwork.image_id}/full/${size},/0/default.jpg`,
      id: artwork.image_id,
      width: size,
      height: size,
      dbId: artwork.id,
    } as ArtworkProps;
  });
};
