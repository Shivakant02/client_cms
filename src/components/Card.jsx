import { useNavigate } from "react-router-dom";

function PolicyCard({ type, coverageAmount, price, imageUrl }) {
  const navigate = useNavigate();

  return (
    <div
      className="relative w-96 p-5 rounded-xl shadow-lg border transition-transform transform hover:scale-105 hover:shadow-2xl mx-2 my-3 
      bg-white/10 dark:bg-gray-900/30 backdrop-blur-lg border-gray-400 dark:border-gray-700 text-gray-900 dark:text-white"
    >
      {/* Policy Image */}
      <figure className="overflow-hidden rounded-t-xl">
        <img
          src={imageUrl}
          alt="Policy"
          className="w-full h-60 object-cover rounded-t-xl"
        />
      </figure>

      {/* Card Content */}
      <div className="p-4 text-center">
        <h2 className="text-2xl font-semibold text-blue-500 dark:text-blue-400">
          {type}
        </h2>
        <p className="mt-2 flex flex-row justify-between text-gray-700 dark:text-gray-300">
          Coverage: <span className="font-medium">₹{coverageAmount}</span>
        </p>
        <p className="text-gray-700 flex flex-row justify-between dark:text-gray-300">
          Price: <span className="font-medium">₹{price}</span>
        </p>

        {/* Buy Now Button */}
        <div className="mt-4">
          <button
            onClick={() =>
              navigate("/purchasePolicy", {
                state: { type, coverageAmount, price, imageUrl },
              })
            }
            className="px-5 cursor-pointer w-full btn-sm py-2 rounded-lg shadow-md transition-all duration-300 
            bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-400 text-white"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default PolicyCard;
