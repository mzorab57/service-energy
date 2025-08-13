import React from "react";
import { Link } from "react-router-dom";
import AnimatedComponent from "../../../ui/AnimatedComponent";

const MobileMenuItem = ({ 
  item, 
  activeSubmenu, 
  toggleSubmenu, 
  onClose 
}) => (
  <AnimatedComponent>
  <li className="w-full px-6 py-4 bg-gradient-to-r from-primary-500 to-primary-500 text-white font-bold rounded-lg  hover:shadow-xl transform hover:scale-105 transition-all duration-300">
    {item.children ? (
      <div className="overflow-hidden">
        <button
          onClick={() => toggleSubmenu(item.title)}
          className="w-full px-6 py-4 flex items-center justify-between text-gray-800 hover:bg-gradient-to-r hover:from-primary-50 hover:to-primary-50 transition-all duration-300 group"
        >
          <span className="font-semibold text-base group-hover:text-primary-700 transition-colors">
            {item.title}
          </span>
          <div className="flex items-center space-x-2">
            <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
              {item.children.length}
            </span>
            <svg
              className={`w-5 h-5 text-gray-400 group-hover:text-primary-600 transition-all duration-300 ${
                activeSubmenu === item.title ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </button>
        
        <div
          className={`transition-all duration-300 ease-in-out ${
            activeSubmenu === item.title 
              ? "max-h-96 opacity-100" 
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <ul className="bg-gradient-to-b from-gray-50 to-white py-2 border-l-4 border-primary-200">
            {item.children.map((child, index) => (
              <li 
                key={child.title}
                className="transform transition-all duration-200"
                style={{
                  transitionDelay: activeSubmenu === item.title ? `${index * 50}ms` : '0ms'
                }}
              >
                <Link
                  to={child.link}
                  className=" px-8 py-3 text-gray-600 hover:text-primary-700 hover:bg-primary-50 hover:border-l-4 hover:border-primary-400 hover:pl-7 transition-all duration-200 flex items-center justify-between group"
                  onClick={onClose}
                >
                  <span className="font-medium">{child.title}</span>
                  <svg
                    className="w-4 h-4 text-gray-400 group-hover:text-primary-600 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    ) : (
      <Link
        to={item.link}
        className=" px-6 py-4 text-gray-200  font-semibold text-base group flex items-center justify-center"
        onClick={onClose}
      >
        <span>{item.title}</span>
        <svg
          className="w-4 h-4 text-gray-400 group-hover:text-primary-600 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-200"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </Link>
    )}
    
    {/* Separator line with gradient */}
    <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
  </li>
  </AnimatedComponent>
);

export default MobileMenuItem;