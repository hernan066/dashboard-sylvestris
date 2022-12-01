import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import CategoryPage from "../pages/CategoryPage";
import DashboardPage from "../pages/DashboardPage";
import LoginPage from "../pages/LoginPage";
import ProductPage from "../pages/ProductPage";
import UserCreatePage from "../pages/UserCreatePage";
import UserPage from "../pages/UserPage";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<DashboardPage />} />

          <Route path="/users" element={<UserPage />} />
          <Route path="/users/create" element={<UserCreatePage />} />

          <Route path="/products" element={<ProductPage />} />

          <Route path="/categories" element={<CategoryPage />} />
        </Route>

        <Route element={<PublicRoute />}>
          <Route path="/login" element={<LoginPage />} />
        </Route>
      
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
