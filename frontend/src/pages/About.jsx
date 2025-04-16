import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const About = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-between">
      <div>
        <Navbar />
      </div>
      <section className=" bg-white text-gray-800 px-6 md:px-20 py-16">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-blue-600">
            About EstroVerse
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-10">
            At <span className="font-semibold text-blue-500">EstroVerse</span>,
            we believe in bridging the gap between health and convenience. We're
            your trusted platform for connecting with certified medical
            professionals — anytime, anywhere.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 bg-blue-50">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">
                Expert Doctors
              </h3>
              <p className="text-sm text-gray-600">
                Every doctor on our platform is thoroughly verified,
                experienced, and committed to your care.
              </p>
            </div>

            <div className="p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 bg-blue-50">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">
                Seamless Booking
              </h3>
              <p className="text-sm text-gray-600">
                Schedule appointments with just a few clicks. No waiting rooms,
                no paperwork — just care.
              </p>
            </div>

            <div className="p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 bg-blue-50">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">
                Patient-First Approach
              </h3>
              <p className="text-sm text-gray-600">
                Your health journey is our priority. We’re here to support,
                guide, and empower you every step of the way.
              </p>
            </div>
          </div>

          <p className="text-sm text-gray-500 mt-12">
            Built with ❤️ by passionate minds dedicated to making healthcare
            accessible in the digital era.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
