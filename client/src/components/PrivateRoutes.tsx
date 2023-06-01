import { useContext } from "react";
import { AccountContext } from "./AccountContext";

const { Outlet, Navigate } = require("react-router");

const useAuth = () => {
  const { user } = useContext<any>(AccountContext);
  return user && user.loggedIn;
};

const PrivateRoutes = () => {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;