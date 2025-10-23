import React from "react";

export default function Footer() {
  return (
    <footer className="bg-blue-dark text-white-smoke h-[10vh]">
      <div className="max-w-5xl mx-auto text-center text-sm py-5">
        <p>
          © {new Date().getFullYear()} Fund.ar — Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
