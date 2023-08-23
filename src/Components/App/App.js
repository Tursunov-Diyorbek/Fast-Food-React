import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import "./App.css";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { Login } from "../Login/login";
import { Window } from "../Window/window";
import { useEffect } from "react";
import { useLocalStorageState } from "ahooks";
import { Orders } from "../ProductsInfo/orders";
import { Products } from "../ProductsInfo/products";
import { Category } from "../ProductsInfo/category";
import { Branch } from "../ProductsInfo/branch";
import { Usersdata, Employees } from "../Data/usersdata";
import { Data } from "../Context/context";
import { CategoryData, ProductData } from "../Data/productsdata";
import { branchData } from "../Data/branchData";

function App() {
  const [login, setLogin] = useLocalStorageState("Login", {
    defaultValue: false,
  });
  const [userData, setUserData] = useLocalStorageState("UserData", {
    defaultValue: [...Usersdata],
  });
  const [employees, setEmployees] = useLocalStorageState("Employees", {
    defaultValue: [...Employees],
  });
  const [categoryData, setCategoryData] = useLocalStorageState("CategoryData", {
    defaultValue: [...CategoryData],
  });
  const [productData, setProductData] = useLocalStorageState("ProductData", {
    defaultValue: [...ProductData],
  });
  const [branch, setBranch] = useLocalStorageState("BranchData", {
    defaultValue: [...branchData],
  });

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (login && location.pathname === "/login") navigate("/buyurtmalar");
    else if (!login) navigate("/login");
  }, [login]);

  useEffect(() => {
    if (location.pathname === "/") navigate("/buyurtmalar");
  }, [location.pathname]);

  return (
    <Data.Provider
      value={{
        userData,
        setUserData,
        employees,
        setEmployees,
        categoryData,
        setCategoryData,
        productData,
        setProductData,
        branch,
        setBranch,
      }}
    >
      <CssBaseline />
      <Routes>
        <Route path={"/login"} element={<Login setLogin={setLogin} />}></Route>
        <Route path={"/"} element={<Window setLogin={setLogin} />}>
          <Route
            path={":productinfo"}
            element={
              location.pathname === "/buyurtmalar" ? (
                <Orders />
              ) : "" || location.pathname === "/maxsulotlar" ? (
                <Products />
              ) : "" || location.pathname === "/kategoriyalar" ? (
                <Category />
              ) : "" || location.pathname === "/filiallar" ? (
                <Branch />
              ) : (
                ""
              )
            }
          ></Route>
        </Route>
      </Routes>
    </Data.Provider>
  );
}

export default App;
