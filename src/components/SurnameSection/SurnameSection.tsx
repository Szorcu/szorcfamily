import { wariantyPoboczne } from "@/content/site";

export const SurnameSection = () => {
  return (
    <>
      <a id="nazwisko" />
      <section className="border-t border-line bg-paper-2">
        <div className="mx-auto max-w-[1120px] px-8 py-[100px] text-center">
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            02 — Pochodzenie nazwiska
          </div>
          <h2 className="mx-auto mt-4 max-w-[820px] font-display text-[clamp(32px,4.6vw,52px)] font-semibold leading-[1.05] text-ink">
            Od dawnego słowa „szorc” — zapisywanego na wiele sposobów.
          </h2>
          <p className="mx-auto mt-6 max-w-[760px] font-body text-xl leading-[1.62] text-ink-soft">
            Nazwisko Szorc może wywodzić się od dawnego słowa „szorc”, które w
            staropolszczyźnie oznaczało część zbroi, a w późniejszym użyciu
            gwarowym także fartuch lub zapaskę. Możliwy jest również związek z
            niemieckim <span className="italic">„Schurz”</span>, oznaczającym
            fartuch lub krótki element odzieży. Nazwisko mogło więc powstać od
            przezwiska, wykonywanego rzemiosła albo charakterystycznego stroju.
          </p>

          <div className="mb-5 mt-14 font-mono text-xs uppercase tracking-[0.16em] text-accent">
            Warianty zapisu
          </div>
          <div className="flex flex-wrap items-center justify-center gap-5">
            <div className="bg-accent px-10 py-6 font-display text-[44px] font-semibold leading-none text-paper">
              Szorc
            </div>
            <div className="flex items-center gap-[14px] font-mono text-xs uppercase tracking-[0.16em] text-ink-soft">
              <span className="h-px w-[26px] bg-line" />
              także
            </div>
            <div className="flex flex-wrap gap-[14px]">
              {wariantyPoboczne.map((w) => (
                <div
                  key={w.form}
                  className="border border-line px-7 py-[18px] font-display text-[30px] font-medium italic leading-none text-ink-soft"
                >
                  {w.form}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
