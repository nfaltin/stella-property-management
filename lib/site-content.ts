import {
  BarChart3,
  Building2,
  Coins,
  HardHat,
  KeyRound,
  LineChart,
  ShieldCheck,
  Wrench,
} from "lucide-react";

export const services = [
  {
    icon: Wrench,
    number: "01",
    title: "Teknisk förvaltning",
    text: "Vi skapar struktur i den dagliga driften och bygger en långsiktig plan för fastighetens teknik, underhåll och energiprestanda.",
    items: ["Drift och tillsyn", "Planerat underhåll", "Energi och myndighetskrav"],
  },
  {
    icon: Coins,
    number: "02",
    title: "Ekonomisk förvaltning",
    text: "Tydlig ekonomistyrning på både fastighets- och bolagsnivå ger bättre kontroll, rätt prioriteringar och säkrare beslut.",
    items: ["Budget och prognos", "Avisering och leverantörsflöden", "Rapportering och uppföljning"],
  },
  {
    icon: KeyRound,
    number: "03",
    title: "Uthyrning och hyresadministration",
    text: "Från marknadsföring och visning till avtal, inflyttning och den löpande relationen med hyresgästen.",
    items: ["Bostäder och lokaler", "Avtal och indexering", "Hyresgästdialog"],
  },
  {
    icon: HardHat,
    number: "04",
    title: "Projekt och entreprenad",
    text: "Vi leder underhålls- och utvecklingsprojekt från behovsanalys till upphandling, genomförande och avslut.",
    items: ["Projektledning", "Upphandling", "Ekonomi- och kvalitetskontroll"],
  },
];

export const process = [
  ["01", "Förstå", "Vi lär känna fastigheten, ekonomin och era mål."],
  ["02", "Planera", "Vi samlar ansvar, aktiviteter och nyckeltal i en tydlig plan."],
  ["03", "Genomföra", "Vi driver det dagliga arbetet och håller ihop alla parter."],
  ["04", "Följa upp", "Ni får beslutsunderlag, transparens och kontinuerlig återkoppling."],
];

export const valueAreas = [
  [Building2, "Fastigheten", "Drift och utveckling"],
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
    items: ["Styrelsestöd", "Underhållsplanering", "Ekonomisk överblick", "Entreprenadstöd"],
  },
];
