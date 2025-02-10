import Image from "next/image";
import Link from "next/link";
import { IconBriefcase2, IconBuilding, IconStack2 } from "@tabler/icons-react";

const Navbar = () => {
  return (
    <nav className="px-6 h-[68px] border-b border-[#E2E8F0] flex items-center space-x-10">
      <div className="bg-green-20">
        <Image src={"/logo.svg"} height={60} width={60} alt="Logo" />
      </div>
      <ul className="flex space-x-8">
        <li>
          <Link
            href="/"
            className="flex gap-1 bg-[#F6EFFC] rounded-md py-2 px-3"
          >
            <IconStack2 stroke={2} />
            <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="flex gap-1 hover:bg-[#F6EFFC] text-[#666666] rounded-md py-2 px-3"
          >
            <IconBriefcase2 stroke={2} />
            <span className="text-[#666666]">Jobs</span>
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="flex gap-1 hover:bg-[#F6EFFC] text-[#666666] rounded-md py-2 px-3"
          >
            <IconBuilding stroke={2} />
            <span className="text-[#666666]">Company</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
