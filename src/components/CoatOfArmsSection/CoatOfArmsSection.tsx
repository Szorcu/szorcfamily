import Image from "next/image";
import herbMora from "@/assets/herb-mora-original.png";

export const CoatOfArmsSection = () => {
  return (
    <>
      <a id="herb" />
      <section className="border-t border-line bg-paper">
        <div className="mx-auto max-w-[1120px] px-8 py-[100px]">
          <div className="mt-8 grid grid-cols-1 items-center gap-16 md:grid-cols-[0.9fr_1.1fr] md:items-stretch">
            <div className="flex items-center justify-center overflow-hidden p-2">
              <Image
                src={herbMora}
                alt="Herb Mora"
                className="block h-auto max-h-[400px] w-auto max-w-full"
                priority
              />
            </div>
            <div>
              <div className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-accent">
                04 — Herb Mora
              </div>
              <h2 className="m-0 font-display text-[clamp(30px,4.2vw,48px)] font-semibold leading-[1.05] text-ink md:whitespace-nowrap">
                Głowa Maura
              </h2>
              <p className="mt-[22px] font-body text-lg leading-[1.62] text-ink">
                Herb Mora to dawny herb szlachecki znany polskiej heraldyce co
                najmniej od XV wieku. Występował również pod nazwami Mory,
                Morawa oraz Murzynowa Głowa. Nazwa herbu wiązana jest z
                niemieckim słowem <span className="italic">Mohr</span>,
                oznaczającym Maura — postać, która w średniowiecznej Europie
                symbolizowała świat odległy, egzotyczny i rycersko wyobrażony.
              </p>
              <p className="mt-[18px] font-body text-lg leading-[1.62] text-ink">
                Znakiem herbu jest głowa Maura w czerwonym polu tarczy,
                przewiązana srebrną opaską. W klejnocie umieszczano trzy strusie
                pióra, a w niektórych odmianach pojawiała się także pełniejsza
                postać Maura z łukiem i strzałą. Dawne określenie „Murzynowa
                Głowa” należy rozumieć jako historyczną nazwę godła herbowego,
                nie jako współczesny opis osoby. W heraldyce podobne motywy były
                znane w wielu krajach Europy i najczęściej odnosiły się do
                symboliki odległych krain, odwagi, wypraw oraz rycerskiej
                tradycji.
              </p>
              <a
                href="https://pl.wikipedia.org/wiki/Mora_(herb_szlachecki)"
                target="_blank"
                rel="noopener"
                className="mt-6 inline-block border-b border-line pb-[2px] font-mono text-[11px] tracking-[0.08em] text-accent no-underline transition-colors hover:border-accent"
              >
                Źródło: pl.wikipedia.org →
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
