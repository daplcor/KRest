import { CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { theme } from "./themes";
import { Router } from "./routes";
import AppLayout from "./layout";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <ToastContainer />
        <CssBaseline />
        <AppLayout>
          <Router />
        </AppLayout>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
