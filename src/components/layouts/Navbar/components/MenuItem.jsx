import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
// import { log } from "three/tsl";

const MenuItem = ({ item }) => {
  const { t } = useTranslation();
  console.log(item);

  return (
    <li className="relative group">
      {item.children ? (
        <>
          <span className="cursor-pointer flex items-center px-4 hover:text-theme-primary-light transition-colors duration-200">
            {t(`nav.${item.title.toLowerCase()}`)}
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </span>
          {/* <ul className="hidden  group-hover:block absolute left-0 w-48 bg-white shadow-lg rounded-md py-2">
            {item.children.map((child) => (
              <li key={child.key}>
                <Link
                  to={child.link}
                  className="block px-4 py-2 text-sm hover:text-primaryLi hover:bg-gray-50"
                >
                  {t(`nav.${child.title}`)}
                </Link>
              </li>
            ))}
          </ul> */}
        </>
      ) : (

        <Link onClick={()=> window.scrollTo(0, 0)} to={item.link} className="block px-4 font-bold uppercase text-lg text-white hover:text-theme-primary-light transition-colors duration-200">

          {t(`nav.${item.title.toLowerCase()}`)}
        </Link>
      )}
    </li>
  );
};

export default MenuItem;
