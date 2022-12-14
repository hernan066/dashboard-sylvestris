import { BrowserRouter, Route, Routes } from "react-router-dom";
import CategoryPage from "../pages/CategoryPage";
import CategoryCreatePage from "../pages/CategoryCreatePage";
import CategoryEditPage from "../pages/CategoryEditPage";
import DashboardPage from "../pages/DashboardPage";
import LoginPage from "../pages/LoginPage";
import ProductCreatePage from "../pages/ProductCreatePage";
import ProductEditPage from "../pages/ProductEditPage";
import ProductImagePage from "../pages/ProductImagePage";
import ProductPage from "../pages/ProductPage";
import UserCreatePage from "../pages/UserCreatePage";
import UserEditPage from "../pages/UserEditPage";
import UserPage from "../pages/UserPage";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import OrderPage from "../pages/OrderPage";



const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<DashboardPage />} />
 
          <Route path="/users" element={<UserPage />} />
          <Route path="/users/create" element={<UserCreatePage />} />
          <Route path="/users/edit/:id" element={<UserEditPage />} />

          <Route path="/products" element={<ProductPage />} />
          <Route path="/products/create" element={<ProductCreatePage />} />
          <Route path="/products/edit/:id" element={<ProductEditPage />} />
          
          <Route path="/products/images/:id" element={<ProductImagePage />} />

          {/* <Route path="/categories" element={<CategoryPage />} />
          <Route path="/category/create" element={<CategoryCreatePage />} />
          <Route path="/category/edit/:id" element={<CategoryEditPage />} /> */}
          
          <Route path="/orders" element={<OrderPage />} />
         
          <Route path="/order/edit/:id" element={<CategoryEditPage />} />
        </Route>

        <Route element={<PublicRoute />}>
          <Route path="/login" element={<LoginPage />} />
        </Route>
      
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
