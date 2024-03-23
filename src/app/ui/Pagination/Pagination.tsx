"use client";

import {Pagination} from "@mui/material";
import {usePathname, useSearchParams, useRouter} from "next/navigation";
import {useState} from "react";
import styles from "./Pagination.module.css";

interface PaginationProps {
  totalPages: number;
  page: number;
}

export const StyledPagination = ({totalPages, page}: PaginationProps) => {
  const {replace} = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [currentPage, setCurrentPage] = useState(page);

  const navigateToPage = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <Pagination
      page={currentPage}
      count={totalPages}
      onChange={(event, page) => {
        event.preventDefault();
        setCurrentPage(page);
        navigateToPage(page);
      }}
      className={styles["pagination"]}
    />
  );
};
