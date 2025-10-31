/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { PlusCircle } from "lucide-react";
import ProjectTable from "./ProjectTable";
import ProjectModal from "./ProjectModal";

export default function ProjectsPage() {
  const [projects, setProjects] = useState([
    { id: 1, name: "Feeding Hope", goal: 50000, raised: 32000 },
    { id: 2, name: "Clean Water Access", goal: 40000, raised: 29000 },
  ]);

  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAdd = () => {
    setSelectedProject(null);
    setIsModalOpen(true);
  };

  const handleEdit = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleSave = (project: any) => {
    if (project.id) {
      // Update existing
      setProjects((prev) =>
        prev.map((p) => (p.id === project.id ? project : p))
      );
    } else {
      // Create new
      const newProject = { ...project, id: Date.now() };
      setProjects((prev) => [...prev, newProject]);
    }
    setIsModalOpen(false);
  };

  const handleDelete = (id: number) => {
    setProjects((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <section className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Projects</h2>
        <button
          onClick={handleAdd}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700"
        >
          <PlusCircle size={18} /> Add Project
        </button>
      </div>

      <ProjectTable
        projects={projects}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      {isModalOpen && (
        <ProjectModal
          project={selectedProject}
          onSave={handleSave}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </section>
  );
}
