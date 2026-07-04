import { ContactForm } from "@/components/ContactForm";

export const ContactSection = () => {
  return (
    <section id="kontakt" className="border-line bg-ink border-t">
      <div className="mx-auto grid max-w-[1120px] grid-cols-1 items-start gap-16 px-8 py-[100px] md:grid-cols-[0.85fr_1.15fr]">
        <div>
          <div className="text-accent-2 font-mono text-xs tracking-[0.2em] uppercase">
            05 — Współtwórz
          </div>
          <h2 className="font-display text-paper mt-4 text-[clamp(34px,4.6vw,54px)] leading-[1.02] font-semibold">
            Skontaktuj się z nami
          </h2>
          <p className="font-body mt-[22px] max-w-[400px] text-[19px] leading-[1.6] text-[#c9bda9]">
            Chcesz pomóc w budowaniu tego archiwum, podzielić się historią albo
            po prostu się spotkać? Napisz do nas.
          </p>
          <div className="text-accent-2 mt-8 font-mono text-[13px] tracking-[0.08em]">
            kontakt@szorc.pl
          </div>
        </div>

        <div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};
