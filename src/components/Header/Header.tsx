import herbMoraMono from "@/assets/herb-mora-mono.png";
import { nav } from "@/content/site";
import Image from "next/image";

export const Header = () => {
  return (
    <header className="border-line bg-paper/85 sticky top-0 z-30 border-b backdrop-blur-[10px]">
      <div className="mx-auto flex max-w-[1120px] items-center justify-between gap-6 px-8 py-[14px]">
        <a href="#top" className="flex items-center gap-3 no-underline">
          <Image
            src={herbMoraMono}
            alt="Szorc"
            className="h-[34px] w-auto"
            priority
          />
          <span className="text-ink font-mono text-xs tracking-[0.24em]">
            SZORC.PL
          </span>
        </a>
        <nav className="hidden gap-[26px] sm:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`hover:text-accent font-mono text-xs tracking-[0.12em] uppercase no-underline transition-colors ${
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
};
