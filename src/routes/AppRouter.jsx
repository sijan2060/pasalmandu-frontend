import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

import CustomerLayout from "../layouts/CustomerLayout";
import VendorLayout from "../layouts/VendorLayout";
import RiderLayout from "../layouts/RiderLayout";
import AdminLayout from "../layouts/AdminLayout";

import LoginPage from "../features/auth/pages/LoginPage";
import NotFound from "../shared/components/NotFound";

// Temporary Pages
const Home = () => <div>Customer Home</div>;
const VendorDashboard = () => <div>Vendor Dashboard</div>;
const RiderDashboard = () => <div>Rider Dashboard</div>;
const AdminDashboard = () => <div>Admin Dashboard</div>;
const Unauthorized = () => <div>Unauthorized Access</div>;

export default function AppRouter() {
  return (
    <Routes>

      {/* Public Routes */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/unauthorized" element={<Unauthorized />} />

      {/* Customer Routes */}
      <Route element={<ProtectedRoute allowedRoles={["customer"]} />}>
        <Route element={<CustomerLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Route>

      {/* Vendor Routes */}
      <Route element={<ProtectedRoute allowedRoles={["vendor"]} />}>
        <Route element={<VendorLayout />}>
          <Route path="/vendor" element={<VendorDashboard />} />
        </Route>
      </Route>

      {/* Rider Routes */}
      <Route element={<ProtectedRoute allowedRoles={["rider"]} />}>
        <Route element={<RiderLayout />}>
          <Route path="/rider" element={<RiderDashboard />} />
        </Route>
      </Route>

      {/* Admin Routes */}
      <Route element={<ProtectedRoute allowedRoles={["admin", "superadmin"]} />}>
        <Route element={<AdminLayout />}>
          <Route path="/admin" element={<AdminDashboard />} />
        </Route>
      </Route>

      {/* 404 */}
      <Route path="*" element={<NotFound />} />

    </Routes>
  );
}