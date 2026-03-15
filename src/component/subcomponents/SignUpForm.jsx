import React from "react";

function SignUpForm() {
  return (
    <>
      <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 shadow-lg px-8 py-6 w-full mt-[230px] max-w-4xl">
        <h2 className="text-xl font-semibold mb-6 text-center text-white">
          Sign Up
        </h2>
        <form className="flex flex-col space-y-4">
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="Name"
              className="px-4 py-2 border w-full border-gray-300 bg-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <input
              type="tel"
              placeholder="Contact Number"
              className="px-4 py-2 border w-full border-gray-300 bg-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <input
            type="email"
            placeholder="Email"
            className="px-4 py-2 border border-gray-300 bg-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </form>
      </div>

      <div className="flex justify-center mt-4">
        <button className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 font-semibold text-black py-2 px-6 rounded-xl hover:bg-yellow-500 transition-colors">
          Explore the Luxury
        </button>
      </div>
    </>
  );
}

export default SignUpForm;
