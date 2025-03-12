import {
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-teal-800 text-white mt-12">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-orange-400">
                  Site Map
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400">
                  Editorial Team
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Write for Us */}
          <div>
            <h3 className="text-lg font-bold mb-4">Write for Us</h3>
            <p className="text-sm mb-4">
              Join our team of sports writers and share your passion with our
              readers.
            </p>
            <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition-colors">
              Submit Your Article
            </button>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <FaEnvelope className="w-4 h-4" />
                <span>contact@esportal.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaPhone className="w-4 h-4" />
                <span>+1 234 567 890</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-orange-400">
                <FaTwitter className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-orange-400">
                <FaInstagram className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-orange-400">
                <FaYoutube className="w-6 h-6" />
              </a>
            </div>
            <p className="mt-4 text-sm">@EsportalNews</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-teal-700 mt-8 pt-8 text-center">
          <p className="text-sm">
            Esportal: Founded in 2025 to deliver cutting-edge sports coverage
          </p>
          <p className="text-sm mt-2">© 2025 Esportal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
