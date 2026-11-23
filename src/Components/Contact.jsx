"use client";
import React from "react";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message submitted successfully!");
  };

  return (
    <section
      id="contact"
      className="w-full bg-[#0A282E] text-white px-5 py-16 md:px-10 lg:px-16"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="mb-3 text-sm font-medium tracking-wider text-[#DAC5A7] sm:text-[22px]">
            CONTACT INFO
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl md:text-6xl">
            Get in Touch
          </h2>

          <div className="w-1 h-12 bg-[#DAC5A7] mx-auto mt-4 rounded-2xl"></div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Profile Image */}
          <div className="relative flex justify-center">
            <div
              className="absolute top-[-20px] left-[-20px] md:left-12
              w-16 h-18 border-t-4 border-l-4
              border-dotted border-[#fff]"
            ></div>

            <img
              src="/img/paya-img2.jpeg"
              alt="Profile"
              className="relative w-full md:max-w-[420px]
              h-[350px] md:h-[460px] object-cover
              shadow-xl"
            />
          </div>

          {/* Contact Form */}
          <div className="w-full">
            <h3 className="text-2xl font-bold mb-2 text-[#DAC5A7] tracking-wide">
              Massage
            </h3>

            <h4 className="text-2xl font-semibold mb-5 tracking-wide">
              Write Me Something
            </h4>

            <div className="text-[16px]  space-y-4  mb-6 text-[#DAC5A7]">
              <p>
                Call Me:{" "}
                <span className="text-2xl font-semibold text-[#DAC5A7] tracking-wide">
                  +98 123 (456) 789
                </span>
              </p>

              <p>
                E-mail:{" "}
                <span className="text-2xl font-semibold text-[#DAC5A7]">
                  example@yahoo.com
                </span>
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  required
                  className="w-full bg-[#324548] p-4
                  text-white placeholder-gray-300
                  outline-none focus:ring-1 focus:ring-[#f4e6c7]"
                />

                <input
                  type="email"
                  placeholder="Email"
                  required
                  className="w-full bg-[#324548] p-4
                  text-white placeholder-gray-300
                  outline-none focus:ring-1 focus:ring-[#f4e6c7]"
                />
              </div>

              <input
                type="text"
                placeholder="Subject"
                required
                className="w-full bg-[#324548] p-4
                text-white placeholder-gray-300
                outline-none focus:ring-1 focus:ring-[#f4e6c7]"
              />

              <textarea
                rows="5"
                placeholder="Example Text"
                required
                className="w-full bg-[#324548] p-4
                text-white placeholder-gray-300
                outline-none resize-none
                focus:ring-1 focus:ring-[#f4e6c7]"
              ></textarea>

              <button
                type="submit"
                className="bg-[#DAC5A7] text-[#252525]
                px-8 py-3 rounded-md font-medium
                hover:bg-white transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
