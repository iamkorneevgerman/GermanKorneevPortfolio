import SkillCard from "../ui/SkillCard";
import { skills } from "../../data/mockData";

export default function Skills() {
  return (
    <section id="skills" className="py-40">
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
        <h2 className="text-6xl font-bold tracking-tighter">
          Expertise <br />
          Stack
        </h2>
        <p className="text-gray-500 font-mono text-sm max-w-xs uppercase tracking-tight">
          Tools and methodologies I use to build world-class applications.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skills.map((skill, idx) => (
          <SkillCard key={idx} skill={skill} index={idx} />
        ))}
      </div>
    </section>
  );
}
