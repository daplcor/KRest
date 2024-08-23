import { Box } from "@mui/material";
import { Footer, Header } from "../components";
import { useStreamTransactions } from "../hooks/stream";

const AppLayout = ({ children }) => {
  const { streamData } = useStreamTransactions();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Header />
      <Box sx={{ flexGrow: 1 }}>{children}</Box>
      <Footer />
    </Box>
  );
};

export default AppLayout;
