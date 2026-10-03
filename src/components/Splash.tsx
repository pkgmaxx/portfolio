import { useEffect, useState } from "react";
import { profile } from "../data";

// Plays on every full page load (not when you navigate back to Home inside the app).
let played = false;

export default function Splash() {
  const [show, setShow] = useState(() => !played);
  const [out, setOut] = useState(false);
  useEffect(() => {
    if (!show) return;
    const a = setTimeout(() => setOut(true), 1600);
    const b = setTimeout(() => { played = true; setShow(false); }, 2200);
    return () => { clearTimeout(a); clearTimeout(b); };
  }, [show]);
  if (!show) return null;
  return (
    <div className={`splash${out ? " out" : ""}`} aria-hidden="true">
      <div className="splash-inner">
        <span className="splash-word">{profile.name.toLowerCase()}<i>_</i></span>
        <span className="splash-line" />
      </div>
    </div>
  );
}
