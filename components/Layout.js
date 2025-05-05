import Link from "next/link";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const router = useRouter();

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Projects", path: "/projects" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#0f1117] text-white font-inter">
      <header className="sticky top-0 z-50 w-full px-10 py-6 bg-[#0f1117] flex justify-end shadow-md">
        <nav className="flex space-x-12 text-3xl font-semibold">
          {navLinks.map(({ label, path }) => (
            <Link
              key={path}
              href={path}
              className={`inline-block text-white transition duration-200 ${
                router.pathname === path
                  ? "underline underline-offset-8"
                  : "no-underline hover:text-gray-300"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>
      </header>

      <main className="flex-1 p-6 max-w-5xl mx-auto w-full">{children}</main>
    </div>
  );
}

