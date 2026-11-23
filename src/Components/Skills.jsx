import React from "react";

const skills = [
  {
    title: "React.js Development",
    subtitle: "React.js • JavaScript",
    description:
      "I build interactive user interfaces using React.js, reusable components, hooks and modern JavaScript features.",
  },
  {
    title: "Tailwind CSS Development",
    subtitle: "Tailwind CSS • Utility Classes",
    description:
      "I create modern and clean website designs using Tailwind CSS with reusable utility classes.",
  },

  {
    title: "CSS Development",
    subtitle: "CSS3 • Flexbox • Grid",
    description:
      "I design attractive and modern web layouts using CSS, Flexbox, Grid and styling techniques.",
  },

  {
    title: "UI/UX Design",
    subtitle: "Web Interface Design",
    description:
      "I create clean, attractive and user-friendly website layouts with a focus on good user experience.",
  },
  {
    title: "Responsive Design",
    subtitle: "HTML • CSS • Tailwind CSS",
    description:
      "I develop responsive web pages that work smoothly on mobile, tablet, laptop and desktop screens.",
  },
  {
    title: "Frontend Development",
    subtitle: "HTML • CSS • JavaScript",
    description:
      "I develop modern frontend websites with clean layouts, interactive features and reusable code.",
  },
];

function SkillCard({ skill }) {
  return (
    <div className="min-h-[260px] rounded-xl bg-[#324548] p-6 text-white transition-all duration-300 hover:-translate-y-1  sm:p-12">
      {/* Title and Rating */}
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <h3 className="text-xl font-bold text-[#FFFF] sm:text-2xl">
          {skill.title}
        </h3>

        <div className="flex items-center gap-2">
          <div className="flex flex-row gap-1">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="19"
                viewBox="0 0 20 19"
                fill="none"
              >
                <path
                  d="M9.51056 0L11.7557 6.90983H19.0211L13.1433 11.1803L15.3884 18.0902L9.51056 13.8197L3.63271 18.0902L5.87785 11.1803L-5.72205e-06 6.90983H7.26542L9.51056 0Z"
                  fill="#FFC301"
                />
              </svg>
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="19"
                viewBox="0 0 20 19"
                fill="none"
              >
                <path
                  d="M9.51056 0L11.7557 6.90983H19.0211L13.1433 11.1803L15.3884 18.0902L9.51056 13.8197L3.63271 18.0902L5.87785 11.1803L-5.72205e-06 6.90983H7.26542L9.51056 0Z"
                  fill="#FFC301"
                />
              </svg>
            </span>{" "}
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="19"
                viewBox="0 0 20 19"
                fill="none"
              >
                <path
                  d="M9.51056 0L11.7557 6.90983H19.0211L13.1433 11.1803L15.3884 18.0902L9.51056 13.8197L3.63271 18.0902L5.87785 11.1803L-5.72205e-06 6.90983H7.26542L9.51056 0Z"
                  fill="#FFC301"
                />
              </svg>
            </span>{" "}
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="19"
                viewBox="0 0 20 19"
                fill="none"
              >
                <path
                  d="M9.51056 0L11.7557 6.90983H19.0211L13.1433 11.1803L15.3884 18.0902L9.51056 13.8197L3.63271 18.0902L5.87785 11.1803L-5.72205e-06 6.90983H7.26542L9.51056 0Z"
                  fill="#FFC301"
                />
              </svg>
            </span>{" "}
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="19"
                viewBox="0 0 20 19"
                fill="none"
              >
                <path
                  d="M9.51056 0L11.7557 6.90983H19.0211L13.1433 11.1803L15.3884 18.0902L9.51056 13.8197L3.63271 18.0902L5.87785 11.1803L-5.72205e-06 6.90983H7.26542L9.51056 0Z"
                  fill="#FFC301"
                />
              </svg>
            </span>
          </div>
          <span className="text-lg text-[#DAC5A7]">5.0</span>
        </div>
      </div>

      {/* Subtitle */}
      <p className="mb-3 text-xs text-[#DAC5A7] sm:text-sm tracking-wide">
        {skill.subtitle}
      </p>

      {/* Description */}
      <p className="text-justify text-sm leading-5 text-[#DAC5A7] sm:text-lg sm:leading-6 ">
        {skill.description}
      </p>
    </div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative min-h-screen overflow-hidden bg-[#0A282E] px-5 py-16 sm:px-8 md:px-12 lg:px-16 lg:py-20"
    >
      {/* Heading */}
      <div className="mb-12 text-center sm:mb-16">
        <p className="mb-3 text-sm font-medium tracking-wider text-[#DAC5A7] sm:text-[22px]">
          FRONTEND DEVELOPER
        </p>

        <h2 className="text-3xl font-bold sm:text-4xl md:text-6xl">
          My Skills
        </h2>
      </div>

      {/* Main Container */}
      <div className="relative mx-auto w-full max-w-7xl lg:px-16">
        {/* Left Vertical Line */}
        <div className="absolute bottom-0 left-0 top-0 hidden w-[5px] bg-[#e5c589] lg:block" />

        {/* Left Connectors */}
        <div className="absolute left-0 top-[16%] hidden h-1 w-10 bg-[#e5c589] lg:block" />
        <div className="absolute left-7 top-[16%] hidden h-7 w-7 -translate-y-1/2 rounded-full bg-[#e5c589] lg:block" />

        <div className="absolute left-0 top-1/2 hidden h-1 w-10 bg-[#e5c589] lg:block" />
        <div className="absolute left-7 top-1/2 hidden h-7 w-7 -translate-y-1/2 rounded-full bg-[#e5c589] lg:block" />

        <div className="absolute left-0 top-[84%] hidden h-1 w-10 bg-[#e5c589] lg:block" />
        <div className="absolute left-7 top-[84%] hidden h-7 w-7 -translate-y-1/2 rounded-full bg-[#e5c589] lg:block" />

        {/* Right Vertical Line */}
        <div className="absolute bottom-0 right-0 top-0 hidden w-[5px] bg-[#e5c589] lg:block" />

        {/* Right Connectors */}
        <div className="absolute right-0 top-[16%] hidden h-1 w-10 bg-[#e5c589] lg:block" />
        <div className="absolute right-7 top-[16%] hidden h-7 w-7 -translate-y-1/2 rounded-full bg-[#e5c589] lg:block" />

        <div className="absolute right-0 top-1/2 hidden h-1 w-10 bg-[#e5c589] lg:block" />
        <div className="absolute right-7 top-1/2 hidden h-7 w-7 -translate-y-1/2 rounded-full bg-[#e5c589] lg:block" />

        <div className="absolute right-0 top-[84%] hidden h-1 w-10 bg-[#e5c589] lg:block" />
        <div className="absolute right-7 top-[84%] hidden h-7 w-7 -translate-y-1/2 rounded-full bg-[#e5c589] lg:block" />

        {/* First Div - Row 1 */}
        <div className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          <SkillCard skill={skills[0]} />
          <SkillCard skill={skills[1]} />
        </div>

        {/* Second Div - Row 2 */}
        <div className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          <SkillCard skill={skills[2]} />
          <SkillCard skill={skills[3]} />
        </div>

        {/* Third Div - Row 3 */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <SkillCard skill={skills[4]} />
          <SkillCard skill={skills[5]} />
        </div>
      </div>
    </section>
  );
}
