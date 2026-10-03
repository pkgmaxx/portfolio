import { Link, NavLink } from "react-router";
import type { ReactNode } from "react";
import { profile } from "../data";
import { useTheme } from "../theme";

const navLink = "hover:text-fg";

export default function Layout({ children }: { children: ReactNode }) {
  const { theme, toggle } = useTheme();
  return (
    <>
      <header className="sticky top-0 z-10 border-b border-line bg-bg/85 backdrop-blur">
        <div className="wrap flex h-16 items-center justify-between">
          <Link to="/" className="text-[17px] font-semibold tracking-tight">
            {profile.name.toLowerCase()}<i className="not-italic text-accent">_</i>
          </Link>
          <nav className="flex items-center gap-5 text-sm text-muted">
            <NavLink to="/projects" className={({ isActive }) => `${navLink} ${isActive ? "text-fg" : ""}`}>projects</NavLink>
            <Link to="/#contact" className={navLink}>contact</Link>
            <button onClick={toggle} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
              className="grid cursor-pointer place-items-center rounded-full p-2 hover:text-fg">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                {theme === "dark"
                  ? <><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></>
                  : <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />}
              </svg>
            </button>
          </nav>
        </div>
      </header>
      <main>{children}</main>
      <footer className="border-t border-line text-sm text-muted">
        <div className="wrap flex h-16 items-center justify-between">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <nav className="flex gap-5">
            <a className={navLink} href={`https://github.com/${profile.github}`}>GitHub</a>
            <a className={navLink} href={profile.linkedin}>LinkedIn</a>
          </nav>
        </div>
      </footer>
      <a href={`https://wa.me/${profile.whatsapp}`} aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 grid size-[50px] place-items-center rounded-full bg-accent text-on-accent shadow-lg shadow-black/20">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"><path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 21l2.1-5.4A8.4 8.4 0 1 1 21 11.5z" /></svg>
      </a>
    </>
  );
}
