import React from "react";
import {
  LayoutDashboard,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Send,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-primary p-2 rounded-lg">
                <LayoutDashboard className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-bold tracking-tight">
                DevSphere<span className="text-primary">.</span>
              </span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              We build high-end digital solutions that help brands thrive in the
              modern era of technology. Your success is our code.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/mdmahfuz307"
                className="p-2 bg-gray-800 rounded-full hover:bg-primary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/mdmahfuz307"
                className="p-2 bg-gray-800 rounded-full hover:bg-primary transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/mdmahfuz307"
                className="p-2 bg-gray-800 rounded-full hover:bg-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/mdmahfuz307/"
                className="p-2 bg-gray-800 rounded-full hover:bg-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Pricing Plans
                </Link>
              </li>
              <li>
                <Link
                  to="/blogs"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Blog & News
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4 text-gray-400">
              <li>Email: contact@devsphere.com</li>
              <li>Phone: +88 017805-81185</li>
              <li>Address: Uttora, Dhaka, BD</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-6">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to get the latest tech insights.
            </p>
            <div className="relative">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all text-white"
              />
              <button className="absolute right-2 top-2 p-1.5 bg-primary rounded-md hover:bg-blue-700 transition-colors">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>
            © {new Date().getFullYear()} DevSphere Agency. All rights reserved.
            Built with ❤️ by Mahfuz Rahman Nirob
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
