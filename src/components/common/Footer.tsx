import React from "react";
import { P } from "./Typography";

export default function Footer() {
  return (
    <footer className="bg-white-smoke text-black-strong  h-[8vh] flex items-center justify-center shadow-2xl lg:h-[10vh]">
      <P>© {new Date().getFullYear()} Fund.ar — All rights reserved.</P>
    </footer>
  );
}
