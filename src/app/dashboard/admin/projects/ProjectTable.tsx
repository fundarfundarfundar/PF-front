/* eslint-disable @typescript-eslint/no-explicit-any */
import DeleteButton from "@/components/common/DeleteButton";
import EditButton from "@/components/common/EditButton";
import ProjectModal from "./ProjectModal";
import { useProjects } from "@/context/ProjetsContext";
import { IProject } from "@/interfaces/IProject";
import { deleteProject } from "@/services/project.services";
import { useState } from "react";

export default function ProjectTable() {
  const { allProjects, editProject } = useProjects();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<IProject | null>(null);

  const handleDelete = async (idProject: string) => {
    const confirmDelete = confirm("Seguro que quieres eliminar este proyecto?");
    if (!confirmDelete) return;

    try {
      await deleteProject(idProject);
    } catch (err) {
      console.error("Error eliminando proyecto", err);
    }
  };

  const handleEdit = (project: IProject) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleSave = async (data: any) => {
    if (!selectedProject) return;
    await editProject(selectedProject.id, data);
    setIsModalOpen(false);
  };

  return (
    <>
      <table className="w-full border-collapse bg-white-smoke shadow-sm rounded-lg">
        <thead>
          <tr className="bg-gray-strong text-left text-white-smoke">
            <th className="p-3">Name</th>
            <th className="p-3">Country</th>
            <th className="p-3">Goal</th>
            <th className="p-3">Raised</th>
            <th className="p-3 text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {allProjects.map((project: IProject) => (
            <tr key={project.id} className="border-b hover:bg-gray-soft">
              <td className="p-3">{project.title}</td>
              <td className="p-3">{project.country}</td>
              <td className="p-3">${project.goalAmount.toLocaleString()}</td>
              <td className="p-3">
                ${project.currentAmount?.toLocaleString() ?? "-"}
              </td>
              <td className="p-3 text-right flex justify-end gap-3">
                <EditButton onEdit={() => handleEdit(project)} />
                <DeleteButton onDelete={() => handleDelete(project.id)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isModalOpen && (
        <ProjectModal
          project={selectedProject}
          onSave={handleSave}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
}
