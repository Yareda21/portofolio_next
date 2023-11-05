import React from "react";

const ContactForm = () => {
  return (
    <div className="w-[100%] md:w-[80%] mx-auto">
      <form className="py-4 mx-auto w-[90%] md:w-[50%] md:mx-0">
        <div>
          <label htmlFor="fullname">Full Name</label>
          <input type="text" id="fullname" placeholder="Yared Kebede" />
        </div>

        <div>
          <label htmlFor="email">Email Address:</label>
          <input type="email" id="email" placeholder="ykebed40@gmail.com" />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            cols="20"
            rows="2"
            placeholder="Type your message here...."
          ></textarea>
        </div>
        <button
          className="bg-green-700 mt-2 mx-auto p-3 text-white font-bold"
          type="submit"
        >
          Send
        </button>
      </form>

      <div className="bg-slate-100 mx-auto flex flex-col w-[90%] md:w-[50%] md:mx-0">
        <div className="text-red-600 px-5 py-2 w-[90%] md:w-[50%] md:mx-0">
          Error Message
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
