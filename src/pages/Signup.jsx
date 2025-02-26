import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../redux/slices/authSlice";
import { useState } from "react";

function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userInput, setUserInput] = useState({
    fullname: "",
    email: "",
    password: "",
    dateOfBirth: "",
    gender: "",
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

    if (!userInput.email || !userInput.fullname || !userInput.password) {
      toast.error("Please fill all the fields");
      return;
    }

    const response = await dispatch(signup(userInput));
    console.log(response);

    if (response.payload.data.success) {
      navigate("/");
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen mt-15 relative">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>

      {/* Signup Card */}
      <div className="relative px-8 py-6 text-left rounded-xl shadow-lg backdrop-blur-lg bg-white/30 dark:bg-gray-900/30 border border-gray-700/20 dark:border-gray-300/30">
        <div className="flex flex-col justify-center items-center h-full select-none">
          <div className="flex flex-col items-center justify-center gap-2 mb-8">
            <p className="text-lg font-semibold dark:text-white">
              Signup to a new account
            </p>
            <span className="text-xs min-w-[90%] text-center text-gray-500 dark:text-gray-400">
              Get started with our app, just sign up and enjoy the experience.
            </span>
          </div>

          {/* Fullname */}
          <div className="w-full flex flex-col gap-1">
            <label htmlFor="fullname" className="text-xs text-gray-500 dark:text-gray-400">
              Fullname
            </label>
            <input
              required
              onChange={handleUserInput}
              name="fullname"
              value={userInput.fullname}
              id="fullname"
              placeholder="Fullname"
              className="border rounded-lg px-3 py-2 mb-5 text-sm w-full outline-none bg-white/60 dark:bg-gray-800/60 text-gray-900 dark:text-white"
            />
          </div>

          {/* Email */}
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="email" className="text-xs text-gray-500 dark:text-gray-400">
              Email
            </label>
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

          {/* Password */}
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="password" className="text-xs text-gray-500 dark:text-gray-400">
              Password
            </label>
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

          {/* DOB & Gender */}
          <div className="w-full flex flex-row justify-between gap-2">
            <div className="w-1/2 flex flex-col gap-1">
              <label htmlFor="dateOfBirth" className="text-xs text-gray-500 dark:text-gray-400">
                Date of Birth
              </label>
              <input
                onChange={handleUserInput}
                value={userInput.dateOfBirth}
                name="dateOfBirth"
                id="dateOfBirth"
                className="border rounded-lg px-3 py-2 mb-5 text-sm w-full outline-none bg-white/60 dark:bg-gray-800/60 text-gray-900 dark:text-white"
                type="date"
              />
            </div>
            <div className="w-1/2 flex flex-col gap-1">
              <label htmlFor="gender" className="text-xs text-gray-500 dark:text-gray-400">
                Gender
              </label>
              <select
                onChange={handleUserInput}
                value={userInput.gender}
                name="gender"
                id="gender"
                className="border rounded-lg px-3 py-2 mb-5 text-sm w-full outline-none bg-white/60 dark:bg-gray-800/60 text-gray-900 dark:text-white"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          {/* Signup Button */}
          <div className="w-full">
            <button
              onClick={handleSubmit}
              className="py-2 px-8 bg-blue-500 hover:bg-blue-700 transition duration-300 text-white w-full rounded-lg shadow-md focus:outline-none"
            >
              Signup
            </button>
          </div>

          {/* Already have an account? */}
          <div className="mt-3 text-sm">
            <p className="text-gray-500 dark:text-gray-400">
              Already have an account?{" "}
              <Link className="text-blue-500 hover:underline" to="/login">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
