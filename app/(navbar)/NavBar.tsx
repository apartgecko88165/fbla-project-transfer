"use client";

import PortalButton from "./PortalButton";
import Image from "next/image";
import Link from "next/link";
import cap from "../../public/cap.svg";
import menu from "../../public/menu.png";
import { useState } from "react";

function Hamburger() {
  return (
    <span className="flex w-fit m-3 p-3 rounded-lg shadow bg-gray-300 font-bold hover:shadow-xl relative z-10 select-none">
      <Image src={menu} alt="Home menu" />
    </span>
  )
}

function NavBarCollapsed() {
  return (
    <div className="animate-hamburgerAdjustLeft relative z-10">
      <Hamburger />
    </div>
  );
}

function NavBarExpanded() {
  return (
    <ul className="flex flex-col h-screen justify-arrounds items-center relative z-10 w-[6rem] rounded">
      <li className="animate-hamburgerAdjustRight">
        <Hamburger />
      </li>

      <span>
        <PortalButton text={"Student Portal"} route={"/student"} />
      </span>
      <PortalButton text={"Staff Portal"} route={"/login/staff"} />
      <PortalButton text={"Help"} route={"/help/"}/> 
      <Link href="/">
        <li className="bg-gray-300 rounded w-fit m-3 p-3 select-none animate-slide">
          <Image src={cap} alt="Home Page" width={30} height={30} />
        </li>
      </Link>
    </ul>
  );
}


function NavBar() {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <nav
      onMouseOver={() => setIsHovering(true)}
      onMouseOut={() => setIsHovering(false)}
    >
      {!isHovering && <NavBarCollapsed />}
      {isHovering && <NavBarExpanded />}
    </nav>
  );
}

export default NavBar;
