import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Profile() {
  const userData = useSelector((state) => state.auth.currentUser);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-indigo-200 to-purple-200 dark:from-gray-900 dark:via-gray-800 dark:to-black">
      <div className="w-full max-w-sm p-6 backdrop-blur-lg bg-white/30 dark:bg-gray-900/30 border border-gray-900/30 dark:border-white/30 shadow-xl rounded-2xl text-gray-900 dark:text-white text-center">
        {/* Profile Image */}
        <img
          src={userData?.avatar}
          alt="Profile"
          className="w-24 h-24 mx-auto rounded-full border-4 border-gray-300 dark:border-gray-700 shadow-lg"
        />

        {/* User Info */}
        <h3 className="text-xl font-bold mt-4 capitalize">{userData?.fullname}</h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm">{userData?.email}</p>
        <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400 mt-1">{userData?.role}</p>

        {/* Total Policies & Claims */}
        <div className="mt-5 flex justify-between bg-gray-100 dark:bg-gray-800 p-3 rounded-lg shadow">
          <div>
            <p className="text-sm text-gray-500">Total Policies</p>
            <p className="text-lg font-semibold">{userData?.policies?.length || 0}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Total Claims</p>
            <p className="text-lg font-semibold">{userData?.claims?.length || 0}</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex flex-col gap-3">
          <Link
            to="/updateProfile"
            className="w-full py-2 rounded-lg bg-blue-600 hover:bg-blue-800 text-white font-semibold transition-all"
          >
            Update Profile
          </Link>
          <Link
            to="/changePassword"
            className="w-full py-2 rounded-lg bg-gray-700 hover:bg-gray-900 text-white font-semibold transition-all"
          >
            Change Password
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Profile;
