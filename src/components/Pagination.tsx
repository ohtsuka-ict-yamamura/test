import PaginationItem from './PaginationItem';

const MAX_POSTS_COUNT_PER_PAGE = 10;
const DISPLAY_PAGES_COUNT = 5;

type Props = {
  currentPageNumber: number;
  totalNumberOfPosts: number;
};

const Pagination = ({ currentPageNumber, totalNumberOfPosts }: Props) => {
  const isFirstPage = currentPageNumber === 1;
  const numberOfPages = Math.ceil(
    totalNumberOfPosts / MAX_POSTS_COUNT_PER_PAGE,
  );
  const isLastPage = currentPageNumber === numberOfPages;
  const isCurrentPage = (pageNumber: number) =>
    pageNumber === currentPageNumber;

  const startPageNumber = Math.max(
    1,
    currentPageNumber - 4 + Math.min(2, numberOfPages - currentPageNumber),
  );
  const allPageNumbers = Array.from(new Array(numberOfPages), (_, i) => i + 1);
  const displayPages = allPageNumbers.splice(
    allPageNumbers.findIndex((pageNumber) => pageNumber === startPageNumber),
    5,
  );

  if (totalNumberOfPosts <= MAX_POSTS_COUNT_PER_PAGE) return null;

  return (
    <nav>
      <ul className="flex items-center justify-center gap-x-1">
        <PaginationItem
          currentPage={false}
          disabled={isFirstPage}
          pageNumber={currentPageNumber - 1}
          displayText="←"
        />
        {displayPages.map((pageNumber) => (
          <PaginationItem
            currentPage={isCurrentPage(pageNumber)}
            disabled={isCurrentPage(pageNumber)}
            pageNumber={pageNumber}
            key={pageNumber}
          />
        ))}
        <PaginationItem
          currentPage={false}
          disabled={isLastPage}
          displayText="→"
          pageNumber={currentPageNumber + 1}
        />
      </ul>
    </nav>
  );
};

export default Pagination;
