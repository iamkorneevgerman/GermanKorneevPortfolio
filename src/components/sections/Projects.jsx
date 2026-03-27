import ProjectCard from "../ui/ProjectCard";
import { projects } from "../../data/mockData";

export default function Projects() {
  return (
    <section id="projects" className="py-40">
      <div className="mb-32">
        <h2 className="text-6xl font-bold tracking-tighter mb-4">
          Selected Work
        </h2>
        <div className="h-px w-full bg-white/10" />
      </div>

      <div>
        {projects.map((project, idx) => (
          <ProjectCard key={project.id} project={project} index={idx} />
        ))}
      </div>
    </section>
  );
}
