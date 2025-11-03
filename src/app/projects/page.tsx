"use client";

import { useEffect, useState } from "react";
import { getAllProjects } from "@/services/project.services";
import { IProject } from "@/interfaces/IProject";
import ProjectCard from "@/components/projects/ProjectCard";

export default function ProjectsPage() {
  const [projects, setProjects] = useState<IProject[]>([]);
  const [categories, setCategories] = useState<{ id: string; name: string }[]>([]);
  const [category, setCategory] = useState("");     //agregado 

  //agrgado
   useEffect(() => {
    // Trae las categorías para el filtro
    fetch("http://localhost:3001/categories")
      .then(res => res.json())
      .then(data => setCategories(data));
  }, []);

  useEffect(() => {
    // Trae los proyectos filtrados
    const fetchProjects = async () => {
      try {
        let allProjects;
        if (category) {
          const res = await fetch(`http://localhost:3001/projects/filter?category=${category}`);
          allProjects = await res.json();
        } else {
          allProjects = await getAllProjects();
        }
        setProjects(allProjects);
      } catch (err) {
        console.error("Error trayendo proyectos", err);
      }
    };
    fetchProjects();
  }, [category]);

  // useEffect(() => {
  //   const fetchProjects = async () => {
  //     try {
  //       const allProjects = await getAllProjects();
  //       setProjects(allProjects);
  //     } catch (err) {
  //       console.error("Error trayendo proyectos", err);
  //     }
  //   };
  //   fetchProjects();
  // }, []);

  return (
    <section>
      <div className="relative bg-gray-soft px-7 lg:pt-20 lg:px-30 lg:pb-10">
        <div className="absolute inset-0 bg-black/10 z-0"></div>
        <div className="relative z-10">

          {/* agregado el select */}

          <select
            value={category}
            onChange={e => setCategory(e.target.value)}
            style={{ marginBottom: "1rem" }}
          >
            <option value="">Todas las categorías</option>
            {categories.map(cat => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
          {projects.map((projectItem) => (
            <ProjectCard project={projectItem} key={projectItem.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
