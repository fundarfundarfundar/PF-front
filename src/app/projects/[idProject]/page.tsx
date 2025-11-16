"use client";

import Image from "next/image";
import BackButton from "@/components/common/BackButton.";
import PaymentModal from "@/components/projects/PaymentModal";
import { notFound, useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { IProject } from "@/interfaces/IProject";
import { H2, P1, TitleProject } from "@/components/common/Typography";
import { GoArrowRight } from "react-icons/go";
import { getProjectById } from "@/services/project.services";

export default function ProjectDetailPage() {
  const params = useParams();
  const projectId = params.idProject as string;

  const [projectData, setProjectData] = useState<IProject | null>(null);
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(
    null
  );

  useEffect(() => {
    const fetchProjectById = async () => {
      try {
        const project = await getProjectById(projectId as string);
        if (!project) return notFound();
        setProjectData(project);
      } catch (err) {
        console.error("Error obterniendo el producto", err);
      }
    };
    fetchProjectById();
  }, [projectId]);

  if (!projectData) {
    return <p className="text-center py-20">Cargando proyecto...</p>;
  }

  const [lastWord, ...rest] = projectData.title.split(" ").reverse();
  const firstPart = rest.reverse().join(" ");

  return (
    <section className="relative bg-gray-soft lg:pt-20 lg:pb-30">
      <div className="absolute inset-0 bg-black/10 z-0"></div>
      <div className="relative z-10">
        <BackButton />
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-40 py-10 px-7 lg:px-30">
          <div className="lg:w-1/2">
            <Image
              src={projectData.imageUrls[0]}
              alt={`Imagen de ${projectData.title}`}
              width={1400}
              height={1400}
              className="rounded-xl h-[500px]"
            />
          </div>
          <div className="flex flex-col justify-center gap-6 lg:w-1/2">
            <TitleProject>
              {firstPart}
              <br />
              <span>{lastWord}</span>
            </TitleProject>
            <P1>{`${projectData.resume}`}</P1>

            <button
              type="button"
              onClick={() => setSelectedProjectId(projectId)}
              className="btn-primary mt-7 self-start"
            >
              DONATE
            </button>
          </div>
        </div>

        <div className="lg:px-30 flex pt-15 pb-30 gap-30">
          <div className=" flex flex-col gap-7">
            <H2>DESCRIPTION</H2>
            <P1 className="w-[600px]">{projectData.description}</P1>
          </div>
          <div className="flex flex-col gap-7 justify-start">
            <H2>PROJECT DETAILS</H2>
            <div className="flex gap-2 items-center">
              <GoArrowRight className="text-blue-strong text-3xl" />
              <P1>
                <span className="font-semibold">Goal:</span> $
                {projectData.goalAmount.toLocaleString()}
              </P1>
            </div>
            <div className="flex gap-2 items-center">
              <GoArrowRight className="text-blue-strong font-extrabold text-3xl" />
              <P1>
                <span className="font-semibold">Raised:</span> $
                {/* {projectData.currentAmount.toLocaleString()} */}
              </P1>
            </div>
            <div className="flex gap-2 items-center">
              <GoArrowRight className="text-blue-strong font-extrabold text-3xl" />
              <P1>
                <span className="font-semibold">Country:</span>{" "}
                {projectData.country}
              </P1>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-10 lg:px-30">
          <div className="flex flex-col gap-7">
            <Image
              src={projectData.imageUrls[1]}
              alt={`Imagen de ${projectData.title}`}
              width={600}
              height={400}
              className="rounded-lg object-cover w-full h-[285px]"
            />
            <Image
              src={projectData.imageUrls[2]}
              alt={`Imagen de ${projectData.title}`}
              width={600}
              height={400}
              className="rounded-lg object-cover w-full h-[285px]"
            />
          </div>

          <div>
            <Image
              src={projectData.imageUrls[3]}
              alt={`Imagen de ${projectData.title}`}
              width={800}
              height={600}
              className="rounded-lg object-cover w-full h-[600px]"
            />
          </div>
        </div>
      </div>

      {selectedProjectId && (
        <PaymentModal
          projectId={selectedProjectId}
          onClose={() => setSelectedProjectId(null)}
        />
      )}
    </section>
  );
}
