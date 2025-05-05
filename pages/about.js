import Image from "next/image";

export default function About() {
  return (
    <main className="min-h-screen bg-[#0f1117] text-white p-8">
      <div className="max-w-3xl mx-auto text-center">
        <Image
          src="/brendan-tight.jpg"
          alt="Brendan Senatus Headshot"
          width={180}
          height={180}
          className="rounded-full mx-auto mb-6"
        />

        <h1 className="text-4xl font-bold mb-6">About Me</h1>

        <p className="mb-6 text-gray-300">
          I'm a second-year Cybersecurity major at Kennesaw State University with a Computer Science minor.
          My goal is to help people and organizations securely manage their data in the cloud using platforms
          like Microsoft Sentinel, Suricata, and the ELK Stack.
        </p>

        <Image
          src="/KSBCP.jpg"
          alt="KSBCP Event"
          width={600}
          height={300}
          className="rounded-xl mx-auto mb-6 object-cover"
        />

        <p className="mb-6 text-gray-300">
          Outside the classroom, I build virtual labs and support my peers as the Event Coordinator for the Kennesaw
          Society of Black Computing Professionals (KSBCP). Through this role, I help foster mentorship, collaboration,
          and career growth for underrepresented students in tech.
        </p>

        <p className="mb-10 text-gray-300">
          I'm also a Symphona Leadership Program participant and a former CyberPatriot competitor, and I’m currently preparing
          for certifications including CompTIA Security+, Network+, and Microsoft Azure Fundamentals. In my downtime,
          I enjoy basketball, music, and traveling.
        </p>

        <div className="flex justify-center gap-6 mb-10">
          <Image
            src="/security-plus.png"
            alt="Security+"
            width={100}
            height={100}
            className="rounded-full bg-white p-2"
          />
          <Image
            src="/network-plus.png"
            alt="Network+"
            width={100}
            height={100}
            className="rounded-full bg-white p-2"
          />
          <Image
            src="/microsoft-azure-fundamentals.png"
            alt="Azure Fundamentals"
            width={100}
            height={100}
            className="rounded-full bg-white p-2"
          />
        </div>

        <a
          href="/resume.pdf"
          download
          className="inline-block bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
        >
          Download My Resume
        </a>
      </div>
    </main>
  );
}
