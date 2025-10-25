import { NavItems } from "@/helpers/NavItems";
import Link from "next/link";
import Logo from "./Logo";
import SignIn from "../navBar/SignIn";
import BurgerMenu from "../navBar/BurgerMenu";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center lg:px-10 px-5 h-[8vh] bg-white-smoke text-white-smoke shadow-md border-b border-black-strong lg:h-[10vh]">
      <BurgerMenu />
      <Logo />
      <div className="space-x-5 hidden lg:block">
        {NavItems.map((navigationItem, index) => {
          return (
            <Link key={index} href={navigationItem.route} className="nav-items">
              {navigationItem.name}
            </Link>
          );
        })}
      </div>
      <SignIn />
    </nav>
  );
}
