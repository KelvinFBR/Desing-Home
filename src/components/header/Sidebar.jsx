import { AnimatePresence, motion } from "framer-motion";

export const Sidebar = ({ isOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          transition={{ type: "spring", mass: 0.1, duration: 2.8 }}
          initial={{
            zIndex: 10,
            top: -800,
          }}
          animate={{ zIndex: 10, top: 60 }}
          exit={{ zIndex: 10, top: -800 }}
          className="w-full h-full absolute"
        >
          <div
            className={`w-full h-[50vh] bg-navbar absolute  md:hidden
          transition-all duration-500 rounded-sm`}
          >
            <ul className="w-full h-full flex flex-col justify-evenly items-center gap-5 font-normal text-sky-100 text-lg">
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
                className="transition-all
              hover:scale-110
              hover:border-b-sky-50  hover:border-b-2"
              >
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
