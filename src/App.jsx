import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Header from "./components/Header"
import Signup from "./pages/Signup"
import NotFound from "./pages/NotFound"
import Login from "./pages/Login"
import MyPolicies from "./pages/MyPolicies"
import PurchasePolicy from "./pages/PurchasePolicy"
import Policies from "./pages/Policies"

function App() {

  return (
    <>
    <Header/>
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/policies" element={<Policies/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/myPolicies" element={<MyPolicies/>} />
      <Route path="/purchasePolicy" element={<PurchasePolicy/>} />

      <Route path="*" element={<NotFound/>} />
     </Routes>
    </>
  )
}

export default App
