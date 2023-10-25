import React from "react";
import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/constants";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container py-5 relative z-30">
      <Link href="/">
        <Image src="/foresta.png" alt="logo" width={150} height={100} />
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 cursor-pointer hover:font-bold text-gray-50 flexCenter pb-1.5 transition-all"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      <Button
        type="button"
        title="Login"
        icon="./user.svg"
        variant="btn_dark_green"
      />

      <Image
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block lg:hidden cursor-pointer"
      />
    </nav>
  );
};

export default Navbar;
