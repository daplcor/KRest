import { Box, Container, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import SearchTable from "./SearchTable";
import { useSearchNft } from "../../hooks/searchNft";

function SearchNftPage() {
  const { address, filterType } = useParams();
  const [searchResults, setSearchResults] = useState([]);
  const { loading, searchNft } = useSearchNft();

  useEffect(() => {
    const fetchData = async () => {
      if (address) {
        const results = await searchNft(address, filterType);
        if (results?.success) {
          setSearchResults(results.nfts);
        }
      }
    };
    fetchData();
  }, [address, filterType]);

  return (
    <Box py={4}>
      <Container>
        <Typography variant="h5" fontWeight={500} mb={2}>
          Search Results for Address: {address}{" "}
          {filterType && `(Filter: ${filterType})`}
        </Typography>
        <Typography variant="body1" color="textSecondary" mb={4}>
          {loading
            ? "Loading..."
            : `Total Results Found: ${searchResults.length}`}
        </Typography>
      </Container>
      <SearchTable searchResults={searchResults} loading={loading} />
    </Box>
  );
}

export default SearchNftPage;
