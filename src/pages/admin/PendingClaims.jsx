import { useDispatch, useSelector } from "react-redux";
import { approveClaim, approveMultipleClaims, getAllClaims, rejectClaim } from "../../redux/slices/adminSlice";
import { useState } from "react";
import { CheckCircle, XCircle, ClipboardList } from "lucide-react";

function PendingClaims() {
    const { pendingClaims } = useSelector((state) => state.admin.allClaims);
    const dispatch = useDispatch();
    
    const [selectedClaims, setSelectedClaims] = useState([]);

    function handleSelectClaim(id) {
        setSelectedClaims((prevSelected) =>
            prevSelected.includes(id) 
                ? prevSelected.filter((claimId) => claimId !== id) 
                : [...prevSelected, id]
        );
    }

    function handleSelectAll() {
        if (selectedClaims.length === pendingClaims.length) {
            setSelectedClaims([]);
        } else {
            setSelectedClaims(pendingClaims.map((claim) => claim._id));
        }
    }

    async function handleApprove(id) {
        await dispatch(approveClaim(id));
        dispatch(getAllClaims());
    }

    async function handleReject(id) {
        await dispatch(rejectClaim(id));
        dispatch(getAllClaims());
    }

    async function handleApproveSelected() {
        await dispatch(approveMultipleClaims(selectedClaims));
        setSelectedClaims([]);
        dispatch(getAllClaims());
    }

    return (
        <div className="min-h-screen py-16 px-4 bg-gradient-to-br from-blue-100 via-indigo-200 to-purple-200 dark:from-gray-900 dark:via-gray-800 dark:to-black ">
            
            <div className="w-full max-w-7xl mx-auto p-6 bg-white/30 dark:bg-gray-900/30 backdrop-blur-lg border border-gray-300 dark:border-gray-800 
                            shadow-lg rounded-xl text-gray-900 dark:text-white">
                
                {/* Header - Select All & Bulk Approve */}
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold flex items-center gap-2">
                        <ClipboardList className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                        Pending Claims
                    </h2>

                    <div className="flex items-center space-x-3">
                        <label className="flex items-center space-x-2 text-sm font-medium">
                            <input
                                type="checkbox"
                                checked={selectedClaims.length === pendingClaims.length && pendingClaims.length > 0}
                                onChange={handleSelectAll}
                                className="h-4 w-4 border-gray-300 rounded text-blue-600 focus:ring-blue-500"
                            />
                            <span>Select All</span>
                        </label>

                        <button 
                            onClick={handleApproveSelected}
                            className="px-4 py-2 text-sm font-medium bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition disabled:opacity-50"
                            disabled={selectedClaims.length === 0}
                        >
                            Approve Selected
                        </button>
                    </div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left border-collapse rounded-lg overflow-hidden">
                        {/* Table Head */}
                        <thead className="bg-gray-800 text-white uppercase text-sm">
                            <tr>
                                <th className="px-4 py-3"></th>
                                <th className="px-4 py-3">No.</th>
                                <th className="px-4 py-3">Type</th>
                                <th className="px-4 py-3">Claim Amount</th>
                                <th className="px-4 py-3">Reason</th>
                                <th className="px-4 py-3">Status</th>
                                <th className="px-4 py-3 text-center">Actions</th>
                            </tr>
                        </thead>

                        {/* Table Body */}
                        <tbody className="divide-y divide-gray-300 dark:divide-gray-700">
                            {pendingClaims?.map((claim, index) => (
                                <tr key={claim._id} className="hover:bg-gray-200/50 dark:hover:bg-gray-800/50 transition">
                                    
                                    {/* Checkbox */}
                                    <td className="px-4 py-3">
                                        <input
                                            type="checkbox"
                                            checked={selectedClaims.includes(claim._id)}
                                            onChange={() => handleSelectClaim(claim._id)}
                                            className="h-4 w-4 border-gray-300 rounded text-blue-600 focus:ring-blue-500"
                                        />
                                    </td>

                                    <td className="px-4 py-3">{index + 1}</td>
                                    <td className="px-4 py-3 capitalize">{claim.type}</td>

                                    <td className="px-4 py-3 font-semibold text-green-600 dark:text-green-400">
                                        ${claim.claimAmount.toLocaleString()}
                                    </td>

                                    <td className="px-4 py-3 w-[300px] truncate">{claim.claimReason}</td>

                                    <td className="px-4 py-3">
                                        <span
                                            className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                                claim.status === "pending"
                                                    ? "bg-yellow-500 text-white"
                                                    : "bg-gray-400 text-black"
                                            }`}
                                        >
                                            {claim.status}
                                        </span>
                                    </td>

                                    {/* Action Icons */}
                                    <td className="px-4 py-3 flex justify-center space-x-4">
                                        <button 
                                            onClick={() => handleApprove(claim._id)} 
                                            className="text-green-600 hover:text-green-700 transition"
                                            title="Approve"
                                        >
                                            <CheckCircle className="h-6 w-6" />
                                        </button>

                                        <button 
                                            onClick={() => handleReject(claim._id)}  
                                            className="text-red-600 hover:text-red-700 transition"
                                            title="Reject"
                                        >
                                            <XCircle className="h-6 w-6" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default PendingClaims;
