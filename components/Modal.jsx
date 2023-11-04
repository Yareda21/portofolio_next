import { motion } from "framer-motion";

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.3,
      type: "spring",
      damping: 100,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

const Modal = ({ handleClose }) => {
  return (
    <motion.div
      onClick={handleClose}
      className="h-[100vh] w-[100%] flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="w-[50%] bg-slate-50 text-black z-40 m-auto py-0 px-2  rounded-lg flex flex-col items-center"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <p className="text-black">Hello</p>
        <button onClick={handleClose}>Close</button>
      </motion.div>
    </motion.div>
  );
};

export default Modal;
