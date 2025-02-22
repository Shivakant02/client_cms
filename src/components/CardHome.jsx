import { useContext } from "react";
import { ThemeContext } from "../contaxt/ThemeProvider";
import { useNavigate } from "react-router-dom";
// Adjust the path accordingly

const CardHome = ({ title, description, image }) => {
    const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`relative flex flex-col w-full max-w-sm rounded-xl p-6 shadow-lg transition-transform duration-300 
                  border border-dashed backdrop-blur-lg hover:scale-105 hover:shadow-2xl
                  ${
                    theme === "dark"
                      ? "bg-black/20 border-gray-600"
                      : "bg-white/20 border-gray-300"
                  }`}
    >
      {/* Image with Hover Effect */}
      <div className="overflow-hidden rounded-xl">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover rounded-xl transition-transform duration-300 hover:scale-110"
        />
      </div>

      {/* Text Content */}
      <div className="p-4 text-center">
        <h3
          className={`text-xl font-semibold ${
            theme === "dark" ? "text-white" : "text-gray-900"
          }`}
        >
          {title}
        </h3>
        <p className={`${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
          {description}
        </p>
      </div>

      {/* Button */}
      <div className="text-center">
        <button onClick={() => navigate("/policies")}
          className={`w-full rounded-lg cursor-pointer  py-2 px-6 font-bold text-white shadow-md transition-all 
                      hover:shadow-lg ${
                        theme === "dark"
                          ? "bg-blue-700 hover:bg-blue-800"
                          : "bg-blue-500 hover:bg-blue-600"
                      }`}
        >
          Read More
        </button>
      </div>
    </div>
  );
};

export default CardHome;
