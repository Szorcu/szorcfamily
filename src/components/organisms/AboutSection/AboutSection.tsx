import { pillars } from "@/content/site";

export const AboutSection = () => {
  return (
    <section id="oprojekcie" className="border-line border-t">
      <div className="mx-auto max-w-[1120px] px-8 py-[100px]">
        <div className="text-accent font-mono text-xs tracking-[0.2em] uppercase">
          01 — O projekcie
        </div>
        <h2 className="font-display text-ink mt-4 max-w-[820px] text-[clamp(32px,4.6vw,52px)] leading-[1.05] font-semibold">
          Nazwisko, które nosimy od pokoleń — a wiemy o nim zaskakująco mało.
        </h2>
        <p className="font-body text-ink-soft mt-6 max-w-[720px] text-xl leading-[1.65]">
          Ten projekt powstał, by to zmienić. Zbieramy imiona, daty, miejsca,
          dokumenty i wspomnienia w jednym trwałym miejscu — otwartym dla
          każdego, kto do rodziny Szorc należy albo jej szuka.
        </p>
        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3">
          {pillars.map((p) => (
            <div key={p.n} className="flex flex-col gap-4">
              <div className="flex items-baseline gap-4">
                <span className="font-display text-accent-2 text-[34px] leading-none font-medium italic">
                  {p.n}
                </span>
                <span className="bg-line h-px flex-1" />
              </div>
              <h3 className="font-display text-ink mt-[6px] text-[28px] font-semibold">
                {p.t}
              </h3>
              <p className="font-body text-ink-soft m-0 text-[17px] leading-[1.6]">
                {p.d}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
