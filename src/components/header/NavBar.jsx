import { useState } from "react";
import { useActiveBg } from "../../hooks/useActiveBg";
import { Sidebar } from "./Sidebar";

export const NavBar = () => {
  const { isScrollDown } = useActiveBg();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav
        className={`w-full flex justify-center items-center fixed top-0 z-50 transition-all duration-700 ${
          isScrollDown || isOpen ? "bg-navbar" : ""
        }`}
      >
        {/* max-w-7xl esta podia estar en el futuro */}
        <div className="w-full flex items-center justify-between h-[60px] px-8 text-sky-100 z-30">
          <h1 className="font-bold text-2xl">DesingHome</h1>

          <ul className="hidden gap-10 font-normal text-lg md:flex">
            <li
              className="transition-all
             hover:scale-110
           hover:border-b-sky-50 hover:border-b-2"
            >
              <a href="#services">Services</a>
            </li>
            <li
              className="transition-all
            hover:scale-110
           hover:border-b-sky-50 hover:border-b-2"
            >
              <a href="#clients">Clients</a>
            </li>
            <li
              className=" transition-all
             hover:scale-110
           hover:border-b-sky-50 hover:border-b-2"
            >
              <a href="#contact">Contact</a>
            </li>
          </ul>

          <div
            className={`w-10 h-10 cursor-pointer md:hidden`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {!isOpen ? (
              <img
                className="w-full h-full transition-all"
                src="./imgs/menu-hamburger.svg"
                alt=""
              />
            ) : (
              <img
                className="w-full h-full transition-all"
                src="./imgs/close-hamburger.svg"
                alt=""
              />
            )}
          </div>
        </div>
        <Sidebar isOpen={isOpen} />
      </nav>
    </>
  );
};
