import Image from "next/image";
import { IUser } from "@/interfaces/IUser";
import { FaUser } from "react-icons/fa6";
import { updateUserRole } from "@/services/user.services";
import { toast } from "sonner";

interface UserCardProps {
  user: IUser;
  onClick: () => void;
}

const handleToggleRole = async (
  userId: string,
  currentRole: "admin" | "user"
) => {
  const newRole = currentRole === "admin" ? "user" : "admin";
  const confirm = window.confirm(
    "Are you sure you want to change this role user?"
  );
  if (!confirm) return;

  try {
    await updateUserRole(userId, newRole);
    toast.success(`User role updated to ${newRole}`);
  } catch {
    toast.error("Error updating user role");
  }
};

export default function UserCard({ user, onClick }: UserCardProps) {
  return (
    <div>
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
            <button
              type="button"
              onClick={onClick}
              className="font-medium text-gray-strong cursor-pointer"
            >
              {user.firstName ? user.firstName.split(" ")[0] : ""}{" "}
              {user.lastName ?? ""}
              <p className="text-xs text-gray-medium">{user.email}</p>
            </button>
          </div>
        </div>
        <button
          type="button"
          onClick={() =>
            handleToggleRole(user.id, user.role as "admin" | "user")
          }
          className="cursor-pointer"
        >
          {user.role === "admin" ? (
            <p className="text-sm font-semibold text-red-400">{user.role}</p>
          ) : (
            <p className="text-sm font-semibold text-green-600">{user.role}</p>
          )}
        </button>
      </div>
    </div>
  );
}
