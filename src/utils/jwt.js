import { jwtDecode } from "jwt-decode";

export const getUserFromToken = (token) => {
    if (!token) return null;
    try {
        return jwtDecode(token);
    } catch (err) {
        return null;
    }
};
