"use client";
import React from "react";

import { useState } from "react";

const data = [
  {
    name: "Yared",
    job: {
      title: "Software Developer",
      company: "Tech Company",
    },
  },
  {
    name: "Alemu",
    job: {
      title: "Data Analyst",
      company: "Another Tech Co.",
    },
  },
];

const page = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="h-full container flex z-40 justify-center items-center gap-6">
      {data.map((person, id) => {
        return (
          <div>
            <div key={index} onClick={() => setIndex(index)}>
              {person.name}
            </div>
            <div>
                    {data[index].job.map((item) => {
                        return (
                            <div>{ item.title}</div>
                  )
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default page;
