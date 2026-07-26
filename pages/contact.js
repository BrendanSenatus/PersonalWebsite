export default function Contact() {
  const links = [
    { icon: "📧", label: "brendanj0303@gmail.com", href: "mailto:brendanj0303@gmail.com" },
    { icon: "💼", label: "LinkedIn", href: "https://www.linkedin.com/in/brendansenatus" },
    { icon: "🐙", label: "GitHub", href: "https://github.com/BrendanSenatus" },
  ];

  return (
    <main className="min-h-screen bg-[#0f1117] text-white px-4 sm:px-8 py-16">
      <div className="max-w-xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">Contact Me</h1>
        <p className="mb-10 text-lg text-gray-300">
          I&apos;m actively seeking Fall 2026 cybersecurity internships. Feel free to reach out for
          opportunities, questions, or just to connect.
        </p>

        <div className="flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex items-center justify-center gap-3 bg-[#161a22] border border-white/10 hover:border-blue-400/50 hover:bg-[#1c2330] rounded-xl px-6 py-4 text-lg transition"
            >
              <span>{l.icon}</span>
              <span className="text-blue-300">{l.label}</span>
            </a>
          ))}
        </div>

        <a
          href="/resume.pdf"
          download
          className="inline-block mt-10 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition"
        >
          Download My Resume
        </a>
      </div>
    </main>
  );
}
