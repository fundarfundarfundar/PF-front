"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  FolderKanban,
  Users,
  Settings,
  HandCoins,
} from "lucide-react";

const links = [
  { href: "/dashboard/admin", label: "Overview", icon: LayoutDashboard },
  { href: "/dashboard/admin/projects", label: "Projects", icon: FolderKanban },
  { href: "/dashboard/admin/donations", label: "Donations", icon: HandCoins },
  { href: "/dashboard/admin/users", label: "Users", icon: Users },
  { href: "/dashboard/admin/settings", label: "Settings", icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-white shadow-md p-6 hidden lg:flex flex-col justify-between">
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-blue-600">Fund.ar Admin</h2>

        <nav className="flex flex-col gap-3">
          {links.map(({ href, label, icon: Icon }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${
                  active
                    ? "bg-blue-100 text-blue-600 font-medium"
                    : "hover:bg-gray-100 text-gray-700"
                }`}
              >
                <Icon size={18} />
                {label}
              </Link>
            );
          })}
        </nav>
      </div>

      <p className="text-xs text-gray-400 text-center">© 2025 Fund.ar</p>
    </aside>
  );
}
