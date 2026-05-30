import { Outlet } from "react-router-dom";

export default function VendorLayout() {
    return (
        <div className="min-h-screen flex">

        {/* Sidebar */}
        <aside className="w-64 bg-green-700 text-white p-5" >
        <h2 className="text-2xl font-bold mb-6">
            Vendor Panel
        </h2>

        <nav className="space-y-4">
        <p>Dashboard</p>
        <p>Product</p>
        <p>Orders</p>
        </nav>
        </aside>

        {/*Content */}
        <main className="flex-1 bg-gray-100 p-6">
          <Outlet /></main>
        </div>
    );
}
