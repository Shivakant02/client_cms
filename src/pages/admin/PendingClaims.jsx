import { useDispatch, useSelector } from "react-redux"
import { approveClaim, rejectClaim } from "../../redux/slices/adminSlice"
import { useNavigate } from "react-router-dom"

function PendingClaims() {
    const{pendingClaims}=useSelector((state)=>state.admin.allClaims)
    const navigate=useNavigate();
    const dispatch=useDispatch();

    async function handleApprove(id){
        await dispatch(approveClaim(id))
        navigate("/dashboard")
    }

    async function handleReject(id){
        await dispatch(rejectClaim(id))
        navigate("/dashboard")
    }

  return (
    <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead className=" w-full bg-yellow-600 text-white">
      <tr>
        <th>No.</th>
        <th>Type</th>
        <th>claim Amount</th>
        <th>Reason</th>
        <th>Status</th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {pendingClaims?.map((claim, index) => (
        <tr key={claim._id}>
          <td>{index + 1}</td>
          <td>{claim.type}</td>
          <td>{claim.claimAmount}</td>
          <td className=" w-[500px]">{claim.claimReason}</td>
          <td >{claim.status}</td>
          <td><button onClick={()=>handleApprove(claim._id)} className=" btn btn-outline btn-success btn-sm">Approve</button></td>
          <td><button onClick={()=>handleReject(claim._id)}  className=" btn btn-outline btn-error btn-sm">Reject</button></td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
  )
}

export default PendingClaims