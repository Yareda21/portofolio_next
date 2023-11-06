"use client";
import React, { useState } from "react";


const ContactForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // sending the data to server
    const res = await fetch("api/contact", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ fullName, email, phone, message }),
    });

    // creating the msg
    const { msg } = await res.json();
    setError(msg);
  };

  return (
    <div className="w-[100%] md:w-[80%] mx-auto">
      <form className="flex flex-col gap-2 py-4 z-30 mx-auto w-[90%] md:w-[50%] md:mx-0">
        <div>
          <label htmlFor="fullname">Full Name</label>
          <input
            onChange={(event) => setFullName(event.target.value)}
            value={fullName}
            type="text"
            id="fullname"
            placeholder="Yared Kebede"
          />
        </div>

        <div>
          <label htmlFor="phone">Phone Number:</label>
          <input
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
            type="tel"
            id="email"
            placeholder="0922761594"
          />
        </div>

        <div>
          <label htmlFor="email">Email Address:</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            id="email"
            placeholder="ykebed40@gmail.com"
          />
        </div>

        <div>
          <label htmlFor="message">Message</label>
          <textarea
            onChange={(event) => setMessage(event.target.value)}
            value={message}
            id="message"
            cols="20"
            rows="2"
            placeholder="Type your message here...."
          ></textarea>
        </div>
        
        <button
          className="bg-green-700 mt-1 mx-auto px-4 text-white font-bold"
          type="submit"
          onClick={handleSubmit}
        >
          Send
        </button>
      </form>

      <div className="bg-slate-100 mx-auto flex flex-col w-[90%] md:w-[50%] md:mx-0">
        <div className="text-red-600 px-5 py-2 w-[90%] md:w-[50%] md:mx-0">
          Error Message
        </div>
      </div>

      <div className="hidden absolute top-[150px] md:flex right-[100px] w-[350px] h-[450px]">
        <video autoPlay loop
          type="video/mp4"
          src="/video.mp4"
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
};

export default ContactForm;
