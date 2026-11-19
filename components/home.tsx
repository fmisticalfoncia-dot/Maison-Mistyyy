import Endless from "@/components/ui/endless";
import { CinematicFooter } from "@/components/ui/motion-footer";
import { SiteHeader } from "@/components/site-header";
import { AppointmentForm } from "@/components/appointment-form";
import { editorialImages } from "@/lib/images";

const [cover, maison, satin, muse] = editorialImages;

export default function Home() {
  return (
    <div className="relative w-full bg-background font-sans selection:bg-primary/30">
      <SiteHeader />

      <div className="relative z-10">
        <Endless />
      </div>

      <main className="relative z-10 w-full bg-background text-foreground border-b border-white/10 shadow-xl rounded-b-3xl overflow-hidden">
        <section
          id="campaign"
          className="scroll-mt-24 mx-auto grid max-w-6xl gap-16 px-6 py-28 md:grid-cols-12 md:px-10 md:py-36"
        >
          <div className="md:col-span-5">
            <p className="text-[11px] uppercase tracking-[0.45em] text-primary">
              The House
            </p>
            <h2 className="mt-6 font-serif text-5xl font-light tracking-[0.08em] md:text-6xl">
              Evening is a climate.
              <br />
              We dress for it.
            </h2>
          </div>
          <div className="md:col-span-6 md:col-start-7 flex flex-col justify-end">
            <p className="text-sm leading-[1.9] text-muted-foreground md:text-base">
              Maison Mistyy is a house of evening wear, born in Dar es Salaam.
              We cut champagne satin the way light falls on marble — slow,
              precise, unhurried. Every gown is made to measure. Every sitting
              is private.
            </p>
            <p className="mt-8 text-sm leading-[1.9] text-muted-foreground md:text-base">
              Champagne Muse is the opening campaign: a single muse, a liquid
              gold gown, and a maison of cream stone. No ornament but the
              cloth.
            </p>
          </div>
        </section>

        <section className="border-y border-white/10">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-10 md:grid-cols-4 md:px-10">
            {[
              ["Est.", "2026"],
              ["Atelier", "Dar es Salaam"],
              ["Service", "Made to measure"],
              ["Clients", "Private only"],
            ].map(([label, value]) => (
              <div key={label}>
                <p className="text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
                  {label}
                </p>
                <p className="mt-2 font-serif text-2xl font-light tracking-[0.04em] text-foreground">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="lookbook" className="scroll-mt-24 px-4 py-24 md:px-10 md:py-32">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="text-[11px] uppercase tracking-[0.45em] text-primary">
              Champagne Muse
            </p>
            <h2 className="mt-4 font-serif text-4xl font-light tracking-[0.12em] md:text-6xl">
              Lookbook
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
              Four frames from the campaign — satin, sculpture, and stillness.
            </p>
          </div>

          <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-12 md:gap-5">
            <figure className="group relative md:col-span-12">
              <div className="relative h-[70vh] overflow-hidden md:h-[90vh]">
                <img
                  src={cover.src}
                  alt={cover.alt}
                  className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <figcaption className="absolute bottom-8 left-8 text-[11px] uppercase tracking-[0.35em] text-white/85">
                  Look {cover.look} · {cover.caption}
                </figcaption>
              </div>
            </figure>

            <figure className="group relative md:col-span-7">
              <div className="relative h-[60vh] overflow-hidden md:h-[85vh]">
                <img
                  src={maison.src}
                  alt={maison.alt}
                  className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                <figcaption className="absolute bottom-6 left-6 text-[11px] uppercase tracking-[0.35em] text-white/80">
                  Look {maison.look} · {maison.caption}
                </figcaption>
              </div>
            </figure>

            <div className="grid gap-4 md:col-span-5">
              <figure className="group relative">
                <div className="relative h-[46vh] overflow-hidden md:h-[41vh]">
                  <img
                    src={satin.src}
                    alt={satin.alt}
                    className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                  <figcaption className="absolute bottom-5 left-5 text-[11px] uppercase tracking-[0.35em] text-white/80">
                    Look {satin.look} · {satin.caption}
                  </figcaption>
                </div>
              </figure>
              <figure className="group relative">
                <div className="relative h-[46vh] overflow-hidden md:h-[41vh]">
                  <img
                    src={muse.src}
                    alt={muse.alt}
                    className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                  <figcaption className="absolute bottom-5 left-5 text-[11px] uppercase tracking-[0.35em] text-white/80">
                    Look {muse.look} · {muse.caption}
                  </figcaption>
                </div>
              </figure>
            </div>
          </div>
        </section>

        <section className="grid border-t border-white/10 md:grid-cols-2">
          <div className="relative h-[70vh] md:h-auto md:min-h-[90vh]">
            <img
              src={satin.src}
              alt={satin.alt}
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
          </div>
          <div className="flex flex-col justify-center px-8 py-20 md:px-16 lg:px-24">
            <p className="text-[11px] uppercase tracking-[0.45em] text-primary">
              The Gown
            </p>
            <h2 className="mt-5 font-serif text-4xl font-light tracking-[0.08em] md:text-5xl">
              Champagne Muse
            </h2>
            <p className="mt-8 max-w-md text-sm leading-[1.9] text-muted-foreground md:text-base">
              Bias-cut evening gown in liquid champagne satin. Floor length,
              sculptural neckline, almost no jewelry. Commissioned privately
              and cut to the client.
            </p>
            <dl className="mt-12 grid gap-6 text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
              <div className="flex justify-between border-b border-white/10 pb-4">
                <dt>Cloth</dt>
                <dd className="text-foreground">Champagne satin</dd>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-4">
                <dt>Cut</dt>
                <dd className="text-foreground">Bias, made to measure</dd>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-4">
                <dt>Palette</dt>
                <dd className="text-foreground">Gold, ivory, black</dd>
              </div>
              <div className="flex justify-between pb-1">
                <dt>Availability</dt>
                <dd className="text-foreground">Private commission</dd>
              </div>
            </dl>
            <a
              href="#appointment"
              className="mt-12 inline-flex w-fit border border-primary/40 px-10 py-4 text-[11px] uppercase tracking-[0.35em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              Commission this look
            </a>
          </div>
        </section>

        <section
          id="atelier"
          className="scroll-mt-24 grid border-t border-white/10 md:grid-cols-2"
        >
          <div className="order-2 flex flex-col justify-center px-8 py-20 md:order-1 md:px-16 lg:px-24">
            <p className="text-[11px] uppercase tracking-[0.45em] text-primary">
              The Atelier
            </p>
            <h2 className="mt-5 font-serif text-4xl font-light tracking-[0.08em] md:text-5xl">
              A sitting,
              <br />
              not a shop.
            </h2>
            <p className="mt-8 max-w-md text-sm leading-[1.9] text-muted-foreground md:text-base">
              The maison receives in Dar es Salaam by appointment. Measurements
              are taken in silence. Toiles are fitted twice. Finished gowns
              travel worldwide.
            </p>
            <p className="mt-6 max-w-md text-sm leading-[1.9] text-muted-foreground md:text-base">
              Remote clients begin with a private consultation — photographs,
              notes, and a conversation. The cloth is then cut in the atelier.
            </p>
          </div>
          <div className="relative order-1 h-[70vh] md:order-2 md:h-auto md:min-h-[90vh]">
            <img
              src={maison.src}
              alt={maison.alt}
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
          </div>
        </section>

        <section
          id="appointment"
          className="scroll-mt-24 border-t border-white/10 px-6 py-24 md:px-10 md:py-32"
        >
          <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-12">
            <div className="md:col-span-5">
              <p className="text-[11px] uppercase tracking-[0.45em] text-primary">
                Private Client
              </p>
              <h2 className="mt-5 font-serif text-4xl font-light tracking-[0.08em] md:text-5xl">
                Request a sitting.
              </h2>
              <p className="mt-8 max-w-sm text-sm leading-[1.9] text-muted-foreground">
                Tell the house your city and the month you wish to be received.
                We reply personally — never by newsletter.
              </p>
              <p className="mt-10 text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
                Atelier
                <br />
                <span className="mt-2 inline-block tracking-[0.18em] text-foreground">
                  Dar es Salaam, Tanzania
                </span>
              </p>
            </div>
            <div className="md:col-span-6 md:col-start-7">
              <AppointmentForm />
            </div>
          </div>
        </section>
      </main>

      <CinematicFooter />
    </div>
  );
}
