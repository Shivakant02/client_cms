import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Signup from "./pages/Signup"
import NotFound from "./pages/NotFound"
import Login from "./pages/Login"
import MyPolicies from "./pages/MyPolicies"
import PurchasePolicy from "./pages/PurchasePolicy"
import Policies from "./pages/Policies"
import RequireAuth from "./pages/auth/Auth"
import Claim from "./pages/Claim"
import MyClaim from "./pages/MyClaim"
import Forbidden from "./pages/Forbidden"
import AdminDashboard from "./pages/admin/AdminDashboard"
import PendingClaims from "./pages/admin/PendingClaims"
import ApprovedClaims from "./pages/admin/ApprovedClaims"
import RejectedClaims from "./pages/admin/RejectedClaims"
import UpdateClaim from "./pages/UpdateClaim"
import Profile from "./pages/Profile"
import ForgetPassword from "./pages/ForgetPassword"
import ResetPassword from "./pages/ResetPassword"
import HomeLayout from "./layout/HomeLayout"

function App() {

  return (
    <>
     <Routes>
      <Route element={<HomeLayout/>}>
      <Route path="/" element={<Home/>} />
      <Route path="/policies" element={<Policies/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/forget-password" element={<ForgetPassword/>} />
      <Route path="/reset-password" element={<ResetPassword/>} />

      <Route element={<RequireAuth allowedRoles={["admin", "user"]}/>}>
      <Route path="/:id/claim" element={<Claim/>} />
      <Route path="/myClaims" element={<MyClaim/>} />
      <Route path="/myPolicies" element={<MyPolicies/>} />
      <Route path="/purchasePolicy" element={<PurchasePolicy/>} />
      <Route path="/:id/updateClaim" element={<UpdateClaim/>} />
      <Route path="/profile" element={<Profile/>}/>
      </Route>

      <Route element={<RequireAuth allowedRoles={["admin"]}/>}>
        <Route path="/dashboard" element={<AdminDashboard/>} />
        <Route path="/pendingClaims" element={<PendingClaims/>} />
        <Route path="/approvedClaims" element={<ApprovedClaims/>} />
        <Route path="/rejectedClaims" element={<RejectedClaims/>} />
      </Route>
    
      
     
      <Route path="/denied" element={<Forbidden/>} />
      <Route path="*" element={<NotFound/>} />
      </Route>
     </Routes>
    </>
  )
}

export default App
