import React, { useState } from "react";

const Subscribe = () => {
  const [email, setEmail] = useState("");

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle the form submission logic here
    console.log("Email submitted:", email);
    // Reset the email state after submission
    setEmail("");
  };

  return (
    <div
      data-aos="fade-up"
      className="mb-20 bg-gradient-to-r from-#073b4c via-black to-#118ab2 text-white relative overflow-hidden py-10"
    >
      <div className="container backdrop-blur-sm">
        <div className="space-y-6 max-w-xl mx-auto">
          <h1 className="text-2xl !text-center sm:text-left sm:text-4xl font-semibold text-black">
            Get Notified About New Products
          </h1>
          <form
            onSubmit={handleSubmit}
            className="flex items-center justify-center"
          >
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleInputChange}
              className="w-full p-3 bg-#073b4c bg-opacity-75 border border-#118ab2 rounded-md transition-all duration-300 focus:outline-none focus:border-#118ab2 text-white"
            />
            <button
              type="submit"
              className="ml-4 px-6 py-3 bg-black text-#118ab2 rounded-md hover:bg-#118ab2 hover:text-#118ab2 focus:outline-none focus:bg-#118ab2 transition-all duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
