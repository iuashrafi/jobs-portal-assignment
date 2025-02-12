"use client";
import Image from "next/image";
import { NavLinkData } from "@/lib/utils";
import { Fragment, useState } from "react";
import NavLinkButton from "./NavLinkButton";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [showNavbarDropDown, setShowNavbarDropDown] = useState<boolean>(false);

  const handleMenuClick = () => {
    setShowNavbarDropDown((prev) => !prev);
  };

  const hideNavDropdown = () => {
    setShowNavbarDropDown(false);
  };
  return (
    <nav className="top-0 z-[50] w-full border-b app-border px-4 flex bg-white h-[60px] md:h-[68px]">
      <section className="w-full md:px-6 2xl:px-16 flex items-center justify-between md:justify-normal gap-6">
        <Link href="/">
          <Image src="/logo.svg" alt="logo" width={60} height={60} />
        </Link>

        {/* desktop navbar */}
        <div className="hidden md:flex gap-2">
          <NavLinkItems />
        </div>

        {/* mobile navbar */}
        {showNavbarDropDown && (
          <div
            className={`w-full bg-white h-fit top-[60px] left-0 right-0 z-[50] flex flex-col gap-1 md:hidden shadow-xl rounded-b-xl px-2 sm:px-6  py-4 absolute`}
          >
            <NavLinkItems hideNavDropdown={hideNavDropdown} />
          </div>
        )}

        <div
          className="flex md:hidden items-center justify-end rounded-full w-[50px] h-[50px] cursor-pointer"
          onClick={handleMenuClick}
        >
          {showNavbarDropDown ? (
            <X strokeWidth={2.5} />
          ) : (
            <Menu strokeWidth={2.5} />
          )}
        </div>
      </section>
    </nav>
  );
};

const NavLinkItems = ({
  hideNavDropdown,
}: {
  hideNavDropdown?: () => void;
}) => {
  return (
    <>
      {NavLinkData.map((navLink) => (
        <Fragment key={navLink.id}>
          <NavLinkButton navLink={navLink} hideNavDropdown={hideNavDropdown} />
        </Fragment>
      ))}
    </>
  );
};

export default Navbar;
