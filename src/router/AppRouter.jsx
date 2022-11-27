import { HashRouter, Route, Routes } from "react-router-dom";
import CategoryPage from "../pages/CategoryPage";
import DashboardPage from "../pages/DashboardPage";
import LoginPage from "../pages/LoginPage";
import ProductPage from "../pages/ProductPage";
import UserPage from "../pages/UserPage";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

const AppRouter = () => {
  return (
    <HashRouter>
      <Routes>
        {/* public */}
        <Route path="/login" element={ <PublicRoute> <LoginPage /> </PublicRoute>  } />
        {/* private */}
        <Route path="/" element={<PrivateRoute><DashboardPage /></PrivateRoute> } />
        <Route path="/users" element={<PrivateRoute> <UserPage /> </PrivateRoute>} />
        <Route path="/products" element={<PrivateRoute> <ProductPage /> </PrivateRoute>} />
        <Route path="/categories" element={<PrivateRoute> <CategoryPage /> </PrivateRoute>} />
      </Routes>
    </HashRouter>
  );
};

export default AppRouter;
