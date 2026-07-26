import Link from "next/link";
import { useState, useEffect, useCallback } from "react";

const slides = [
  { src: "/storm/slide-1.png", caption: "STORM — Automated Incident Response Test Environment" },
  { src: "/storm/slide-2.png", caption: "The Problem — building an IR environment by hand is slow and inconsistent" },
  { src: "/storm/slide-3.png", caption: "The Solution — one automated system for the full deploy-to-destroy lifecycle" },
  { src: "/storm/slide-4.png", caption: "How It Works — everything runs through a GitLab CI/CD pipeline" },
  { src: "/storm/slide-5.png", caption: "In the Template — two variables drive two automated response actions" },
  { src: "/storm/slide-6.png", caption: "Containment in Action — network isolation shuts down external recon" },
  { src: "/storm/slide-7.png", caption: "Containment in Action — a compromised identity is disabled automatically" },
  { src: "/storm/slide-8.png", caption: "Value — define the environment in code, and response becomes repeatable" },
];

const tech = ["Terraform", "Azure", "GitLab CI/CD", "IaC", "Incident Response", "RBAC"];

const highlights = [
  "Built an automated incident-response test environment on Azure using Terraform and GitLab CI/CD, cutting setup time from ~3 hours to ~10 minutes (over 90%) through a full deploy-to-destroy pipeline.",
  "Developed automated containment actions — network isolation and identity disablement — that respond to a simulated compromise, demonstrated with before/after evidence from external reconnaissance scans.",
  "Presented the project to SOC analysts, walking them through the automated setup and the engineering decisions and problem-solving behind it.",
  "Applied cloud security best practices including RBAC authorization, secrets management via CI/CD variables, and least-privilege identity cleanup.",
];

export default function Storm() {
  const [index, setIndex] = useState(0);

  const prev = useCallback(() => setIndex((i) => (i - 1 + slides.length) % slides.length), []);
  const next = useCallback(() => setIndex((i) => (i + 1) % slides.length), []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next]);

  return (
    <main className="min-h-screen bg-[#0f1117] text-white px-4 sm:px-8 py-10">
      <div className="max-w-4xl mx-auto">
        <Link href="/projects" className="text-sm text-blue-400 hover:text-blue-300 transition">
          ← Back to Projects
        </Link>

        <header className="mt-4 mb-6">
          <h1 className="text-3xl sm:text-4xl font-bold">STORM — Azure IaC Incident Response Lab</h1>
          <p className="mt-3 text-gray-300 max-w-2xl">
            An automated incident-response test environment on Azure. Deploy, simulate a compromise,
            contain it, and tear it all down — all defined in code and driven by a CI/CD pipeline.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {tech.map((t) => (
              <span
                key={t}
                className="bg-[#1c2330] border border-white/10 text-blue-200 text-xs px-3 py-1 rounded-full font-mono"
              >
                {t}
              </span>
            ))}
          </div>
        </header>

        {/* SLIDE VIEWER */}
        <div className="rounded-2xl border border-white/10 bg-[#12161f] overflow-hidden shadow-xl">
          <div className="relative bg-white">
            <img
              src={slides[index].src}
              alt={slides[index].caption}
              className="w-full aspect-video object-contain"
            />
            <button
              onClick={prev}
              aria-label="Previous slide"
              className="absolute left-2 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-black/60 text-white text-xl flex items-center justify-center hover:bg-black/80 transition"
            >
              ‹
            </button>
            <button
              onClick={next}
              aria-label="Next slide"
              className="absolute right-2 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-black/60 text-white text-xl flex items-center justify-center hover:bg-black/80 transition"
            >
              ›
            </button>
            <span className="absolute bottom-2 right-3 bg-black/60 text-white text-xs px-2 py-1 rounded-full">
              {index + 1} / {slides.length}
            </span>
          </div>
          <p className="text-center text-sm text-gray-300 px-4 py-3 border-t border-white/10">
            {slides[index].caption}
          </p>
        </div>

        {/* THUMBNAILS */}
        <div className="mt-4 grid grid-cols-4 sm:grid-cols-8 gap-2">
          {slides.map((s, i) => (
            <button
              key={s.src}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`rounded-md overflow-hidden border transition ${
                i === index ? "border-blue-400 ring-2 ring-blue-400/40" : "border-white/10 hover:border-white/30"
              }`}
            >
              <img src={s.src} alt="" className="w-full aspect-video object-contain bg-white" />
            </button>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-4">
          <a
            href="/storm/STORM_Demo_Team.pptx"
            download
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition"
          >
            Download the deck (.pptx)
          </a>
          <span className="text-sm text-gray-500">
            Source repository is private (internal internship project).
          </span>
        </div>

        {/* HIGHLIGHTS */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold mb-4">Highlights</h2>
          <ul className="space-y-3">
            {highlights.map((h, i) => (
              <li key={i} className="flex gap-3 text-gray-300">
                <span className="mt-1 text-blue-400">▸</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
