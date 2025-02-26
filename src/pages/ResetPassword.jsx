import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { resetPassword } from "../redux/slices/authSlice";

function ResetPassword() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const resetToken = new URLSearchParams(location.search).get("token");

  const [userInput, setUserInput] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  function handleUserInput(e) {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!userInput.newPassword || !userInput.confirmPassword) {
      toast.error("Please fill all the fields");
      return;
    }

    if (userInput.newPassword !== userInput.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    const response = await dispatch(resetPassword({ resetToken, data: userInput }));

    if (response.payload.data.success) {
      navigate("/login");
    } else {
      toast.error("Something went wrong. Try again.");
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-indigo-200 to-purple-200 dark:from-gray-900 dark:via-gray-800 dark:to-black">
      <div className="bg-white/30 dark:bg-gray-800/30 backdrop-blur-lg border border-white/20 dark:border-gray-700 rounded-xl p-8 w-[90%] max-w-md shadow-lg">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white text-center mb-4">
          Reset Password
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-300 text-center mb-6">
          Enter a new password for your account.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* New Password */}
          <label className="text-gray-700 dark:text-gray-300 text-sm font-medium">
            New Password
          </label>
          <input
            type="password"
            name="newPassword"
            value={userInput.newPassword}
            onChange={handleUserInput}
            placeholder="••••••••"
            className="w-full px-4 py-2 bg-white/50 dark:bg-gray-700/50 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
            required
          />

          {/* Confirm Password */}
          <label className="text-gray-700 dark:text-gray-300 text-sm font-medium">
            Confirm Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            value={userInput.confirmPassword}
            onChange={handleUserInput}
            placeholder="••••••••"
            className="w-full px-4 py-2 bg-white/50 dark:bg-gray-700/50 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
            required
          />

          {/* Reset Button */}
          <button
            type="submit"
            className="py-2 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;
