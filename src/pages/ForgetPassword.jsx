import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { forgetPassword } from "../redux/slices/authSlice";

function ForgetPassword() {
  const dispatch = useDispatch();
  const [userInput, setUserInput] = useState({ email: "" });
  const [emailSent, setEmailSent] = useState(false);

  function handleUserInput(e) {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!userInput.email) {
      toast.error("Please enter your email");
      return;
    }

    const response = await dispatch(forgetPassword(userInput));
    if (response.payload.data.success) {
      setEmailSent(true);
      toast.success("Reset link sent! Check your inbox.");
    } else {
      toast.error("Something went wrong! Try again.");
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-indigo-200 to-purple-200 dark:from-gray-900 dark:via-gray-800 dark:to-black">
      <div className="bg-white/30 dark:bg-gray-800/30 backdrop-blur-lg border border-white/20 dark:border-gray-700 rounded-xl p-8 w-[90%] max-w-md shadow-lg">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white text-center mb-4">
          Forgot Password?
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-300 text-center mb-6">
          Enter your email below to receive a password reset link.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <label className="text-gray-700 dark:text-gray-300 text-sm font-medium">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={userInput.email}
            onChange={handleUserInput}
            placeholder="Enter your email"
            className="w-full px-4 py-2 bg-white/50 dark:bg-gray-700/50 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
            required
          />

          <button
            type="submit"
            className="py-2 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all"
          >
            Send Reset Link
          </button>
        </form>

        {emailSent && (
          <p className="text-center text-sm text-gray-600 dark:text-gray-300 mt-4">
            Email not received?{" "}
            <button
              onClick={handleSubmit}
              className="text-blue-500 hover:underline"
            >
              Send again
            </button>
          </p>
        )}
      </div>
    </div>
  );
}

export default ForgetPassword;
