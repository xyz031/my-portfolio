import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4 text-center">
      <p>&copy; {new Date().getFullYear()} Aditya Maurya. All rights reserved.</p>
    </footer>
  );
};

export default Footer;