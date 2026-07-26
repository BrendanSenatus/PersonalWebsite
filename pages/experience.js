export default function Experience() {
  const roles = [
    {
      title: "Cloud & AI Security Incident Response Analyst Intern",
      org: "Centene",
      date: "May 2026 – August 2026",
      bullets: [
        "Designed and built an automated incident-response test environment on Azure using Terraform and GitLab CI/CD, cutting setup time from ~3 hours to ~10 minutes (over 90%) with automated attack simulation and containment actions.",
        "Shadowed cloud security incident response analysts on live AWS and Azure tickets as part of an advanced, specialized team, gaining exposure to real-world detection and response workflows.",
        "Shadowed cloud security engineers on infrastructure changes and gained exposure to AI security work.",
        "Applied cloud security best practices including RBAC, secrets management, and least-privilege identity hygiene.",
      ],
    },
    {
      title: "First-Year Researcher",
      org: "Kennesaw State University",
      date: "September 2023 – May 2024",
      bullets: [
        "Researched adversarial attacks on AI models, focusing on healthcare applications.",
        "Examined real case studies of cyberattacks on U.S. healthcare systems, identifying common weaknesses and points of attack to guide preventative security steps.",
      ],
    },
    {
      title: "Event Coordinator",
      org: "Kennesaw Society of Black Computing Professionals (KSBCP)",
      date: "June 2024 – Present",
      bullets: [
        "Coordinated with the executive leadership team to secure appropriate spaces and accommodate specific event requirements.",
        "Facilitated a partnership between Fiserv and KSBCP, expanding mentorship programs for underclassmen and adding technical workshops and resume review services.",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-[#0f1117] text-white px-4 sm:px-8 py-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-2">Experience</h1>
        <p className="text-center text-gray-400 mb-12">
          Internship, research, and leadership in cybersecurity.
        </p>

        <div className="relative border-l border-white/15 ml-3 sm:ml-4">
          {roles.map((role, i) => (
            <div key={i} className="relative pl-8 sm:pl-10 pb-12 last:pb-0">
              <span className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-blue-500 ring-4 ring-[#0f1117]" />
              <div className="bg-[#161a22] border border-white/10 rounded-2xl p-6 shadow-lg">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-1">
                  <h2 className="text-xl font-bold">{role.title}</h2>
                  <span className="text-sm text-gray-400 font-mono whitespace-nowrap">{role.date}</span>
                </div>
                <p className="text-blue-300 font-semibold mb-4">{role.org}</p>
                <ul className="space-y-2">
                  {role.bullets.map((b, j) => (
                    <li key={j} className="flex gap-3 text-gray-300 text-sm sm:text-base">
                      <span className="mt-1 text-blue-400 shrink-0">▸</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-4">
          <a
            href="/resume.pdf"
            download
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition"
          >
            Download My Resume
          </a>
        </div>
      </div>
    </main>
  );
}
