import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-steelBlueDark text-white py-12 px-6">
      <div className="container mx-auto flex flex-wrap justify-between">
        {/* Logo */}
        <div className="footer-logo">
          <img src="/logo-no-text.png" alt="Company Logo" className="h-16" />
        </div>

        {/* Address */}
        <div className="footer-address mt-4 md:mt-0">
          <p className="text-sm">Lorem, ipsumo</p>
          <p className="text-sm">Loremipsum@gmail.com</p>
          <p className="before:content-['(613)'] text-sm"> 000-0000</p>
        </div>

        {/* Social Media */}
        <div className="footer-social mt-4 md:mt-0">
          <a href="#" className="text-white mr-4 hover:text-gray-500">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="text-white mr-4 hover:text-gray-500">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-white hover:text-gray-500">
            <i className="fab fa-instagram"></i>
          </a>
        </div>

        {/* Menu */}
        <div className="footer-menu mt-4 md:mt-0">
          <ul className="flex">
            <li className="mr-6">
              <a href="#home" className="hover:text-gray-500">
                Home
              </a>
            </li>
            <li className="mr-6">
              <a href="#services" className="hover:text-gray-500">
                Services
              </a>
            </li>
            <li className="mr-6">
              <a href="#about" className="hover:text-gray-500">
                About Us
              </a>
            </li>
            <li>
              <a href="#contct" className="hover:text-gray-500">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
