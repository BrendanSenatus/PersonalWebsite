import Link from "next/link";

export default function Projects() {
  const projectList = [
    {
      title: "STORM — Azure IaC Incident Response Lab",
      tech: ["Terraform", "Azure", "GitLab CI/CD", "IaC", "Incident Response"],
      description:
        "Automated incident-response test environment on Azure. A full deploy-to-destroy pipeline cuts setup from ~3 hours to ~10 minutes, with automated containment actions (network isolation + identity disablement) proven with before/after recon scans.",
      image: "/storm/slide-1.png",
      internal: "/projects/storm",
      cta: "View slide deck →",
      featured: true,
    },
    {
      title: "Cloud Security Home Lab",
      tech: ["Ubuntu Server", "Kali Linux", "Suricata IDS", "ELK Stack", "Filebeat", "VMware Fusion"],
      description:
        "Virtualized security lab simulating real-world cloud infrastructure. Configured bridged/NAT networking, deployed the Elastic Stack for log aggregation with custom Kibana dashboards (failed SSH logins, system events), and implemented Suricata as an IDS for real-time traffic analysis.",
      image: "/cloud-lab.png",
      internal: "/projects/home-lab",
      cta: "View details →",
    },
    {
      title: "SOC with Azure Sentinel",
      tech: ["Microsoft Azure", "Microsoft Sentinel", "Log Analytics", "SIEM", "Windows Event Logs"],
      description:
        "Built a Security Operations Center by deploying a custom SIEM on Azure for real-time monitoring and alerting. Integrated Azure VMs with Microsoft Sentinel for log collection, focused on RDP-related events, and developed custom detection and alerting rules for critical incidents.",
      github: "https://github.com/BrendanSenatus/Azure-SOC",
      image: "/sentinel-placeholder.png",
    },
  ];

  return (
    <main className="min-h-screen bg-[#0f1117] text-white px-4 sm:px-8 py-10">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-2">Projects</h2>
        <p className="text-center text-gray-400 mb-12">
          Hands-on cloud security, detection, and automation work.
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          {projectList.map((project, index) => {
            const CardImage = (
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-52 object-contain bg-white rounded-xl mb-4 shadow-sm group-hover:opacity-90 transition"
                />
                {project.featured && (
                  <span className="absolute top-3 left-3 bg-blue-600 text-white text-[11px] font-semibold px-2 py-1 rounded-full">
                    Featured
                  </span>
                )}
              </div>
            );

            return (
              <div
                key={index}
                className={`group bg-[#161a22] border border-white/10 p-6 rounded-2xl shadow-lg hover:border-white/25 transition ${
                  project.featured ? "md:col-span-2" : ""
                }`}
              >
                {project.internal ? (
                  <Link href={project.internal}>{CardImage}</Link>
                ) : (
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    {CardImage}
                  </a>
                )}

                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="bg-[#1c2330] border border-white/10 text-blue-200 text-xs px-3 py-1 rounded-full font-mono"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {project.internal ? (
                  <Link
                    href={project.internal}
                    className="text-blue-400 hover:text-blue-300 font-semibold transition"
                  >
                    {project.cta || "View project →"}
                  </Link>
                ) : (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 font-semibold transition"
                  >
                    View on GitHub →
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
