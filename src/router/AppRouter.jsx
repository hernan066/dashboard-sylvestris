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
        {/* <Route path="/login" element={ <PublicRoute> <LoginPage /> </PublicRoute>  } />
       
        <Route path="/" element={<PrivateRoute><DashboardPage /></PrivateRoute> } />
        
        <Route path="/users" element={<PrivateRoute> <UserPage /> </PrivateRoute>} />
        <Route path="/users/create" element={<PrivateRoute> <UserCreatePage /> </PrivateRoute>} />
        
        <Route path="/products" element={<PrivateRoute> <ProductPage /> </PrivateRoute>} />
        
        <Route path="/categories" element={<PrivateRoute> <CategoryPage /> </PrivateRoute>} />
        <Route path="/login" element={ <PublicRoute> <LoginPage /> </PublicRoute>  } /> */}
        {/* private */}
        <Route path="/" element={<DashboardPage />} />

        <Route path="/users" element={<UserPage />} />
        <Route path="/users/create" element={<UserCreatePage />} />

        <Route path="/products" element={<ProductPage />} />

        <Route path="/categories" element={<CategoryPage />} />
        
        <Route path="/login" element={  <LoginPage />   } />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
