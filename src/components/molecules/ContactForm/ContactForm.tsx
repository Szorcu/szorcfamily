"use client";

import { Loader2, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.append("access_key", "caaa416d-c5e3-4ffa-a34a-5f9f3c8c0895");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      }).then((response) => response.json());

      if (response.success) {
        toast("Dziękujemy za wiadomość 🙌", {
          description:
            "Cieszymy się, że do nas piszesz. Odezwiemy się niedługo!",
        });

        form.reset();
      } else {
        toast("Nie udało się wysłać wiadomości", {
          description: "Coś poszło nie tak. Spróbuj ponownie za chwilę.",
        });
      }
    } catch {
      toast("Nie udało się wysłać wiadomości", {
        description: "Coś poszło nie tak. Spróbuj ponownie za chwilę.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="bg-card p-10" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 gap-[26px] sm:grid-cols-2">
        <label className="block">
          <span className="text-ink-soft mb-2 block font-mono text-[11px] tracking-[0.14em] uppercase">
            Imię i nazwisko
          </span>
          <input
            name="fullname"
            placeholder="Jan Szorc"
            className="border-line font-body text-ink focus:border-accent w-full border-0 border-b-[1.5px] border-solid bg-transparent py-[6px] text-lg outline-none"
          />
        </label>
        <label className="block">
          <span className="text-ink-soft mb-2 block font-mono text-[11px] tracking-[0.14em] uppercase">
            E‑mail
          </span>
          <input
            name="email"
            type="email"
            placeholder="jan@przyklad.pl"
            className="border-line font-body text-ink focus:border-accent w-full border-0 border-b-[1.5px] border-solid bg-transparent py-[6px] text-lg outline-none"
          />
        </label>
      </div>
      <label className="mt-[26px] block">
        <span className="text-ink-soft mb-2 block font-mono text-[11px] tracking-[0.14em] uppercase">
          Wiadomość
        </span>
        <textarea
          name="message"
          rows={4}
          placeholder="Napisz, co wiesz o swojej gałęzi rodziny…"
          className="border-line font-body text-ink focus:border-accent w-full resize-y border-0 border-b-[1.5px] border-solid bg-transparent py-[6px] text-lg leading-[1.5] outline-none"
        />
      </label>
      <div className="mt-[30px] flex items-center justify-end">
        <button
          type="submit"
          disabled={isLoading}
          className="border-accent bg-accent text-paper hover:border-ink hover:bg-ink inline-flex cursor-pointer items-center gap-2 border px-8 py-[15px] font-mono text-[13px] tracking-[0.14em] whitespace-nowrap uppercase transition-colors disabled:cursor-not-allowed disabled:opacity-60"
        >
          Wyślij
          {isLoading ? (
            <Loader2 className="size-4 animate-spin" />
          ) : (
            <Send className="size-4" />
          )}
        </button>
      </div>
    </form>
  );
};
