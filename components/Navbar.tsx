"use client";
import Image from "next/image";
import { NavLinkData } from "@/lib/utils";
import { Fragment } from "react";
import NavLinkButton from "./NavLinkButton";

const Navbar = () => {
  return (
    <nav className="md:px-6 h-[60px] md:h-[68px] border-b app-border flex items-center space-x-10">
      <div className="bg-green-00 flex">
        <Image src={"/logo.svg"} height={60} width={60} alt="Logo" />
      </div>
      <ul className="flex space-x-6">
        <NavLinkItems />
      </ul>
    </nav>
  );
};

const NavLinkItems = () => {
  return (
    <>
      {NavLinkData.map((navLink) => (
        <Fragment key={navLink.id}>
          <NavLinkButton navLink={navLink} />
        </Fragment>
      ))}
    </>
  );
};

export default Navbar;
