import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

function Profile() {
    const userData=useSelector((state)=>state.auth.currentUser)
  return (
    <div className=" min-h-[90vh] flex items-center justify-center ">
    <div className=" my-10 flex flex-col gap-4 rounded-lg p-4 text-white w-96 shadow-[0_0_10px_black] ">
      <img
        src={userData?.avatar}
        className=" w-20 m-auto rounded-full border border-black"
      />
      <h3 className=" text-xl font-semibold text-center capitalize">
        {userData?.fullname}
      </h3>
      <div className=" grid grid-cols-2">
        <p>Email: </p>
        <p>{userData?.email}</p>
        <p>Role: </p>
        <p>{userData?.role}</p>
      </div>

      <div className=" flex items-center justify-between gap-2 ">
        <Link
          to="/myClaims"
          className=" btn btn-outline btn-primary  w-1/2 font-semibold "
        >
          My policies
        </Link>

        <Link
          to="/myPolicies"
          className=" btn btn-outline btn-primary  w-1/2 font-semibold "
        >
          My claims
        </Link>
      </div>
    </div>
  </div>
  )
}

export default Profile