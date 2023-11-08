"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Modal from "@/components/Modal";

const subjects = [
  {
    name: "HTML, CSS and JvaScript Projects",
    details: "The project details is here",
  },
  {
    name: "React Projects",
    details: "The project details is here",
  },
  {
    name: "Python Projects and Codes",
    details: "The project details is here",
  },
];

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  
  const [index, setIndex] = useState(0)
  return (
    <div className="absolute top-0 left-0 w-full h-full">
      <motion.div
        // className="absolute z-10 m-auto top-[50%] left-[50%] bg-white cursor-pointer text-blue-900 px-10 py-5"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => (modalOpen ? close() : open())}
      >
        {subjects.map((item, itemIndex) => {
          return (
            <div className=" ">
              <h1
                onClick={() => (modalOpen ? close() : open())}
                key={itemIndex}
              >
                {item.name}
              </h1>
            </div>
          );
        })}
      </motion.div>

      <AnimatePresence className=" " initial={false}>
        {modalOpen && (
          <Modal
            className="absolute z-40 top-[50%] left-[50%] m-auto bg-black/70"
            modalOpen={modalOpen}
            handleClose={close}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
