/**
 * All page content, extracted from the original Claude Design source
 * (Szorc.dc.html `renderVals()`). Edit text and data here — the components
 * just map over these structures.
 */

export type NavItem = { href: string; label: string; accent?: boolean };

export const nav: NavItem[] = [
  { href: "#oprojekcie", label: "O projekcie" },
  { href: "#nazwisko", label: "Nazwisko" },
  { href: "#rod", label: "Ród" },
  { href: "#herb", label: "Herb" },
  { href: "#kontakt", label: "Kontakt", accent: true },
];

/** Surname spellings cycled by the hero typewriter animation. */
export const heroForms = ["Szorc", "Schortz", "Szorcz", "Szczorc"];

export type Pillar = { n: string; t: string; d: string };

export const pillars: Pillar[] = [
  {
    n: "I",
    t: "Genealogia",
    d: "Drzewo rodziny, gałąź po gałęzi — imiona, daty i miejsca.",
  },
  {
    n: "II",
    t: "Dokumenty i zdjęcia",
    d: "Skany, fotografie i pamiątki w jednym, trwałym miejscu.",
  },
  {
    n: "III",
    t: "Wspólnota",
    d: "Ludzie o nazwisku Szorc — dziś rozproszeni, tu połączeni.",
  },
];

export type Wariant = { form: string };

export const wariantyPoboczne: Wariant[] = [
  { form: "Szorcz" },
  { form: "Szczorc" },
  { form: "Schortz" },
];

export type TimelineEvent = {
  year: string;
  title: string;
  body: string;
};

export const timeline: TimelineEvent[] = [
  {
    year: "XIV w.",
    title: "Gałąź na Mazowszu i Podlasiu",
    body: "Według tradycji genealogicznej jedna z gałęzi rodu miała osiedlić się na północnym Mazowszu i Podlasiu już w XIV wieku.",
  },
  {
    year: "XV w.",
    title: "Wieś Szorce",
    body: "Wieś Szorce została założona już w początkach XV wieku.",
  },
  {
    year: "1421",
    title: "Akta ziemi bielskiej",
    body: "Szorcowie z Obrębu mieli być stale notowani w aktach ziemi bielskiej od 1421 roku.",
  },
  {
    year: "1836–1861",
    title: "Legitymacja szlachectwa",
    body: "Przedstawiciele rodu Szorc herbu Mora mieli zostać wylegitymowani ze szlachectwa w Królestwie Polskim.",
  },
];

export type Figure = { name: string; body: string };

export const figures: Figure[] = [
  {
    name: "Piotr Szorc z Obrębu",
    body: "Rotmistrz wojsk królewskich i starosta kiszewski. Jeden z wcześniejszych znanych przedstawicieli rodu Szorc herbu Mora.",
  },
  {
    name: "Jan Szorc z Obrębu",
    body: "Podkomorzy malborski, starosta kiszewski i poseł na sejm. Najbardziej rozpoznawalna postać związana z historyczną linią rodu.",
  },
  {
    name: "Franciszek Szorc",
    body: "Dziedzic Szramowa, wzmiankowany w 1597 roku. Ważny ślad źródłowy potwierdzający dawne występowanie nazwiska.",
  },
];
