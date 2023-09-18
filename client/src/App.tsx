import React, { useEffect } from "react";
import ForgetPassword from "./pages/ForgetPassword";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardHome from "./components/Dashboard/DashboardHome";
import Product from "./components/Dashboard/Product/Product";
import Category from "./components/Dashboard/Categorey/Category";
import AddProduct from "./components/Dashboard/Product/AddProducts";
import AddCategory from "./components/Dashboard/Categorey/AddCategory";
import { getLoggedUserAction } from "./redux/userSlice/loginSlice";
import { useAppDispatch } from "./hooks/hook";
import { useSelector } from "react-redux";
import Loader from "./components/common/Loader";
import RedirectToDashboard from "./hooks/RedirectToDashboard";
import EditProduct from "./components/Dashboard/Product/EditProduct";
import EditCategory from "./components/Dashboard/Categorey/EditCategory";

const App = () => {
  const dispatch = useAppDispatch();

  const { success, loading, isAuth, error } = useSelector(
    (state: any) => state.loginUser
  );

  useEffect(() => {
    dispatch(getLoggedUserAction());
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={isAuth ? <RedirectToDashboard /> : <Login />}
          />
          <Route path="/dashboard" element={isAuth ? <RedirectToDashboard /> : <Login />}>
            <Route path="home" element={<DashboardHome />} />
            <Route path="category" element={<Category />} />
            <Route path="product" element={<Product />} />
            <Route path="product/add" element={<AddProduct />} />
            <Route path="product/edit" element={<EditProduct />} />
            <Route path="category/edit" element={<EditCategory />} />
            <Route path="category/add" element={<AddCategory />} />
          </Route>
          <Route
            path="/forgetpassword"
            element={isAuth ? <RedirectToDashboard /> : <ForgetPassword />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
