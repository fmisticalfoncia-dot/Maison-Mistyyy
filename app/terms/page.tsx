import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Terms",
};

export default function TermsPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto min-h-screen max-w-2xl px-6 py-28">
      <h1 className="mt-10 font-serif text-5xl font-light tracking-[0.08em]">
        Terms
      </h1>
      <div className="mt-12 space-y-6 text-sm leading-[1.9] text-muted-foreground">
        <p>
          Gowns are commissioned individually. A sitting does not create a
          sale until measurements are confirmed and a deposit is agreed in
          writing.
        </p>
        <p>
          Made-to-measure pieces are not returnable once cut. Dates offered by
          the atelier are estimates until cloth has been reserved.
        </p>
        <p>
          Images on this site are the Champagne Muse campaign and remain the
          property of Maison Mistyy.
        </p>
      </div>
      </main>
    </>
  );
}
