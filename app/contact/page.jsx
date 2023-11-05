import ContactForm from "@/components/ContactForm";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col pt-[110px] md:lg-[60px] w-full">
      <div className="mx-auto max-w-3xl ">
        <h1 className="text-3xl font-bold">Contact Me</h1>
        <p>Please fill in the form below </p>
      </div>
      <ContactForm />
    </div>
  );
};

export default page;
