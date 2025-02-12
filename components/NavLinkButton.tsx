import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavLinkType } from "@/lib/types";

const NavLinkButton = ({ navLink }: { navLink: NavLinkType }) => {
  const { label, Icon, href } = navLink;
  const pathname = usePathname();

  const isActive =
    href === "/"
      ? pathname === "/"
      : pathname.split("/")[1] === href.split("/")[1];

  return (
    <Link
      href={href}
      className={`transition-colors duration-300 cursor-pointer flex items-center gap-1  hover:bg-[#F6EFFC] hover:text-black rounded-md py-2 px-3 font-medium ${
        isActive ? "bg-[#F6EFFC] text-black" : "text-[#666666]"
      } `}
      scroll={true}
    >
      {Icon && <Icon strokeWidth={2} />}
      <span className="text-[16px]">{label}</span>
    </Link>
  );
};

export default NavLinkButton;
