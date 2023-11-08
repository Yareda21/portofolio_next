"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Modal from "@/components/Modal";

const subjects = [
  {
    name: "HTML, CSS and JvaScript Projects",
    details: [
      {
        title: "Project 1",
        description: "This is the first project",
      },
      {
        title: "Project 2",
        description: "This is the second project",
      },
    ],
  },
  {
    name: "React Projects",
    details: [
      {
        title: "Project 1",
        description: "This is the first project",
      },
      {
        title: "Project 2",
        description: "This is the second project",
      },
    ],
  },
  {
    name: "Python Projects and Codes",
    details: [
      {
        title: "Project 1",
        description: "This is the first project",
      },
      {
        title: "Project 2",
        description: "This is the second project",
      },
    ],
  },
];

const page = () => {
  const [index, setIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  return (
    <div className="flex justify-center items-center h-full w-full gap-7">
      {subjects.map((item, itemIndex) => {
        return (
          <div className=" ">
            <h1 onClick={() => (modalOpen ? close() : open())} key={itemIndex}>
              {item.name}
            </h1>
          </div>
        );
      })}

      <div>
        {subjects[index].details.map(() => {
          return (
            <AnimatePresence className=" " initial={false}>
              {modalOpen && (
                <Modal
                  className="absolute z-40 top-[50%] left-[50%] m-auto bg-black/70"
                  modalOpen={modalOpen}
                  handleClose={close}
                />
              )}
            </AnimatePresence>
          );
        })}
      </div>
    </div>
  );
};
export default page;
