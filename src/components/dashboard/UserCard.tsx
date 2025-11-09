import Image from "next/image";

import { IUser } from "@/interfaces/IUser";
import { FaUser } from "react-icons/fa6";

export default function UserCard({ user }: { user: IUser }) {
  return (
    <div className="flex items-center justify-between p-3 bg-white-smoke rounded-lg shadow hover:shadow-md transition">
      <div className="flex items-center gap-3">
        {user.imageUrl ? (
          <div className="relative w-12 h-12 rounded-full overflow-hidden">
            <Image
              src={user.imageUrl}
              alt={`Avatar of ${user.email}`}
              fill
              className="object-cover"
            />
          </div>
        ) : (
          <div className="w-12 h-12 rounded-full bg-gray-soft flex items-center justify-center">
            <FaUser className="text-gray-strong text-lg" />
          </div>
        )}

        <div>
          <p className="font-medium text-shadow-gray-strong">
            {user.firstName ? user.firstName.split(" ")[0] : ""}{" "}
            {user.lastName ?? ""}
          </p>
          <p className="text-xs text-gray-medium">{user.email}</p>
        </div>
      </div>
      {user.role === "admin" ? (
        <p className="text-sm font-semibold text-red-400">{user.role}</p>
      ) : (
        <p className="text-sm font-semibold text-green-600">{user.role}</p>
      )}
    </div>
  );
}
