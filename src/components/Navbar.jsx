import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import gsap from "gsap";

import { useScramble } from "use-scramble";
function Navbar() {
  const ListNavitems = [
    "Glance",
    "TimeLine",
    "Speakers",
    "Workshops",
    "Contact",
  ];
  const NavbarRef = useRef();
  useGSAP(() => {
    gsap.from(NavbarRef.current.children, {
      duration: 1.6,
      opacity: 0,
      y: 50,
      ease: "ease.in",
      stagger: 0.2,
    });
  });

  return (
    <>
      <div className="flex flex-row gap-x-1h-full justify-center pt-8">
        <div
          ref={NavbarRef}
          className="h-full font-mono flex  text-sm text-white py-0 text-[24.6px] gap-x-11"
        >
          {ListNavitems.map((elem, index) => {
            const { ref, replay } = useScramble({
              text: elem,
              speed: 0.5,
              step: 2,
              tick:4
            });
            
            return (
              <span
                key={index}
                ref={ref}
                onMouseEnter={replay}
                index={index}
                className="hover:bg-[#D9FF06] hover:text-slate-600 hover:cursor-pointer"
              >
                {elem}
              </span>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Navbar;
