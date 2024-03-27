import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Contact = () => {
  const { isAuthenticated, user } = useAuth0();

  return (
    <div className="w-full h-full">
      <h3 className="text-center my-10 text-4xl font-serif">
        Contact <span className="text-blue-300">Now</span>
      </h3>

      <form action="https://formspree.io/f/xrgneevn" method="POST">
        <div className="w-10/12 md:w-8/12 mx-auto">
          <div className="md:flex gap-8 text-sm">
            <input
              type="text"
              id="text"
              name="text"
              autoComplete="off"
              value={isAuthenticated ? user.name : ""}
              placeholder="username"
              className="w-full h-14 bg-gray-300 rounded-lg px-10 placeholder-gray-700 font-serif capitalize outline-none text-gray-700 shadow-black shadow-sm hover:shadow-none duration-300"
            />
            <input
              type="number"
              id="number"
              name="number"
              autoComplete="off"
              placeholder="phn number"
              className="w-full h-14 bg-gray-300 rounded-lg px-10 placeholder-gray-700 font-serif capitalize outline-none text-gray-700  shadow-black shadow-sm hover:shadow-none duration-300 mt-5 md:mt-0"
            />
          </div>

          <input
            type="email"
            name="email"
            id="email"
            autoComplete="of"
            value={isAuthenticated ? user.email : ""}
            placeholder="your email"
            className="w-full h-14 my-5 bg-gray-300 rounded-lg px-10 placeholder-gray-700 font-serif capitalize outline-none text-gray-700 text-sm  shadow-black shadow-sm hover:shadow-none duration-300"
          />

          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="write a message 📝"
            className="w-full bg-gray-300 rounded-lg p-5 sm:p-10 placeholder-gray-700 font-serif capitalize outline-none text-gray-700 resize-none text-sm shadow-black shadow-sm hover:shadow-none duration-300 h-40 sm:h-auto"
          ></textarea>

          <div className="text-center my-10">
            <input
              type="submit"
              value="Submit"
              className="bg-blue-300 px-20 py-4 text-sm font-serif border-2 border-blue-300 hover:bg-transparent duration-300 outline-none cursor-pointer  shadow-black shadow-sm hover:shadow-none"
            />
          </div>
        </div>
      </form>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233356.88719723377!2d90.23976005632824!3d23.953318674809573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c62fb95f16c1%3A0xb333248370356dee!2sJamuna%20Future%20Park!5e0!3m2!1sen!2sbd!4v1704031546940!5m2!1sen!2sbd"
        width="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="mb-10 md:mb-16 md:h-[15rem] lg:h-[23rem]"
      />
    </div>
  );
};

export default Contact;
