"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "~" },
  { href: "/writeups", label: "writeups" },
  { href: "/bug-bounty", label: "bug-bounty" },
  { href: "/methodology", label: "methodology" },
  { href: "/about", label: "about" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-40">
      <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link
          href="/"
          className="text-green font-bold text-sm tracking-wider text-glow"
        >
          0xPSW<span className="cursor-blink">_</span>
        </Link>

        <div className="flex items-center gap-1 text-xs">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`px-3 py-1.5 rounded transition-colors ${
                pathname === item.href
                  ? "text-green bg-green/10"
                  : "text-muted hover:text-green"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
