import Link from "next/link";
import { useState } from "react";

const tech = ["Ubuntu Server", "Kali Linux", "Suricata IDS", "ELK Stack", "Filebeat", "Kibana", "VMware Fusion"];

const skills = [
  "SIEM deployment",
  "Log ingestion",
  "Intrusion detection",
  "Linux administration",
  "Network monitoring",
  "Threat analysis",
];

const screenshots = [
  {
    src: "/home-lab/elk-monitoring.png",
    title: "ELK real-time monitoring — Suricata IDS alerts",
    caption:
      "Suricata eve.json alerts shipped by Filebeat into Elasticsearch and explored in Kibana Discover (event_type:\"alert\") — each event classified by signature, severity, and category in real time.",
  },
  {
    src: "/home-lab/ssh-login-attempts.png",
    title: "SSH login attempts dashboard",
    caption:
      "Custom Kibana dashboard tracking SSH login attempts over time, brute-force attempts by host, the most-targeted usernames, and the geographic source of failed logins.",
  },
];

function Figure({ src, title, caption }) {
  const [error, setError] = useState(false);
  return (
    <figure className="bg-[#12161f] border border-white/10 rounded-2xl overflow-hidden shadow-lg">
      <div className="px-5 pt-4 pb-2">
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      {error ? (
        <div className="mx-5 mb-4 aspect-video rounded-lg border-2 border-dashed border-white/15 flex flex-col items-center justify-center text-center text-gray-500 px-6">
          <span className="text-sm">Screenshot pending</span>
          <span className="text-xs mt-1 font-mono text-gray-600">{src}</span>
        </div>
      ) : (
        <img
          src={src}
          alt={title}
          onError={() => setError(true)}
          className="w-full bg-white object-contain max-h-[520px] mx-auto"
        />
      )}
      <figcaption className="text-sm text-gray-300 px-5 py-4 border-t border-white/10">
        {caption}
      </figcaption>
    </figure>
  );
}

/* Small labeled node for the architecture diagram */
function Node({ title, sub, accent }) {
  return (
    <div
      className={`flex-1 min-w-[96px] rounded-xl border px-2.5 py-3 text-center ${
        accent
          ? "bg-blue-600/15 border-blue-500/40"
          : "bg-[#1c2330] border-white/10"
      }`}
    >
      <div className="font-semibold text-sm text-white">{title}</div>
      {sub && <div className="text-xs text-gray-400 mt-1">{sub}</div>}
    </div>
  );
}

function Arrow() {
  return <div className="text-blue-400 text-lg px-0.5 shrink-0 self-center rotate-90 sm:rotate-0">→</div>;
}

export default function HomeLab() {
  return (
    <main className="min-h-screen bg-[#0f1117] text-white px-4 sm:px-8 py-10">
      <div className="max-w-4xl mx-auto">
        <Link href="/projects" className="text-sm text-blue-400 hover:text-blue-300 transition">
          ← Back to Projects
        </Link>

        <header className="mt-4 mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold">Cloud Security Home Lab</h1>
          <p className="mt-3 text-gray-300 max-w-2xl">
            A virtualized security lab that simulates cloud infrastructure end-to-end: generate traffic and
            attacks, ship logs with Filebeat, index them in Elasticsearch, and detect threats in Kibana with
            Suricata IDS.
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

        {/* 1. OVERVIEW */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Overview</h2>
          <ul className="space-y-3">
            {[
              "Designed and deployed a virtualized security lab using Ubuntu Server and Kali Linux in VMware Fusion to simulate real-world cloud infrastructure.",
              "Configured bridged and NAT networking to model internal and external environments for traffic flow and attack simulation.",
              "Implemented the Elastic Stack for log aggregation and built custom Kibana dashboards to monitor failed SSH logins and system events.",
              "Deployed Suricata as an intrusion detection system (IDS) for real-time network traffic analysis, forwarding alerts through Filebeat into Elasticsearch for visualization.",
            ].map((b, i) => (
              <li key={i} className="flex gap-3 text-gray-300">
                <span className="mt-1 text-blue-400">▸</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* 2. ARCHITECTURE */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Architecture</h2>
          <div className="bg-[#12161f] border border-white/10 rounded-2xl p-6">
            <div className="flex flex-col sm:flex-row items-stretch gap-2">
              <Node title="Ubuntu Server VM" sub="Target host + auth logs" />
              <Arrow />
              <Node title="Suricata IDS" sub="Network traffic → eve.json" accent />
              <Arrow />
              <Node title="Filebeat" sub="Log shipper" />
              <Arrow />
              <Node title="Elasticsearch" sub="Index & store" />
              <Arrow />
              <Node title="Kibana" sub="Dashboards & alerts" accent />
            </div>
            <p className="text-xs text-gray-500 mt-4">
              A Kali Linux VM generates malicious traffic and SSH brute-force attempts against the Ubuntu host.
              Suricata inspects the traffic, Filebeat forwards both IDS alerts and system logs into Elasticsearch,
              and Kibana visualizes detections in real time.
            </p>
          </div>
        </section>

        {/* 3-5. SCREENSHOTS */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">In Action</h2>
          <div className="space-y-6">
            {screenshots.map((s) => (
              <Figure key={s.src} {...s} />
            ))}
          </div>
        </section>

        {/* 6. KEY SKILLS */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Key Skills Learned</h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((s) => (
              <span
                key={s}
                className="bg-[#161a22] border border-white/10 text-gray-200 px-4 py-2 rounded-lg text-sm"
              >
                {s}
              </span>
            ))}
          </div>
        </section>

        <div className="flex flex-wrap items-center gap-4">
          <a
            href="https://github.com/BrendanSenatus/Cloud-Security-Home-Lab"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition"
          >
            View on GitHub →
          </a>
        </div>
      </div>
    </main>
  );
}
