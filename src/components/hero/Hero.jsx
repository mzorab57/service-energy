import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Lightning from "./Lightning";
import "./hero.css";
import "./../../style/service.css";
import AnimatedComponent from "../ui/AnimatedComponent";

// CSS-based Solar Panel Component
const SolarPanelDisplay = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">

      <AnimatedComponent>
      <div className="solar-panel-container transform perspective-1000">
        <div className="solar-panel animate-float">
          {/* Main Solar Panel */}
          <div className="relative px-3  w-80 md:w-[30rem]  xl:w-[40rem]  h-48 lg:h-80 bg-gradient-to-br from-primaryLighter to-gray-900 rounded-lg shadow-2xl border-4 border-primaryLighter transform rotate-x-12 rotate-y-12">
            {/* Solar Cells Grid */}
            <div className="absolute inset-2 grid grid-cols-6 gap-1">
              {Array.from({ length: 24 }, (_, i) => (
                <div
                  key={i}
                  className="bg-gradient-to-br from-blue-900 to-slate-900 rounded-sm border border-primary animate-pulse"
                  style={{
                    animationDelay: `${i * 0.1}s`,
                    animationDuration: "3s",
                  }}
                />
              ))}
            </div>

            {/* Glowing Effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-blue-500/10 to-white/20 rounded-lg animate-pulse" />

            {/* Energy Particles */}
            <div className="absolute inset-0 overflow-hidden rounded-lg">
              {Array.from({ length: 8 }, (_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full animate-ping"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 2}s`,
                    animationDuration: `${1 + Math.random()}s`,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Support Structure */}
          <div className="absolute  left-1/2 transform -translate-x-1/2 w-4 h-16 bg-gradient-to-b from-gray-600 to-gray-800 rounded-b-lg shadow-lg" />
          <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-40 h-4 bg-gradient-to-r from-gray-700 to-gray-800 rounded-lg  shadow-lg" />
        </div>
      </div>
      </AnimatedComponent>
    </div>
  );
};

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className=" relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900  ">
             {/* <img src="/assets/images/cloud-video.webp" alt="background image" className='absolute -bottom-10  z-50 object-cover opacity-50 w-full brightness-50' /> */}
      <div className="container mx-auto px-2">
        {/* Lightning Background */}
        <div 
        
        className="absolute z-0 inset-0 w-full h-full overflow-hidden">

          <Lightning
            hue={220}
            xOffset={0.3}
            speed={0.5}
            intensity={0.5}
            size={1}
          />
        </div>

        {/* Hero Content */}
        <div 
        
        className="relative  z-10 flex flex-col lg:flex-row items-center justify-end lg:justify-between min-h-screen  py-20">
          {/* Left Content */}
          <div className=" max-w-2xl text-center lg:text-left mb-10 lg:mb-0">
            <div
              className={`transform transition-all duration-1000 ${
                isLoaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <h1 className=" text-5xl lg:text-9xl  font-bold text-white  leading-tight g-gradient-to-r from-white via-primary to-primary bg-clip-text text-transparent drop-shadow-2xl">
                <span className="bg-gradient-to-r  from-white via-primaryLighter to-primary bg-clip-text text-transparent drop-shadow-2xl">
                  Service Energy
                </span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-blue-100 my-2 leading-relaxed">
                Powering Tomorrow with Clean Solar Solutions
              </p>
             

              {/* Energy Stats */}
              <div className="grid grid-cols-3 gap-4 text-center max-w-md mx-auto lg:mx-0 px-2 ">
                <div
                 className=" p-2 rounded  bg-primary/80 ">
                  <div className="text-xl sm:text-3xl font-bold text-blue-300">
                    500+
                  </div>
                  <div className="text-sm text-blue-200">Projects</div>
                </div>
                <div className="p-2 rounded bg-primary/80">
                  <div className="text-xl sm:text-3xl font-bold text-blue-300">
                    95%
                  </div>
                  <div className="text-sm text-blue-200">Efficiency</div>
                </div>
                <div className="p-2 rounded bg-primary/80">
                  <div className="text-xl sm:text-3xl font-bold text-blue-300">
                    24/7
                  </div>
                  <div className="text-sm text-blue-200">Support</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Solar Panel Display */}
          <div className=" h-80 sm:h-96 lg:h-[500px]  max-w-2xl w-full ">
            <SolarPanelDisplay />
          </div>
        </div>

        {/* Floating Energy Orbs */}
        <div 
         style={{
            backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px),
                               linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
         className="absolute inset-0 opacity-5 pointer-events-none z-5">
          {Array.from({ length: 8 }, (_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full opacity-60 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 z-10">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-blue-300 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-blue-300 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
