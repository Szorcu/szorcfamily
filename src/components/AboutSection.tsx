import { pillars } from "@/content/site";

export function AboutSection() {
  return (
    <>
      <a id="oprojekcie" />
      <section className="border-t border-line">
        <div className="mx-auto max-w-[1120px] px-8 py-[100px]">
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            01 — O projekcie
          </div>
          <h2 className="mt-4 max-w-[820px] font-display text-[clamp(32px,4.6vw,52px)] font-semibold leading-[1.05] text-ink">
            Nazwisko, które nosimy od pokoleń — a wiemy o nim zaskakująco mało.
          </h2>
          <p className="mt-6 max-w-[720px] font-body text-xl leading-[1.65] text-ink-soft">
            Ten projekt powstał, by to zmienić. Zbieramy imiona, daty, miejsca,
            dokumenty i wspomnienia w jednym trwałym miejscu — otwartym dla
            każdego, kto do rodziny Szorc należy albo jej szuka.
          </p>
          <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3">
            {pillars.map((p) => (
              <div key={p.n} className="flex flex-col gap-4">
                <div className="flex items-baseline gap-4">
                  <span className="font-display text-[34px] font-medium italic leading-none text-accent-2">
                    {p.n}
                  </span>
                  <span className="h-px flex-1 bg-line" />
                </div>
                <h3 className="mt-[6px] font-display text-[28px] font-semibold text-ink">
                  {p.t}
                </h3>
                <p className="m-0 font-body text-[17px] leading-[1.6] text-ink-soft">
                  {p.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
