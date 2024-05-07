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

// "use client";

// import { useState } from "react";
// import { usePathname } from "next/navigation";
// import Link from "next/link";
// import HamburgerIcon from "../icons/HamburgerIcon";
// import NexstackLogo from "../icons/NexstackLogo";
// import CloseIcon from "../icons/CloseIcon";

// export default function Navbar() {
//   // State to manage the mobile menu open/close
//   const [isOpen, setIsOpen] = useState(false);

//   // Get the current pathname using Next.js hook
//   const pathname = usePathname();

//   // Function to handle the click on the hamburger icon or close icon
//   const handleClick = () => {
//     setIsOpen(!isOpen);
//   };

//   // Navigation links configuration
//   const links = [
//     { href: "/", label: "Home" },
//     { href: "/productDesign", label: "Product Design" },
//     { href: "/webDevelopment", label: "Web Development" },
//     { href: "/mobileDevelopment", label: "Mobile Development" },
//     { href: "/testimonials", label: "Testimonials" },
//   ];

//   return (
//     <nav className="flex flex-row justify-between items-center h-[4rem] px-[1.87rem]">
//       {/* Nexstack Logo */}
//       <div>
//         <NexstackLogo />
//       </div>

//       {/* Mobile Menu */}
//       {isOpen ? (
//         <div className="">
//           <ul className="max-md:absolute max-md:left-0 max-md:top-0 max-md:flex-col max-md:bg-[#111111] max-md:w-full flex justify-between items-center w-full">
//             {/* Close Icon */}
//             <div onClick={handleClick} className="pt-[2.88rem] pl-[20rem]">
//               <CloseIcon />
//             </div>

//             {/* Navigation Links */}
//             {links.map((link, index) => (
//               <li
//                 onClick={() => setIsOpen(false)}
//                 key={index}
//                 className={`${
//                   index === 4 ? "max-md:hidden" : ""
//                 } max-md:pt-[2.44rem] text-[1rem] font-normal text-center text-[#FFFFFF] py-[0.62rem] lg:px-[1.88rem] md:px-[0.68rem]`}
//               >
//                 {/* Use Next.js Link component for client-side navigation */}
//                 <Link
//                   //   onClick={() => setIsOpen(false)}
//                   className={`link ${pathname === link.href ? "active" : ""}`}
//                   href={link.href}
//                 >
//                   {link.label}
//                 </Link>
//               </li>
//             ))}

//             {/* Register Button */}
//             <div className="pt-[4.63rem] pb-[8.44rem]">
//               <button className="btn-primary w-[17.75rem]">Register</button>
//             </div>
//           </ul>
//         </div>
//       ) : (
//         // Hamburger Icon (visible when the mobile menu is closed)
//         <div onClick={handleClick}>
//           <HamburgerIcon />
//         </div>
//       )}

//       {/* Register Button (visible on larger screens) */}
//       <div className="max-md:hidden">
//         <button className="btn-primary">Register</button>
//       </div>
//     </nav>
//   );
// }
