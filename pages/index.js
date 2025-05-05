import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen text-gray-100 bg-[#0f1117] flex flex-col items-center justify-center p-8">
      <section className="text-center max-w-2xl">
      <Image
  src="/brendan-tight.jpg"
  alt="Brendan Senatus"
  width={180}
  height={180}
  className="rounded-full mx-auto mb-4 object-cover"
/>
        
        <h1 className="text-4xl font-bold mb-2">Welcome to my Portfolio!</h1>
        <p className="text-lg">
        I'm Brendan Senatus, a Cybersecurity major with a strong interest in cloud security, SIEM operations, and threat detection. This portfolio highlights hands-on lab projects where I apply tools like Azure Sentinel, the ELK Stack, and Suricata IDS to develop practical, real-world security skills.
        </p>
      </section>

      {/* ICON BUTTONS */}
      <div className="mt-6 flex gap-6 items-center justify-center">
        <a
          href="https://github.com/BrendanSenatus"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/github.svg" alt="GitHub" className="h-16 w-16 transition-transform duration-200 hover:scale-110"
 />
        </a>
<div className="flex space-x-12 text-white text-xl mt-10">
</div>

        <a
          href="https://www.linkedin.com/in/brendansenatus"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/linkedin-icon.svg" alt="LinkedIn" className="h-20 w-20 transition-transform duration-200 hover:scale-110"
 />
        </a>
      </div>
    </main>
  );
}
