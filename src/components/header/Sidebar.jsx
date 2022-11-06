import { AnimatePresence, motion } from "framer-motion";

export const Sidebar = ({ isOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          transition={{ type: "spring", mass: 0.5 }}
          initial={{ zIndex: 40, top: 0, right: -50, width: 0 }}
          animate={{ zIndex: 40, top: 0, right: 0, width: "100%" }}
          exit={{ zIndex: 40, top: 0, right: -50, width: 0 }}
          className="w-full h-full absolute overflow-hidden"
        >
          <div
            className={`w-2/4 h-full bg-navbar absolute top-0 right-0 z-40 md:hidden
          transition-all duration-500`}
          >
            <ul className="w-full h-full flex flex-col mt-36 items-center gap-5 font-normal text-sky-100 text-lg">
              <li
                className="mt-16 transition-all 
              hover:scale-110
            hover:border-b-sky-50 hover:border-b-2"
              >
                <a href="#">Services</a>
              </li>
              <li
                className="mt-16 transition-all
              hover:scale-110
              hover:border-b-sky-50  hover:border-b-2"
              >
                <a href="#">Contact</a>
              </li>
              <li
                className="mt-16 transition-all
              hover:scale-110
              hover:border-b-sky-50 hover:border-b-2"
              >
                <a href="#">Clients</a>
              </li>
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
