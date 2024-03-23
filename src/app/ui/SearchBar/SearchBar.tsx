"use client";

import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/Button";
import styles from "./SearchBar.module.css";
import navStyles from "../Navbar/Navbar.module.css";
import {useState} from "react";
import {usePathname, useRouter, useSearchParams} from "next/navigation";

export const SearchBar = () => {
  const {replace} = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searched, setSearched] = useState(false);

  const navigateToPage = (searchTerm: string) => {
    if (searchTerm !== "") {
      const params = new URLSearchParams(searchParams);
      params.set("search", searchTerm);
      replace(`${pathname}?${params.toString()}`);
    }
  };

  const resetPage = () => {
    const params = new URLSearchParams(searchParams);
    params.delete("search");
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className={styles["search-bar-container"]}>
      <TextField
        onChange={e => {
          setSearchTerm(e.target.value);
        }}
        label="Search artworks"
        variant="outlined"
        value={searchTerm}
        InputProps={{
          endAdornment: !searched ? (
            <IconButton
              className={navStyles["icon"]}
              onClick={() => {
                navigateToPage(searchTerm);
                setSearched(true);
              }}
            >
              <SearchIcon />
            </IconButton>
          ) : (
            <IconButton
              className={navStyles["icon"]}
              onClick={() => {
                resetPage();
                setSearchTerm("");
                setSearched(false);
              }}
            >
              <CloseIcon />
            </IconButton>
          ),
        }}
      />
    </div>
  );
};
