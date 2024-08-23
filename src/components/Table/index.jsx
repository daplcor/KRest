import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { styles } from "./styles";

const TableLayout = ({ columns, children }) => {
  return (
    <Container>
      <TableContainer sx={styles.tableContainer}>
        <Table sx={styles.table}>
          <TableHead>
            <TableRow>
              {columns.map((column, i) => (
                <TableCell
                  key={i}
                  sx={{
                    borderRight:
                      i < columns.length - 1 ? "1px solid #ddd" : "none",
                  }}
                >
                  {column}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody sx={styles.tableBody}>{children}</TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default TableLayout;
