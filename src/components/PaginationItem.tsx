import Link from 'next/link';

type Props = {
  currentPage: boolean;
  disabled: boolean;
  displayText?: string;
  pageNumber: number;
};

const PaginationItem = ({
  currentPage,
  disabled: disable = false,
  pageNumber,
  displayText = pageNumber.toString(),
}: Props) => (
  <li key={`${displayText}`}>
    <Link
      href={`/posts/page/${pageNumber}`}
      className={`rounded px-3 py-2 hover:bg-nord-5 focus:bg-nord-5 ${
        currentPage
          ? 'pointer-events-none border border-slate-400 text-nord-0 focus:bg-inherit'
          : disable
          ? 'disabled: pointer-events-none text-slate-400 focus:bg-inherit'
          : ''
      }`}
    >
      {displayText}
    </Link>
  </li>
);

export default PaginationItem;
