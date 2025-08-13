import { useState , useEffect} from "react";
import { Link } from "react-router-dom";
import MenuItem from "./components/MenuItem";
import MobileMenuItem from "./components/MobileMenuItem";
import LanguageSwitcher from "./components/LanguageSwitcher";
import ThemeSwitcher from "../../ui/ThemeSwitcher";
import navitemlist from "../../../dataJson/navitemlist.json";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSubmenu = (title) => {
    setActiveSubmenu(activeSubmenu === title ? null : title);
  };

  const handleMobileMenuClose = () => {
    setIsMobileMenuOpen(false);
    setActiveSubmenu(null);
  };

  return (
    <nav  className={`fixed w-full z-50   transition-all duration-300 ${
        isSticky ? "" : "bg-transparent"
      }`}>
        
      <div className="container bg-primaryLighter/40 border-primary/30  border-t-0 border-l-0 border-r-0   border border-theme-primary/50 bg-theme-primary/30 mx-auto px-2 shadow-lg backdrop-blur-md text-white transition-colors duration-300">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex justify-center items-center pt-1">
            <img src="/service_logo.png" alt="Logo" className="h-10 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-4">
              {navitemlist.map((item, index) => (
                <MenuItem key={index} item={item} />
              ))}
            </ul>
          </nav>

          <div className="flex items-center space-x-3">
            {/* Theme Switcher */}
            {/* <ThemeSwitcher /> */}
            
            {/* Language Switcher */}
            {/* <LanguageSwitcher /> */}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-20">
            <ul className="space-y-2">
              {navitemlist.map((item, index) => (
                <MobileMenuItem
                  key={index}
                  item={item}
                  activeSubmenu={activeSubmenu}
                  toggleSubmenu={toggleSubmenu}
                  onClose={handleMobileMenuClose}
                />
              ))}
              {/* <li className="px-4 py-3 text-black bg-red-300">
                <LanguageSwitcher  />
              </li> */}
            </ul>
          </nav>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
