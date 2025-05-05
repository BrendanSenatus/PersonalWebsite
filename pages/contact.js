import Link from "next/link";

export default function Contact() {
  return (
    <main className="min-h-screen bg-[#0f1117] text-white p-10 max-w-2xl mx-auto">
      <h1 className="text-5xl font-bold mb-10 text-center">Contact Me</h1>

      <p className="mb-8 text-2xl text-center text-gray-300">
        Feel free to reach out for opportunities, questions, or just to connect.
      </p>

      <div className="flex flex-col gap-6 items-center">
        <a
          href="mailto:brendansenatus@gmail.com"
          className="text-blue-400 underline text-2xl"
        >
          📧 brendansenatus@gmail.com
        </a>

        <a
          href="https://www.linkedin.com/in/brendansenatus"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 underline text-2xl"
        >
          💼 LinkedIn Profile
        </a>
      </div>
    </main>
  );
}
