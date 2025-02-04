import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom"
import { createPolicy } from "../redux/slices/policySlice";
// import toast from "react-hot-toast";

function PurchasePolicy() {
    const {state}=useLocation()
    const [futureDate, setFutureDate] = useState("");
    const navigate=useNavigate();
    const dispatch=useDispatch();                           

    const data={
        type:state.type,
        coverage:state.coverageAmount,
        premium:state.price
    }


    async function handleSubmit(e){
        e.preventDefault();
        const response=await dispatch(createPolicy(data));
        if(response.payload.data.success)
            navigate("/myPolicies");
        }
    

    useEffect(() => {
      // Get the current date
      const currentDate = new Date();
      // Add 1 year
      currentDate.setFullYear(currentDate.getFullYear() + 1);
      // Format to YYYY-MM-DD for the date input
      const formattedDate = currentDate.toISOString().slice(0, 10);
      setFutureDate(formattedDate);
      
    }, []);

    // console.log(state)
  return (
    <div className=" flex items-center justify-center">
      <div className="min-h-96 px-8 py-6 mt-4 text-left bg-white dark:bg-gray-900 rounded-xl shadow-lg">
        <div className="flex flex-col justify-center items-center h-full select-none">
          <div className="flex flex-col items-center justify-center gap-2 mb-8">
            <p className="m-0 text-[16px] font-semibold dark:text-white">
              Review the Policy details
            </p>
            <span className="m-0 text-xs min-w-[90%] text-center text-[#8B8E98]">
              Purchase this Policy, and become a premium partner of aur organization.
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
              
              name="type"
              value={state.type}
              id="type"
              disabled
              className="border rounded-lg px-3 py-2 mb-5 text-sm w-full outline-none dark:border-gray-500 dark:bg-gray-900 text-white"
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <label
              htmlFor="coverage"
              className="font-semibold text-xs text-gray-400"
            >
              coverageAmount
            </label>
            <input
              required
              name="coverage"
              id="coverage"
              type="number"
              value={state.coverageAmount}
             disabled
              className=" text-white border rounded-lg px-3 py-2 mb-5 text-sm w-full outline-none dark:border-gray-500 dark:bg-gray-900"
            />
          </div>
        </div>
        <div className="w-full flex flex-col gap-2">
          <label
            htmlFor="premium"
            className="font-semibold text-xs text-gray-400"
          >
            Price
          </label>
          <input
            required
            disabled
            name="premium"
            value={state.price}
            id="premium"
            type="number"
            className="border rounded-lg px-3 py-2 mb-5 text-sm w-full outline-none dark:border-gray-500 dark:bg-gray-900 text-white"
          />
        </div>
        <div className=" w-full flex flex-row justify-between gap-1">
        <div className="w-1/2 flex flex-col gap-1">
          <label
           className="font-semibold text-xs text-gray-400"
          htmlFor="valid-till">
            valid till
            </label>
          <input
          name="valid-till"
          id="valid-till"
          disabled
          value={futureDate}
          className="border rounded-lg px-3 py-2 mb-5 text-sm w-full outline-none dark:border-gray-500 dark:bg-gray-900 text-white"
           type="date" />
        </div>
        <div className="w-1/2 flex flex-col gap-1">
  <label 
  className="font-semibold text-xs text-gray-400"
  htmlFor="start-date">
    Start date
    </label>
  <input
  name="start-dat"
    id="start-date"
    disabled
    value={new Date().toISOString().slice(0, 10)}
    type="date"
    className="border rounded-lg px-3 py-2 mb-5 text-sm w-full outline-none dark:border-gray-500 dark:bg-gray-900 text-white"
  />
    
</div>

        </div>
        
        <div>
          <button
          onClick={handleSubmit}
            className="py-1 px-8 bg-blue-500 hover:bg-blue-800 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg cursor-pointer select-none"
          >
            Purchase policy
          </button>
        </div>
      </div>
    </div>

  )
}

export default PurchasePolicy