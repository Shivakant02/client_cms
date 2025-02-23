import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getAllClaims } from "../../redux/slices/adminSlice";

function AdminDashboard() {
  const dispatch = useDispatch();
  
  useEffect(() => {
      dispatch(getAllClaims()); // Fetch only if no claims exist
  }, [dispatch]);

  return (
    <div className="min-h-screen py-16 px-6 bg-gradient-to-br from-blue-100 via-indigo-200 to-purple-200 dark:from-gray-900 dark:via-gray-800 dark:to-black flex flex-col justify-center items-center">
      <ul className="flex flex-row gap-2">
        <li>
          <Link to="/pendingClaims">
            <button className="btn btn-info btn-md">Pending Claims</button>
          </Link>
        </li>
        <li>
          <Link to="/approvedClaims">
            <button className="btn btn-info btn-md">Approved Claims</button>
          </Link>
        </li>
        <li>
          <Link to="/rejectedClaims">
            <button className="btn btn-info btn-md">Rejected Claims</button>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default AdminDashboard;
