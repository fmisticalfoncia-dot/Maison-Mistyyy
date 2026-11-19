import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Privacy",
};

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto min-h-screen max-w-2xl px-6 py-28">
      <h1 className="mt-10 font-serif text-5xl font-light tracking-[0.08em]">
        Privacy
      </h1>
      <div className="mt-12 space-y-6 text-sm leading-[1.9] text-muted-foreground">
        <p>
          Maison Mistyy collects only what a private sitting requires: your
          name, email, city, and the notes you choose to send. We do not sell
          information. We do not run advertising pixels.
        </p>
        <p>
          Appointment requests are read by the atelier and kept for the length
          of the commission. You may write at any time and ask that your
          details be removed.
        </p>
        <p>Dar es Salaam, 2026.</p>
      </div>
      </main>
    </>
  );
}
