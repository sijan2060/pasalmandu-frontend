import { Navigate, Outlet } from "react-router-dom";
import { getUserFromToken } from "../utils/jwt";

const ProtectedRoute = ({ allowedRoles}) => {
    const token = localStorage.getItem("token");
    const user = getUserFromToken(token);

    if (!token || !user) {
        return <Navigate to="/login" replace />;
    }

    if (!allowedRoles.includes(user.role)) {
        return <Navigate to="/unauthorized" replace />;
    }

    return <Outlet />;
};

export default ProtectedRoute;

