import React from "react";
//footer includes about us contact us and name of team members

const Footer = () => {
  return (
    <footer className="w-full bg-[#1b2a2f] py-6 px-4 text-white font-[Source_Sans_Pro] mt-auto">
      
      <div className="flex [font-family:'Source_Sans_Pro-SemiBold',Helvetica] flex-wrap justify-center gap-6 md:gap-10 mt-6 text-lg md:text-2xl font-semibold">
        <span className="text-2xl md:text-3xl font-bold">QUICK LINKS</span>
        <a href="#" className="hover:underline">About Us</a>
        <a href="#" className="hover:underline">Privacy</a>
        <a href="#" className="hover:underline">Vehicle Rental</a>
        <a href="#" className="hover:underline">Chat With Us</a>
      </div>

      
      <div className="text-center text-lg md:text-2xl mt-5 font-bold">
        MADE WITH LOVE BY <span className="">GUPTA SQUAD</span>
      </div>
    </footer>
  );
};

export default Footer;
