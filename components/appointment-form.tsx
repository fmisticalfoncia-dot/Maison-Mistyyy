"use client";

import { FormEvent, useState } from "react";

export function AppointmentForm() {
  const [sent, setSent] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };

  if (sent) {
    return (
      <div className="border border-white/10 px-8 py-16 text-center">
        <p className="text-[11px] uppercase tracking-[0.4em] text-primary">
          Received
        </p>
        <p className="mt-6 font-serif text-3xl font-light tracking-[0.06em] text-foreground">
          The maison will write to you.
        </p>
        <p className="mx-auto mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
          A private client advisor will confirm your sitting within two working
          days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-8">
      <label className="grid gap-3">
        <span className="text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
          Full name
        </span>
        <input
          required
          name="name"
          autoComplete="name"
          className="border-b border-white/20 bg-transparent py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-primary"
        />
      </label>
      <label className="grid gap-3">
        <span className="text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
          Email
        </span>
        <input
          required
          type="email"
          name="email"
          autoComplete="email"
          className="border-b border-white/20 bg-transparent py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-primary"
        />
      </label>
      <div className="grid gap-8 md:grid-cols-2">
        <label className="grid gap-3">
          <span className="text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
            City
          </span>
          <input
            required
            name="city"
            autoComplete="address-level2"
            className="border-b border-white/20 bg-transparent py-3 text-sm text-foreground outline-none transition-colors focus:border-primary"
          />
        </label>
        <label className="grid gap-3">
          <span className="text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
            Preferred month
          </span>
          <input
            name="month"
            placeholder="e.g. March 2026"
            className="border-b border-white/20 bg-transparent py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-primary"
          />
        </label>
      </div>
      <label className="grid gap-3">
        <span className="text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
          A note for the atelier
        </span>
        <textarea
          name="note"
          rows={4}
          className="resize-none border-b border-white/20 bg-transparent py-3 text-sm text-foreground outline-none transition-colors focus:border-primary"
        />
      </label>
      <button
        type="submit"
        className="mt-4 justify-self-start border border-primary/40 px-10 py-4 text-[11px] uppercase tracking-[0.35em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
      >
        Request a sitting
      </button>
    </form>
  );
}
