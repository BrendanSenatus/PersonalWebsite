import Image from "next/image";

const skillGroups = [
  {
    heading: "Cloud Security & SOC",
    items: ["Microsoft Sentinel (SIEM)", "Threat Detection", "Incident Response", "Cloud Security Monitoring (Azure)", "Suricata IDS/IPS", "Log Analysis"],
  },
  {
    heading: "Automation & Infrastructure",
    items: ["Terraform (IaC)", "GitLab CI/CD", "Bash", "PowerShell", "RBAC", "Secrets Management"],
  },
  {
    heading: "Platforms & Tools",
    items: ["Azure", "AWS (exposure)", "Windows", "Linux", "ELK Stack", "VMware Fusion"],
  },
  {
    heading: "Networking & Fundamentals",
    items: ["TCP/IP", "DNS", "IAM", "CIA Triad", "Infrastructure Security"],
  },
];

const certs = [
  { name: "CompTIA Security+", status: "Earned" },
  { name: "Microsoft Azure Fundamentals (AZ-900)", status: "In progress" },
  { name: "AWS Certified Cloud Practitioner (CCP)", status: "In progress" },
  { name: "TestOut Security Pro", status: "Earned" },
  { name: "TestOut Network Pro", status: "Earned" },
  { name: "Microsoft Office Specialist (Word, PowerPoint)", status: "Earned" },
];

export default function About() {
  return (
    <main className="min-h-screen bg-[#0f1117] text-white px-4 sm:px-8 py-10">
      <div className="max-w-3xl mx-auto">
        <div className="text-center">
          <Image
            src="/brendan-tight.jpg"
            alt="Brendan Senatus Headshot"
            width={160}
            height={160}
            className="rounded-full mx-auto mb-6 object-cover h-40 w-40"
          />
          <h1 className="text-4xl font-bold mb-6">About Me</h1>
        </div>

        <p className="mb-6 text-gray-300">
          I&apos;m a rising senior Cybersecurity major at Kennesaw State University with a Computer Science
          minor, graduating in May 2027. My focus is cloud security operations — helping people and
          organizations detect, analyze, and respond to threats across platforms like Microsoft Sentinel,
          Suricata, and the ELK Stack. I most recently interned at Centene as a Cloud &amp; AI Security
          Incident Response Analyst.
        </p>

        <Image
          src="/KSBCP.jpg"
          alt="KSBCP Event"
          width={700}
          height={350}
          className="rounded-xl mx-auto mb-6 object-cover w-full"
        />

        <p className="mb-6 text-gray-300">
          Outside of class, I build virtualized security labs and serve as Event Coordinator for the Kennesaw
          Society of Black Computing Professionals (KSBCP). I helped set up a partnership with Fiserv that brought
          mentorship, technical workshops, and resume reviews to students in our chapter.
        </p>

        <p className="mb-10 text-gray-300">
          I&apos;m also in the Symphona Leadership Program, and I competed in CyberPatriot in high school, where my
          team reached the Platinum tier. Outside of tech, I&apos;m into basketball, music, and travel.
        </p>

        <figure className="mb-10">
          <img
            src="/brendan-summit.jpg"
            alt="Brendan Senatus at Centene's 2026 Intern Summit holding a skateboard his team built"
            className="rounded-xl mx-auto w-full max-w-[300px] border border-white/10"
          />
          <figcaption className="text-center text-sm text-gray-400 mt-3">
            At Centene&apos;s 2026 Intern Summit, holding a skateboard my intern team designed and built.
          </figcaption>
        </figure>

        {/* EDUCATION */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Education</h2>
          <div className="bg-[#161a22] border border-white/10 rounded-2xl p-6">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-lg font-bold">Kennesaw State University</h3>
              <span className="text-sm text-gray-400 font-mono">May 2027</span>
            </div>
            <p className="text-blue-300">B.S. Cybersecurity, Minor in Computer Science</p>
            <p className="text-sm text-gray-400 mt-2">Honors: President&apos;s List — Fall 2023</p>
          </div>
        </section>

        {/* SKILLS */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Skills</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {skillGroups.map((group) => (
              <div key={group.heading} className="bg-[#161a22] border border-white/10 rounded-2xl p-5">
                <h3 className="text-sm font-semibold text-blue-300 uppercase tracking-wide mb-3">
                  {group.heading}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="bg-[#1c2330] border border-white/10 text-gray-200 text-xs px-3 py-1 rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CERTIFICATIONS */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Certifications</h2>
          <div className="flex justify-center gap-6 mb-6">
            <Image
              src="/security-plus.png"
              alt="CompTIA Security+"
              width={90}
              height={90}
              className="rounded-full bg-white p-2"
            />
            <Image
              src="/microsoft-azure-fundamentals.png"
              alt="Microsoft Azure Fundamentals"
              width={90}
              height={90}
              className="rounded-full bg-white p-2"
            />
          </div>
          <ul className="bg-[#161a22] border border-white/10 rounded-2xl divide-y divide-white/10">
            {certs.map((c) => (
              <li key={c.name} className="flex items-center justify-between px-5 py-3">
                <span className="text-gray-200">{c.name}</span>
                <span
                  className={`text-xs font-semibold px-3 py-1 rounded-full ${
                    c.status === "Earned"
                      ? "bg-green-500/15 text-green-300"
                      : "bg-amber-500/15 text-amber-300"
                  }`}
                >
                  {c.status}
                </span>
              </li>
            ))}
          </ul>
        </section>

        <div className="text-center">
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
