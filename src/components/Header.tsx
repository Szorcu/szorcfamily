import Image from "next/image";
import { nav } from "@/content/site";
import herbMoraMono from "@/assets/herb-mora-mono.png";

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-line bg-paper/85 backdrop-blur-[10px]">
      <div className="mx-auto flex max-w-[1120px] items-center justify-between gap-6 px-8 py-[14px]">
        <a href="#top" className="flex items-center gap-3 no-underline">
          <Image
            src={herbMoraMono}
            alt="Szorc"
            className="h-[34px] w-auto"
            priority
          />
          <span className="font-mono text-xs tracking-[0.24em] text-ink">
            SZORC.PL
          </span>
        </a>
        <nav className="hidden gap-[26px] sm:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`font-mono text-xs uppercase tracking-[0.12em] no-underline transition-colors hover:text-accent ${
                item.accent ? "text-accent" : "text-ink-soft"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
