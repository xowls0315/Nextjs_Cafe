"use client";

import Link from "next/link";
import { useState } from "react";
import Toggle from "./subcomponents/Toggle";
import MobileNav from "./subcomponents/MobileNav";
import DesktopNav from "./subcomponents/DesktopNav";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <header className="w-full bg-white shadow-sm py-10 sticky top-0 z-10">
      <nav className="px-4 w-full max-w-5xl mx-auto flex justify-between items-center font-bold">
        <h2 className="text-3xl text-gray-500 hover:text-sky-200 transition-all duration-200 mr-10">
          <Link href={"/"}>IT-cafe</Link>
        </h2>

        <DesktopNav />
        {isMenuOpen && <MobileNav />}
        <Toggle isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      </nav>
    </header>
  );
};

export default Header;
