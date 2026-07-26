import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-[80vh] text-gray-100 bg-[#0f1117] flex flex-col items-center justify-center px-4 sm:px-8 py-16">
      <section className="text-center max-w-2xl">
        <Image
          src="/brendan-tight.jpg"
          alt="Brendan Senatus"
          width={170}
          height={170}
          className="rounded-full mx-auto mb-6 object-cover ring-2 ring-white/10 h-[170px] w-[170px]"
        />

        <h1 className="text-4xl sm:text-5xl font-bold mb-3">Brendan Senatus</h1>
        <p className="text-blue-300 font-semibold mb-5">
          Cloud Security · SIEM Operations · Threat Detection
        </p>
        <p className="text-lg text-gray-300">
          I&apos;m a rising senior Cybersecurity major and a recent Cloud &amp; AI Security Incident
          Response Analyst Intern at Centene. I build hands-on labs and automation with tools like
          Microsoft Sentinel, Terraform, Suricata, and the ELK Stack to detect and respond to real-world
          threats.
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <Link
            href="/projects"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition"
          >
            View Projects
          </Link>
          <Link
            href="/experience"
            className="border border-white/20 hover:border-white/50 text-white px-6 py-3 rounded-lg font-semibold transition"
          >
            Experience
          </Link>
        </div>
      </section>

      {/* SOCIAL ICONS */}
      <div className="mt-12 flex gap-8 items-center justify-center">
        <a href="https://github.com/BrendanSenatus" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <img
            src="/github.svg"
            alt="GitHub"
            className="h-11 w-11 opacity-80 hover:opacity-100 transition-transform duration-200 hover:scale-110"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/brendansenatus"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <img
            src="/linkedin-icon.svg"
            alt="LinkedIn"
            className="h-14 w-14 opacity-80 hover:opacity-100 transition-transform duration-200 hover:scale-110"
          />
        </a>
      </div>
    </main>
  );
}
