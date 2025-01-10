import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaGithub, FaTwitter, FaWhatsapp, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-orange-500 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
        {/* Column 1: About Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">About Aymalloum</h3>
          <p className="text-sm">
            Aymalloum Logistics delivers reliable shipping and logistics solutions, including freight transport, customs brokerage, and global shipping. Committed to excellence, they ensure seamless and timely deliveries worldwide.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-gray-400 transition">Home</Link>
            </li>
            <li>
              <Link to="/careers" className="hover:text-gray-400 transition">Careers</Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-gray-400 transition">Services</Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-gray-400 transition">Terms and Conditions</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-400 transition">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Policy Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Policies</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/data-privacy" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition">Data Privacy</a>
            </li>
            <li>
              <a href="/cookie-policy" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition">Cookie Policy</a>
            </li>
            <li>
              <a href="/brand-protection" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition">Brand Protection</a>
            </li>
          </ul>
        </div>

        {/* Column 4: Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p className="text-sm">
            <strong>Email:</strong> support@aymalloum.com
          </p>
          <p className="text-sm">
            <strong>Phone:</strong> +123-456-7890
          </p>
          <p className="text-sm">
            <strong>Address:</strong> 123 Logistics Street, ShipCity
          </p>
          {/* Social Media Links */}
          <div className="flex space-x-4 mt-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition">
              <FaFacebook size={20} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition">
              <FaInstagram size={20} />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition">
              <FaGithub size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition">
              <FaTwitter size={20} />
            </a>
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition">
              <FaWhatsapp size={20} />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition">
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Aymalloum Logistics. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
