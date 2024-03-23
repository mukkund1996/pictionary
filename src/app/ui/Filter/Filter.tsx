"use client";

import {useCallback, useState} from "react";
import FilterListIcon from "@mui/icons-material/FilterList";
import {IconButton} from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import navBarStyles from "../Navbar/Navbar.module.css";
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import {toBoolean} from "@/app/lib/utils/helpers";

interface Options {
  publicDomain: boolean;
  onView: boolean;
}

export const FilterOptions = () => {
  const {replace} = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [options, setOptions] = useState<Options>({
    publicDomain: toBoolean(searchParams.get("is_public_domain")) ?? true,
    onView: toBoolean(searchParams.get("is_on_view")) ?? true,
  });

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const navigateToPage = useCallback(
    (options: Options) => {
      const params = new URLSearchParams(searchParams);
      params.set("is_public_domain", options.publicDomain.toString());
      params.set("is_on_view", options.onView.toString());
      replace(`${pathname}?${params.toString()}`);
    },
    [searchParams, pathname, replace]
  );

  const handleMenuItemClick = useCallback(
    (optionKey: keyof Options) => () => {
      setOptions({...options, [optionKey]: !options[optionKey]});
    },
    [options]
  );

  const handleClose = () => {
    setAnchorEl(null);
    navigateToPage(options);
  };

  return (
    <div className={navBarStyles["link"]}>
      <IconButton
        disabled={pathname !== "/"}
        onClick={handleClick}
        className={navBarStyles["icon"]}
        aria-label="Filter"
      >
        <FilterListIcon />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox onClick={handleMenuItemClick("publicDomain")} checked={options.publicDomain} />}
              label="Public Domain"
            />
          </FormGroup>
        </MenuItem>
        {/* <MenuItem onClick={handleMenuItemClick("onView")}>
          <FormGroup>
            <FormControlLabel control={<Checkbox checked={options.onView} />} label="On View" />
          </FormGroup>
        </MenuItem> */}
      </Menu>
    </div>
  );
};
