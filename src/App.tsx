import { Route, Routes, useLocation } from "react-router-dom";
import MiniDrawer from "./Dashboard";
import { Box, styled } from "@mui/material";
import Home from "./components/Home";
import Products from "./components/Products";
import Notifications from "./components/Notifications";
import Settings from "./components/Settings";
import Analytics from "./components/Analytics";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

function App() {
  const location = useLocation();

  // 🔥 Hide MiniDrawer and layout only on login page ("/")
  const isLoginPage = location.pathname === "/";

  if (isLoginPage) {
    // ✅ Only show Login Page (no Drawer, no layout)
    return (
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    );
  }

  // 🔥 Hide MiniDrawer and layout only on login page ("/")
  const isSigninPage = location.pathname === "/signup";

  if (isSigninPage) {
    // ✅ Only show Login Page (no Drawer, no layout)
    return (
      <Routes>
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    );
  }

  return (
    <>
      <ToastContainer />

      {/* {!hide.includes(location.pathname) && <MiniDrawer/>} */}

      <Box sx={{ display: "flex" }}>
        <MiniDrawer />

        <Box sx={{ flexGrow: 1, p: 3 , flexDirection:"column" }}>
          <DrawerHeader />
          {/* <MiniDrawer/> */}
          <Box component={"div"}>
            <Routes>
            <Route path={"/"} element={<Login />}></Route>

            <Route path={"/dashboard"} element={<Home />}></Route>
            <Route path={"/products"} element={<Products />}></Route>
            <Route path={"/notifications"} element={<Notifications />}></Route>
            <Route path={"/settings"} element={<Settings />}></Route>
            <Route path={"/analytics"} element={<Analytics />}></Route>
            
          </Routes>
          </Box>

        <Box flexGrow={1} minHeight={"100vh"}></Box>
          <Box>
          
            <Footer/>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default App;
