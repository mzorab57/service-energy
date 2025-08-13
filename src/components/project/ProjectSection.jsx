const projects = [
  {
    id: 1,

    title: "Solar Panel Installation",

    description:
      "Complete solar power system installation for residential buildings",

    image: "/assets/images/about-solar-removebg-preview.png",

    stats: { power: "500kW", savings: "40%", homes: "120+" },
  },

  {
    id: 2,

    title: "Commercial Solar Solutions",

    description: "Large-scale solar installation for industrial facilities",

    image: "/assets/images/about-solar-removebg-preview.png",

    stats: { power: "2MW", savings: "60%", buildings: "50+" },
  },

  {
    id: 3,

    title: "Smart Energy Management",

    description: "Integrated solar and battery storage systems",

    image: "/assets/images/about-solar-removebg-preview.png",

    stats: { power: "750kW", efficiency: "95%", storage: "1MWh" },
  },

  {
    id: 4,

    title: "Green Building Solutions",

    description: "Sustainable energy solutions for modern architecture",

    image: "/assets/images/about-solar-removebg-preview.png",

    stats: { power: "1.5MW", reduction: "70%", projects: "80+" },
  },
];

const ProjectSection = () => {
  const neonColors = [
    "from-white/70 to-blue-500",
    "from-blue-500 to-white/70",
    "from-white/70 to-blue-500",
    "from-blue-500 to-white/70",
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-6xl font-bold text-center mb-20">
          <span className="text-white">Our</span>{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-pri  to-white animate-pulse">
            Projects
          </span>
        </h2>

        <div className="relative" style={{ paddingBottom: "40px" }}>
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`sticky rounded-2xl p-[2px] bg-gradient-to-r ${neonColors[index]} mb-16 group`}
              style={{
                top: `${100 + index * 50}px`,

                zIndex: projects.length + index,

                filter: "drop-shadow(0 0 15px rgba(0, 255, 255, 0.3))",
              }}
            >
              <div className="bg-gray-950 rounded-2xl p-8 ">
                <div className="flex flex-col lg:flex-row lg:justify-between  items-center gap-8 mb-6">
                    {/* number index */}
                  <div
                    className={`w-20 h-20 rounded-xl place-self-start bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-3xl font-bold text-white`}
                  >
                    {index + 1}
                  </div>

                    {/* title */}
                  <div className="flex-1  ">
                    <h3 className="text-3xl  overflow-hidden overflow-ellipsis line-clamp-2  font-bold text-white  mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-400">{project.description}</p>
                  </div>
              {/* image */}
                <div className="max-w-56 h-32 w-full flex items-center justify-center">
                  <img
                    src={project.image}
                    alt={project.title}
                    className=" rounded-full"
                  />
                </div>

                </div>
                {/* number */}
                <div className="grid grid-cols-3 gap-4">
                  {Object.entries(project.stats).map(([key, value]) => (
                    <div
                      key={key}
                      className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 text-center"
                    >
                      <div
                        className={`text-2xl font-bold bg-gradient-to-r ${neonColors[index]} bg-clip-text text-transparent`}
                      >
                        {value}
                      </div>

                      <div className="text-xs text-gray-500 uppercase mt-1">
                        {key}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
