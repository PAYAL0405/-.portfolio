import React from "react";

const services = [
  {
    number: "01.",
    title: "UI/UX DESIGN",
    description:
      "I focus on creating clean, modern and user-friendly designs that make websites easy to use and visually appealing. I enjoy improving user experiences through simple layouts, creative ideas and well-organized design elements.",
  },
  {
    number: "02.",
    title: "WEB DESIGN",
    description:
      "I love designing attractive and modern websites with creative layouts, beautiful color combinations and clean typography. My goal is to create visually appealing designs that look professional and provide a smooth browsing experience.",
  },
  {
    number: "03.",
    title: "WEB DEVELOPMENT",
    description:
      "I develop responsive and interactive websites using HTML, CSS, JavaScript and React.js. I enjoy turning creative ideas into functional web pages while focusing on clean code, reusable components and smooth performance.",
  },
  {
    number: "04.",
    title: "GRAPHIC DESIGN",
    description:
      "I enjoy creating creative and eye-catching visual designs using different colors, layouts and design elements. I focus on making designs look attractive, well-balanced and meaningful while exploring new creative ideas.",
  },
];

export default function Service() {
  return (
    <section
      id="service"
      className="min-h-screen bg-[#0A282E] px-5 py-16 sm:px-8 md:px-12 lg:px-16 lg:py-20"
    >
      {/* Heading */}
      <div className="mb-12 text-center sm:mb-16">
        <p className="mb-3 text-sm font-medium tracking-wider text-[#DAC5A7] sm:text-[22px]">
          SERVICE
        </p>

        <h2 className="text-3xl font-bold sm:text-4xl md:text-6xl">
          Who am I?
        </h2>
      </div>

      {/* Service Cards */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {services.map((service) => (
          <div
            key={service.number}
            className="group min-h-[420px] rounded-[28px] border border-[#DAC5A7] bg-[#324548] px-7 py-8 transition-all duration-300 hover:-translate-y-2 hover:bg-[#819b99]/60 sm:px-8 sm:py-10"
          >
            {/* Number */}
            <h3 className="mb-5 text-4xl font-medium text-[#D4BD8E] sm:text-5xl">
              {service.number}
            </h3>

            {/* Title */}
            <h4 className="mb-5 whitespace-nowrap text-lg font-normal text-[#C5B8A6] sm:text-2xl tracking-wide">
              {service.title}
            </h4>

            {/* Description */}
            <p className="text-justify text-[12px] leading-[1.5] text-[#C5B8A6] sm:text-[13px]">
              {service.description}
            </p>

            {/* Golden Line */}
            <div className="mt-7 h-[5px] w-17 rounded-full bg-[#DAC5A7] transition-all duration-300 group-hover:w-20" />
          </div>
        ))}
      </div>
    </section>
  );
}
