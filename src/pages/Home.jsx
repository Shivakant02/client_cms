import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import CardHome from "../components/CardHome";
import { useContext } from "react";
import { ThemeContext } from "../contaxt/ThemeProvider";
import ReviewCard from "../components/ReviewCard";


function Home() {
  const { theme } = useContext(ThemeContext);

  const policies = [
    {
      title: "Health Insurance",
      description: "Comprehensive plans that cover medical expenses and emergencies.",
      image: "https://th.bing.com/th/id/OIP.-XEnYIXJQwduXqBwuQcPvgHaE8?rs=1&pid=ImgDetMain",
    },
    {
      title: "Car Insurance",
      description: "Protect your vehicle from accidents, theft, and damages.",
      image: "https://www.quoteinspector.com/media/car-insurance/car-insurance-1231756281-wo.jpg",
    },
    {
      title: "Home Insurance",
      description: "Ensure the safety and security of your home and belongings.",
      image: "https://th.bing.com/th/id/OIP.hl-cH4Uf99w6hpDQO5KUJQHaE8?rs=1&pid=ImgDetMain",
    },
  ];

  const reviews = [
    { review: "The best insurance company I have ever dealt with. Fast claim processing!", name: "John Doe", rating: 5 },
    { review: "Excellent customer support and great policy options.", name: "Jane Smith", rating: 4 },
    { review: "Affordable and reliable insurance. Highly recommended!", name: "Robert Johnson", rating: 5 },
    { review: "Smooth and hassle-free experience. Very happy!", name: "Emily Davis", rating: 4 },
    { review: "Quick response time and great coverage options.", name: "Michael Brown", rating: 5 },
    { review: "User-friendly platform. Easy to buy and manage policies.", name: "Sarah Wilson", rating: 4 },
    { review: "Superb claim settlement process and great coverage options!", name: "Chris Martin", rating: 5 },
    { review: "Great value for money. Best decision ever Highly recommended !", name: "Olivia Taylor", rating: 4 },
  ];

  
  
  return (
    <div className="min-h-screen py-15 bg-gradient-to-br from-blue-100 via-indigo-200 to-purple-200 dark:from-gray-900 dark:via-gray-800 dark:to-black">
      {/* Hero Section */}
      <div className="relative w-full h-[85vh] bg-gradient-to-r from-purple-600 to-pink-500 flex flex-col justify-center items-center text-white text-center px-6">
        <motion.h1 
          className="text-5xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
        >
          Secure Your Future Today
        </motion.h1>
        <motion.p 
          className="text-lg md:text-xl mb-6"
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, delay: 0.5 }}
        >
          Get the best insurance policies that fit your needs and budget.
        </motion.p>
        <Link to="/policies">
          <motion.button 
            className="bg-white text-purple-600 px-6 py-3 rounded-full font-bold shadow-lg hover:scale-105 transition-transform"
            whileHover={{ scale: 1.1 }}
          >
            Browse Policies
          </motion.button>
        </Link>
      </div>

      <div className="mt-12 px-4 md:px-16">
      <h2 className="text-4xl font-bold text-center mb-8">Our Top Selling Insurance Policies</h2>

      {/* Grid Layout for Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {policies.map((policy, index) => (
          <CardHome key={index} title={policy.title} description={policy.description} image={policy.image} />
        ))}
      </div>
    </div>

     {/* Why Choose Us Section */}
    
     <div className="mt-16 px-6 md:px-20 text-center">
      <h2 className={`text-4xl font-bold mb-6 ${theme=="light"?"text-gray-900":"text-white"}`}>
        Why Choose Us?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Card 1 - Affordable Premiums */}
        <div
          className={`p-6 shadow-lg rounded-lg backdrop-blur-lg border border-dashed transition-transform duration-300 
                      hover:scale-105 hover:shadow-2xl 
                      ${theme === "dark" ? "bg-black/30 border-gray-600" : "border-gray-300 bg-white/30"}`}
          style={{
            background: theme === "dark"
              ? "linear-gradient(135deg, rgba(255, 94, 247, 0.2), rgba(255, 188, 237, 0.2))"
              : "linear-gradient(135deg, rgba(255, 94, 247, 0.5), rgba(255, 188, 237, 0.5))",
            color: theme === "light" ? "#1a1a1a" : "#fff",
          }}
        >
          <h3 className="text-xl font-semibold mb-2">Affordable Premiums</h3>
          <p>Get the best coverage at a price that suits your budget.</p>
        </div>

        {/* Card 2 - 24/7 Support */}
        <div
          className={`p-6 shadow-lg rounded-lg backdrop-blur-lg border border-dashed transition-transform duration-300 
                      hover:scale-105 hover:shadow-2xl 
                      ${theme === "dark" ? "bg-black/30 border-gray-600" : "border-gray-300 bg-white/30"}`}
          style={{
            background: theme === "dark"
              ? "linear-gradient(135deg, rgba(93, 95, 239, 0.2), rgba(150, 184, 255, 0.2))"
              : "linear-gradient(135deg, rgba(93, 95, 239, 0.5), rgba(150, 184, 255, 0.5))",
            color: theme === "light" ? "#1a1a1a" : "#fff",
          }}
        >
          <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
          <p>Our team is always available to assist you with queries.</p>
        </div>

        {/* Card 3 - Fast Claims Processing */}
        <div
          className={`p-6 shadow-lg rounded-lg backdrop-blur-lg border border-dashed transition-transform duration-300 
                      hover:scale-105 hover:shadow-2xl 
                      ${theme === "dark" ? "bg-black/30 border-gray-600" : "border-gray-400 bg-white/30"}`}
          style={{
            background: theme === "dark"
              ? "linear-gradient(135deg, rgba(255, 146, 47, 0.2), rgba(255, 200, 100, 0.2))"
              : "linear-gradient(135deg, rgba(255, 146, 47, 0.5), rgba(255, 200, 100, 0.5))",
            color: theme === "light" ? "#1a1a1a" : "#fff",
          }}
        >
          <h3 className="text-xl font-semibold mb-2">Fast Claims Processing</h3>
          <p>Quick and hassle-free claim settlement for peace of mind.</p>
        </div>

      </div>
    </div>


      {/* Customer Reviews Section */}
      <div className="mt-16 px-6 md:px-20">
      <h2 className="text-4xl font-bold text-center mb-6 text-gray-900 dark:text-white">What Our Customers Say</h2>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
        className="w-full max-w-6xl mx-auto"
      >
        {reviews.map((item, index) => (
          <SwiperSlide key={index}>
            <ReviewCard review={item.review} name={item.name} rating={item.rating} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

    <div className="relative mt-16 px-6 md:px-20 py-16 text-center overflow-hidden">
  {/* Blurry Glass Gradient Background */}
  <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-100 via-indigo-200 to-purple-200 blur-3xl opacity-50" />

  {/* Glassmorphism Container */}
  <div className="relative backdrop-blur-lg bg-white/20 dark:bg-white/10 rounded-2xl p-10 md:p-14 shadow-lg border border-white/30 dark:border-white/10">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      {/* Left Side - Text & Features */}
      <div className={`text-left ${theme === "light" ? "text-gray-900" : "text-white"}`}>
        <h2 className="text-4xl font-bold mb-4">
          Get the <span className="text-indigo-600 dark:text-indigo-400">U-Insure</span> App
        </h2>
        <p className="text-lg mb-6">
          Take control of all your insurance needs, anywhere, anytime.
        </p>

        <ul className="space-y-4 text-lg">
          <li className="flex items-center">
            ✅ Compare different insurance policies
          </li>
          <li className="flex items-center">
            ✅ Buy, store, and share all your policies online
          </li>
          <li className="flex items-center">
            ✅ Track your policy status on the go
          </li>
          <li className="flex items-center">
            ✅ Download your policy with a single tap
          </li>
        </ul>

        {/* App Store Buttons */}
        <div className="mt-8 flex space-x-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
            alt="Google Play"
            className="w-36 h-12 transition-transform transform hover:scale-105 cursor-pointer"
          />
          <img
            src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us"
            alt="App Store"
            className="w-36 h-12 transition-transform transform hover:scale-105 cursor-pointer"
          />
        </div>
      </div>

      {/* Right Side - App Preview */}
      <div className="flex justify-center">
        <img
          src="https://img.freepik.com/free-vector/ui-app-design-mobile-phone-banner_80328-88.jpg?ga=GA1.1.1472066286.1739380995&semt=ais_hybrid"
          alt="U-Insure App Preview"
          className="w-[320px] md:w-[420px] rounded-xl shadow-2xl"
        />
      </div>
    </div>
  </div>
</div>

  

      {/* Footer CTA */}
      <div className="mt-16 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-center py-10">
        <h2 className="text-4xl font-bold mb-4">Get Covered Today!</h2>
        <p className="mb-6">Protect yourself and your loved ones with our trusted insurance plans.</p>
        <Link to="/policies">
          <button className="bg-white text-purple-600 px-6 py-3 rounded-full font-bold shadow-lg hover:scale-105 transition-transform">
            Browse Policies
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
