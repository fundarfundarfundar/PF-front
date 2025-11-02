"use client";

import StatsCard from "@/components/dashboardAdm/StatsCard";
import { useProjects } from "@/context/ProjetsContext";

export default function AdminDashboardPage() {
  const { totalProjects, activeProjects } = useProjects();

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold text-black-strong">Overview</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard title="Total Projects" value={totalProjects} />
        <StatsCard title="Total Donations" value="-" />
        <StatsCard title="Total Users" value="-" />
        <StatsCard title="Active Projects" value={activeProjects} />
      </div>
    </section>
  );
}
