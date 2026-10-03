import type { CSSProperties } from "react";
import { Link, Navigate, useParams } from "react-router";
import { projects } from "../data";

export default function ProjectDetail() {
  const { slug } = useParams();
  const i = projects.findIndex((p) => p.slug === slug);
  if (i < 0) return <Navigate to="/projects" replace />;
  const p = projects[i];
  const next = projects[(i + 1) % projects.length];
  return (
    <article className="wrap pb-[72px] pt-14">
      <Link to="/projects" className="text-sm text-muted hover:text-fg">← All projects</Link>
      <p className="mt-9 flex items-center gap-3 font-mono text-xs text-muted">
        <span className="rounded-md bg-accent/15 px-2 py-1 text-accent">{p.tag}</span>{p.year}
      </p>
      <h1 className="mb-3.5 mt-3 text-4xl font-bold tracking-[-0.035em]">{p.name}</h1>
      <div className="cover my-7 grid place-items-center overflow-hidden rounded-2xl border border-line" style={{ "--hue": p.hue } as CSSProperties}>
        {p.cover
          ? <img src={p.cover} alt={`${p.name} screenshot`} className="size-full object-cover" />
          : <span className="text-4xl font-bold tracking-tight text-white/85">{p.name}</span>}
      </div>
      <p className="text-lg leading-[1.75] text-muted">{p.summary}</p>
      {p.links && (
        <div className="mt-7 flex flex-wrap gap-3">
          {p.links.map((l, n) => (
            <a key={l.href} className={`btn${n === 0 ? " btn-solid" : ""}`} href={l.href} target="_blank" rel="noreferrer">{l.label} ↗</a>
          ))}
        </div>
      )}
      <section className="section mt-11">
        <h2 className="eyebrow">stack</h2>
        <div>{p.stack.map((s) => <span className="chip" key={s}>{s}</span>)}</div>
      </section>
      <section className="section">
        <h2 className="eyebrow">highlights</h2>
        <ul className="grid gap-3.5">
          {p.highlights.map((h) => (
            <li key={h} className="relative pl-5.5 leading-relaxed text-muted before:absolute before:left-0 before:top-[.6em] before:size-[7px] before:rounded-full before:bg-accent before:content-['']">{h}</li>
          ))}
        </ul>
      </section>
      <nav className="mt-14 flex justify-between border-t border-line pt-7 text-sm text-muted">
        <Link className="hover:text-fg" to="/projects">All projects</Link>
        <Link className="hover:text-fg" to={`/projects/${next.slug}`}>Next: {next.name} →</Link>
      </nav>
    </article>
  );
}
