import React from "react";

export default function Biography() {
  const details = [
    { title: "Name", value: "Payal Kumari" },
    { title: "Email", value: "example@gmail.com" },
    { title: "Address", value: "Jharkhand, India" },
    { title: "Phone", value: "+91 XXXXXXXXXX" },
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen overflow-hidden bg-[#0A282E] px-5 py-16 text-white sm:px-8 md:px-12 lg:px-16 lg:py-20"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/4 top-1/3 h-72 w-72 rounded-full bg-cyan-500/10 blur-[100px]" />

      {/* Heading */}
      <div className="relative z-10 mb-12 text-center sm:mb-16">
        <p className="mb-3 text-sm font-medium tracking-wider text-[#DAC5A7] sm:text-[22px]">
          BIOGRAPHY
        </p>

        <h2 className="text-3xl font-bold sm:text-4xl md:text-6xl">
          Who am I?
        </h2>
      </div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-10 lg:gap-16">
        {/* Left Image */}
        <div className="z-10 relative mx-auto w-full max-w-[430px]">
          {/* Dotted Image - Top Left Corner */}
          <div
            className="absolute top-[-20px] 
              w-18 h-16 border-t-4 border-l-4
              border-dotted  border-[#fff] left-[-20px]"
          ></div>

          {/* Profile Image Container */}
          <div className="relative z-10 aspect-[4/5] overflow-hidden bg-[#0A282E] shadow-[0_0_55px_rgba(73,210,226,0.13)]">
            <img
              src="/img/paya-img2.jpeg"
              alt="Profile"
              className="h-full w-full object-cover object-top"
            />
          </div>
          {/* Bottom Circle Decoration */}
          <div className="absolute -bottom-3 -right-3 z-20 h-14 w-14 rounded-full border-2 border-[#a9dce0]/70 sm:-right-7 sm:h-16 sm:w-16" />
        </div>

        {/* Right Content */}
        <div className="w-full">
          {/* Small Gold Line */}
          <div className="mb-6 h-14 w-1 rounded-full bg-[#e6d29f]" />

          <p className="mb-4 text-lg font-semibold text-[#e6d29f] sm:text-xl tracking-wider">
            About Me
          </p>

          <h3 className="mb-5 text-2xl font-bold sm:text-3xl tracking-wider">
            Payal Gupta Details
          </h3>
          <p className="mb-7 text-sm leading-6 text-white sm:text-[18px] sm:leading-7 tracking-wider">
            I am a passionate Frontend Developer who enjoys creating responsive
            and user-friendly websites. I work with HTML, CSS, JavaScript,
            React.js and Tailwind CSS to turn ideas into clean and modern user
            interfaces.
          </p>

          {/* Details Cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {details.map((item) => (
              <div
                key={item.title}
                className="flex min-h-[70px] items-center rounded-xl border-l-[18px] border-[#DAC5A7] bg-[#474949] px-4 py-3 shadow-md transition duration-300 hover:bg-[#40565e]"
              >
                <div className="min-w-0">
                  <p className="mb-1 text-[18px] tracking-wide font-bold text-[#DAC5A7]">
                    {item.title}
                  </p>

                  <p className="break-words text-sm text-[#ffff] tracking-wide">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {/* Download CV */}
          <a
            href="/resume.pdf"
            download
            className="mt-8 inline-flex min-h-14 items-center justify-center gap-3 rounded-lg bg-[#DAC5A7] px-12 py-4 font-medium text-[#0E0E0E] transition tracking-wide"
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
      </div>
    </section>
  );
}
