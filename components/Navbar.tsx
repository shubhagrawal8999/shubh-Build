import Link from "next/link";

const links = [
  { href: "/projects", label: "Projects" },
  { href: "/writing", label: "Writing" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  return (
    <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
      <Link className="text-lg font-black tracking-tight" href="/">
        shubh.build
      </Link>
      <nav className="flex gap-4 text-sm font-medium text-slate-600">
        {links.map((link) => (
          <Link className="transition hover:text-ink" href={link.href} key={link.href}>
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
