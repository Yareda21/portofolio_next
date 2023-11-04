"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Modal from "@/components/Modal";

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  return (
    <div className="absolute top-0 left-0 w-full h-full">
      <motion.button
        className="absolute z-10 m-auto top-[50%] left-[50%]"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.4 }}
        onClick={() => (modalOpen ? close() : open())}
      >
        Launch Modal
      </motion.button>

      <AnimatePresence className=" " initial={false}>
        {modalOpen && (
          <Modal
            className="absolute z-40 top-[50%] left-[50%] m-auto bg-white"
            modalOpen={modalOpen}
            handleClose={close}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
