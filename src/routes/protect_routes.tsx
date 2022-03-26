import {
    Outlet,
    Navigate
  } from "react-router-dom";

const ProtectRoutes = () => {
    const auth = false;

    return auth ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectRoutes;