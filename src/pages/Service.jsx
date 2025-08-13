import React from "react";
import "./../style/service.css";

import { GiElectricalResistance } from "react-icons/gi";
import { useLocation } from "react-router-dom";
import { TbTransform } from "react-icons/tb";
import AnimatedComponent from "../components/ui/AnimatedComponent";
const Service = () => {
  const location = useLocation();
  //  https://crownsolarenergy.com/assets/images/home/solarLayer1.webp

  const services = [
    {
      title: "High Voltage Systems",
      icon: "⚡",
      description:
        "Expertise in 132kV, 66kV, 33kV, 22kV, 11kV, and 6.6kV networks",
      features: [
        "Network design and installation",
        "Testing and maintenance",
        "Protection systems",
      ],
    },
    {
      title: "Substations & Power Stations ",
      icon: "🏗️",
      description: "Design, supply, installation, and commissioning of substations",
      features: [
        "Voltage transformation infrastructure",
        "Power generation stations",
        "Control systems",
      ],
    },
    {
      title: "Distribution Networks",
      icon: "🔌",
      description:
        "MV/LV distribution systems for industrial and commercial projects",
      features: [
        "Government projects",
        "Commercial & industrial",
        "Residential areas",
      ],
    },
    {
      title: "Electrical Panel Boards",
      icon: <GiElectricalResistance />,
      description: "11kV & 33kV kiosks, control panels, and protection systems",
      features: ["Control panels", "Switchgear & kiosks", "Protection systems"],
    },

    {
      title: "Busduct & Lighting",
      icon: "💡",
      description: "Busduct systems and advanced lighting solutions for smart cities",
      features: ["Busduct systems", "LED lighting", "Smart control", ],
    },

    {
      title: "Generators & Synchronization",
      icon: "⚙️",
      description: "Integration with PLC, SCADA, and advanced control systems",
      features: ["SCADA systems", "PLC control", "Network synchronization"],
    },
    {
      title: "Power Transformers",
      icon: <TbTransform />,
      description:
        "Supply and implementation with control and protection systems",
      features: [
        "Power transformers",
        "Protection systems",
        "Automatic control",
      ],
    },
    {
      title: "Solar Energy Systems",
      icon: "☀️",
      description:
        "Design and installation of sustainable solar power solutions",
      features: ["Solar panels", "Inverter systems", "Monitoring & control"],
    },
    {
      title: "Smart System Solutions",
      icon: "🤖",
      description:
        "Automation, IoT integration, and intelligent energy management",
      features: ["IoT systems", "Automation", "Smart energy management"],
    },
    {
      title: "Low Current Systems",
      icon: "📱",
      description: "UPS, CCTV, and structured low voltage solutions",
      features: ["UPS systems", "Surveillance cameras", "Structured cabling"],
    },
    {
      title: "Electrical Infrastructure",
      icon: "🏗️",
      description: "Load calculation and electrical infrastructure design",
      features: [
        "Load calculations",
        "Infrastructure design",
        "International standards",
      ],
    },
  ];
  return (
    <section class="services-section " id="services">
      <div class="services-container">
        <div class="services-bg-elements">
          <div class="circuit-pattern"></div>
          <div class="floating-volt">⚡</div>
          <div class="floating-gear">⚙️</div>
          <div class="floating-solar">☀️</div>
        </div>

        <div class="services-content">
          <AnimatedComponent>
            <div class="services-header">
              <h2 class="services-title">Professional Services</h2>
              <div class="services-subtitle">
                Advanced technology solutions for all energy needs
              </div>
               <div className="w-24 h-1  mx-auto mt-2"></div>
              <div class="title-underline"></div>
            </div>
          </AnimatedComponent>
          <div class="services-grid">
            {location.pathname !== "/service" &&
              services.slice(0, 6).map((service, index) => (
                <AnimatedComponent>
                <div
                  key={index}
                  className={`service-card ${service.title
                    .toLowerCase()
                    .replace(/\s+/g, "-")}-card`}
                >
                  <div className="service-icon">
                    <div className="icon-wrapper">{service.icon}</div>
                  </div>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                  <ul class="service-features">
                    {service.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                  <div class="service-hover-effect"></div>
                </div>
              </AnimatedComponent>
              ))}
          </div>
          {/* <div class="services-cta">
            <div class="cta-content">
              <h3>View More Services</h3>
              <p>Explore our full range of services and solutions</p>
              <a href="#contact" class="services-cta-btn">
                View All
                <span class="btn-arrow">→</span>
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Service;
