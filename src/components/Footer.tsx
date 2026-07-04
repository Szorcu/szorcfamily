export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink">
      <div className="mx-auto flex max-w-[1120px] flex-wrap items-center justify-between gap-5 p-8">
        <a href="#top" className="flex items-center gap-3 no-underline">
          <span className="flex h-[34px] w-[34px] items-center justify-center border-[1.5px] border-[#8a7d6a] font-display text-xl font-semibold text-[#8a7d6a]">
            S
          </span>
          <span className="font-mono text-xs tracking-[0.24em] text-[#8a7d6a]">
            SZORC.PL
          </span>
        </a>
        <span className="font-mono text-[11px] tracking-[0.1em] text-[#8a7d6a]">
          szorc.pl · Archiwum rodziny Szorc · 2026
        </span>
        <span className="font-mono text-[11px] tracking-[0.1em] text-[#8a7d6a]">
          Stworzona przez{" "}
          <a
            href="https://www.linkedin.com/in/norbert-szorc/"
            target="_blank"
            rel="noopener"
            className="text-[#8a7d6a] underline"
          >
            Norbert Szorc
          </a>
        </span>
      </div>
    </footer>
  );
}
