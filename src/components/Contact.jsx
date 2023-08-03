import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16 ">
      <h1 className="py-4 text-4xl font-bold text-center text-[#001b5e]">
        Contact
      </h1>
      <form action="https://getform.io/f/dad081e8-f0c1-46bf-a96d-d3bd6228a6b8" method="POST" encType="multipart/form-data">
        <div className="grid md:grid-cols-2 gap-4 w-full py-2">
          <div className="flex flex-col ">
            <label className="uppercase text-sm py-4">Name</label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-300 "
              type="text"
              name="name"
            />
          </div>
          <div className="flex flex-col">
            <label className="uppercase text-sm py-4">Phone</label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-300 "
              type="text"
              name="phone"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label className="uppercase text-sm py-4">Email</label>
          <input
            className="border-2 rounded-lg p-3 flex border-gray-300 "
            type="email"
            name="email"
          />
        </div>
        <div className="flex flex-col">
          <label className="uppercase text-sm py-4">Subject</label>
          <input
            className="border-2 rounded-lg p-3 flex border-gray-300"
            type="text"
            name="subject"
          />
        </div>
        <div className="flex flex-col ">
          <label className="uppercase text-sm py-4">Message</label>
          <textarea
            className="border-2 rounded-lg p-3 flex border-gray-300"
            rows={8}
            name="name"
          ></textarea>
        </div>
        <button className="bg-[#0015be] text-gray-100 mt-4 w-full p-4 rounded-lg ">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
