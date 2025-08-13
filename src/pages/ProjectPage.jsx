import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AnimatedComponent from '../components/ui/AnimatedComponent'; // rastakrdnawa ba rêyekay xot

const ProjectPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('all');



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
      title: "",
      description: "Large-scale solar installation for industrial facilities",
      image: "/assets/images/about-solar-removebg-preview.png",
      stats: { power: "2MW", savings: "60%", buildings: "50+" },
      category: "commercial",
      year: "2023",
      location: "Sulaymaniyah",
      duration: "12 months",
      client: "Industrial Park"
    },
    {
      id: 3,
      title: "Smart Energy Management",
      description: "Integrated solar and battery storage systems",
      image: "/assets/images/about-solar-removebg-preview.png",
      stats: { power: "750kW", efficiency: "95%", storage: "1MWh" },
      category: "smart",
      year: "2024",
      location: "Duhok",
      duration: "8 months",
      client: "Tech Campus"
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
    }
  ];

  const categories = [
    { value: 'all', label: 'All Projects', icon: '🌟' },
    { value: 'residential', label: 'Residential', icon: '🏠' },
    { value: 'commercial', label: 'Commercial', icon: '🏢' },
    { value: 'smart', label: 'Smart Energy', icon: '⚡' },
    { value: 'green', label: 'Green Building', icon: '🌿' }
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.category === filter);

  return (
    <div className=" bg-gradient-to-b from-black via-gray-900 to-black  overflow-hidden ">
      {/* Optional CSS for small background motion (pure CSS) */}
      <style>{`
        @keyframes floatY { 0%,100% { transform: translateY(0) } 50% { transform: translateY(-40px) } }
        @keyframes moveGradient {
          0% { background-position: 0% 0% }
          100% { background-position: 100% 100% }
        }
      `}</style>

      {/* Animated Background (static + soft CSS float) */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Gradient blobs */}
        <div className="absolute inset-0">
          <div
            className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-blue-500/20 via-primary-500/20 to-transparent rounded-full blur-3xl"
            style={{ animation: 'floatY 16s ease-in-out infinite' }}
          />
          <div
            className="absolute bottom-0 right-1/4 w-[800px] h-[800px] bg-gradient-to-tl from-cyan-500/20 via-blue-500/20 to-transparent rounded-full blur-3xl"
            style={{ animation: 'floatY 18s ease-in-out infinite', animationDelay: '0.6s' }}
          />
        </div>

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px),
                               linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />

        {/* Soft floating dots */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: 'floatY 12s ease-in-out infinite',
              animationDelay: `${Math.random() * 5}s`
            }}
          >
            <div className="w-2 h-2 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full opacity-50" />
          </div>
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <AnimatedComponent animationType="fade-down" dataAosDuration={800}>
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              <span className="block text-white mb-2">Our</span>
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-primary-400 bg-clip-text text-transparent animate-gradient-x">
                Projects
              </span>
            </h1>
          </AnimatedComponent>

          <AnimatedComponent animationType="fade-up" dataAosDuration={800} dataAosDelay={150}>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12">
              Transforming ideas into sustainable energy solutions that power the future
            </p>
          </AnimatedComponent>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-16">
            {[
              { number: "250+", label: "Projects Completed" },
              { number: "50MW", label: "Total Capacity" },
              { number: "98%", label: "Client Satisfaction" },
              { number: "15+", label: "Years Experience" }
            ].map((stat, index) => (
              <AnimatedComponent
                key={stat.label}
                animationType="zoom-in"
                dataAosDuration={700}
                dataAosDelay={index * 120}
              >
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50 hover:shadow-lg hover:shadow-blue-500/10 transition">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-400 mt-2">{stat.label}</div>
                </div>
              </AnimatedComponent>
            ))}
          </div>

          {/* Filter Tabs */}
          <AnimatedComponent animationType="fade-up" dataAosDuration={700} dataAosDelay={200}>
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setFilter(cat.value)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    filter === cat.value
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/25'
                      : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700'
                  }`}
                >
                  <span className="mr-2">{cat.icon}</span>
                  {cat.label}
                </button>
              ))}
            </div>
          </AnimatedComponent>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="relative z-10 px-4 pb-20">
        <div className="container mx-auto">
          <div key={filter} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <AnimatedComponent
                key={project.id}
                animationType="fade-up"
                dataAosDuration={600}
                dataAosDelay={index * 120}
              >
                <div
                  className="group cursor-pointer bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl overflow-hidden border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-2"
                  onClick={() => setSelectedProject(project)}
                >
                  {/* Image */}
                  <div className="relative h-64 md:h-80 overflow-hidden bg-gradient-to-br from-blue-900/20 to-primary-900/20">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />

                    {/* Project Number (rotate on hover) */}
                    <div className="absolute top-6 left-6 w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg transform transition-transform duration-500 group-hover:rotate-180">
                      {String(index + 1).padStart(2, '0')}
                    </div>

                    {/* Year Badge */}
                    <div className="absolute top-6 right-6 bg-black/50 backdrop-blur-xl px-4 py-2 rounded-full">
                      <span className="text-white font-medium">{project.year}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-gray-400 mb-6 line-clamp-2">
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

                    {/* CTA */}
                    <button className="w-full py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      View Project Details →
                    </button>
                  </div>

                  {/* Decorative moving border (pure CSS) */}
                  <div
                    className="absolute inset-0 rounded-3xl pointer-events-none"
                    style={{
                      background: 'linear-gradient(135deg, transparent 30%, rgba(59,130,246,0.3), transparent 70%)',
                      backgroundSize: '200% 200%',
                      animation: 'moveGradient 3s ease-in-out infinite alternate'
                    }}
                  />
                </div>
              </AnimatedComponent>
            ))}
          </div>
        </div>
      </section>

      {/* Project Detail Modal (simple show/hide, no framer-motion) */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/90 backdrop-blur-2xl"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl overflow-hidden border border-gray-700"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 z-10 w-12 h-12 bg-black/50 backdrop-blur-xl rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
              aria-label="Close"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Image */}
              <div className="relative h-96 md:h-full bg-gradient-to-br from-blue-900/20 to-primary-900/20">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-8 md:p-12">
                <div className="flex items-center gap-4 mb-6">
                  <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm font-medium rounded-full">
                    {selectedProject.year}
                  </span>
                  <span className="text-gray-400">{selectedProject.category}</span>
                </div>

                <h2 className="text-4xl font-bold text-white mb-4">
                  {selectedProject.title}
                </h2>

                <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                  {selectedProject.description}
                </p>

                {/* Details */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-center justify-between py-3 border-b border-gray-700">
                    <span className="text-gray-400">Client</span>
                    <span className="text-white font-medium">{selectedProject.client}</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-gray-700">
                    <span className="text-gray-400">Location</span>
                    <span className="text-white font-medium">{selectedProject.location}</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-gray-700">
                    <span className="text-gray-400">Duration</span>
                    <span className="text-white font-medium">{selectedProject.duration}</span>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {Object.entries(selectedProject.stats).map(([key, value]) => (
                    <div
                      key={key}
                      className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-4 text-center border border-gray-700/50"
                    >
                      <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                        {value}
                      </div>
                      <div className="text-xs text-gray-500 uppercase mt-1">{key}</div>
                    </div>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-4">
                  <button className="flex-1 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-blue-500/25 transition-shadow">
                    Get Similar Solution
                  </button>
                  <button className="px-6 py-3 bg-gray-800 text-white font-semibold rounded-xl hover:bg-gray-700 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m9.032 4.026a9.001 9.001 0 01-7.432 0m9.032-4.026A9.001 9.001 0 0112 3c-4.474 0-8.268 3.12-9.032 7.326m0 0A9.001 9.001 0 0012 21c4.474 0 8.268-3.12 9.032-7.326" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="container mx-auto">
          <AnimatedComponent animationType="zoom-in" dataAosDuration={700}>
            <div className="relative bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 rounded-3xl p-12 md:p-16 overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)`
                  }}
                />
              </div>

              <div className="relative z-10 text-center">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  Start Your Solar Journey
                </h2>
                <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                  Join hundreds of satisfied clients who have transformed their energy consumption with our innovative solutions
                </p>
                <button className="px-10 py-4 bg-white text-blue-600 rounded-full font-bold text-lg shadow-2xl hover:shadow-white/25 transition-all hover:scale-[1.03]">
                  Get Free Consultation
                </button>
              </div>
            </div>
          </AnimatedComponent>
        </div>
      </section>
    </div>
  );
};

export default ProjectPage;
