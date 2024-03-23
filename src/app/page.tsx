import {fetchArtworks} from "./lib/api/fetchArtworks";
import {ARTWORK_PER_PAGE, QUERY_FIELD_NAMES} from "./lib/constants/api";
import {ArtGrid} from "./ui/ArtGrid/ArtGrid";
import {StyledPagination} from "./ui/Pagination/Pagination";

export default async function Home({
  searchParams,
}: {
  searchParams?: {
    page?: string;
  };
}) {
  const currentPage = Number(searchParams?.page) || 1;
  const artworkGrid = await fetchArtworks(currentPage, ARTWORK_PER_PAGE, QUERY_FIELD_NAMES);

  return (
    <main>
      <ArtGrid artworkGrid={artworkGrid} />
      <StyledPagination totalPages={artworkGrid.pagination.total} />
    </main>
  );
}
