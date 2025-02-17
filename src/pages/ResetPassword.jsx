import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import {resetPassword } from "../redux/slices/authSlice";

function ResetPassword() {
    const location=useLocation();
    const navigate = useNavigate();
  const dispatch = useDispatch();
  const resetToken=new URLSearchParams(location.search).get("token");
  const [userInput, setUserInput] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  function handleUserInput(e) {
    const { name, value } = e.target;
    setUserInput({
      ...userInput,
      [name]: value,
    });
  }

  // console.log(userInput)

  async function handleSubmit(e) {
    e.preventDefault();

    if (!userInput.newPassword || !userInput.confirmPassword) {
      toast.error("Please fill all the fields");
      return;
    }

    if(userInput.newPassword !== userInput.confirmPassword){
        toast.error("Password does not match");
        return;
    }

    const response = await dispatch(resetPassword({resetToken,data:userInput}));

    if (response.payload.data.success) {
      // toast.success(response.payload.data.message);
      navigate("/login");
    }
  }
  return (
    <div className=" flex items-center justify-center">
    <div className="min-h-96 px-8 py-6 mt-4 text-left bg-white dark:bg-gray-900 rounded-xl shadow-lg">
      <div className="flex flex-col justify-center items-center h-full select-none">
        <div className="flex flex-col items-center justify-center gap-2 mb-8">
          <p className="m-0 text-[16px] font-semibold dark:text-white">
          Reset Password
          </p>
          <span className="m-0 text-xs min-w-[90%] text-center text-[#8B8E98]">
            Get started with our app, just start section and enjoy
            experience.
          </span>
        </div>
        <div className="w-full flex flex-col gap-2">
          <label
            htmlFor="newPassword"
            className="font-semibold text-xs text-gray-400"
          >
            New Password
          </label>
          <input
            required
            value={userInput.newPassword}
            onChange={handleUserInput}
            name="newPassword"
            id="newPassword"
            type="password"
            placeholder="••••••••"
            className=" text-white border rounded-lg px-3 py-2 mb-5 text-sm w-full outline-none dark:border-gray-500 dark:bg-gray-900"
          />
        </div>
      </div>
      <div className="w-full flex flex-col gap-2">
        <label
          htmlFor="confirmPassword"
          className="font-semibold text-xs text-gray-400"
        >
          Confirm Password
        </label>
        <input
          required
          value={userInput.confirmPassword}
          onChange={handleUserInput}
          name="confirmPassword"
          id="confirmPassword"
          placeholder="••••••••"
          className="border rounded-lg px-3 py-2 mb-5 text-sm w-full outline-none dark:border-gray-500 dark:bg-gray-900 text-white"
          type="password"
        />
      </div>
      <div>
        <button
          onClick={handleSubmit}
          className="py-1 px-8 bg-blue-500 hover:bg-blue-800 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg cursor-pointer select-none"
        >
          Reset Password
        </button>
      </div>
    </div>
  </div>

  )
}

export default ResetPassword