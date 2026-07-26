import Link from "next/link";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const router = useRouter();

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Experience", path: "/experience" },
    { label: "Projects", path: "/projects" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  const isActive = (path) =>
    path === "/" ? router.pathname === "/" : router.pathname.startsWith(path);

  return (
    <div className="min-h-screen flex flex-col bg-[#0f1117] text-white font-inter">
      <header className="sticky top-0 z-50 w-full bg-[#0f1117]/90 backdrop-blur border-b border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 py-4 flex flex-wrap items-center justify-between gap-3">
          <Link href="/" className="text-lg font-bold tracking-tight hover:text-gray-300 transition">
            Brendan Senatus
          </Link>
          <nav className="flex flex-wrap gap-x-6 gap-y-1 text-base font-medium">
            {navLinks.map(({ label, path }) => (
              <Link
                key={path}
                href={path}
                className={`transition duration-200 ${
                  isActive(path)
                    ? "text-white underline underline-offset-8 decoration-blue-400"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main className="flex-1 w-full">{children}</main>

      <footer className="border-t border-white/10 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Brendan Senatus · Cybersecurity
      </footer>
    </div>
  );
}
