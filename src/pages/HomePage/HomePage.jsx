import { Box, Container, TableCell, TableRow, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import TableLayout from "../../components/Table";
import { tableColumns } from "./lib";
import { Link, useNavigate } from "react-router-dom";
import { KADENA_EXPLORER } from "../../util/config";
import { styles } from "./styles";
import { useGetLatestTransactions } from "../../hooks/searchNft"; // No need to import useSearchNft here
import { useState } from "react";
import SearchBar from "../../components/Search/SearchBar";
import { toast } from "react-toastify";
import { useStreamTransactions } from "../../hooks/stream";

function HomePage() {
  const { streamData } = useStreamTransactions();
  const { latestTxns } = useGetLatestTransactions(streamData);

  const [anchorEl, setAnchorEl] = useState(null);
  const [filterType, setFilterType] = useState("");
  const navigate = useNavigate();

  const handleSearch = (address) => {
    if (!address) {
      toast.warning("Address cannot be empty!");
      return;
    }

    if (!filterType) {
      toast.warning("Filter type cannot be empty!");
      return;
    }

    navigate(`/txn/${filterType}/${address}`);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box py={4} bgcolor={grey[50]}>
      <Container>
        <Box mb={2}>
          <SearchBar
            anchorEl={anchorEl}
            handleClick={handleClick}
            handleClose={handleClose}
            filterType={filterType}
            setFilterType={setFilterType}
            handleSearch={handleSearch}
          />
        </Box>
        <Typography py={3} variant="h5" fontWeight={500}>
          Latest Transactions
        </Typography>
      </Container>

      <TableLayout columns={tableColumns()}>
        {latestTxns?.length > 0 &&
          latestTxns.map((result, index) => {
            const txn = result.txn;
            return (
              <TableRow
                key={index}
                sx={{
                  "&:last-child td, &:last-child th": {
                    border: 0,
                  },
                }}
              >
                <TableCell component="th" scope="row">
                  <Typography variant="body2">{result?.collection}</Typography>
                </TableCell>
                <TableCell component="th" scope="row">
                  <Typography variant="body2">{txn?.block}</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body2">{txn?.chain}</Typography>
                </TableCell>
                <TableCell>
                  <Link
                    to={`${KADENA_EXPLORER}/${txn?.reqKey}`}
                    style={styles.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {txn?.reqKey}
                  </Link>
                </TableCell>
                <TableCell sx={{ whiteSpace: "nowrap" }}>{txn?.ts}</TableCell>
                <TableCell>
                  <Typography variant="body2">{txn?.height}</Typography>
                </TableCell>
                <TableCell>
                  {txn?.params
                    ? txn.params.map((item, i) => (
                        <Typography key={i} variant="body2">
                          {JSON.stringify(item)}
                        </Typography>
                      ))
                    : "-"}
                </TableCell>
              </TableRow>
            );
          })}
      </TableLayout>
    </Box>
  );
}

export default HomePage;
