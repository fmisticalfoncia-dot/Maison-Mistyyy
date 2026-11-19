"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "/#campaign", label: "Campaign" },
  { href: "/#lookbook", label: "Lookbook" },
  { href: "/#atelier", label: "Atelier" },
  { href: "/#appointment", label: "Private Client" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
        scrolled || open ? "bg-background/80 backdrop-blur-md" : "bg-transparent"
      )}
    >
      <div className="flex items-center justify-between px-6 py-5 md:px-10">
        <Link
          href="/"
          className="text-[11px] font-semibold uppercase tracking-[0.45em] text-foreground"
        >
          Maison Mistyy
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[10px] uppercase tracking-[0.32em] text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="md:hidden text-foreground"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <nav className="flex h-[100dvh] flex-col gap-8 bg-background px-8 pt-8 md:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-serif text-4xl font-light tracking-[0.08em] text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
