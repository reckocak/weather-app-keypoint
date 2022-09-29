import { Outlet, Navigate } from "react-router-dom";

const PrivateRouter = () => {
  const user = JSON.parse(localStorage.getItem('user')) || false
  return user ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRouter;
