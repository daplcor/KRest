import { Box, Menu, MenuItem, InputBase } from "@mui/material";
import { ArrowDropDownCircleRounded } from "@mui/icons-material";
import { useState } from "react";
import { styles } from "./styles";

function SearchBar({
  anchorEl,
  handleClick,
  handleClose,
  setFilterType,
  filterType,
  handleSearch,
}) {
  const [address, setAddress] = useState("");

  // Mapping of display labels to allowed filter types
  const filterTypeMapping = {
    "Auction Bids": "placed-auction-bids",
    "Auction Sales Withdrawn": "auction-sale-withdrawn",
    "Auction Offers": "auction-sale-offer",
    "Fixed Offers": "fixed-sale-offer",
    "Auction Sales Bought": "auction-sale-bought",
    "Fixed Sales Bought": "fixed-sale-bought",
    "Fixed Sales Withdrawn": "fixed-sale-withdrawn",
    "Mint": "mint",
  };

  // Reverse the mapping to get label by filter type
  const labelMapping = Object.fromEntries(
    Object.entries(filterTypeMapping).map(([label, type]) => [type, label])
  );

  const handleMenuItemClick = (label) => {
    const selectedFilterType = filterTypeMapping[label];
    setFilterType(selectedFilterType);
    handleClose();
  };

  const handleSearchClick = () => {
    handleSearch(address);
  };

  return (
    <Box sx={styles.searchBarWrap}>
      <Box onClick={handleClick} sx={styles.searchButton}>
        {labelMapping[filterType] || "Search"}
        <ArrowDropDownCircleRounded fontSize="small" />
      </Box>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        {Object.keys(filterTypeMapping).map((label, index) => (
          <MenuItem key={index} onClick={() => handleMenuItemClick(label)}>
            {label}
          </MenuItem>
        ))}
      </Menu>
      <InputBase
        placeholder="t:address or k:address"
        sx={styles.searchInput}
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && handleSearchClick()}
      />
      <Box sx={styles.searchButton} onClick={handleSearchClick}>
        Search
      </Box>
    </Box>
  );
}

export default SearchBar;
