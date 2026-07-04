import { timeline, figures } from "@/content/site";

export function FamilyHistorySection() {
  return (
    <>
      <a id="rod" />
      <section className="border-t border-line bg-paper">
        <div className="mx-auto max-w-[1120px] px-8 py-[100px]">
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            03 — Historia rodu
          </div>
          <h2 className="mt-4 font-display text-[clamp(32px,4.6vw,52px)] font-semibold leading-[1.05] text-ink">
            Z Saksonii, przez Prusy, na Podlasie.
          </h2>
          <p className="mt-6 font-body text-xl leading-[1.65] text-ink-soft">
            Ród Szorc herbu Mora pojawia się w źródłach genealogicznych jako
            jedna z wpływowych rodzin pruskich, której pochodzenie tradycja
            wywodzi z Saksonii. Według przekazów pierwotnie nosili nazwisko
            Kostitz albo Kostycz, a jedna z gałęzi rodu już w XIV wieku
            osiedliła się na północnym Mazowszu i Podlasiu.
          </p>
          <p className="mt-[22px] font-body text-xl leading-[1.65] text-ink-soft">
            Szczególne miejsce w tej historii zajmują Szorce — dawna okolica
            szlachecka w województwie podlaskim w parafii Trzcianne. To właśnie
            z tym miejscem tradycja genealogiczna najczęściej łączy podlaski
            ślad rodu Szorc. Szorcowie byli notowani w aktach ziemi bielskiej, a
            w XIX wieku przedstawiciele rodu mieli zostać wylegitymowani ze
            szlachectwa w Królestwie Polskim.
          </p>
          <a
            href="https://polishgenealogy1.blogspot.com/2017/03/szorc.html"
            target="_blank"
            rel="noopener"
            className="mt-7 inline-block border-b border-line pb-[2px] font-mono text-[11px] tracking-[0.08em] text-accent no-underline transition-colors hover:border-accent"
          >
            Źródło: polishgenealogy1.blogspot.com →
          </a>

          {/* Timeline */}
          <div className="mb-2 mt-20 font-mono text-xs uppercase tracking-[0.16em] text-accent">
            Oś czasu
          </div>
          <h3 className="mb-12 max-w-[820px] font-display text-[clamp(26px,3.4vw,38px)] font-semibold leading-[1.05] text-ink">
            Nić, którą chcemy związać z powrotem
          </h3>
          <div className="mr-auto max-w-[760px]">
            {timeline.map((e) => (
              <div
                key={e.year + e.title}
                className="grid grid-cols-[80px_1fr] gap-5 pb-2 sm:grid-cols-[130px_1fr] sm:gap-7"
              >
                <div className="pt-[2px] text-right font-display text-[26px] font-semibold text-accent">
                  {e.year}
                </div>
                <div className="relative border-l border-line pb-10 pl-7">
                  <span className="absolute -left-[5px] top-[6px] h-[9px] w-[9px] rounded-full border-[1.5px] border-accent bg-accent" />
                  <h4 className="mb-[6px] font-display text-[23px] font-semibold text-ink">
                    {e.title}
                  </h4>
                  <p className="m-0 font-body text-[17px] leading-[1.55] text-ink-soft">
                    {e.body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Historical figures */}
          <div className="mb-2 mt-[88px] font-mono text-xs uppercase tracking-[0.16em] text-accent">
            Historyczni przedstawiciele rodu
          </div>
          <h3 className="mb-12 max-w-[820px] font-display text-[clamp(26px,3.4vw,38px)] font-semibold leading-[1.05] text-ink">
            Postaci, które zapisały nazwisko w źródłach
          </h3>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            {figures.map((f) => (
              <div
                key={f.name}
                className="flex flex-col gap-[14px] border-t border-line pt-6"
              >
                <h4 className="m-0 font-display text-[26px] font-semibold leading-[1.1] text-ink">
                  {f.name}
                </h4>
                <p className="m-0 font-body text-[17px] leading-[1.6] text-ink-soft">
                  {f.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
