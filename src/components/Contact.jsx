import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const ContactSection = () => {
  return (
    <section id="contact" className="bg-gray-950 text-gray-300 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-5xl font-bold text-center mb-12">Contact Me</h2>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="flex flex-col justify-center space-y-8">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold">Let's Talk</h1>
              <p className="my-5">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus,
                ab. Iusto beatae doloribus ut sunt voluptatem fuga mollitia
                dicta illum!
              </p>
              <h3 className="text-2xl font-semibold">Email</h3>
              <p className="mt-2">
                <a
                  href="mailto:adityamaurya0401@gmail.com"
                  className="text-blue-500 hover:underline"
                >
                  adityamaurya0401@gmail.com
                </a>
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold">Phone</h3>
              <p className="mt-2">
                <a
                  href="tel:+918081116364"
                  className="text-blue-500 hover:underline"
                >
                  +91 8081116364
                </a>
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold">Follow Me</h3>
              <div className="flex gap-3 text-2xl transition-all mt-5 text-blue-400">
                <a href='https://www.facebook.com/profile.php?id=100075548629924'> <FaFacebook className='hover:text-blue-400' /></a>
                                    <a href='https://www.instagram.com/aditya_maurya04/'>  <FaInstagram className='hover:text-blue-400' /></a>
                                      <a href='https://www.linkedin.com/in/aditya-maurya-560a02227/'><FaLinkedin className='hover:text-blue-400' /></a>
                                     <a href='https://x.com/Aditya_Maurya04'>  <FaSquareXTwitter className='hover:text-blue-400' /></a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-lg shadow-[0px_0px_20px_10px_rgba(0,0,0,0.3)] shadow-blue-500 p-8">
            <h3 className="text-3xl font-semibold mb-6">Get in Touch</h3>
            <form
              className="space-y-6"
              action="https://formspree.io/f/xayrozyq"
              method="POST"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 w-full p-3 border bg-gray-900 text-gray-300 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 w-full p-3 border bg-gray-900 text-gray-300 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="mt-1 w-full p-3 border bg-gray-900 text-gray-300 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-3 rounded-lg shadow-md hover:bg-blue-600 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
