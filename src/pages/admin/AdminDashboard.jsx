import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllClaims } from "../../redux/slices/adminSlice";

function AdminDashboard() {
  const dispatch = useDispatch();
  
  // Select claims from Redux state
  const {allClaims} = useSelector((state) => state?.admin); 

  useEffect(() => {
    if (
      allClaims &&
      Object.keys(allClaims).length > 0 && // Ensure allClaims is not an empty object
      Object.values(allClaims).every((arr) => Array.isArray(arr) && arr.length === 0) // Check if all arrays are empty
    )
      dispatch(getAllClaims()); // Fetch only if no claims exist
  }, [allClaims, dispatch]);

  return (
    <div className="w-full h-[80vh] flex flex-col justify-center items-center">
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
