// components/Footer.jsx

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" bg-[#f5f5f5] dark:bg-[#111827] text-gray-800 dark:text-white py-10 px-6 mt-10">
      <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">EstroVerse</h2>
          <p className="text-sm">
            Bringing trusted healthcare to your fingertips. Book with ease,
            consult with confidence.
          </p>
        </div>

        <div>
          <h3 className="font-medium text-lg mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="/"
                className="hover:text-blue-600 transition duration-200"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/AllDoctors"
                className="hover:text-blue-600 transition duration-200"
              >
                All Doctors
              </a>
            </li>
            <li>
              <a
                href="/About"
                className="hover:text-blue-600 transition duration-200"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/Contact"
                className="hover:text-blue-600 transition duration-200"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-medium text-lg mb-3">Services</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <span className="text-gray-600">Online Consultations</span>
            </li>
            <li>
              <span className="text-gray-600">Specialist Appointments</span>
            </li>
            <li>
              <span className="text-gray-600">Health Records</span>
            </li>
            <li>
              <span className="text-gray-600">Live Chat</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-medium text-lg mb-3">Follow Us</h3>
          <div className="flex gap-4 text-xl">
            <a href="#" className="hover:text-blue-600 transition duration-300">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-pink-500 transition duration-300">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-sky-400 transition duration-300">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-blue-700 transition duration-300">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-sm text-gray-500 dark:text-gray-400">
        &copy; {new Date().getFullYear()} EstroVerse. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
