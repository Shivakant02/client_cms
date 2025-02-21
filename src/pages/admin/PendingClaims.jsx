import { useDispatch, useSelector } from "react-redux";
import { approveClaim, approveMultipleClaims, getAllClaims, rejectClaim} from "../../redux/slices/adminSlice";
import { useState } from "react";

function PendingClaims() {
    const { pendingClaims } = useSelector((state) => state.admin.allClaims);
    const dispatch = useDispatch();
    
    const [selectedClaims, setSelectedClaims] = useState([]);

    // Handle individual checkbox selection
    function handleSelectClaim(id) {
        setSelectedClaims((prevSelected) =>
            prevSelected.includes(id) 
                ? prevSelected.filter((claimId) => claimId !== id) 
                : [...prevSelected, id]
        );
    }

    // Handle "Select All" checkbox
    function handleSelectAll() {
        if (selectedClaims.length === pendingClaims.length) {
            setSelectedClaims([]); // Unselect all if already selected
        } else {
            setSelectedClaims(pendingClaims.map((claim) => claim._id)); // Select all
        }
    }

    async function handleApprove(id) {
        await dispatch(approveClaim(id));
        dispatch(getAllClaims()); // Refresh the claim list
    }

    async function handleReject(id) {
        await dispatch(rejectClaim(id));
        dispatch(getAllClaims()); // Refresh the claim list
    }

    async function handleApproveSelected() {
        await dispatch(approveMultipleClaims(selectedClaims));
        setSelectedClaims([]); // Clear selected claims
        dispatch(getAllClaims()); // Refresh the claim list
    }

    return (
        <div className="overflow-x-auto">
            <div className="flex justify-between items-center mb-2">
                {/* Select All Checkbox */}
                <label className="flex items-center space-x-2">
                    <input
                        type="checkbox"
                        checked={selectedClaims.length === pendingClaims.length && pendingClaims.length > 0}
                        onChange={handleSelectAll}
                        className="checkbox"
                    />
                    <span>Select All</span>
                </label>

                {/* Approve Selected Button */}
                <button 
                    onClick={handleApproveSelected}
                    className="btn btn-success btn-sm"
                    disabled={selectedClaims.length === 0}
                >
                    Approve Selected Claims
                </button>
            </div>

            <table className="table">
                {/* Table Head */}
                <thead className="bg-yellow-600 text-white">
                    <tr>
                        <th></th>
                        <th>No.</th>
                        <th>Type</th>
                        <th>Claim Amount</th>
                        <th>Reason</th>
                        <th>Status</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {pendingClaims?.map((claim, index) => (
                        <tr key={claim._id}>
                            {/* Checkbox */}
                            <td>
                                <input
                                    type="checkbox"
                                    checked={selectedClaims.includes(claim._id)}
                                    onChange={() => handleSelectClaim(claim._id)}
                                    className="checkbox"
                                />
                            </td>
                            <td>{index + 1}</td>
                            <td>{claim.type}</td>
                            <td>{claim.claimAmount}</td>
                            <td className="w-[500px]">{claim.claimReason}</td>
                            <td>{claim.status}</td>
                            <td>
                                <button 
                                    onClick={() => handleApprove(claim._id)} 
                                    className="btn btn-outline btn-success btn-sm"
                                >
                                    Approve
                                </button>
                            </td>
                            <td>
                                <button 
                                    onClick={() => handleReject(claim._id)}  
                                    className="btn btn-outline btn-error btn-sm"
                                >
                                    Reject
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default PendingClaims;
