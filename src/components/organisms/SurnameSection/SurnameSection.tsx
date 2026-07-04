import { wariantyPoboczne } from "@/content/site";

export const SurnameSection = () => {
  return (
    <section id="nazwisko" className="border-line bg-paper-2 border-t">
      <div className="mx-auto max-w-[1120px] px-8 py-[100px] text-center">
        <div className="text-accent font-mono text-xs tracking-[0.2em] uppercase">
          02 — Pochodzenie nazwiska
        </div>
        <h2 className="font-display text-ink mx-auto mt-4 max-w-[820px] text-[clamp(32px,4.6vw,52px)] leading-[1.05] font-semibold">
          Od dawnego słowa „szorc” — zapisywanego na wiele sposobów.
        </h2>
        <p className="font-body text-ink-soft mx-auto mt-6 max-w-[760px] text-xl leading-[1.62]">
          Nazwisko Szorc może wywodzić się od dawnego słowa „szorc”, które w
          staropolszczyźnie oznaczało część zbroi, a w późniejszym użyciu
          gwarowym także fartuch lub zapaskę. Możliwy jest również związek z
          niemieckim <span className="italic">„Schurz”</span>, oznaczającym
          fartuch lub krótki element odzieży. Nazwisko mogło więc powstać od
          przezwiska, wykonywanego rzemiosła albo charakterystycznego stroju.
        </p>

        <div className="text-accent mt-14 mb-5 font-mono text-xs tracking-[0.16em] uppercase">
          Warianty zapisu
        </div>
        <div className="flex flex-col items-center gap-6 md:flex-row md:flex-wrap md:justify-center md:gap-5">
          <div className="bg-accent font-display text-paper px-10 py-6 text-[44px] leading-none font-semibold">
            Szorc
          </div>
          <div className="text-ink-soft flex items-center gap-[14px] font-mono text-xs tracking-[0.16em] uppercase">
            <span className="bg-line hidden h-px w-[26px] md:block" />
            także
          </div>
          <div className="flex flex-wrap justify-center gap-[14px]">
            {wariantyPoboczne.map((w) => (
              <div
                key={w.form}
                className="border-line font-display text-ink-soft border px-7 py-[18px] text-[30px] leading-none font-medium italic"
              >
                {w.form}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
