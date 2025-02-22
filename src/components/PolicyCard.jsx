import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

function PolicyCard({ data }) {
  const navigate = useNavigate();

  return (
    <div className="w-full sm:w-[350px] md:w-[380px] lg:w-[400px] p-4">
      <div className="bg-white/20 dark:bg-gray-900/30 rounded-xl border border-gray-300 dark:border-gray-700 shadow-md overflow-hidden">
        
        {/* Header */}
        <div className="bg-blue-100 dark:bg-blue-900/30 p-4 flex justify-between items-center">
          <h2 className="text-lg font-semibold text-blue-600 dark:text-blue-400">
            {data.type} Policy
          </h2>
        </div>

        {/* Table Layout */}
        <div className="p-4 text-gray-800 dark:text-gray-200 text-sm">
          <div className="flex justify-between py-2 border-b border-gray-200 dark:border-gray-700">
            <span className="font-medium">ID:</span> <span>{data._id}</span>
          </div>

          <div className="flex justify-between py-2 border-b border-gray-200 dark:border-gray-700">
            <span className="font-medium">Coverage:</span> <span>{data.coverage}</span>
          </div>

          <div className="flex justify-between py-2 border-b border-gray-200 dark:border-gray-700">
            <span className="font-medium">Price:</span> <span>${data.premium}</span>
          </div>

          <div className="flex justify-between py-2 border-b border-gray-200 dark:border-gray-700">
            <span className="font-medium">Start Date:</span> <span>{data.start_date}</span>
          </div>

          <div className="flex justify-between py-2 border-b border-gray-200 dark:border-gray-700">
            <span className="font-medium">Valid Till:</span> <span>{data.end_date}</span>
          </div>

          <div className="flex justify-between py-2">
            <span className="font-medium">Status:</span> <span className="font-semibold">{data.status}</span>
          </div>
        </div>

        {/* Button */}
        <button
  onClick={() => navigate(`/${data._id}/claim`, { state: data })}
  disabled={data.status.toLowerCase() === "under claim process"}
  className={`w-full py-3 flex items-center justify-between px-4 font-semibold border-t border-gray-200 dark:border-gray-700 transition-all 
    ${data.status.toLowerCase() === "under claim process" 
      ? "cursor-not-allowed text-gray-400 bg-gray-200 dark:bg-gray-800 dark:text-gray-500"
      : "text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/40"}`}
>
  Claim Policy <ArrowRight size={18} />
</button>
      </div>
    </div>
  );
}

export default PolicyCard;
