import { IProject } from "@/interfaces/IProject";
import { P, TitleProject } from "../common/Typography";
import Image from "next/image";
// import Link from "next/link";

interface CardProps {
  project: IProject;
}

export default function ProjectCard({ project }: CardProps) {
  let firstPart = "";
  let lastWord = "";

  if (project) {
    const titleDivided = project?.title.split(" ");
    lastWord = titleDivided?.pop() || "";
    firstPart = titleDivided.join(" ");
  }

  return (
    <section
      key={project.title}
      className="flex flex-col gap-10 lg:flex lg:flex-row lg:gap-30 py-15 even:lg:flex-row-reverse"
    >
      <div className="lg:w-1/2">
        <Image
          src={project.image}
          alt={`Imagen de ${project.title}`}
          width={1400}
          height={1400}
          className="rounded-xl"
        />
      </div>

      <div className="flex flex-col justify-center gap-5 place-items-center lg:place-items-start lg:w-1/2">
        <TitleProject className="font-extrabold leading-13">
          {firstPart}
          <br />
          {lastWord}
        </TitleProject>
        <P className="text-black-medium lg:w-130">{project.description}</P>

        {/* <Link
            href={`/products/${getCategoryNameById(product.categoryId)}/${
              project.id
            }`}
          >
          </Link> */}
        <button className="btn-primary mt-7">SEE MORE</button>
      </div>
    </section>
  );
}
