import herbMoraMono from "@/assets/herb-mora-mono.png";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="bg-ink border-t border-white/10">
      <div className="mx-auto flex max-w-[1120px] flex-wrap items-center justify-between gap-5 p-8">
        <a href="#top" className="flex items-center gap-3 no-underline">
          <Image src={herbMoraMono} alt="Szorc" className="h-[34px] w-auto" />
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
};
