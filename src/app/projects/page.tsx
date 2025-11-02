"use client";

import { useEffect, useState } from "react";
import { getAllProjects } from "@/services/project.services";
import { IProject } from "@/interfaces/IProject";
import ProjectCard from "@/components/projects/ProjectCard";

export default function ProjectsPage() {
  const [projects, setProjects] = useState<IProject[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const allProjects = await getAllProjects();
        setProjects(allProjects);
      } catch (err) {
        console.error("Error trayendo proyectos", err);
      }
    };
    fetchProjects();
  }, []);

  return (
    <section>
      <div className="relative bg-gray-soft px-7 lg:pt-20 lg:px-30 lg:pb-10">
        <div className="absolute inset-0 bg-black/10 z-0"></div>
        <div className="relative z-10">
          {projects.map((projectItem) => (
            <ProjectCard project={projectItem} key={projectItem.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
