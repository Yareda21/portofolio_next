"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Modal from "@/components/Modal";

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  const subjects = [
    {
      name: "HTML...",
      details: "The project details is here"
    },
    {
      name: "CSS...",
      details: "The project details is here"
    },
    {
      name: "JavaScript...",
      details: "The project details is here"
    },
  ]

  return (
    <div className="absolute top-0 left-0 w-full h-full">
      <motion.p
        className="absolute z-10 m-auto top-[50%] left-[50%] bg-white cursor-pointer text-blue-900 px-10 py-5"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => (modalOpen ? close() : open())}
      >
        HTML, CSS and JS <br />
        <span className="text-black/50"> The projuct details lies here! </span>
      </motion.p>

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
