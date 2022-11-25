import { HashRouter, Route, Routes } from "react-router-dom";
import CategoryPage from "../pages/CategoryPage";
import DashboardPage from "../pages/DashboardPage";
import LoginPage from "../pages/LoginPage";
import ProductPage from "../pages/ProductPage";
import UserPage from "../pages/UserPage";

const AppRouter = () => {
  return (
    <HashRouter>
      <Routes>
        {/* public */}
        <Route path="/login" element={<LoginPage />} />
        {/* private */}
        <Route path="/" element={<DashboardPage />} />
        <Route path="/users" element={<UserPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/categories" element={<CategoryPage />} />
      </Routes>
    </HashRouter>
  );
};

export default AppRouter;
