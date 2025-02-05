import { useSelector } from "react-redux"

function RejectedClaims() {
    const{rejectedClaims}=useSelector((state)=>state.admin.allClaims)
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
        {rejectedClaims.map((claim, index) => (
          <tr key={claim._id}>
            <td>{index + 1}</td>
            <td>{claim.type}</td>
            <td>{claim.claimAmount}</td>
            <td className=" w-[500px]">{claim.claimReason}</td>
            <td >{claim.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
    )
  }

export default RejectedClaims