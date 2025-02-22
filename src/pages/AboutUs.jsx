import { FaShieldAlt, FaHandshake, FaRegLightbulb, FaGlobe } from "react-icons/fa";

function AboutUs() {
  return (
    <div className="min-h-screen py-16 bg-gradient-to-br from-blue-100 via-indigo-200 to-purple-200 dark:from-gray-900 dark:via-gray-800 dark:to-black">
      {/* Container */}
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">About Us</h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 mt-4 max-w-3xl mx-auto">
            Your trusted partner in insurance. We provide secure, reliable, and affordable solutions to protect what matters most.
          </p>
        </div>

        {/* Mission & Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Our Mission */}
          <div className="p-6 rounded-xl bg-white/10 dark:bg-gray-900/40 backdrop-blur-lg shadow-lg border border-gray-300 dark:border-gray-700 text-center">
            <FaShieldAlt className="text-blue-500 text-5xl mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Our Mission</h3>
            <p className="text-gray-700 dark:text-gray-300 mt-2">
              We aim to simplify insurance by offering transparent policies that ensure financial security for you and your loved ones.
            </p>
          </div>

          {/* Our Values */}
          <div className="p-6 rounded-xl bg-white/10 dark:bg-gray-900/40 backdrop-blur-lg shadow-lg border border-gray-300 dark:border-gray-700 text-center">
            <FaHandshake className="text-blue-500 text-5xl mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Our Values</h3>
            <p className="text-gray-700 dark:text-gray-300 mt-2">
              We uphold integrity, customer-centric service, and continuous innovation to deliver the best insurance solutions.
            </p>
          </div>

          {/* Our Vision */}
          <div className="p-6 rounded-xl bg-white/10 dark:bg-gray-900/40 backdrop-blur-lg shadow-lg border border-gray-300 dark:border-gray-700 text-center">
            <FaRegLightbulb className="text-blue-500 text-5xl mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Our Vision</h3>
            <p className="text-gray-700 dark:text-gray-300 mt-2">
              To be a global leader in digital insurance, making protection accessible and hassle-free for everyone.
            </p>
          </div>

        </div>

        {/* Our Team Section */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">Meet Our Team</h3>
          <p className="text-gray-700 dark:text-gray-300 max-w-4xl mx-auto mb-10">
            Our dedicated professionals bring expertise, innovation, and a customer-first approach to ensure you get the best service possible.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {/* Team Member 1 */}
            <div className="p-6 rounded-xl bg-white/10 dark:bg-gray-900/40 backdrop-blur-lg shadow-lg border border-gray-300 dark:border-gray-700 text-center">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="CEO" className="w-24 h-24 rounded-full mx-auto mb-3" />
              <h4 className="text-xl font-medium text-gray-900 dark:text-white">John Doe</h4>
              <p className="text-gray-600 dark:text-gray-400">CEO & Founder</p>
            </div>

            {/* Team Member 2 */}
            <div className="p-6 rounded-xl bg-white/10 dark:bg-gray-900/40 backdrop-blur-lg shadow-lg border border-gray-300 dark:border-gray-700 text-center">
              <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="CTO" className="w-24 h-24 rounded-full mx-auto mb-3" />
              <h4 className="text-xl font-medium text-gray-900 dark:text-white">Jane Smith</h4>
              <p className="text-gray-600 dark:text-gray-400">Chief Technology Officer</p>
            </div>

            {/* Team Member 3 */}
            <div className="p-6 rounded-xl bg-white/10 dark:bg-gray-900/40 backdrop-blur-lg shadow-lg border border-gray-300 dark:border-gray-700 text-center">
              <img src="https://randomuser.me/api/portraits/men/54.jpg" alt="Marketing Head" className="w-24 h-24 rounded-full mx-auto mb-3" />
              <h4 className="text-xl font-medium text-gray-900 dark:text-white">Robert Brown</h4>
              <p className="text-gray-600 dark:text-gray-400">Head of Marketing</p>
            </div>

            {/* Team Member 4 */}
            <div className="p-6 rounded-xl bg-white/10 dark:bg-gray-900/40 backdrop-blur-lg shadow-lg border border-gray-300 dark:border-gray-700 text-center">
              <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="Finance Head" className="w-24 h-24 rounded-full mx-auto mb-3" />
              <h4 className="text-xl font-medium text-gray-900 dark:text-white">Emily Davis</h4>
              <p className="text-gray-600 dark:text-gray-400">Finance Director</p>
            </div>
          </div>
        </div>

        {/* Global Presence */}
        <div className="mt-20 text-center">
          <FaGlobe className="text-blue-500 text-6xl mx-auto mb-4" />
          <h3 className="text-3xl font-semibold text-gray-900 dark:text-white">Global Presence</h3>
          <p className="text-gray-700 dark:text-gray-300 max-w-4xl mx-auto mt-4">
            We are proud to serve customers across multiple countries, providing localized insurance solutions tailored to their needs.
          </p>
        </div>

      </div>
    </div>
  );
}

export default AboutUs;
