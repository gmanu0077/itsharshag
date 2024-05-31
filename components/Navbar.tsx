import Link from "next/link";
import React from "react";
import { SiLinkedin, SiX, SiInstagram } from "react-icons/si";

const Navbar = () => {
  const socials = [
    {
      link: "https://twitter.com/gmanu0077",
      label: "X",
      icon: SiX,
    },

    {
      link: "https://www.linkedin.com/in/manu-goel-7899781a0/",
      label: "LinkedIn",
      icon: SiLinkedin,
    }
    
  ];
  return (
    <nav className="py-10 flex justify-between items-center">
      <h2 className="text-2xl font-bold opacity-0">Manu Goel</h2>
      <div className="flex items-center gap-5">
        {socials.map((social, index) => {
          const Icon = social.icon;
          return (
            <Link href={social.link} key={index} aria-label={social.label}>
              <Icon className="w-5 h-5 hover:scale-125 transition-all" />
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
