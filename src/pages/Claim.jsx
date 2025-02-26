import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { getClaims, submitClaim } from "../redux/slices/claimSlice";
import { myPolicies } from "../redux/slices/policySlice";
import { getUserProfile } from "../redux/slices/authSlice";

function Claim() {
  const { state } = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [userInput, setUserInput] = useState({
    claimAmount: "",
    claimReason: "",
  });

  function handleUserInput(e) {
    const { name, value } = e.target;
    setUserInput({
      ...userInput,
      [name]: value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!userInput.claimAmount || !userInput.claimReason) {
      toast.error("Please fill all the fields");
      return;
    }

    if (userInput.claimAmount > state.coverage) {
      toast.error("Claim amount should be less than coverage");
      return;
    }

    const response = await dispatch(submitClaim({ id: state._id, data: userInput }));
    if (response.payload?.data?.success) {
      dispatch(getClaims());
      dispatch(myPolicies());
      dispatch(getUserProfile());

      navigate("/myClaims");
    } else {
      toast.error("Failed to submit claim.");
    }
  }

  return (
    <div className="min-h-screen py-16 bg-gradient-to-br from-blue-100 via-indigo-200 to-purple-200 dark:from-gray-900 dark:via-gray-800 dark:to-black flex items-center justify-center">
      <div className="w-full max-w-lg px-8 py-6 bg-white/30 dark:bg-gray-800/30 backdrop-blur-lg rounded-xl shadow-lg border border-white/20 dark:border-gray-700">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Enter the Required Details</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Please provide accurate details to process your claim request efficiently.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          
          {/* Claim Type (Disabled) */}
          <div>
            <label className="text-xs font-semibold text-gray-500 dark:text-gray-400">Type</label>
            <input
              name="type"
              value={state.type}
              disabled
              className="w-full border rounded-lg px-3 py-2 text-sm bg-gray-100 dark:bg-gray-700/50 dark:text-white"
            />
          </div>

          {/* Claim Amount */}
          <div>
            <label className="text-xs font-semibold text-gray-500 dark:text-gray-400">Claim Amount</label>
            <input
              name="claimAmount"
              type="number"
              min="0"
              required
              value={userInput.claimAmount}
              onChange={handleUserInput}
              className="w-full border rounded-lg px-3 py-2 text-sm bg-gray-100 dark:bg-gray-700/50 dark:text-white"
            />
          </div>

          {/* Claim Reason */}
          <div>
            <label className="text-xs font-semibold text-gray-500 dark:text-gray-400">Claim Reason</label>
            <textarea
              name="claimReason"
              required
              value={userInput.claimReason}
              onChange={handleUserInput}
              className="w-full border rounded-lg px-3 py-2 text-sm min-h-[60px] bg-gray-100 dark:bg-gray-700/50 dark:text-white"
            />
          </div>

          {/* Two-Column Section (Max Coverage & Date) */}
          <div className="grid grid-cols-2 gap-4">
            
            {/* Max Coverage (Disabled) */}
            <div>
              <label className="text-xs font-semibold text-gray-500 dark:text-gray-400">Max Coverage</label>
              <input
                name="coverage"
                type="number"
                disabled
                value={state.coverage}
                className="w-full border rounded-lg px-3 py-2 text-sm bg-gray-100 dark:bg-gray-700/50 dark:text-white"
              />
            </div>

            {/* Claim Date (Disabled) */}
            <div>
              <label className="text-xs font-semibold text-gray-500 dark:text-gray-400">Claim Date</label>
              <input
                name="start-date"
                type="date"
                value={new Date().toISOString().slice(0, 10)}
                disabled
                className="w-full border rounded-lg px-3 py-2 text-sm bg-gray-100 dark:bg-gray-700/50 dark:text-white"
              />
            </div>

          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 text-white bg-blue-500 hover:bg-blue-700 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
          >
            Submit Claim
          </button>

        </form>

      </div>
    </div>
  );
}

export default Claim;
