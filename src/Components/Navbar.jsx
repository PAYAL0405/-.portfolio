"use client";
import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A282E] text-white overflow-hidden">
      {/* Main Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 min-h-screen">
        {/* Left Section */}
        <section className="relative flex flex-col pl-6 sm:pl-10 lg:pl-25 py-8 lg:py-0 order-2 lg:order-1">
          {/* Navigation */}
          <nav className="flex gap-6 sm:gap-20 text-sm sm:text-2xl text-[#D9C4A7] pt-5 sm:pt-7 2xl:pt-12">
            <a href="#about" className="hover:text-[#e8d7a5] transition">
              About me
            </a>
            <a href="#service" className="hover:text-[#e8d7a5] transition">
              Service
            </a>
          </nav>
          {/* Introduction */}
          <div className="my-auto py-12 lg:py-0">
            <div className="flex flex-row gap-1 items-center">
              <h1 className="text-5xl sm:text-6xl xl:text-8xl font-extrabold tracking-wider">
                Hello
              </h1>
              <div className="bg-[#DAC5A7] rounded-full p-3 h-2 w-2 mt-13"></div>
            </div>

            <div className="flex items-center gap-3 mt-5">
              <span className="w-12 h-1 bg-[#DAC5A7]"></span>
              <h2 className="text-xl sm:text-2xl xl:text-3xl font-medium tracking-wider text-[#DAC5A7]">
                I am Payal Gupta
              </h2>
            </div>
            <p className="mt-4 text-xl sm:text-2xl xl:text-3xl font-medium tracking-wider text-white">
              Frontend Developer
            </p>
            <a
              href="/resume.pdf"
              download
              className="mt-10 inline-flex items-center justify-center gap-3 rounded-lg bg-[#DAC5A7] px-7 lg:px-15 py-4 lg:py-5 text-[16px] font-medium text-[#0E0E0E] hover:bg-[#f3e6bd] transition"
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M13 11.15V4C13 3.73478 12.8946 3.48043 12.7071 3.29289C12.5196 3.10536 12.2652 3 12 3C11.7348 3 11.4804 3.10536 11.2929 3.29289C11.1054 3.48043 11 3.73478 11 4V11.15L8.77999 8.374C8.69954 8.2669 8.59839 8.17706 8.48254 8.10981C8.3667 8.04256 8.23853 7.99926 8.10563 7.9825C7.97273 7.96573 7.83782 7.97584 7.70891 8.01221C7.57999 8.04859 7.4597 8.11049 7.35516 8.19425C7.25063 8.27801 7.16399 8.38192 7.10039 8.49981C7.03679 8.61769 6.99752 8.74716 6.98491 8.88051C6.9723 9.01387 6.98661 9.1484 7.027 9.27611C7.06738 9.40383 7.13301 9.52213 7.21999 9.624L11.22 14.624C11.3137 14.7408 11.4324 14.8351 11.5674 14.8998C11.7024 14.9646 11.8503 14.9982 12 14.9982C12.1497 14.9982 12.2976 14.9646 12.4326 14.8998C12.5676 14.8351 12.6863 14.7408 12.78 14.624L16.78 9.624C16.867 9.52213 16.9326 9.40383 16.973 9.27611C17.0134 9.1484 17.0277 9.01387 17.0151 8.88051C17.0025 8.74716 16.9632 8.61769 16.8996 8.49981C16.836 8.38192 16.7494 8.27801 16.6448 8.19425C16.5403 8.11049 16.42 8.04859 16.2911 8.01221C16.1622 7.97584 16.0273 7.96573 15.8944 7.9825C15.7615 7.99926 15.6333 8.04256 15.5174 8.10981C15.4016 8.17706 15.3004 8.2669 15.22 8.374L13 11.15Z"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    fill="#0E0E0E"
                  />
                  <path
                    d="M9.657 15.874L7.358 13H5C4.46957 13 3.96086 13.2107 3.58579 13.5858C3.21071 13.9609 3 14.4696 3 15V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V15C21 14.4696 20.7893 13.9609 20.4142 13.5858C20.0391 13.2107 19.5304 13 19 13H16.642L14.342 15.874C14.0609 16.2253 13.7045 16.5089 13.299 16.7037C12.8935 16.8986 12.4494 16.9998 11.9995 16.9998C11.5496 16.9998 11.1055 16.8986 10.7 16.7037C10.2945 16.5089 9.93806 16.2253 9.657 15.874ZM17 16C16.7348 16 16.4804 16.1054 16.2929 16.2929C16.1054 16.4804 16 16.7348 16 17C16 17.2652 16.1054 17.5196 16.2929 17.7071C16.4804 17.8946 16.7348 18 17 18H17.01C17.2752 18 17.5296 17.8946 17.7171 17.7071C17.9046 17.5196 18.01 17.2652 18.01 17C18.01 16.7348 17.9046 16.4804 17.7171 16.2929C17.5296 16.1054 17.2752 16 17.01 16H17Z"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    fill="#0E0E0E"
                  />
                </svg>
              </span>
              Download CV
            </a>
          </div>
        </section>

        {/* Center Section */}
        <section className="relative flex flex-col items-center bg-[#f1e9d2] text-[#0A282E] min-h-[420px] sm:min-h-[520px] lg:min-h-screen order-1 lg:order-2">
          <h2 className="mt-6 sm:mt-10 text-4xl font-extrabold tracking-wide">
            Developer
          </h2>

          {/* Profile Image */}
          <div className="mt-8 lg:mt-10 flex flex-1 w-full items-end justify-center overflow-hidden">
            <img
              src="/img/payal-img.jpeg"
              alt="Profile"
              className="w-full h-full max-h-[580px] object-contain object-bottom"
            />
          </div>
        </section>
        {/* Right Section */}
        <section className="relative flex flex-col py-8 lg:py-0 order-3 pl-4 sm:pl-10 lg:pl-15 pt-5 sm:pt-7 2xl:pt-12">
          {/* Navigation */}
          <nav className="flex justify-start  gap-6 sm:gap-20 text-sm sm:text-2xl text-[#D9C4A7]">
            <a href="#portfolio" className="hover:text-[#e8d7a5] transition">
              Portfolio
            </a>
            <a href="#contact" className="hover:text-[#e8d7a5] transition">
              Contact servive
            </a>
          </nav>

          {/* About Content */}
          <div id="about" className="my-auto py-12 lg:py-0">
            <p className="max-w-md text-sm sm:text-[18px] leading-8 text-[#DAC5A7] font-medium tracking-wider">
              I am a UX/UI designer. My specialty lies in the pre-production
              design process. That's creativity in determining the design that
              fits the company's goals .
            </p>

            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-3 text-xl sm:text-2xl xl:text-3xl font-medium tracking-wider text-[#DAC5A7] hover:gap-5 transition-all"
            >
              Lets Talk <span>⟶</span>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
