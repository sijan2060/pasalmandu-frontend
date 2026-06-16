import { Outlet } from "react-router-dom";

export default function RiderLayout() {
    return (
        <div className="min-h-screen flex">

            <aside className="w-64 bg-green-700 text-white p-5">
            <h2 className="text-2xl font-bold mb-6">
            Rider Panel
            </h2>
            <nav className="space-y-3">
                <p>My Deliveries</p>
                <p>Live Tracking</p>
                <p>Earnings</p>
            </nav>
            
            </aside>

            <main className="flex-1 bg-gray-100 p-6">
                <Outlet />
                </main>
       </div> 
    )
}