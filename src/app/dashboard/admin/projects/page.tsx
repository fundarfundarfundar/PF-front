"use client";

import ProjectTable from "./ProjectTable";
import ProjectModal from "./ProjectModal";
import { useState } from "react";
import { PlusCircle } from "lucide-react";

export default function ProjectsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAdd = () => {
    setIsModalOpen(true);
  };

  return (
    <section className="space-y-6 bg-white-smoke">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Projects</h2>
        <button
          onClick={handleAdd}
          className="bg-blue-strong text-white-smoke px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-medium cursor-pointer"
        >
          <PlusCircle size={18} /> Add Project
        </button>
      </div>
      <ProjectTable />
      {isModalOpen && (
        <ProjectModal
          project={null}
          onSave={() => {}}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </section>
  );
}
