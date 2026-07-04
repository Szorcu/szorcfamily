import herbMora from "@/assets/herb-mora-original.png";
import Image from "next/image";

export const CoatOfArmsSection = () => {
  return (
    <section id="herb" className="border-line bg-paper border-t">
      <div className="mx-auto max-w-[1120px] px-8 py-[100px]">
        <div className="mt-8 grid grid-cols-1 items-center gap-16 md:grid-cols-[0.9fr_1.1fr] md:items-stretch">
          <div className="order-last flex items-center justify-center overflow-hidden p-2 md:order-0">
            <Image
              src={herbMora}
              alt="Herb Mora"
              className="block h-auto max-h-[400px] w-auto max-w-full"
              priority
            />
          </div>
          <div>
            <div className="text-accent mb-4 font-mono text-xs tracking-[0.2em] uppercase">
              04 — Herb Mora
            </div>
            <h2 className="font-display text-ink m-0 text-[clamp(30px,4.2vw,48px)] leading-[1.05] font-semibold md:whitespace-nowrap">
              Głowa Maura
            </h2>
            <p className="font-body text-ink mt-[22px] text-lg leading-[1.62]">
              Herb Mora to dawny herb szlachecki znany polskiej heraldyce co
              najmniej od XV wieku. Występował również pod nazwami Mory, Morawa
              oraz Murzynowa Głowa. Nazwa herbu wiązana jest z niemieckim słowem{" "}
              <span className="italic">Mohr</span>, oznaczającym Maura — postać,
              która w średniowiecznej Europie symbolizowała świat odległy,
              egzotyczny i rycersko wyobrażony.
            </p>
            <p className="font-body text-ink mt-[18px] text-lg leading-[1.62]">
              Znakiem herbu jest głowa Maura w czerwonym polu tarczy,
              przewiązana srebrną opaską. W klejnocie umieszczano trzy strusie
              pióra, a w niektórych odmianach pojawiała się także pełniejsza
              postać Maura z łukiem i strzałą. Dawne określenie „Murzynowa
              Głowa” należy rozumieć jako historyczną nazwę godła herbowego, nie
              jako współczesny opis osoby. W heraldyce podobne motywy były znane
              w wielu krajach Europy i najczęściej odnosiły się do symboliki
              odległych krain, odwagi, wypraw oraz rycerskiej tradycji.
            </p>
            <a
              href="https://pl.wikipedia.org/wiki/Mora_(herb_szlachecki)"
              target="_blank"
              rel="noopener"
              className="border-line text-accent hover:border-accent mt-6 inline-block border-b pb-[2px] font-mono text-[11px] tracking-[0.08em] no-underline transition-colors"
            >
              Źródło: pl.wikipedia.org →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
