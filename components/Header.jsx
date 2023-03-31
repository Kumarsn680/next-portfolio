import React from "react";
import Image from "next/image";
import portfolio from "../public/portfolio-image.jpg";
import { GitHub, LinkedIn, Instagram } from "@mui/icons-material";
import Link from "next/link";

const Header = () => {
  return (
    <div className="w-full bg-lime-950 flex flex-col text-white items-center p-2">
      <div className="w-full flex text-white justify-between lg:px-10 my-5">
        <Image
          src={portfolio}
          width={100}
          height={100}
          alt="logo"
          priority
        ></Image>
        <div className="hidden sm:flex w-1/2 h-full  justify-evenly items-center">
          <Link href="#projects">
            <span className="text-xl">Projects</span>
          </Link>
          <Link href="#technologies">
            <span className="text-xl">Technologies</span>
          </Link>
          <Link href="#achievements">
            <span className="text-xl">Achievements</span>
          </Link>
        </div>
        <div className="w-48 flex justify-evenly items-center">
          <GitHub />
          <LinkedIn />
          <Instagram />
        </div>
      </div>
      <div className="w-full flex justify-evenly sm:hidden my-2">
        <Link href="#projects">
          <span>Projects</span>
        </Link>
        <Link href="#technologies">
          <span>Technologies</span>
        </Link>
        <Link href="#achievements">
          <span>Achievements</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
