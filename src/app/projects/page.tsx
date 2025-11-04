"use client";

import { useEffect, useState } from "react";
import { getAllProjects } from "@/services/project.services";
import { IProject } from "@/interfaces/IProject";
import ProjectCard from "@/components/projects/ProjectCard";

export default function ProjectsPage() {
  const [projects, setProjects] = useState<IProject[]>([]);
  const [country, setCountry] = useState(""); 
  const [countries, setCountries] = useState<string[]>([]); 

 useEffect(() => {
    const fetchProjects = async () => {
      try {
        const allProjects = await getAllProjects();
        setProjects(allProjects);

       
        const uniqueCountries = Array.from(
          new Set(allProjects.map((p: IProject) => p.country).filter(Boolean))
        );
        setCountries(uniqueCountries);
      } catch (err) {
        console.error("Error trayendo proyectos", err);
      }
    };
    fetchProjects();
  }, []);

  
  const filteredProjects = country
    ? projects.filter((p) => p.country === country)
    : projects;

  return (
    <section>
      <div className="relative bg-gray-soft px-7 lg:pt-20 lg:px-30 lg:pb-10">
        <div className="absolute inset-0 bg-black/10 z-0"></div>
        <div className="relative z-10">
          <select
            value={country}
            onChange={e => setCountry(e.target.value)}
            style={{ marginBottom: "1rem" }}
          >
            <option value="">Todos los países</option>
            {countries.map(c => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>

           {filteredProjects.map((projectItem) => (
            <ProjectCard project={projectItem} key={projectItem.title} />
          ))}
        
        </div>
      </div>
    </section>
  );
}
