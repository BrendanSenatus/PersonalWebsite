import Link from "next/link";

export default function Projects() {
  const projectList = [
    {
      title: "Cloud Security Home Lab",
      tech: ["Linux", "Suricata IDS", "ELK Stack", "VMware Fusion", "Ubuntu Server", "Filebeat"],
      description:
        "Designed and deployed a custom lab to simulate cloud security operations using multiple open-source tools.",
      github: "https://github.com/BrendanSenatus/Cloud-Security-Home-Lab",
      image: "/cloud-lab.png",
    },
    {
      title: "SOC with Azure Sentinel",
      tech: ["Microsoft Azure VMs", "Microsoft Sentinel", "Azure Log Analytics", "SIEM", "Windows Event Logs"],
      description:
        "Built a simulated Security Operations Center to monitor and analyze real-time cloud security events with Microsoft Sentinel.",
      github: "https://github.com/BrendanSenatus/Azure-SOC",
      image: "/sentinel-placeholder.png",
    },
  ];

  return (
    <main className="min-h-screen bg-[#0f1117] text-white p-8">
      <h2 className="text-4xl font-bold text-center mb-2">Projects</h2>
      <p className="text-center text-gray-400 mb-12">
        Press image to view GitHub repository
      </p>

      <div className="grid gap-10 md:grid-cols-2">
        {projectList.map((project, index) => (
          <div key={index} className="bg-[#1a1a1a] p-6 rounded-2xl shadow-lg">
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-contain bg-white rounded-2xl mb-4 shadow-sm hover:opacity-90 transition"
              />
            </a>

            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-300 mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-2">
              {project.tech.map((item) => (
                <span
                  key={item}
                  className="bg-[#2f2f2f] text-blue-200 text-xs px-3 py-1 rounded-full font-mono"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}


// // pages/projects.js
// import Link from "next/link";
  