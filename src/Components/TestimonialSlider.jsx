"use client";
import React, { useState, useEffect } from "react";

const testimonials = [
  {
    image: "/img/paya-img2.jpeg",
    name: "My Learning Journey",
    review:
      "I am a passionate B.Tech student, I creating modern, responsive and user-friendly websites. I enjoy learning new technologies and turning creative ideas into real-world projects.",
  },
  {
    image: "/img/paya-img2.jpeg",

    name: "What Drives Me",
    review:
      "Every great developer starts as a learner. I believe in continuous learning, creative thinking and improving my skills through practical experience.",
  },
  {
    image: "/img/paya-img2.jpeg",

    name: "More Than Just Coding",
    review:
      "Along with coding, I love exploring UI/UX design, creative ideas and building digital experiences that make a difference.",
  },
];

const TestimonialSlider = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-[#0A282E] py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div
          className="relative bg-[#324548] p-5 md:p-8 lg:p-10
          flex flex-col md:flex-row items-center gap-8"
        >
          {/* Client Image */}
          <div className="w-full md:w-1/2">
            <img
              key={testimonials[current].image}
              src={testimonials[current].image}
              alt="Client"
              className="w-full h-[280px] sm:h-[350px]
              md:h-[380px] object-cover"
            />
          </div>

          {/* Testimonial Content */}
          <div className="w-full md:w-1/2 text-white">
            <div className="text-6xl text-[#f5e8b7] font-bold">“</div>

            <div key={current}>
              <h2
                className="text-xl sm:text-2xl lg:text-3xl
                font-bold leading-snug mb-8"
              >
                {testimonials[current].review}
              </h2>

              <p className="text-sm sm:text-base font-extralight text-[#DAC5A7]">
                {testimonials[current].name}
              </p>
            </div>

            <div
              className="text-6xl text-[#f5e8b7]
              font-bold text-right mt-2"
            >
              ”
            </div>

            {/* Slider Controls */}
            <div className="flex items-center gap-4 mt-5">
              {/* <button
                onClick={prevSlide}
                className="border border-white px-4 py-2
                hover:bg-white hover:text-black transition"
              >
                ❮
              </button> */}

              <div className="flex gap-2">
                {testimonials.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`h-2.5 rounded-full transition-all ${
                      current === index ? "bg-white w-7" : "bg-gray-400 w-2.5"
                    }`}
                  />
                ))}
              </div>

              {/* <button
                onClick={nextSlide}
                className="border border-white px-4 py-2
                hover:bg-white hover:text-black transition"
              >
                ❯
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
