import { FaStar } from "react-icons/fa";
const ReviewCard = ({ review, name, rating }) => {
    
    return (
      <div className="p-6 shadow-xl rounded-2xl backdrop-blur-md border border-gray-300 bg-white/40 dark:bg-black/40 text-center ">
        <div className="flex justify-center mb-2">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className={`text-lg ${i < rating ? "text-yellow-500" : "text-gray-300"}`} />
          ))}
        </div>
        <p className="italic text-gray-900 dark:text-white">{review}</p>
        <p className="font-semibold mt-2 text-gray-700 dark:text-gray-300">- {name}</p>
      </div>
    );
  };

  export default ReviewCard;
  