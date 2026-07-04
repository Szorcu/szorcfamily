export const PromoStrip = () => {
  return (
    <div className="bg-accent text-paper sticky top-[63px] z-[29]">
      <div className="mx-auto max-w-[1120px] px-4 py-[10px] sm:px-8 sm:py-[11px]">
        <p className="font-body m-0 text-center text-sm leading-[1.4] sm:text-base">
          <span className="bg-accent-2 mr-2 inline-block h-[6px] w-[6px] rotate-45 align-middle" />
          Mamy rodzinne adresy w domenie{" "}
          <span className="font-mono text-[13px]">imie@szorc.pl</span>. Chcesz
          mieć własny?{" "}
          <a
            href="#kontakt"
            className="hover:text-accent-2 font-medium whitespace-nowrap underline underline-offset-2 transition-colors"
          >
            Napisz do nas →
          </a>
        </p>
      </div>
    </div>
  );
};
