import { appleImg, bagImg, searchImg } from "../utils";
import { navLists } from "../constants";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
      <nav className="flex w-full screen-max-width">
        <img src={appleImg} alt="Apple" width={14} height={18} />

        {/* Desktop Navigation */}
        <div className="flex flex-1 justify-center max-sm:hidden">
          {navLists.map((nav) => (
            <div
              key={nav}
              className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all"
            >
              {nav}
            </div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="sm:hidden ml-4"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="w-6 h-0.5 bg-white mb-1.5"></div>
          <div className="w-6 h-0.5 bg-white mb-1.5"></div>
          <div className="w-6 h-0.5 bg-white"></div>
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-95 z-50 sm:hidden">
            <div className="flex flex-col items-center justify-center h-full">
              {navLists.map((nav) => (
                <div
                  key={nav}
                  className="py-4 text-xl cursor-pointer text-gray hover:text-white transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {nav}
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
          <img src={searchImg} alt="search" width={18} height={18} className="cursor-pointer" />
          <img src={bagImg} alt="bag" width={18} height={18} className="cursor-pointer" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
