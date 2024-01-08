import Link from "next/link";
import React from "react";
import NavLinks from "./navLinks/NavLinks";

interface NavBarProps {}

function NavBar({}: NavBarProps) {
  return (
    <div className="flex flex-row h-24 items-center justify-between">
      <div className="text-3xl font-bold"><Link href={'/'}>Logo</Link></div>
      <div className="flex flex-row gap-3 items-center">
        <NavLinks />
      </div>
    </div>
  );
}

export default NavBar;
