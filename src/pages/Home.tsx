import { useState, type FormEvent } from "react";
import { Link } from "react-router";
import Splash from "../components/Splash";
import ProjectRow from "../components/ProjectRow";
import Contributions from "../components/Contributions";
import { experience, profile, projects, stack } from "../data";

function QuickMessage() {
  const [msg, setMsg] = useState("");
  const send = (e: FormEvent) => {
    e.preventDefault();
    location.href = `mailto:${profile.email}?subject=Hello&body=${encodeURIComponent(msg)}`;
  };
  return (
    <details>
      <summary className="cursor-pointer text-sm text-muted">Write a quick message</summary>
      <form onSubmit={send} className="mt-4 grid justify-items-start gap-3">
        <textarea value={msg} onChange={(e) => setMsg(e.target.value)} rows={4} required placeholder="What are you building?"
          className="w-full resize-y rounded-[10px] border border-line bg-chip p-3 text-[15px] text-fg" />
        <button className="btn btn-solid" type="submit">Send by email</button>
      </form>
    </details>
  );
}

export default function Home() {
  return (
    <>
      <Splash />
      <div className="wrap">
        <section className="pb-[72px] pt-[104px]">
          {profile.available && (
            <p className="mb-7 flex items-center gap-2 font-mono text-xs text-muted">
              <i className="size-[7px] rounded-full bg-accent" /> Available for work · {profile.location}
            </p>
          )}
          <h1 className="text-6xl font-bold leading-none tracking-[-0.045em] max-sm:text-5xl">{profile.name}</h1>
          <p className="mb-8 mt-6 max-w-[500px] text-lg leading-relaxed text-muted">
            <b>{profile.role}</b> building fast, reliable systems in <b>Go</b> and the <b>cloud</b>,
            with <b>TypeScript</b> and <b>Laravel</b> when the product calls for them.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link className="btn btn-solid" to="/projects">View work</Link>
            <a className="btn" href={profile.resume}>Resume</a>
          </div>
        </section>

        <section className="section">
          <h2 className="eyebrow">about</h2>
          <p className="text-lg leading-[1.75] text-muted">
            I'm a self-taught backend and cloud developer in {profile.location}, building high-throughput
            services, APIs and the infrastructure they run on. I care about systems that hold up in
            production: fast, reliable, and easy to maintain long after launch.{" "}
            <b>Open to backend roles, contract work, and remote opportunities.</b>
          </p>
        </section>

        <section className="section">
          <div className="flex items-baseline justify-between">
            <h2 className="eyebrow">selected work</h2>
            <Link className="text-[13px] text-muted hover:text-fg" to="/projects">all projects</Link>
          </div>
          {projects.slice(0, 3).map((p) => <ProjectRow key={p.slug} p={p} />)}
        </section>

        <section className="section">
          <h2 className="eyebrow">stack</h2>
          {Object.entries(stack).map(([group, items]) => (
            <div key={group} className="grid grid-cols-[100px_1fr] items-center py-1.5 max-sm:grid-cols-1">
              <span className="text-xs text-muted">{group}</span>
              <div>{items.map((s) => <span className="chip" key={s}>{s}</span>)}</div>
            </div>
          ))}
        </section>

        <section className="section">
          <h2 className="eyebrow">experience</h2>
          {experience.map((e) => (
            <div key={e.role} className="grid grid-cols-[124px_1fr] py-3.5 max-sm:grid-cols-1">
              <span className="text-xs text-muted">{e.date}</span>
              <div>
                <h3 className="font-semibold">{e.role}</h3>
                <p className="mb-1.5 text-sm">{e.org}</p>
                <p className="text-[15px] text-muted">{e.desc}</p>
              </div>
            </div>
          ))}
        </section>

        <Contributions />

        <section className="section" id="contact">
          <h2 className="eyebrow">contact</h2>
          <p className="mb-3.5 text-[30px] font-semibold leading-tight tracking-[-0.025em] max-sm:text-[25px]">
            Have something to build? <em className="font-normal text-muted">Let's talk.</em>
          </p>
          <p className="text-muted">Open to full-time roles, freelance contracts, and interesting projects. Email is the fastest way to reach me.</p>
          <p className="my-6 flex gap-5 text-[15px]">
            {[["email", `mailto:${profile.email}`], ["github", `https://github.com/${profile.github}`], ["linkedin", profile.linkedin]].map(([label, href]) => (
              <a key={label} href={href} className="border-b border-accent pb-px">{label}</a>
            ))}
          </p>
          <QuickMessage />
        </section>
      </div>
    </>
  );
}
