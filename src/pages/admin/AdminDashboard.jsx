import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllClaims } from "../../redux/slices/adminSlice";

function AdminDashboard() {
  const dispatch = useDispatch();
  
  // Select claims from Redux state
  const claims = useSelector((state) => state?.admin?.allClaims); 

  useEffect(() => {
    if (!claims || claims.length===0)
      dispatch(getAllClaims()); // Fetch only if no claims exist
  }, [dispatch]);

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
