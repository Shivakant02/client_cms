import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { createPolicy, myPolicies } from "../redux/slices/policySlice";
import { getUserProfile } from "../redux/slices/authSlice";

function PurchasePolicy() {
  const { state } = useLocation();
  const [futureDate, setFutureDate] = useState("");
  const [policyFor, setPolicyFor] = useState("Myself");
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    age: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const data = {
    type: state.type,
    coverage: state.coverageAmount,
    premium: state.price,
    avatar: state.imageUrl,
    ...userData,
  };

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await dispatch(createPolicy(data));
    if (response.payload.data.success) {
      dispatch(myPolicies());
      dispatch(getUserProfile());
      navigate("/myPolicies");
    }
  }

  useEffect(() => {
    const currentDate = new Date();
    currentDate.setFullYear(currentDate.getFullYear() + 1);
    setFutureDate(currentDate.toISOString().slice(0, 10));
  }, []);

  return (
    <div className="min-h-screen py-16 bg-gradient-to-br from-blue-100 via-indigo-200 to-purple-200 dark:from-gray-900 dark:via-gray-800 dark:to-black flex items-center justify-center">
    <div className="flex items-center justify-center min-h-screen p-6">
      <div className="w-full max-w-lg p-6 rounded-2xl shadow-lg bg-white/10 dark:bg-gray-900/30 backdrop-blur-lg border border-gray-400 dark:border-gray-700 text-gray-900 dark:text-white">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-xl font-semibold">Review the Policy Details</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Purchase this policy and become a premium partner of our
            organization.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Policy Type */}
          <div>
            <label className="text-xs font-semibold text-gray-500">
              Policy Type
            </label>
            <input
              disabled
              value={state.type}
              className="w-full border rounded-lg px-3 py-2 text-sm outline-none bg-white/20 dark:bg-gray-800 text-gray-900 dark:text-white"
            />
          </div>

          {/* Coverage & Price */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold text-gray-500">
                Coverage Amount
              </label>
              <input
                disabled
                value={`₹${state.coverageAmount}`}
                className="w-full border rounded-lg px-3 py-2 text-sm outline-none bg-white/20 dark:bg-gray-800 text-gray-900 dark:text-white"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-gray-500">Price</label>
              <input
                disabled
                value={`₹${state.price}`}
                className="w-full border rounded-lg px-3 py-2 text-sm outline-none bg-white/20 dark:bg-gray-800 text-gray-900 dark:text-white"
              />
            </div>
          </div>

          {/* Validity Dates */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold text-gray-500">
                Start Date
              </label>
              <input
                disabled
                value={new Date().toISOString().slice(0, 10)}
                type="date"
                className="w-full border rounded-lg px-3 py-2 text-sm outline-none bg-white/20 dark:bg-gray-800 text-gray-900 dark:text-white"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-gray-500">
                Valid Till
              </label>
              <input
                disabled
                value={futureDate}
                type="date"
                className="w-full border rounded-lg px-3 py-2 text-sm outline-none bg-white/20 dark:bg-gray-800 text-gray-900 dark:text-white"
              />
            </div>
          </div>

          {/* Policy For Dropdown */}
          <div>
            <label className="text-xs font-semibold text-gray-500">
              Policy For
            </label>
            <select
              value={policyFor}
              onChange={(e) => setPolicyFor(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 text-sm outline-none bg-white/20 dark:bg-gray-800 text-gray-900 dark:text-white"
            >
              <option value="Myself">Myself</option>
              <option value="Others">Others</option>
            </select>
          </div>

          {/* Name (Visible if 'Others' selected) */}
         
            <div>
              <label className="text-xs font-semibold text-gray-500">
                Full Name
              </label>
              <input
                type="text"
                value={userData.name}
                onChange={(e) =>
                  setUserData({ ...userData, name: e.target.value })
                }
                required
                className="w-full border rounded-lg px-3 py-2 text-sm outline-none bg-white/20 dark:bg-gray-800 text-gray-900 dark:text-white"
              />
            </div>
       

          {/* Email */}
          <div>
            <label className="text-xs font-semibold text-gray-500">
              Email Address
            </label>
            <input
              type="email"
              value={userData.email}
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
              required
              className="w-full border rounded-lg px-3 py-2 text-sm outline-none bg-white/20 dark:bg-gray-800 text-gray-900 dark:text-white"
            />
          </div>

          {/* Age (Visible if 'Others' selected) */}
          
            <div>
              <label className="text-xs font-semibold text-gray-500">Age</label>
              <input
                type="number"
                min="18"
                value={userData.age}
                onChange={(e) =>
                  setUserData({ ...userData, age: e.target.value })
                }
                required
                className="w-full border rounded-lg px-3 py-2 text-sm outline-none bg-white/20 dark:bg-gray-800 text-gray-900 dark:text-white"
              />
            </div>
       

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full py-2 bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-400 text-white rounded-lg shadow-md transition-all duration-300"
            >
              Purchase Policy
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
}

export default PurchasePolicy;
