import StatsCard from "@/components/dashboardAdm/StatsCard";

export default function AdminDashboardPage() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Overview</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard title="Total Projects" value="12" />
        <StatsCard title="Total Donations" value="$45,200" />
        <StatsCard title="Total Users" value="258" />
        <StatsCard title="Active Projects" value="8" />
      </div>
    </section>
  );
}
