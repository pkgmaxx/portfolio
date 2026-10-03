import { useEffect, useState } from "react";
import { profile } from "../data";

type Day = { date: string; count: number; level: number };
type Payload = { total: Record<string, number>; contributions: Day[] };
const levels = ["bg-h0", "bg-h1", "bg-h2", "bg-h3", "bg-h4"];

export default function Contributions() {
  const [data, setData] = useState<Payload | null>(null);
  useEffect(() => {
    fetch(`https://github-contributions-api.jogruber.de/v4/${profile.github}?y=last`)
      .then((r) => (r.ok ? (r.json() as Promise<Payload>) : Promise.reject()))
      .then(setData)
      .catch(() => setData(null)); // hide the section if the API is unavailable
  }, []);
  if (!data) return null;
  const total = Object.values(data.total)[0];
  return (
    <section className="section">
      <div className="flex items-baseline justify-between">
        <h2 className="eyebrow">contributions</h2>
        <a className="text-[13px] text-muted hover:text-fg" href={`https://github.com/${profile.github}`}>github</a>
      </div>
      <div className="grid auto-cols-[10px] grid-flow-col grid-rows-[repeat(7,10px)] gap-[3px] overflow-x-auto pb-1.5"
        role="img" aria-label={`${total} contributions in the last year`}>
        {data.contributions.map((d) => (
          <span key={d.date} title={`${d.count} on ${d.date}`} className={`rounded-full ${levels[d.level] ?? levels[0]}`} />
        ))}
      </div>
      <p className="mt-2 text-xs text-muted">{total.toLocaleString()} contributions in the last year</p>
    </section>
  );
}
