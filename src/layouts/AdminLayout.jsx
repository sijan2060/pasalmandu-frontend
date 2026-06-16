import { Outlet } from "react-router-dom";

export default function RiderLayout() {
    return (
        <div className="min-h-screen flex">

            <aside className="w-64 bg-black text-white p-5">
                <h2 className="text-2xl font-bold md-6">
                    Admin Panel
                </h2>

                <nav className="space-y-3">
                    <p>Dashboard</p>
                    <p>Users</p>
                    <p>Vendor</p>
                    <p>Orders</p>
                    </nav>

            </aside>
            
            <main className="flex-1 bg-gray-100 p-6">
                <Outlet />           
                 </main>
        </div>
    );
}
