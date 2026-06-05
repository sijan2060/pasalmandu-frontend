import { jwtDecode } from "jwt-decode";

export const getUserFromToken = (token) => {
    if (!token) return null;
    try {
        return jwtDecode(token);
    } catch {
        localStorage.removeItem("token");
        return null;
    }
};
