export const PromoStrip = () => {
  return (
    <div className="bg-accent text-paper sticky top-[63px] z-[29]">
      <div className="relative mx-auto flex max-w-[1120px] flex-wrap items-center justify-center gap-[18px] px-8 py-[11px]">
        <span className="bg-accent-2 h-[6px] w-[6px] shrink-0 rotate-45" />
        <p className="font-body m-0 text-center text-base leading-[1.4]">
          Mamy rodzinne adresy w domenie{" "}
          <span className="font-mono text-[13px]">imie@szorc.pl</span>. Chcesz
          mieć własny?
        </p>
        <a
          href="#kontakt"
          className="text-paper hover:border-paper hover:bg-paper hover:text-accent shrink-0 border border-white/50 px-4 py-[7px] font-mono text-[11px] tracking-[0.12em] whitespace-nowrap uppercase no-underline transition-colors"
        >
          Napisz do nas
        </a>
      </div>
    </div>
  );
};
