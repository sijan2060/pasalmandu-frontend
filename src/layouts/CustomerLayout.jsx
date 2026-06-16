import { Outlet } from "react-router-dom";

export default function CustomerLayout() {
    return (
        <div className="min-h-screen bg-gray-100">

            {/* Navbar */}
            <header className="bg-white shadow-md p-4">
                <h1 className="text-xl font-bold text-green-600">
                    Pasalmandu
                </h1>
            </header>

            {/* { Main Content} */}
            <main className="p-6">
                <Outlet />
                </main>
        </div>
        
    );

}

