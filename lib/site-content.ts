import {
  BarChart3,
  Building2,
  Coins,
  HardHat,
  KeyRound,
  LineChart,
  ShieldCheck,
  ClipboardCheck,
  Wrench,
} from "lucide-react";

export const services = [
  {
    icon: ClipboardCheck,
    number: "01",
    title: "Tillsyn & fastighetsskötsel",
    summary: "Regelbunden tillsyn, skötsel inne och ute samt hantering av fel och mindre åtgärder.",
    text: "Vi tar hand om fastighetens vardag genom regelbunden inre och yttre tillsyn och skötsel. Vi uppmärksammar brister, hanterar löpande behov och följer upp åtgärder så att byggnaden, de gemensamma utrymmena och utemiljön fungerar väl.",
    items: ["Inre och yttre tillsyn", "Skötsel av gemensamma utrymmen", "Yttre skötsel, exempelvis markskötsel", "Felhantering och mindre åtgärder"],
  },
  {
    icon: Wrench,
    number: "02",
    title: "Teknisk förvaltning",
    summary: "Planering, samordning och uppföljning av drift, underhåll, energi och tekniska krav.",
    text: "Vi planerar, samordnar och följer upp fastighetens drift och underhåll med ett långsiktigt perspektiv. Iakttagelser från den dagliga tillsynen blir underlag för prioriteringar, underhållsplaner och uppföljning av energi och tekniska krav.",
    items: ["Planering och uppföljning av drift", "Underhållsplanering och prioritering", "Energiuppföljning", "Samordning av tekniska krav och besiktningar"],
  },
  {
    icon: Coins,
    number: "03",
    title: "Ekonomisk förvaltning & redovisning",
    summary: "Bokföring, avisering och budget med ekonomisk uppföljning, bokslut och årsredovisning.",
    text: "Vi tar hand om fastighetsbolagets redovisning och löpande ekonomiska förvaltning. Från bokföring och avisering till budget, bokslut och årsredovisning skapar vi struktur och tydliga underlag för uppföljning och beslut om fastighetens ekonomi.",
    items: ["Bokföring och avisering", "Budget och ekonomisk planering", "Ekonomisk uppföljning och rapportering", "Bokslut och årsredovisning"],
  },
  {
    icon: KeyRound,
    number: "04",
    title: "Uthyrning & hyresadministration",
    summary: "Uthyrning, avtal och administration med löpande kontakt genom hela hyresförhållandet.",
    text: "Vi håller ihop uthyrningsprocessen och den löpande hyresadministrationen för bostäder och lokaler. Från marknadsföring och visningar till avtal och inflyttning skapar vi tydliga kontaktvägar och kontinuitet i relationen mellan fastighetsägare och hyresgäster.",
    items: ["Marknadsföring och visningar", "Hyresavtal och administration", "In- och utflyttning", "Löpande hyresgästdialog"],
  },
  {
    icon: HardHat,
    number: "05",
    title: "Projekt & entreprenad",
    summary: "Upphandling och projektledning med uppföljning av genomförande, ekonomi och kvalitet.",
    text: "Vi leder underhålls- och utvecklingsprojekt från behovsanalys och upphandling till genomförande och avslut. Med samordning och löpande uppföljning av ekonomi och kvalitet håller vi ihop projektets olika delar och återkopplar till fastighetens långsiktiga plan.",
    items: ["Behovsanalys och upphandling", "Projektledning och samordning", "Uppföljning av genomförande", "Ekonomi- och kvalitetsuppföljning"],
  },
];

export const process = [
  ["01", "Förstå", "Vi lär känna fastigheten, ekonomin och era mål."],
  ["02", "Planera", "Vi samlar ansvar, aktiviteter och nyckeltal i en tydlig plan."],
  ["03", "Genomföra", "Vi utför och samordnar drift, skötsel och förvaltning enligt planen."],
  ["04", "Följa upp", "Ni får beslutsunderlag, transparens och kontinuerlig återkoppling."],
];

export const valueAreas = [
  [Building2, "Fastigheten", "Drift, skötsel och underhåll"],
  [BarChart3, "Ekonomin", "Kontroll och prognos"],
  [ShieldCheck, "Tryggheten", "Risk och efterlevnad"],
  [LineChart, "Värdet", "Långsiktiga resultat"],
];

export const audiences = [
  {
    title: "Fastighetsägare och investerare",
    text: "Vi skapar kontroll över drift, kassaflöde, risker och utvecklingsbehov. Ni får en partner som ser både fastigheten och affären bakom den.",
    items: ["Löpande ägarrapportering", "Budget och prognos", "Driftnetto och värdeutveckling", "Samordnad leverans"],
  },
  {
    title: "Bostadsrättsföreningar",
    text: "Vi avlastar styrelsen, skapar struktur och ser till att rätt insats görs i rätt tid. Besluten blir tydligare och vardagen tryggare.",
    items: ["Styrelsestöd", "Drift och fastighetsskötsel", "Underhållsplanering", "Ekonomisk överblick", "Entreprenadstöd"],
  },
];
