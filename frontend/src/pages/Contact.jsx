import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <section className=" bg-white text-gray-800 px-6 md:px-20 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-blue-600 text-center mb-4">
            Contact Us
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Got a question, concern, or just wanna say hey? Fill out the form
            below and we’ll get back to you faster than you can say “Next
            appointment, please!” 💬
          </p>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-blue-50 p-8 rounded-2xl shadow-lg">
            <div className="flex flex-col">
              <label className="mb-2 font-semibold text-sm text-blue-700">
                Full Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-2 font-semibold text-sm text-blue-700">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            <div className="md:col-span-2 flex flex-col">
              <label className="mb-2 font-semibold text-sm text-blue-700">
                Message
              </label>
              <textarea
                rows="5"
                placeholder="Type your message here..."
                className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              ></textarea>
            </div>

            <div className="md:col-span-2 text-center">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>

          <div className="mt-12 text-center text-gray-500 text-sm">
            You can also reach us at{" "}
            <span className="text-blue-600 font-medium">
              support@estroverse.com
            </span>{" "}
            ✉️
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
