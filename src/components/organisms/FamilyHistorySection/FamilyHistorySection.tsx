import { figures, timeline } from "@/content/site";

export const FamilyHistorySection = () => {
  return (
    <section id="rod" className="border-line bg-paper border-t">
      <div className="mx-auto max-w-[1120px] px-8 py-[100px]">
        <div className="text-accent font-mono text-xs tracking-[0.2em] uppercase">
          03 — Historia rodu
        </div>
        <h2 className="font-display text-ink mt-4 text-[clamp(32px,4.6vw,52px)] leading-[1.05] font-semibold">
          Z Saksonii, przez Prusy, na Podlasie.
        </h2>
        <p className="font-body text-ink-soft mt-6 text-xl leading-[1.65]">
          Ród Szorc herbu Mora pojawia się w źródłach genealogicznych jako jedna
          z wpływowych rodzin pruskich, której pochodzenie tradycja wywodzi z
          Saksonii. Według przekazów pierwotnie nosili nazwisko Kostitz albo
          Kostycz, a jedna z gałęzi rodu już w XIV wieku osiedliła się na
          północnym Mazowszu i Podlasiu.
        </p>
        <p className="font-body text-ink-soft mt-[22px] text-xl leading-[1.65]">
          Szczególne miejsce w tej historii zajmują Szorce — dawna okolica
          szlachecka w województwie podlaskim w parafii Trzcianne. To właśnie z
          tym miejscem tradycja genealogiczna najczęściej łączy podlaski ślad
          rodu Szorc. Szorcowie byli notowani w aktach ziemi bielskiej, a w XIX
          wieku przedstawiciele rodu mieli zostać wylegitymowani ze szlachectwa
          w Królestwie Polskim.
        </p>
        <a
          href="https://polishgenealogy1.blogspot.com/2017/03/szorc.html"
          target="_blank"
          rel="noopener"
          className="border-line text-accent hover:border-accent mt-7 inline-block border-b pb-[2px] font-mono text-[11px] tracking-[0.08em] no-underline transition-colors"
        >
          Źródło: polishgenealogy1.blogspot.com →
        </a>

        {/* Timeline */}
        <div className="text-accent mt-20 mb-2 font-mono text-xs tracking-[0.16em] uppercase">
          Oś czasu
        </div>
        <h3 className="font-display text-ink mb-12 max-w-[820px] text-[clamp(26px,3.4vw,38px)] leading-[1.05] font-semibold">
          Nić, którą chcemy związać z powrotem
        </h3>
        <div className="mr-auto max-w-[760px]">
          {timeline.map((e) => (
            <div
              key={e.year + e.title}
              className="grid grid-cols-[80px_1fr] gap-5 pb-2 sm:grid-cols-[130px_1fr] sm:gap-7"
            >
              <div className="font-display text-accent pt-[2px] text-right text-[26px] font-semibold">
                {e.year}
              </div>
              <div className="border-line relative border-l pb-10 pl-7">
                <span className="border-accent bg-accent absolute top-[6px] -left-[5px] h-[9px] w-[9px] rounded-full border-[1.5px]" />
                <h4 className="font-display text-ink mb-[6px] text-[23px] font-semibold">
                  {e.title}
                </h4>
                <p className="font-body text-ink-soft m-0 text-[17px] leading-[1.55]">
                  {e.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Historical figures */}
        <div className="text-accent mt-[88px] mb-2 font-mono text-xs tracking-[0.16em] uppercase">
          Historyczni przedstawiciele rodu
        </div>
        <h3 className="font-display text-ink mb-12 max-w-[820px] text-[clamp(26px,3.4vw,38px)] leading-[1.05] font-semibold">
          Postaci, które zapisały nazwisko w źródłach
        </h3>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {figures.map((f) => (
            <div
              key={f.name}
              className="border-line flex flex-col gap-[14px] border-t pt-6"
            >
              <h4 className="font-display text-ink m-0 text-[26px] leading-[1.1] font-semibold">
                {f.name}
              </h4>
              <p className="font-body text-ink-soft m-0 text-[17px] leading-[1.6]">
                {f.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
