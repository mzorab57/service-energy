import { useState, useEffect, useRef } from "react";
import AnimatedComponent from "../../components/ui/AnimatedComponent";
import { Link, useLocation } from "react-router-dom";
import UnderLine from "../ui/UnderLine";

const projects = [
  {
    id: 1,
    title: "Installation and Test & Commission Switchgear 33KV",
    description: "Complete solar power system installation for residential buildings",
    image: "/assets/images/pro1.jpeg",
    stats: { power: "500kW", savings: "40%", homes: "120+" },
    category: "residential",
    year: "2024",
    location: "Erbil, Kurdistan",
    duration: "1 months",
    client: "Factory"
  },
  {
    id: 2,
    title: "Installation and Test  Cable MV 33KV ",
    description: "Large-scale solar installation for industrial facilities",
     image: "/assets/images/pro2.jpeg",
    stats: { power: "2MW", savings: "60%", buildings: "50+" },
    category: "commercial",
    year: "2024",
    location: "Iraq-Erbil",
    duration: "3 months",
    client: "City"
  },
  {
    id: 3,
    title: "Smart Energy Management Berkary",
    description: "Integrated solar and battery storage systems",
    image: "/assets/images/pro3.jpeg",
    stats: { power: "25kW", efficiency: "95%", storage: "100A & 25A " },
    category: "smart",
    year: "2024",
    location: "Iraq-Rania",
    duration: "3 months",
    client: "Mr.Alan"
  },
  {
    id: 4,
    title: "Green Building Solutions",
    description: "Sustainable energy solutions for modern architecture",
    image: "/assets/images/about-solar-removebg-preview.png",
    stats: { power: "1.5MW", reduction: "70%", projects: "80+" },
    category: "green",
    year: "2023",
    location: "Kirkuk",
    duration: "10 months",
    client: "Eco Tower"
  },
 
  {
    id: 5,
    title: "Installation and Test  Cable MV 33KV ",
    description: "Large-scale solar installation for industrial facilities",
     image: "/assets/images/pro2.jpeg",
    stats: { power: "2MW", savings: "60%", buildings: "50+" },
    category: "commercial",
    year: "2024",
    location: "Iraq-Erbil",
    duration: "3 months",
    client: "City"
  },
  {
    id: 6,
    title: "Installation and Test & Commission Switchgear 33KV",
    description: "Complete solar power system installation for residential buildings",
    image: "/assets/images/pro1.jpeg",
    stats: { power: "500kW", savings: "40%", homes: "120+" },
    category: "residential",
    year: "2024",
    location: "Erbil, Kurdistan",
    duration: "1 months",
    client: "Factory"
  },
];

const ProjectSection = () => {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [displayedProjects, setDisplayedProjects] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const containerRef = useRef(null);
  const location = useLocation();

  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.category === filter);

  // Handle responsive display
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      // Show all projects on desktop (1024px and above)
      if (width >= 1024) {
        setDisplayedProjects(filteredProjects);
        setShowAll(true);
      } else {
        // Show only 3 projects on mobile/tablet
        setDisplayedProjects(showAll ? filteredProjects : filteredProjects.slice(0, 3));
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [filteredProjects, showAll]);

  const handleShowMore = () => {
    setShowAll(true);
    setDisplayedProjects(filteredProjects);
  };

  return (
    <div className="py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-6xl font-bold text-center mb-20">
          <span className="text-white">Our</span>{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-pri to-primary ">
            Projects
            <UnderLine />
          </span>
        </h2>

        {/* Projects Container with Sticky Cards */}
        <div className="relative grid lg:grid-cols-2 gap-8" ref={containerRef}>
          {displayedProjects.map((project, index) => (
            <div
              key={project.id}
              className="sticky py-4 lg:py-8"
              style={{
                top: `${100 + index * 40}px`,
                marginBottom: index === displayedProjects.length - 1 ? '0px' : '0',
                zIndex: displayedProjects.length + index,
              }}
            >
              <div
                component="div"
                animationType="fade-up"
                dataAosDuration={600}
                dataAosDelay={index * 120}
              >
                <div
                  className="group lg:h-[35rem] cursor-pointer bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-lg overflow-hidden border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 transform hover:scale-[1.02]"
                  onClick={() => setSelectedProject(project)}
                  style={{
                    boxShadow: `0 ${20 + index * 10}px ${40 + index * 20}px -${10 + index * 5}px rgba(0, 0, 0, 0.3)`,
                  }}
                >
                  {/* Image */}
                  <div className="relative h-40 lg:h-64 md:h-80 overflow-hidden bg-gradient-to-br from-blue-900/20 to-primary-900/20">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />

                    {/* Project Number */}
                    <div className="absolute top-6 left-6 size-8 lg:size-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-white font-bold lg:text-xl text-lg  shadow-lg transform transition-transform duration-500 group-hover:rotate-180">
                      {String(index + 1).padStart(2, '0')}
                    </div>

                    {/* Year Badge */}
                    <div className="absolute top-6 right-6 bg-black/50 backdrop-blur-xl px-4 py-2 rounded-full">
                      <span className="text-white font-medium">{project.year}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <h3 className="text-xl md:text-3xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-gray-400 mb-2 lg:mb-6 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Location & Duration */}
                    <div className="flex items-center gap-4 mb-6 text-sm">
                      <div className="flex items-center text-gray-300">
                        <svg className="w-4 h-4 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {project.location}
                      </div>
                      <div className="flex items-center text-gray-300">
                        <svg className="w-4 h-4 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {project.duration}
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {Object.entries(project.stats).map(([key, value]) => (
                        <div key={key} className="bg-gray-800/50 rounded-xl p-3 text-center">
                          <div className="text-lg font-bold text-blue-400">{value}</div>
                          <div className="text-xs text-gray-500 uppercase">{key}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Decorative moving border */}
                  <div
                    className="absolute inset-0 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: 'linear-gradient(135deg, transparent 30%, rgba(59,130,246,0.3), transparent 70%)',
                      backgroundSize: '200% 200%',
                      animation: 'moveGradient 3s ease-in-out infinite alternate'
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button - Only visible on mobile/tablet when not all projects are shown */}
       
          <Link to={'/project'} className="flex justify-center mt-12 lg:hidden">
            <button
              onClick={()=> window.scrollTo(0, 0)}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transform hover:scale-105 transition-all duration-300"
            >
              Show More Projects ({filteredProjects.length - 3} more)
            </button>
          </Link>
      
      </div>

      {/* Add CSS animation */}
      <style jsx>{`
        @keyframes moveGradient {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 100% 50%;
          }
        }
      `}</style>
    </div>
  );
};

export default ProjectSection;