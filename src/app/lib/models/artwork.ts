export interface ArtworkResponse {
  id: number;
  title: string;
  image_id: string;
  short_description?: string;
}

export interface ArtworkGridResponse {
  data: ArtworkResponse[];
  config: {
    iiif_url: string;
  };
  pagination: {
    current_page: number;
    total: number;
  };
}
