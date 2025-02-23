import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { getClaims, updateClaim } from "../redux/slices/claimSlice";

function UpdateClaim() {
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
    if (userInput.claimAmount > state.coverage) {
      toast.error("Claim amount should be less than coverage");
      return;
    }

    const response = await dispatch(updateClaim({ id: state._id, data: userInput }));

    if (response.payload.data.success) {
      toast.success(response.payload.data.message);
      dispatch(getClaims());
      navigate("/myClaims");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-indigo-200 to-purple-200 dark:from-gray-900 dark:via-gray-800 dark:to-black">
      <div className="w-full max-w-lg p-8 backdrop-blur-lg bg-white/30 dark:bg-gray-900/30 border border-gray-900/30 dark:border-white/30 shadow-2xl rounded-2xl">
        {/* Title */}
        <div className="text-center mb-6">
          <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">Update Your Claim</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">Modify your claim details below</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Claim Type (Disabled) */}
          <div>
            <label className="block text-sm font-semibold text-gray-600 dark:text-gray-300">Type</label>
            <input
              disabled
              value={state.type}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-white outline-none"
            />
          </div>

          {/* Claim Amount */}
          <div>
            <label className="block text-sm font-semibold text-gray-600 dark:text-gray-300">Claim Amount</label>
            <input
              required
              type="number"
              min="0"
              name="claimAmount"
              value={userInput.claimAmount}
              onChange={handleUserInput}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-white outline-none"
            />
          </div>

          {/* Claim Reason */}
          <div>
            <label className="block text-sm font-semibold text-gray-600 dark:text-gray-300">Claim Reason</label>
            <textarea
              required
              name="claimReason"
              value={userInput.claimReason}
              onChange={handleUserInput}
              className="w-full px-4 py-2 min-h-[60px] rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-white outline-none resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 hover:bg-blue-800 text-white font-semibold rounded-lg transition-all"
          >
            Submit Claim
          </button>
        </form>
      </div>
    </div>
  );
}

export default UpdateClaim;
