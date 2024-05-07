"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import NexstackLogo from "../icons/NexstackLogo";
import HamburgerIcon from "../icons/HamburgerIcon";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const links = [
    { href: "/", label: "Home" },
    { href: "/productDesign", label: "Product Design" },
    { href: "/webDevelopment", label: "Web Development" },
    { href: "/mobileDevelopment", label: "Mobile Development" },
    { href: "/testimonials", label: "Testimonials" },
  ];

  return (
    <nav className=" fixed top-0 z-[999] bg-white w-full  flex items-center justify-between px-[4.25rem] py-[2.19rem] max-xl:px-[2.25rem] max-lg:px-[1.9rem]  md:h-[6.0625rem] lg:h-[6.0625rem] shadow">
      <div>
        <NexstackLogo />
      </div>
      <div className="md:hidden" onClick={handleClick}>
        <HamburgerIcon />
      </div>
      <div className="max-md:hidden">
        <ul className="flex gap-[1.88rem] ">
          {links.map((link, index) => (
            <li
              key={index}
              className={`${
                index === 4 ? "max-lg:hidden" : ""
              } text-[1rem] font-normal text-center max-lg:text-[0.75rem] max-xl:text-[0.9rem]`}
            >
              <Link
                href={link.href}
                className={`link ${pathname === link.href ? "active" : ""} 
                   `}
                // style={{
                //   color:
                //     pathname === link.href
                //       ? link.href === "/"
                //         ? "blue"
                //         : "red"
                //       : "inherit",
                // }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className=" max-md:hidden">
        <button className="btn-primary">Register</button>
      </div>
    </nav>
  );
}
