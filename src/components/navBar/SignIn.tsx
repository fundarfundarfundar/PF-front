import { PATHROUTES } from "@/helpers/NavItems";
import Link from "next/link";
import Give from "../navBar/Give";

export default function SignIn() {
  return (
    <div className="flex items-center gap-5 lg:gap-7">
      <Link className="nav-items" href={PATHROUTES.LOGIN}>
        SIGN IN
      </Link>
      <div className="w-px h-7 bg-black-medium"></div>
      <Give />
    </div>
  );
}
