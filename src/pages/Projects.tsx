import { Link } from "react-router";
import ProjectRow from "../components/ProjectRow";
import { projects } from "../data";

export default function Projects() {
  return (
    <div className="wrap pb-[72px] pt-14">
      <Link to="/" className="text-sm text-muted hover:text-fg">← Home</Link>
      <h1 className="mb-3.5 mt-8 text-4xl font-bold tracking-[-0.035em]">Projects</h1>
      <p className="mb-9 text-muted">Client work, side products and contracts I've built and shipped.</p>
      {projects.map((p) => <ProjectRow key={p.slug} p={p} />)}
    </div>
  );
}
