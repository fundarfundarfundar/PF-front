"use client";

import UserList from "@/components/dashboard/UserList";
import { useUsers } from "@/context/UserContext";

export default function UsersPage() {
  const { allUsers, totalUsers } = useUsers();

  return (
    <section>
      <>
        {allUsers.length > 0 ? (
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold">
              Users <span className="text-xl">({totalUsers})</span>
            </h2>
            <UserList />
          </section>
        ) : (
          <p className="text-gray-strong">There are no users yet.</p>
        )}
      </>
    </section>
  );
}
