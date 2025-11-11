"use client";

import UserCard from "./UserCard";
import { useUsers } from "@/context/UserContext";

interface UserListProps {
  onSelect: (id: string) => void;
}

export default function UserList({ onSelect }: UserListProps) {
  const { allUsers } = useUsers();

  return (
    <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-3">
      {allUsers.map((user, index) => (
        <UserCard key={index} user={user} onClick={() => onSelect(user.id)} />
      ))}
    </div>
  );
}
