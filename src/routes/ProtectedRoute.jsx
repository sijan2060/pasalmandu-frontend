import { Navigate, Outlet } from "react-router-dom";
import { getUserFromToken } from "../utils/jwt";

const ProtectedRoute = ({ allowedRoles}) => {
    const token = localStorage.getItem("token");
    const user = getUserFromToken(token);

    if (!token || !user) {
        return <Navigate to 
    }
}