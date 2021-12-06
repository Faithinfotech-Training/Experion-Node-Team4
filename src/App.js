import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import UserContextProvider from "./context/provider/user-context-provider";
import Footer from "./Footer/Footer";
import Routers from "./Routers/Routers";

export default function App() {
  return (
    <UserContextProvider>
      <>
        <Routers />
        <Footer />
        {/* <Tab /> */}
        {/* <LoginForm/> */}
      </>
    </UserContextProvider>
  );
}
