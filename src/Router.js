import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Main from "./pages/Main";
import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login  />} />
        <Route path="/main" element={<PrivateRouter />}>
          <Route path="" element={<Main  />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
