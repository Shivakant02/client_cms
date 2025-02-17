import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"
import { forgetPassword } from "../redux/slices/authSlice";

function ForgetPassword() {
    const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userInput, setUserInput] = useState({
    email: "",
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

    if (!userInput.email) {
      toast.error("Please fill all the fields");
      return;
    }

   const response= await dispatch(forgetPassword(userInput));
   if(response.payload.data.success){
     navigate("/login");
   }
  }
    
  return (
    <div className=" mt-20 flex items-center justify-center">
    <div className=" min-h-70 px-8 py-6 mt-4 text-left bg-white dark:bg-gray-900 rounded-xl shadow-lg">
      <div className="flex flex-col justify-center items-center h-full select-none">
        <div className="flex flex-col items-center justify-center gap-2 mb-8">
          <p className="m-0 text-[16px] font-semibold dark:text-white">
            Forget Password
          </p>
          <span className="m-0 text-xs min-w-[90%] text-center text-[#8B8E98]">
            Get started with our app, just start section and enjoy
            experience.
          </span>
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
        <div className="w-full flex flex-col gap-2">
          <p className=" mb-2">{}</p>
        </div>
      </div>
        <button
          onClick={handleSubmit}
          className="py-1 px-8 bg-blue-500 hover:bg-blue-800 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg cursor-pointer select-none"
        >
          forget password
        </button>
      </div>
    </div>
  )
}

export default ForgetPassword