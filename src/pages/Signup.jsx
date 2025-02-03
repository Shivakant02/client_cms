import { Link } from "react-router-dom"

function Signup() {
  return (
    /* From Uiverse.io by Ameth1208 */ 
<div className="relative py-3 sm:max-w-xs sm:mx-auto">
  <div
    className="min-h-96 px-8 py-6 mt-4 text-left bg-white dark:bg-gray-900 rounded-xl shadow-lg"
  >
    <div className="flex flex-col justify-center items-center h-full select-none">
      <div className="flex flex-col items-center justify-center gap-2 mb-8">
        <p className="m-0 text-[16px] font-semibold dark:text-white">
          Signup to your Account
        </p>
        <span className="m-0 text-xs max-w-[90%] text-center text-[#8B8E98]"
          >Get started with our app to become buy the best insurance policies.
        </span>
      </div>
      <div className="w-full flex flex-col gap-2">
        <label className="font-semibold text-xs text-gray-400">Fullname</label>
        <input
          placeholder="enter your fullname"
          className="border rounded-lg px-3 py-2 mb-5 text-sm w-full outline-none dark:border-gray-500 dark:bg-gray-900"
        />
      </div>
      <div className="w-full flex flex-col gap-2">
        <label className="font-semibold text-xs text-gray-400">Email</label>
        <input
        type="email"
          placeholder="enter your email"
          className="border rounded-lg px-3 py-2 mb-5 text-sm w-full outline-none dark:border-gray-500 dark:bg-gray-900"
        />
      </div>
    <div className="w-full flex flex-col gap-2">
      <label className="font-semibold text-xs text-gray-400">Password</label>
      <input
        placeholder="••••••••"
        className="border rounded-lg px-3 py-2 mb-5 text-sm w-full outline-none dark:border-gray-500 dark:bg-gray-900"
        type="password"
      />
    </div>
    </div>
    <div>
      <button
        className="py-1 px-8 bg-blue-500 hover:bg-blue-800 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg cursor-pointer select-none"
      >
        Signup
      </button>
     <p className=" mt-2 text-gray-300"> Have an account? <Link to="/login" className="text-blue-500">Login</Link></p>
    </div>
  </div>
</div>

  )
}

export default Signup