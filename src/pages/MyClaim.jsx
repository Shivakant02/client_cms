import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteClaim, getClaims } from "../redux/slices/claimSlice";
import { useNavigate } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";

function MyClaim() {
  const { claims } = useSelector((state) => state.claim);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function handleDelete(id) {
    dispatch(deleteClaim(id));
    window.location.reload();
  }

  useEffect(() => {
    if (claims.length === 0) dispatch(getClaims());
  }, [claims.length, dispatch]);

  return (
    <div className="min-h-screen px-4 py-16 bg-gradient-to-br from-blue-100 via-indigo-200 to-purple-200 dark:from-gray-900 dark:via-gray-800 dark:to-black">
      <div className="w-full max-w-7xl mx-auto overflow-hidden rounded-2xl backdrop-blur-lg bg-white/30 dark:bg-gray-900/30 border border-gray-900/30 dark:border-white/30 shadow-xl">
        {/* Table Header */}
        <div className="bg-blue-800 text-white font-bold text-lg p-4 text-center rounded-t-2xl">
          My Claims
        </div>

        <div className="overflow-x-auto p-6">
          <table className="w-full text-left text-gray-900 dark:text-gray-200">
            {/* Table Head */}
            <thead>
              <tr className="border-b border-gray-800/20 dark:border-white/20 text-gray-700 dark:text-gray-300 uppercase text-sm">
                <th className="p-4">No.</th>
                <th className="p-4">Type</th>
                <th className="p-4">Claim Amount</th>
                <th className="p-4">Reason</th>
                <th className="p-4">Policy ID</th>
                <th className="p-4">Status</th>
                <th className="p-4">Actions</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {claims.map((claim, index) => {
                const isApproved = claim.status.toLowerCase() ; 
                return (
                  <tr key={claim._id} className="border-b border-gray-800/10 dark:border-white/10 hover:bg-white/20 dark:hover:bg-gray-800/20 transition-all">
                    <td className="p-4">{index + 1}</td>
                    <td className="p-4">{claim.type}</td>
                    <td className="p-4">${claim.claimAmount}</td>
                    <td className="p-4">{claim.claimReason}</td>
                    <td className="p-4">{claim.policyId}</td>
                    <td className={`p-4 font-semibold ${isApproved=== "approved" ? "text-green-500" :isApproved=== "rejected"? "text-red-500":"text-yellow-500"} `}>
                      {claim.status}
                    </td>
                    <td className="p-4 flex gap-4">
                      {/* Update Icon */}
                      <button
                        onClick={() => navigate(`/${claim._id}/updateClaim`, { state: claim })}
                        disabled={isApproved==="approved"}
                        className={`p-2 rounded-lg transition-all ${
                          isApproved==="approved"
                            ? "text-gray-500 cursor-not-allowed"
                            : "text-blue-600 cursor-pointer hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                        }`}
                      >
                        <FaEdit size={22} />
                      </button>

                      {/* Delete Icon */}
                      <button
                        onClick={() => handleDelete(claim._id)}
                        disabled={isApproved==="approved"}
                        className={`p-2 rounded-lg transition-all ${
                          isApproved==="approved"
                            ? "text-gray-500 cursor-not-allowed"
                            : "text-red-600 cursor-pointer hover:text-red-800 dark:text-red-400 dark:hover:text-red-300"
                        }`}
                      >
                        <FaTrash size={22} />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default MyClaim;
