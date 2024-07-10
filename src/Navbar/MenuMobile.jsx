import { useClickAway } from "react-use";
import { useRef } from "react";
import { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { AnimatePresence, motion } from "framer-motion";
import { routes } from "./Routes";
import { Link } from "react-router-dom";

function MenuMobile() {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => setOpen(false));

  return (
    <div ref={ref} className="flex md:hidden z-10 w-full">
      <Hamburger toggled={isOpen} size={20} toggle={setOpen} />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed left-0 shadow-4xl right-0 top-[3.5rem] pl-8 bg-slate-950 rounded-lg w-full h-full px-5 mt-5"
          >
            <ul className="grid gap-2">
              {routes.map((route, idx) => {
                const { Icon } = route;

                return (
                  <motion.li
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.1 + idx / 10,
                    }}
                    key={route.title}
                    className="w-full p-[0.08rem] rounded-xl bg-gradient-to-tr from-neutral-900 via-gray-900 to-neutral-950"
                  >
                        <a
                            onClick={() => setOpen((prev) => !prev)}
                            className={
                                "flex items-center justify-between w-full p-5 rounded-xl bg-slate-900"
                            }
                            href={route.href}
                            >
                            <span className="flex gap-1 text-lg text-slate-200">{route.title}</span>
                            <Icon className="text-xl" />
                        </a>
                        
                  </motion.li>
                );
              })}
            </ul>
            <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.1 + routes.length / 10,
                    }}>
                    <div className="w-full h-0.5 bg-slate-50 my-5" />
                      <button 
                      onClick={() => setOpen((prev) => !prev)}
                      className="py-3 bg-slate-900 w-full rounded-lg">
                      <a className="text-xl font-semibold">
                        Cerrar
                      </a>
                      </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default MenuMobile
