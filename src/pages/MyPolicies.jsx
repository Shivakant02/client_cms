import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { myPolicies } from "../redux/slices/policySlice";
import PolicyCard from "../components/PolicyCard";

function MyPolicies() {
    const dispatch = useDispatch();
    const {policies}=useSelector((state)=>state.policy)
    // console.log(policies)

    useEffect(()=>{
        dispatch(myPolicies())
    },[])
  return (
    <div className="">
       <ul className=" flex flex-wrap flex-row gap-3 ">
              {policies.map((policy)=>(
                <li key={policy._id}>
                     <PolicyCard data={policy}/>
                </li>
              ))}
       </ul>
    </div>
  )
}

export default MyPolicies