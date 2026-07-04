export const ContactSection = () => {
  return (
    <section id="kontakt" className="border-t border-line bg-ink">
      <div className="mx-auto grid max-w-[1120px] grid-cols-1 items-start gap-16 px-8 py-[100px] md:grid-cols-[0.85fr_1.15fr]">
        <div>
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-accent-2">
            05 — Współtwórz
          </div>
          <h2 className="mt-4 font-display text-[clamp(34px,4.6vw,54px)] font-semibold leading-[1.02] text-paper">
            Skontaktuj się z nami
          </h2>
          <p className="mt-[22px] max-w-[400px] font-body text-[19px] leading-[1.6] text-[#c9bda9]">
            Chcesz pomóc w budowaniu tego archiwum, podzielić się historią albo
            po prostu się spotkać? Napisz do nas.
          </p>
          <div className="mt-8 font-mono text-[13px] tracking-[0.08em] text-accent-2">
            kontakt@szorc.pl
          </div>
        </div>

        {/*
            Presentational form only. Submission does nothing for now — the
            Web3Forms action will be attached here later
            (add `action`/`method` on the <form> and the access-key input).
          */}
        <div>
          <form className="bg-card p-10">
            <div className="grid grid-cols-1 gap-[26px] sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block font-mono text-[11px] uppercase tracking-[0.14em] text-ink-soft">
                  Imię i nazwisko
                </span>
                <input
                  name="name"
                  placeholder="Jan Szorc"
                  className="w-full border-0 border-b-[1.5px] border-solid border-line bg-transparent py-[6px] font-body text-lg text-ink outline-none focus:border-accent"
                />
              </label>
              <label className="block">
                <span className="mb-2 block font-mono text-[11px] uppercase tracking-[0.14em] text-ink-soft">
                  E‑mail
                </span>
                <input
                  name="email"
                  type="email"
                  placeholder="jan@przyklad.pl"
                  className="w-full border-0 border-b-[1.5px] border-solid border-line bg-transparent py-[6px] font-body text-lg text-ink outline-none focus:border-accent"
                />
              </label>
            </div>
            <label className="mt-[26px] block">
              <span className="mb-2 block font-mono text-[11px] uppercase tracking-[0.14em] text-ink-soft">
                Wiadomość
              </span>
              <textarea
                name="message"
                rows={4}
                placeholder="Napisz, co wiesz o swojej gałęzi rodziny…"
                className="w-full resize-y border-0 border-b-[1.5px] border-solid border-line bg-transparent py-[6px] font-body text-lg leading-[1.5] text-ink outline-none focus:border-accent"
              />
            </label>
            <div className="mt-[30px] flex items-center justify-end gap-5">
              <button
                type="submit"
                className="cursor-pointer whitespace-nowrap border border-accent bg-accent px-8 py-[15px] font-mono text-[13px] uppercase tracking-[0.14em] text-paper transition-colors hover:border-ink hover:bg-ink"
              >
                Wyślij
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
