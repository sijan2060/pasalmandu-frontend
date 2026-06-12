import api from "../../../services/axios";

export const login = async (credential) => {
    const response = await api.post(
        "/auth/login",
        credential
    );

    return response.data;
};

