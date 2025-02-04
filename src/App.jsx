import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Header from "./components/Header"
import Signup from "./pages/Signup"
import NotFound from "./pages/NotFound"
import Login from "./pages/Login"
import MyPolicies from "./pages/MyPolicies"
import PurchasePolicy from "./pages/PurchasePolicy"
import Policies from "./pages/Policies"
import RequireAuth from "./pages/auth/Auth"
import Claim from "./pages/Claim"
import MyClaim from "./pages/MyClaim"

function App() {

  return (
    <>
    <Header/>
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/policies" element={<Policies/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/login" element={<Login/>} />

      <Route element={<RequireAuth allowedRoles={["admin", "user"]}/>}>
      <Route path="/:id/claim" element={<Claim/>} />
      <Route path="/myClaims" element={<MyClaim/>} />
      <Route path="/myPolicies" element={<MyPolicies/>} />
      <Route path="/purchasePolicy" element={<PurchasePolicy/>} />
      </Route>

      
     

      <Route path="*" element={<NotFound/>} />
     </Routes>
    </>
  )
}

export default App
