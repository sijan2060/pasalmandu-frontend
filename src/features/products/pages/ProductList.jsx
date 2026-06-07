import { useState } from "react";
import { useProducts } from "../hooks/useProducts";

export default function ProductList() {
    const [page, setPage] = useState(1);

    const {
        data,
        isLoading,
        isError,
    } = useProducts(page);

    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Error loading</p>;

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">
                Products
            </h1>

            <div className="space-y-3">
                {data.products?.map((item) => (
                    <div 
                    key={item._id}
                    className="bg-white p-4 rounded shadow">
                        {item.name}
                    </div>
                ))}
            </div>

            <div className="mt-5 flex gap-3">
                <button
                    onClick={() =>
                        setPage((p) => Math.max(1, p - 1))
                    }
                    className="bg-green-600 text-white px-4 py-2 rounded"
                >
                Next
                </button>
            </div>

        </div>
        
    );

}
