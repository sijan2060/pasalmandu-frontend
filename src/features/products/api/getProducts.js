import api from "../../../services/axios";

export const getProducts = async (page = 1) => {
    const response = await api.get(
        `/products?page=${page}`

    );
    
    return response.data;
};

