import { Route, Routes } from "react-router-dom";
import { HomePage, SearchNftPage } from "../pages";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/txn/:filterType/:address" element={<SearchNftPage />} />
    </Routes>
  );
}

export default Router;
