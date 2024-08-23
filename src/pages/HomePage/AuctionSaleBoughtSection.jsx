import {
  Box,
  Chip,
  Container,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import { Footer, Header } from "../../components";
import { grey } from "@mui/material/colors";
import { Link } from "react-router-dom";
import { styles } from "./styles";
import { CancelRounded, CheckCircleRounded } from "@mui/icons-material";
import TableLayout from "../../components/Table";
import { tableColumns } from "./lib";

const AuctionSaleBoughtSection = () => {
  return (
    <Box my={8}>
      <Container>
        <Typography variant="h5" fontWeight={500}>
          NFT Auction Sale Bought Transactions
        </Typography>

        <TableLayout columns={tableColumns()}>
          <TableRow
            sx={{
              "&:last-child td, &:last-child th": {
                border: 0,
              },
            }}
          >
            <TableCell component="th" scope="row">
              <Chip
                color="success"
                label="Active"
                size="small"
                icon={<CheckCircleRounded fontSize="small" />}
              />
            </TableCell>
            <TableCell>
              <Typography variant="body2">1</Typography>
            </TableCell>
            <TableCell sx={{ whiteSpace: "nowrap" }}>
              2024-08-16 10:26:30
            </TableCell>
            <TableCell>
              <Typography variant="body2">56789432</Typography>
            </TableCell>
            <TableCell>
              <Link to="#" style={styles.link}>
                ULnX4wPtd_PZyiu8DZsfXUEELoc1WDd_dfWb4MwimLI
              </Link>
            </TableCell>
            <TableCell>
              <Link to="#" style={styles.link}>
                (KsKnNhlMP0yiot_wod6yNOFKOu2Jzf525Zu0S2MX9QU)
              </Link>
            </TableCell>
          </TableRow>
        </TableLayout>
      </Container>
    </Box>
  );
};

export default AuctionSaleBoughtSection;
