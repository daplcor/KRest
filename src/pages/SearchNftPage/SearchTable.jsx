import {
  Box,
  CircularProgress,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import TableLayout from "../../components/Table";
import { tableColumns } from "./lib";
import { KADENA_EXPLORER } from "../../util/config";
import { Link } from "react-router-dom";
import { styles } from "./styles";

function SearchTable({ searchResults, loading }) {
  if (loading) {
    return (
      <Box display="flex" justifyContent="center" my={4}>
        <CircularProgress />
      </Box>
    );
  }

  if (!searchResults?.length) {
    return (
      <Typography variant="h6" align="center" my={4}>
        No results found.
      </Typography>
    );
  }

  return (
    <TableLayout columns={tableColumns()}>
      {searchResults.map((result, index) => (
        <TableRow
          key={index}
          sx={{
            "&:last-child td, &:last-child th": {
              border: 0,
            },
          }}
        >
          <TableCell component="th" scope="row">
            <Typography variant="body2">{result?.block}</Typography>
          </TableCell>
          <TableCell>
            <Typography variant="body2">{result?.chain}</Typography>
          </TableCell>
          <TableCell sx={{ whiteSpace: "nowrap" }}>
            <Link
              to={`${KADENA_EXPLORER}/${result?.reqKey}`}
              style={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {result?.reqKey}
            </Link>
          </TableCell>
          <TableCell sx={{ whiteSpace: "nowrap" }}>{result?.ts}</TableCell>
          <TableCell>
            <Typography variant="body2">{result?.height}</Typography>
          </TableCell>
          <TableCell>
            {result?.params
              ? result.params.map((item, i) => (
                  <Typography key={i} variant="body2">
                    {JSON.stringify(item)}
                  </Typography>
                ))
              : "-"}
          </TableCell>
        </TableRow>
      ))}
    </TableLayout>
  );
}

export default SearchTable;
