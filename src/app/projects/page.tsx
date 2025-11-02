import ProjectCard from "@/components/projects/ProjectCard";
import { MockProjects } from "@/helpers/MockProjects";

export default function Projects() {
  return (
    <section>
      <div className="relative bg-gray-soft px-7 lg:pt-20 lg:px-30 lg:pb-10">
        <div className="absolute inset-0 bg-black/10 z-0"></div>
        <div className="relative z-10">
          {MockProjects.map((projectItem) => (
            <ProjectCard project={projectItem} key={projectItem.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
