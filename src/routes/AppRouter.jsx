import { Routes, Route } from "react-router-dom"
import ProtectedRoute from "./ProtectedRoute";

//Layout for building later

import CustomerLayout from "../layouts/CUstomerLayout";
import VendorLayout from "../layouts/VendorLayout";
import RiderLayout from "../layouts/RiderLayout";
import AdminLayout from "../layouts/AdminLayout";

// Pages 

const Home = () => <div>Customer Home</div>;
const VendorDashboard = () => <div>Vendor Dashboard</div>;
const RiderDashboard = () => <div>Rider Dashboard</div>;
const AdminDashboard = () => <div>Admin Dashboard</div>;
const Login = () => <div>Login Page</div>;
const Unauthorized = () => <div>Unauthorized Access</div>;

export default function AppRouter() {
    return (
        <Routes>
        
        {/* Public */} 
        <Route path="/login" element={<Login />} />
        <Route path="/unauthorized" element={<Unauthorized />} />

        {/* Customer */}
        <Route element={<ProtectedRoute allowedRoles={["customer"]} />}>
         <Route element={<CustomerLayout />}>
         <Route path="/" element={<Home />} />
         </Route>
        </Route>
        
        {/* Vendor */}
        <Route element={<ProtectedRoute allowedRoles={["vendor"]} />}>
         <Route element={<VendorLayout />}>
           <Route path="/vendor" element={<VendorDashboard />} />
         </Route>
         </Route>

         {/* Rider */}
         <Route element={<ProtectedRoute allowedRoles={["rider"]} />}>
          <Route element={<RiderLayout />}>
            <Route path="/rider" element={<RiderDashboard />} />
          </Route>
         </Route>

         {/* Admin */}
         <Route element={<ProtectedRoute allowedRoles={["admin", "superadmin"]} />}>
           <Route element={<AdminLayout />}>
            <Route path="/admin" element={<AdminDashboard /> } />
          </Route>
         </Route>


        </Routes>
    )
}
