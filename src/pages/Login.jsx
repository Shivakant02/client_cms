import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../redux/slices/authSlice";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
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

    if (!userInput.email || !userInput.password) {
      toast.error("Please fill all the fields");
      return;
    }

    const response = await dispatch(login(userInput));
    console.log(response);

    if (response.payload.data.success) {
      navigate("/");
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen mt-15 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>
      <div className="relative px-8 py-6 text-left rounded-xl shadow-lg backdrop-blur-lg bg-white/30 dark:bg-gray-900/30 border border-gray-700/20 dark:border-gray-300/30">
        <div className="flex flex-col justify-center items-center h-full select-none">
          <div className="flex flex-col items-center justify-center gap-2 mb-8">
            <p className="text-lg font-semibold dark:text-white">Login to account</p>
            <span className="text-xs min-w-[90%] text-center text-gray-500 dark:text-gray-400">
              Get started with our app, just log in and enjoy the experience.
            </span>
          </div>
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="email" className="text-xs text-gray-500 dark:text-gray-400">Email</label>
            <input
              required
              value={userInput.email}
              onChange={handleUserInput}
              name="email"
              id="email"
              placeholder="abc@example.com"
              className="border rounded-lg px-3 py-2 mb-5 text-sm w-full outline-none bg-white/60 dark:bg-gray-800/60 text-gray-900 dark:text-white"
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="password" className="text-xs text-gray-500 dark:text-gray-400">Password</label>
            <input
              required
              value={userInput.password}
              onChange={handleUserInput}
              name="password"
              id="password"
              placeholder="••••••••"
              className="border rounded-lg px-3 py-2 mb-5 text-sm w-full outline-none bg-white/60 dark:bg-gray-800/60 text-gray-900 dark:text-white"
              type="password"
            />
          </div>
          <div className="w-full">
            <button
              onClick={handleSubmit}
              className="py-2 px-8 bg-blue-500 hover:bg-blue-700 transition duration-300 text-white w-full rounded-lg shadow-md focus:outline-none"
            >
              Login
            </button>
          </div>
          <div className="mt-3 text-sm flex flex-col items-center gap-1">
            <p className="text-gray-500 dark:text-gray-400">
              Don&apos;t have an account? <Link className="text-blue-500 hover:underline" to="/signup">Signup</Link>
            </p>
            <p>
              <Link className="text-blue-500 hover:underline" to="/forget-password">Forget password</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
