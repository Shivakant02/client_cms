import { Github, Twitter, Facebook, Linkedin, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-white dark:bg-black text-gray-900 dark:text-gray-100 py-10 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Company Info */}
        <div>
          <h2 className="text-lg font-semibold mb-3">U-Insure</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Your trusted insurance partner, providing secure and affordable coverage tailored to your needs.
          </p>
        </div>

        {/* Products & Links */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Products</h2>
          <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
            <li><a href="/buy-policy" className="hover:text-gray-900 dark:hover:text-gray-100">Buy Policy</a></li>
            <li><a href="/my-policies" className="hover:text-gray-900 dark:hover:text-gray-100">My Policies</a></li>
            <li><a href="/my-claims" className="hover:text-gray-900 dark:hover:text-gray-100">My Claims</a></li>
            <li><a href="/about-us" className="hover:text-gray-900 dark:hover:text-gray-100">About Us</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Contact Us</h2>
          <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
            <li className="flex items-center space-x-2">
              <Phone className="w-4 h-4" /> <span>+1 (234) 567-890</span>
            </li>
            <li className="flex items-center space-x-2">
              <Mail className="w-4 h-4" /> <span>support@uinsure.com</span>
            </li>
            <li className="flex items-center space-x-2">
              <MapPin className="w-4 h-4" /> <span>123 Insurance St, NY, USA</span>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 hover:text-gray-600 dark:hover:text-gray-400" />
            </a>
            <a href="https://twitter.com/yourtwitter" target="_blank" rel="noopener noreferrer">
              <Twitter className="w-5 h-5 hover:text-gray-600 dark:hover:text-gray-400" />
            </a>
            <a href="https://facebook.com/yourfacebook" target="_blank" rel="noopener noreferrer">
              <Facebook className="w-5 h-5 hover:text-gray-600 dark:hover:text-gray-400" />
            </a>
            <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5 hover:text-gray-600 dark:hover:text-gray-400" />
            </a>
          </div>
        </div>

      </div>

      {/* Copyright & Terms */}
      <div className="border-t border-gray-300 dark:border-gray-700 mt-8 pt-6 text-center text-sm text-gray-600 dark:text-gray-400">
        <p>© {new Date().getFullYear()} U-Insure. All Rights Reserved.</p>
        <p className="mt-2">
          <a href="/terms" className="hover:text-gray-900 dark:hover:text-gray-100">Terms of Service</a> | 
          <a href="/privacy" className="hover:text-gray-900 dark:hover:text-gray-100 ml-2">Privacy Policy</a>
        </p>
      </div>

    </footer>
  );
};

export default Footer;
