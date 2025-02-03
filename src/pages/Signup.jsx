import toast from "react-hot-toast";
import { useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
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

  // console.log(userInput)

  async function handleSubmit(e) {
    e.preventDefault();

    if (!userInput.email || !userInput.fullname || !userInput.password) {
      toast.error("Please fill all the fields");
      return;
    }

    const response = await dispatch(signup(userInput));
    console.log(response)

    if (response.payload.data.success) {
      // toast.success(response.payload.data.message);
      navigate("/");
    }
  }
    
  return (
    
    <div className=" flex items-center justify-center">
      <div className="min-h-96 px-8 py-6 mt-4 text-left bg-white dark:bg-gray-900 rounded-xl shadow-lg">
        <div className="flex flex-col justify-center items-center h-full select-none">
          <div className="flex flex-col items-center justify-center gap-2 mb-8">
            <p className="m-0 text-[16px] font-semibold dark:text-white">
              Signup to a new account
            </p>
            <span className="m-0 text-xs min-w-[90%] text-center text-[#8B8E98]">
              Get started with our app, just start section and enjoy
              experience.
            </span>
          </div>
          <div className="w-full flex flex-col gap-1">
            <label
              htmlFor="fullname"
              className="font-semibold text-xs text-gray-400"
            >
              Fullname
            </label>
            <input
              required
              onChange={handleUserInput}
              name="fullname"
              value={userInput.fullname}
              id="fullname"
              placeholder="Fullname"
              className="border rounded-lg px-3 py-2 mb-5 text-sm w-full outline-none dark:border-gray-500 dark:bg-gray-900 text-white"
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <label
              htmlFor="email"
              className="font-semibold text-xs text-gray-400"
            >
              Email
            </label>
            <input
              required
              value={userInput.email}
              onChange={handleUserInput}
              name="email"
              id="email"
              placeholder="abc@example.com"
              className=" text-white border rounded-lg px-3 py-2 mb-5 text-sm w-full outline-none dark:border-gray-500 dark:bg-gray-900"
            />
          </div>
        </div>
        <div className="w-full flex flex-col gap-2">
          <label
            htmlFor="password"
            className="font-semibold text-xs text-gray-400"
          >
            Password
          </label>
          <input
            required
            value={userInput.password}
            onChange={handleUserInput}
            name="password"
            id="password"
            placeholder="••••••••"
            className="border rounded-lg px-3 py-2 mb-5 text-sm w-full outline-none dark:border-gray-500 dark:bg-gray-900 text-white"
            type="password"
          />
        </div>
        <div className=" w-full flex flex-row justify-between gap-1">
        <div className="w-1/2 flex flex-col gap-1">
          <label
           className="font-semibold text-xs text-gray-400"
          htmlFor="dateOfBirth">
            DOB
            </label>
          <input
          onChange={handleUserInput}
          value={userInput.dateOfBirth}
          name="dateOfBirth"
          id="dateOfBirth"
          className="border rounded-lg px-3 py-2 mb-5 text-sm w-full outline-none dark:border-gray-500 dark:bg-gray-900 text-white"
           type="date" />
        </div>
        <div className="w-1/2 flex flex-col gap-1">
  <label 
  className="font-semibold text-xs text-gray-400"
  htmlFor="gender">
    Gender
    </label>
  <select
  onChange={handleUserInput}
  value={userInput.gender}
  name="gender"
    id="gender"
    className="border rounded-lg px-3 py-2 mb-5 text-sm w-full outline-none dark:border-gray-500 dark:bg-gray-900 text-white"
  >
    <option value="">Select Gender</option>
    <option value="male">Male</option>
    <option value="female">Female</option>
    <option value="other">Other</option>
  </select>
</div>

        </div>
        
        <div>
          <button
            onClick={handleSubmit}
            className="py-1 px-8 bg-blue-500 hover:bg-blue-800 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg cursor-pointer select-none"
          >
            Signup
          </button>
        </div>
        <div className=" my-3 flex flex-row items-center justify-center">
          <p>
            Already have an account?{" "}
            <Link className=" text-blue-500 underline" to="/login">
              Login{" "}
            </Link>
          </p>
        </div>
      </div>
    </div>

  );

}

export default Signup