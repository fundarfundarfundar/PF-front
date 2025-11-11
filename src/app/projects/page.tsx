"use client";

import ProjectCard from "@/components/projects/ProjectCard";
import Pagination from "@/components/projects/Pagination";
import CountryFilter from "@/components/projects/CountryFilter";
import { useEffect, useState } from "react";
import { getAllProjects } from "@/services/project.services";
import { IProject } from "@/interfaces/IProject";

export default function ProjectsPage() {
  const [projects, setProjects] = useState<IProject[]>([]);
  const [country, setCountry] = useState("");
  const [countries, setCountries] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

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

  // 🔍 Filtrar por país si hay uno seleccionado
  const filteredProjects = country
    ? projects.filter((p) => p.country === country)
    : projects;

  // 📄 Lógica de paginación
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const indexOfLastProject = currentPage * itemsPerPage;
  const indexOfFirstProject = indexOfLastProject - itemsPerPage;
  const currentProjects = filteredProjects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section>
      <div className="relative bg-gray-soft px-7 lg:pt-20 lg:px-30 lg:pb-10">
        <div className="absolute inset-0 bg-black/10 z-0"></div>
        <div className="relative z-10">
          <CountryFilter
            countries={countries}
            selectedCountry={country}
            onChange={(newCountry) => {
              setCountry(newCountry);
              setCurrentPage(1);
            }}
          />

          {currentProjects.length > 0 ? (
            currentProjects.map((projectItem) => (
              <ProjectCard project={projectItem} key={projectItem.id} />
            ))
          ) : (
            <p className="text-center text-gray-500 mt-10">
              No hay proyectos disponibles.
            </p>
          )}

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </section>
  );
}
