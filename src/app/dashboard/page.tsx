"use client";

import { mockUserDashboard } from "../../helpers/MockDashboard";
import UserCard from "./UserCard";
import DonationsList from "./DonationsList";

export default function DashboardPage() {
  const { usuario, donaciones } = mockUserDashboard;

  return (
    <section className="min-h-screen bg-gray-medium p-6">
      <div className="max-w-5xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-gray-800">My Panel</h1>
        <UserCard usuario={usuario} />
        <DonationsList donaciones={donaciones} />
      </div>
    </section>
  );
}
