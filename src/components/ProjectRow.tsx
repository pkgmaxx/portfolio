import { Link } from "react-router";
import type { Project } from "../data";

export default function ProjectRow({ p }: { p: Project }) {
  return (
    <Link to={`/projects/${p.slug}`} className="group block border-b border-line py-5 last:border-b-0">
      <div className="mb-1 flex items-baseline justify-between gap-4 max-sm:flex-col max-sm:gap-0.5">
        <h3 className="text-[17px] font-semibold tracking-tight transition-colors group-hover:text-accent">{p.name}</h3>
        <span className="whitespace-nowrap font-mono text-xs text-muted">{p.year}</span>
      </div>
      <p className="max-w-[520px] text-[15px] text-muted">{p.desc}</p>
      <p className="mt-2 font-mono text-xs text-muted">{p.tag.toLowerCase()} · {p.stack.join(", ")}</p>
    </Link>
  );
}
