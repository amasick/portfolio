// "use client";
// import React from "react";
// import { FloatingNav } from "../components/ui/floating-navbar";
// import { IconHome, IconMessage, IconUser, IconDeviceLaptop, IconCrown, IconStack2 } from "@tabler/icons-react";
// const FloatingNavbar = () => {
//   const navItems = [
//     {
//       name: "Home",
//       link: "#home",
//       icon: <IconHome className="h-4 w-4 text-white hover:text-black" />,
//     },
//     {
//       name: "About",
//       link: "#about",
//       icon: <IconUser className="h-4 w-4 text-white hover:text-black" />,
//     },
//     {
//       name: "Experience",
//       link: "#exp",
//       icon: <IconCrown className="h-4 w-4 text-white hover:text-black" />,
//     },
//     {
//       name: "Projects",
//       link: "#projects",
//       icon: <IconDeviceLaptop className="h-4 w-4 text-white hover:text-black" />,
//     },
//     {
//       name: "Tech Stack",
//       link: "#tech",
//       icon: <IconStack2 className="h-4 w-4 text-white hover:text-black" />,
//     },
//     {
//       name: "Contact",
//       link: "#contact",
//       icon: (
//         <IconMessage className="h-4 w-4 text-white hover:text-black" />
//       ),
//     },
//   ];
//   return (
//     <div className="relative w-full">
//       <FloatingNav navItems={navItems} />
//     </div>
//   );
// }

// export default FloatingNavbar

"use client";

import React from "react";
import { FloatingNav } from "../components/ui/floating-navbar";
import { 
  IconHome, 
  IconMessage, 
  IconUser, 
  IconDeviceLaptop, 
  IconCrown, 
  IconRocket, 
  IconNotebook
} from "@tabler/icons-react";

const FloatingNavbar = () => {
  const navItems = [
    {
      name: "Home",
      link: "#home",
      icon: <IconHome className="h-4 w-4 text-white hover:text-black" />,
    },
    {
      name: "About",
      link: "#about",
      icon: <IconUser className="h-4 w-4 text-white hover:text-black" />,
    },
    {
      name: "Ventures",
      link: "#ventures",
      icon: <IconRocket className="h-4 w-4 text-white hover:text-black" />,
    },
    {
      name: "Experience",
      link: "#experience",
      icon: <IconCrown className="h-4 w-4 text-white hover:text-black" />,
    },
    {
      name: "Projects",
      link: "#projects",
      icon: <IconDeviceLaptop className="h-4 w-4 text-white hover:text-black" />,
    },
    {
      name: "Blogs",
      link: "#blogs",
      icon: <IconNotebook className="h-4 w-4 text-white hover:text-black" />,
    },
    {
      name: "Contact",
      link: "#contact",
      icon: <IconMessage className="h-4 w-4 text-white hover:text-black" />,
    },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <FloatingNav navItems={navItems} />
    </div>
  );
}

export default FloatingNavbar;