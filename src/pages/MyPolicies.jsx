import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { myPolicies } from "../redux/slices/policySlice";
import PolicyCard from "../components/PolicyCard";

function MyPolicies() {
  const dispatch = useDispatch();
  const { policies } = useSelector((state) => state.policy);
  const hasRun = useRef(false);

  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;
    if (policies.length === 0) dispatch(myPolicies());
  }, [dispatch, policies.length]);

  return (
    <div className="min-h-screen py-15
      bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-black">
      <ul className="flex flex-wrap gap-3 flex-row">
        {policies.map((policy) => (
          <li key={policy._id}>
            <PolicyCard data={policy} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MyPolicies;
