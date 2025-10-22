import React from "react";
import Link from "next/link";
import { NavItems } from "@/helpers/NavItems";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 h-[10vh] bg-blue-600 text-white shadow-md">
      <Logo />
      <div className="space-x-5">
        {NavItems.map((navigationItem, index) => {
          return (
            <Link key={index} href={navigationItem.route}>
              {navigationItem.name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
