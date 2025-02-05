import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { deleteClaim, getClaims } from "../redux/slices/claimSlice";
import {useNavigate } from "react-router-dom";


function MyClaim() {
  const { claims } = useSelector((state) => state.claim);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function handleDelete(id) {
    dispatch(deleteClaim(id));
      window.location.reload();
}
  useEffect(() => {
    dispatch(getClaims());
  }, []);
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
      {claims.map((claim, index) => (
        <tr key={claim._id}>
          <td>{index + 1}</td>
          <td>{claim.type}</td>
          <td>{claim.claimAmount}</td>
          <td className=" w-[500px]">{claim.claimReason}</td>
          <td >{claim.status}</td>
          <td><button onClick={()=>navigate(`/${claim._id}/updateClaim`,{state:claim})} className=" btn btn-outline btn-success btn-sm">update</button></td>
          <td><button onClick={()=>handleDelete(claim._id)} className=" btn btn-outline btn-error btn-sm">delete</button></td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
  )
}

export default MyClaim