import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllClaims, getAllPolicies, getAllUsers } from "../../redux/slices/adminSlice";
import { Search, Users, FileText, CheckCircle, XCircle, Hourglass, Shield } from "lucide-react";

function AdminDashboard() {
  const dispatch = useDispatch();
  const { allUsers, allPolicies, allClaims } = useSelector((state) => state.admin);
  const hasRun = useRef(false);

  const [searchUser, setSearchUser] = useState("");
  const [searchPolicy, setSearchPolicy] = useState("");

  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;
    if(!allClaims || !allUsers || !allPolicies || allUsers.length === 0 || allPolicies.length === 0){
    dispatch(getAllClaims());
    dispatch(getAllUsers());
    dispatch(getAllPolicies());
    }
  }, [dispatch,allUsers,allPolicies,allClaims,allUsers.length,allPolicies.length]);

  // Stats
  const stats = [
    { title: "Users", count: allUsers?.length || 0, icon: Users, color: "bg-blue-500" },
    { title: "Admins", count: allUsers?.filter(user => user.role === "admin").length || 0, icon: Shield, color: "bg-purple-500" },
    { title: "Policies", count: allPolicies?.length || 0, icon: FileText, color: "bg-green-500" },
    { title: "Pending Claims", count: allClaims?.pendingClaims?.length || 0, icon: Hourglass, color: "bg-yellow-500" },
    { title: "Approved Claims", count: allClaims?.approvedClaims?.length || 0, icon: CheckCircle, color: "bg-teal-500" },
    { title: "Rejected Claims", count: allClaims?.rejectedClaims?.length || 0, icon: XCircle, color: "bg-red-500" }
  ];

  // Filters
  const filteredUsers = allUsers?.filter((user) => user?._id?.toString().includes(searchUser.trim()) || user?.email?.toLowerCase().includes(searchUser.toLowerCase().trim()));
  const filteredPolicies = allPolicies?.filter((policy) => policy?._id?.toLowerCase().includes(searchPolicy.toLowerCase().trim() )
   || policy?.policyHolder?.toLowerCase().includes(searchPolicy.toLowerCase().trim())
   || policy?.type?.toLowerCase().includes(searchPolicy.toLowerCase().trim()));


  return (
    <div className="min-h-screen py-16 px-6 bg-gradient-to-br from-blue-100 via-indigo-200 to-purple-200 dark:from-gray-900 dark:via-gray-800 dark:to-black">
      <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">Admin Dashboard</h1>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {stats.map(({ title, count, icon: Icon, color }) => (
          <div key={title} className={`p-6 rounded-lg shadow-md text-white ${color} flex items-center justify-between`}>
            <div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="text-2xl font-bold">{count}</p>
            </div>
            <Icon className="w-10 h-10 opacity-80" />
          </div>
        ))}
      </div>

      {/* Navigation */}
      <NavigationButtons />

      {/* Users */}
      <SearchBar placeholder="Search Users..." value={searchUser} onChange={setSearchUser} />
      <UserTable users={filteredUsers} />

      {/* Policies */}
      <SearchBar placeholder="Search Policies..." value={searchPolicy} onChange={setSearchPolicy} />
      <PolicyTable policies={filteredPolicies} />
    </div>
  );
}

const NavigationButtons = () => (
  <div className="flex gap-4 mb-8 justify-center">
    {["Pending Claims", "Approved Claims", "Rejected Claims"].map((item) => (
      <Link key={item} to={`/${item.replace(" ", "").toLowerCase()}`}>
        <button className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700">{item}</button>
      </Link>
    ))}
  </div>
);

const SearchBar = ({ placeholder, value, onChange }) => (
  <div className="flex items-center gap-2 w-full max-w-6xl p-3 backdrop-blur-lg bg-white/30 dark:bg-gray-900/30 border border-gray-900/30 dark:border-white/30 
                      shadow-2xl rounded-2xl text-gray-900 dark:text-white">
    <Search className="w-5 h-5 text-gray-500 dark:text-white" />
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full p-2 outline-none rounded-md bg-transparent dark:text-white"
    />
  </div>
);

const UserTable = ({ users }) => (
  <div className="overflow-x-auto mb-8 w-full max-w-6xl p-3 backdrop-blur-lg bg-white/30 dark:bg-gray-900/30 border border-gray-900/30 dark:border-white/30 
                      shadow-2xl rounded-2xl text-gray-900 dark:text-white">
    <table className="w-full text-left rounded-lg">
      <thead className="bg-gray-900 text-white text-sm uppercase">
        <tr>
          {['ID', 'Name', 'Email', 'Role', 'Total Policies', 'Total Claims'].map((header) => (
            <th key={header} className="px-4 py-3">{header}</th>
          ))}
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-300 dark:divide-gray-700">
        {users.map((user) => (
          <tr key={user._id} className="hover:bg-gray-200 dark:hover:bg-gray-800">
            <td className="px-4 py-3">{user._id}</td>
            <td className="px-4 py-3">{user.fullname}</td>
            <td className="px-4 py-3">{user.email}</td>
            <td className="px-4 py-3">{user.role}</td>
            <td className="px-4 py-3">{user.policies.length}</td>
            <td className="px-4 py-3">{user.claims.length}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const PolicyTable = ({ policies }) => (
  <div className="overflow-x-auto w-full max-w-6xl p-3 backdrop-blur-lg bg-white/30 dark:bg-gray-900/30 border border-gray-900/30 dark:border-white/30 
                      shadow-2xl rounded-2xl text-gray-900 dark:text-white">
    <table className="w-full text-left   rounded-md">
      <thead className="bg-gray-900 text-white text-sm uppercase">
        <tr>
          {['Policy ID','Type','Coverage','Start date','End date', 'Policy Holder'].map((header) => (
            <th key={header} className="px-4 py-3">{header}</th>
          ))}
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-300 dark:divide-gray-700">
        {policies.map((policy) => (
          <tr key={policy._id} className="hover:bg-gray-200 dark:hover:bg-gray-800">
            <td className="px-4 py-3">{policy._id}</td>
            <td className="px-4 py-3">{policy.type}</td>
            <td className="px-4 py-3">{policy.coverage}</td>
            <td className="px-4 py-3">{policy.start_date}</td>
            <td className="px-4 py-3">{policy.end_date}</td>
            <td className="px-4 py-3">{policy.policyHolder}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default AdminDashboard;
