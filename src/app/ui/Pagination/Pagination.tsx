"use client";

import {Pagination} from "@mui/material";
import {usePathname} from "next/navigation";
import {useRouter} from "next/navigation";
import {useState} from "react";
import styles from "./Pagination.module.css";

interface PaginationProps {
  totalPages: number;
}

export const StyledPagination = ({totalPages}: PaginationProps) => {
  const {replace} = useRouter();
  const pathname = usePathname();
  const searchParams = new URLSearchParams();
  const [currentPage, setCurrentPage] = useState(Number(searchParams.get("page")) ?? 1);

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
