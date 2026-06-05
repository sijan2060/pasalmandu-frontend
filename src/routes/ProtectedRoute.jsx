import { Navigate, Outlet } from "react-router-dom";


const fakeUser = {
    role: "admin", // change this to test roles
}
// import { getUserFromToken } from "../utils/jwt";

const ProtectedRoute = ({ allowedRoles}) => {
    // const token = localStorage.getItem("token");
    const user = fakeUser;;

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    if (!allowedRoles.includes(user.role)) {
        return <Navigate to="/unauthorized" replace />;
    }

    return <Outlet />;
};

export default ProtectedRoute;

