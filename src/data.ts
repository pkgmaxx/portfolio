// All content lives here. Replace anything marked TODO.
export type Project = {
  slug: string; name: string; tag: "WEB" | "MOBILE" | "CONTRACT"; year: string;
  desc: string; summary: string; highlights: string[]; stack: string[];
  hue: number; // cover colour until you add real screenshots
  cover?: string; // optional: "/covers/jeje.png" (put the file in /public/covers)
  links?: { label: string; href: string }[];
};

export const profile = {
  name: "Dennis",
  role: "Backend engineer",
  location: "Lagos, Nigeria",
  email: "you@example.com", // TODO
  github: "codetitan2206",
  linkedin: "https://linkedin.com/in/your-handle", // TODO
  whatsapp: "234XXXXXXXXXX", // TODO: country code, no +
  resume: "/resume.pdf", // TODO: put your PDF in /public
  available: true,
};

export const projects: Project[] = [
  { slug: "jeje-capital", name: "JEJE Capital", tag: "WEB", year: "Oct 2025 – May 2026", hue: 150,
    desc: "Live crypto trading platform with automated execution across several exchanges and an MT5 bridge.",
    summary: "JEJE Capital is a trading SaaS where users connect their exchange accounts and let automated strategies trade for them. I built it as several cooperating services: a TypeScript API, Go services that execute and monitor trades, and a Python scanner that finds signals. It started as one Python process per user and was rebuilt in Go to handle thousands of users.",
    highlights: [
      "Moved from a Python process per user to Go goroutines, built to handle 10,000+ users",
      "Supports Bybit, OKX, Binance and Coinbase International",
      "MT5 bridge that runs real trades on user MetaTrader accounts, with VPS capacity managed from the database",
      "Position monitor that locks in profit as trades move, with admin controls to close trades in bulk",
      "Subscriptions, crypto and card payments, and an affiliate program with automatic commissions",
      "Self-hosted deployment behind Nginx and Cloudflare, with PM2 process management",
      "Admin tools for bot control, signals, blog and mentorship content",
    ],
    stack: ["Go", "TypeScript", "Express", "Python", "PostgreSQL"],
    links: [{ label: "Visit site", href: "https://jejecapital.com" }] },
  { slug: "market-narrative-method", name: "Market Narrative Method", tag: "WEB", year: "Jun – Aug 2026", hue: 35,
    desc: "Trading education platform with courses, payments, an affiliate program and student tools.",
    summary: "The platform behind my Market Narrative Method trading education brand. Students get lessons and tools, I get payments, analytics and an affiliate program, all in one Laravel application built over ten phases.",
    highlights: [
      "Student platform with courses and lessons",
      "Multiple payment gateways",
      "Affiliate program with referral tracking",
      "Trading Journal and Session Clock tools for students",
      "Analytics for sales and student activity",
      "Image storage on Cloudinary and transactional email through Resend",
    ],
    stack: ["Laravel 12", "PHP", "Tailwind", "Alpine.js", "Vite"] },
  { slug: "exoradigital", name: "ExoraDigital", tag: "WEB", year: "Dec 2024", hue: 265,
    desc: "Digital agency work: backends, admin panels and integrations for client platforms.",
    summary: "ExoraDigital is a digital agency where I build client platforms end to end, from the first quote to production, covering backends, admin panels and integrations.",
    highlights: [
      "Client platforms in PHP, Laravel and TypeScript",
      "Admin panels, payment flows and email delivery",
      "Mobile app backends and food delivery systems",
      "Hardening and maintenance of live client systems",
    ],
    stack: ["PHP", "Laravel", "TypeScript", "Node.js"],
    links: [{ label: "Visit site", href: "https://exoradigital.agency" }] },
  { slug: "sms-admin", name: "SMS Admin Panel", tag: "CONTRACT", year: "2026", hue: 200, // TODO confirm year
    desc: "Admin panel for sending SMS and tracking delivery across providers.",
    summary: "A client admin panel for sending SMS in bulk and seeing what was delivered. It works with any SMS provider, with SMSRoute as the first integration.",
    highlights: [
      "Provider-agnostic sending, so switching providers needs no rewrite",
      "Delivery tracking per message",
      "SMSRoute integration",
    ],
    stack: ["PHP", "MySQL"] },
];

export const stack: Record<string, string[]> = {
  Core: ["Go", "TypeScript", "Node.js", "Laravel", "PHP"],
  Data: ["PostgreSQL", "MySQL", "Redis"],
  Cloud: ["Linux", "Nginx", "Cloudflare", "PM2", "Coolify"],
  Also: ["Python", "React", "Git"],
};

export const experience = [
  { date: "Dec 2024", role: "Backend & Full-stack Developer", org: "ExoraDigital",
    desc: "Build and run client platforms end to end: APIs, databases, deployments and admin tools." },
  { date: "Ongoing", role: "Instructor", org: "Full-stack PHP",
    desc: "Teach full-stack PHP development with classroom sessions and textbook materials." },
];
