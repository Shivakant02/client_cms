import { useSelector } from "react-redux";
import { Ban } from "lucide-react";

function RejectedClaims() {
  const { rejectedClaims } = useSelector((state) => state.admin.allClaims);

  return (
    <div className="min-h-screen py-16 px-6 bg-gradient-to-br from-blue-100 via-indigo-200 to-purple-200 dark:from-gray-900 dark:via-gray-800 dark:to-black flex flex-col items-center">
      <div className="w-full max-w-6xl p-6 backdrop-blur-lg bg-white/30 dark:bg-gray-900/30 border border-gray-900/30 dark:border-white/30 
                      shadow-2xl rounded-2xl text-gray-900 dark:text-white">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <Ban className="h-7 w-7 text-red-600 dark:text-red-400" />
            Rejected Claims
          </h2>
        </div>

        {/* Table Container */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border-collapse rounded-lg overflow-hidden">
            {/* Table Head */}
            <thead className="bg-gray-900/80 dark:bg-white/20 text-white uppercase text-sm">
              <tr>
                <th className="px-4 py-3">No.</th>
                <th className="px-4 py-3">Type</th>
                <th className="px-4 py-3">Claim Amount</th>
                <th className="px-4 py-3">Reason</th>
                <th className="px-4 py-3">Status</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="divide-y divide-gray-900/20 dark:divide-white/20">
              {rejectedClaims?.map((claim, index) => (
                <tr key={claim._id} className="hover:bg-white/20 dark:hover:bg-gray-900/40 transition">
                  <td className="px-4 py-3">{index + 1}</td>
                  <td className="px-4 py-3 capitalize">{claim.type}</td>
                  <td className="px-4 py-3 font-semibold text-red-600 dark:text-red-400">
                    ${claim.claimAmount.toLocaleString()}
                  </td>
                  <td className="px-4 py-3 max-w-[300px] truncate">{claim.claimReason}</td>
                  <td className="px-4 py-3">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-red-500/80 text-white">
                      Rejected
                    </span>
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

export default RejectedClaims;
