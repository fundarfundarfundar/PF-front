"use client";

import UserCard from "./UserCard";
import { useUsers } from "@/context/UserContext";

export default function UserList() {
  const { allUsers } = useUsers();

  return (
    <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-3">
      {allUsers.map((user, index) => (
        <UserCard key={index} user={user} />
      ))}
    </div>
  );
}
