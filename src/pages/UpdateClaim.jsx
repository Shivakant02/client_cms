import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom"
import { updateClaim } from "../redux/slices/claimSlice";

function UpdateClaim() {
  const {state}=useLocation();
  const dispatch=useDispatch()
  const navigate=useNavigate();
  const [userInput,setUserInput]=useState({
    claimAmount:"",
    claimReason:""
  })

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
    if (userInput.claimAmount>state.coverage) {
      toast.error("claim amount should be less than coverage");
      return;
    }

    const response = await dispatch(updateClaim({id:state._id,data:userInput}));
    // console.log(response)

    if (response.payload.data.success) {
      toast.success(response.payload.data.message);
      navigate("/myClaims");
    }
  }
  return (
    <div className=" flex items-center justify-center">
      <div className="min-h-96 px-8 py-6 mt-4 text-left bg-white dark:bg-gray-900 rounded-xl shadow-lg">
        <div className="flex flex-col justify-center items-center h-full gap-1 select-none">
          <div className="flex flex-col items-center justify-center gap-2 mb-8">
            <p className="m-0 text-[16px] font-semibold dark:text-white">
              Enter the updated details
            </p>
            <span className="m-0 text-xs w-96 text-center text-[#8B8E98]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            </span>
          </div>
          <div className="w-full flex flex-col gap-1">
            <label
              htmlFor="type"
              className="font-semibold text-xs text-gray-400"
            >
              Type
            </label>
            <input
              required
              disabled
              name="type"
              value={state.type}
              id="type"
              className="border rounded-lg px-3 py-2 mb-5 text-sm w-full outline-none dark:border-gray-500 dark:bg-gray-900 text-white"
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <label
              htmlFor="claimAmount"
              className="font-semibold text-xs text-gray-400"
            >
              Claim Amount
            </label>
            <input
              required
              min="0"
              name="claimAmount"
              id="claimAmount"
              onChange={handleUserInput}
              value={userInput.claimAmount}
              type="number"
              className=" text-white border rounded-lg px-3 py-2 mb-5 text-sm w-full outline-none dark:border-gray-500 dark:bg-gray-900"
            />
          </div>
        </div>
        <div className="w-full flex flex-col gap-2">
          <label
            htmlFor="claimReason"
            className="font-semibold text-xs text-gray-400"
          >
            Claim reason
          </label>
          <textarea
            required
            value={userInput.claimReason}
            onChange={handleUserInput}
            name="claimReason"
            id="claimReason"
            type="text"
            className=" min-h-[60px] border rounded-lg px-3 py-2 mb-5 text-sm w-full outline-none dark:border-gray-500 dark:bg-gray-900 text-white"
          />
        </div> 
        <div>
          <button
          onClick={handleSubmit}
            className="py-1 px-8 bg-blue-500 hover:bg-blue-800 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg cursor-pointer select-none"
          >
            Submit Claim
          </button>
        </div>
      </div>
    </div>

  )
}

export default UpdateClaim