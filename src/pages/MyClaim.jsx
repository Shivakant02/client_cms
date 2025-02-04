import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { deleteClaim, getClaims } from "../redux/slices/claimSlice";




function MyClaim() {
  const { claims } = useSelector((state) => state.claim);
  const dispatch = useDispatch();



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
    <thead className=" bg-yellow-600 text-white">
      <tr>
        <th>No.</th>
        <th>Type</th>
        <th>claim Amount</th>
        <th>Reason</th>
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
          <td>{claim.claimReason}</td>
          <td><button className=" btn btn-outline btn-primary btn-sm">update</button></td>
          <td><button onClick={()=>handleDelete(claim._id)} className=" btn btn-outline btn-secondary btn-sm">delete</button></td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
  )
}

export default MyClaim