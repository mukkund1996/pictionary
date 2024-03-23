import {fetchArtworks} from "./lib/api/fetchArtworks";
import {ARTWORK_PER_PAGE, QUERY_FIELD_NAMES} from "./lib/constants/api";
import {ArtGrid} from "./ui/ArtGrid/ArtGrid";
import {StyledPagination} from "./ui/Pagination/Pagination";

export default async function Home({
  searchParams,
}: {
  searchParams?: {
    page?: string;
    is_public_domain?: string;
    is_on_view?: string;
    search?: string;
  };
}) {
  const currentPage = Number(searchParams?.page) || 1;
  const filters = {
    is_public_domain: searchParams?.is_public_domain || "true",
    // is_on_view: searchParams?.is_on_view || "true",
  };
  const artworkGrid = await fetchArtworks(
    currentPage,
    ARTWORK_PER_PAGE,
    QUERY_FIELD_NAMES,
    filters,
    searchParams?.search
  );

  return (
    <main>
      {searchParams?.search && (
        <div>
          <h5>Showing results for {searchParams?.search}...</h5>
        </div>
      )}
      <ArtGrid artworkGrid={artworkGrid} />
      <StyledPagination totalPages={artworkGrid.pagination.total} />
    </main>
  );
}
