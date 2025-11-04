"use client";

import { useEffect, useState } from "react";
import { getAllProjects } from "@/services/project.services";
import { IProject } from "@/interfaces/IProject";
import ProjectCard from "@/components/projects/ProjectCard";

export default function ProjectsPage() {
  const [projects, setProjects] = useState<IProject[]>([]);
  const [country, setCountry] = useState("");
  const [countries, setCountries] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3; // 👈 Mostramos 3 proyectos por página

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
    window.scrollTo({ top: 0, behavior: "smooth" }); // 👈 sube al inicio al cambiar de página
  };

  return (
    <section>
      <div className="relative bg-gray-soft px-7 lg:pt-20 lg:px-30 lg:pb-10">
        <div className="absolute inset-0 bg-black/10 z-0"></div>
        <div className="relative z-10">
          {/* 🌍 Filtro de países */}
          <select
            value={country}
            onChange={(e) => {
              setCountry(e.target.value);
              setCurrentPage(1); // 👈 reinicia la paginación al cambiar país
            }}
            className="mb-5 border rounded px-3 py-1"
          >
            <option value="">Todos los países</option>
            {countries.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>

          {/* 🧩 Proyectos */}
          {currentProjects.length > 0 ? (
            currentProjects.map((projectItem) => (
              <ProjectCard project={projectItem} key={projectItem.id} />
            ))
          ) : (
            <p className="text-center text-gray-500 mt-10">
              No hay proyectos disponibles.
            </p>
          )}

          {/* 🔢 Controles de paginación */}
          {totalPages > 1 && (
            <div className="flex justify-center gap-2 mt-8">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
              >
                ← Anterior
              </button>

              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => handlePageChange(i + 1)}
                  className={`px-3 py-1 rounded ${
                    currentPage === i + 1
                      ? "bg-blue-500 text-white"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                >
                  {i + 1}
                </button>
              ))}

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
              >
                Siguiente →
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

// "use client";

// import { useEffect, useState } from "react";
// import { getAllProjects } from "@/services/project.services";
// import { IProject } from "@/interfaces/IProject";
// import ProjectCard from "@/components/projects/ProjectCard";

// export default function ProjectsPage() {
//   const [projects, setProjects] = useState<IProject[]>([]);
//   const [country, setCountry] = useState("");
//   const [countries, setCountries] = useState<string[]>([]);

//   useEffect(() => {
//     const fetchProjects = async () => {
//       try {
//         const allProjects = await getAllProjects();
//         setProjects(allProjects);

//         const uniqueCountries = Array.from(
//           new Set(allProjects.map((p: IProject) => p.country).filter(Boolean))
//         );
//         setCountries(uniqueCountries);
//       } catch (err) {
//         console.error("Error trayendo proyectos", err);
//       }
//     };
//     fetchProjects();
//   }, []);

//   const filteredProjects = country
//     ? projects.filter((p) => p.country === country)
//     : projects;

//   return (
//     <section>
//       <div className="relative bg-gray-soft px-7 lg:pt-20 lg:px-30 lg:pb-10">
//         <div className="absolute inset-0 bg-black/10 z-0"></div>
//         <div className="relative z-10">
//           <select
//             value={country}
//             onChange={(e) => setCountry(e.target.value)}
//             style={{ marginBottom: "1rem" }}
//           >
//             <option value="">Todos los países</option>
//             {countries.map((c) => (
//               <option key={c} value={c}>
//                 {c}
//               </option>
//             ))}
//           </select>

//           {filteredProjects.map((projectItem) => (
//             <ProjectCard project={projectItem} key={projectItem.title} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
