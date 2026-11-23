const projects = [
  {
    category: "UI/UX Design",
    title: "Financial App",
    description:
      "Fusce mollis sem eu ligula ornare, ut molestie eros volutpat. Praesent condimentum...",
    image: "/images/financial-app.png",
    reverse: false,
  },
  {
    category: "UI/UX Design",
    title: "E-Commerce App",
    description:
      "Fusce mollis sem eu ligula ornare, ut molestie eros volutpat. Praesent condimentum...",
    image: "/images/ecommerce-app.png",
    reverse: true,
  },
  {
    category: "UI/UX Design",
    title: "Accommodation App",
    description:
      "Fusce mollis sem eu ligula ornare, ut molestie eros volutpat. Praesent condimentum...",
    image: "/images/accommodation-app.png",
    reverse: false,
  },
];

const categories = ["UI/UX Design", "3D Design", "Animation", "Logo Design"];

export default function LatestProjects() {
  return (
    <section
      id="portfolio"
      className="w-full bg-[#324548] py-20 sm:py-24 lg:py-28  border-t"
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-10">
        {/* Heading */}
        <div className="text-center">
          <p className="mb-3 text-sm font-medium tracking-wider text-[#DAC5A7] sm:text-[22px]">
            PORTFOLIO
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl md:text-6xl">
            Latest Projects
          </h2>
        </div>

        {/* Categories */}
        <div className="max-w-[780px] mx-auto mt-10 sm:mt-12">
          <div
            className="border-2 border-[#DAC5A7] rounded-full
            flex flex-wrap justify-center items-center
            gap-3 sm:gap-8 lg:gap-22
            px-4 py-3 sm:py-4"
          >
            {categories.map((category, index) => (
              <button
                key={index}
                className="text-[#DAC5A7]  text-sm sm:text-base
                lg:text-lg font-semibold hover:text-[#F1D18C] transition duration-300 tracking-wider"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards */}
        <div className="mt-16 sm:mt-20 lg:mt-24 space-y-20 sm:space-y-24 lg:space-y-28">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`flex flex-col items-center gap-8 lg:gap-16
                lg:flex-row
                ${project.reverse ? "lg:flex-row-reverse" : ""}`}
            >
              {/* Project Image */}
              <div className="w-full lg:w-1/2">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[250px] sm:h-[350px] lg:h-[370px]
                  object-cover rounded-sm"
                />
              </div>

              {/* Project Details */}
              <div className="w-full lg:w-1/2 text-white">
                <p
                  className="text-[#DAC5A7] tracking-wider text-sm sm:text-base
                lg:text-lg font-bold"
                >
                  {project.category}
                </p>

                <h3
                  className="text-3xl sm:text-4xl lg:text-5xl
                  font-bold mt-3"
                >
                  {project.title}
                </h3>

                <p
                  className="text-white text-base sm:text-[20px]
                  font-bold leading-relaxed mt-4 max-w-[500px]"
                >
                  {project.description}
                </p>

                <a
                  href="#"
                  className="flex flex-row gap-1 items-center text-[#DAC5A7]
                  text-lg sm:text-xl font-bold mt-6
                  hover:text-white transition duration-300 tracking-wide"
                >
                  See More
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="15"
                      viewBox="0 0 22 15"
                      fill="none"
                    >
                      <path
                        d="M0 7.36401V8.36401H21V7.36401V6.36401H0V7.36401ZM21.7071 8.07112C22.0976 7.6806 22.0976 7.04743 21.7071 6.65691L15.3431 0.292946C14.9526 -0.0975785 14.3195 -0.0975785 13.9289 0.292946C13.5384 0.68347 13.5384 1.31664 13.9289 1.70716L19.5858 7.36401L13.9289 13.0209C13.5384 13.4114 13.5384 14.0446 13.9289 14.4351C14.3195 14.8256 14.9526 14.8256 15.3431 14.4351L21.7071 8.07112Z"
                        fill="#DAC5A7"
                      />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
