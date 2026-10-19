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
    summary: "Vi ser till att huset och utemiljön fungerar i vardagen, med tillsyn, skötsel och mindre åtgärder.",
    text: "Vi går igenom byggnaden, de gemensamma utrymmena och utemiljön regelbundet. Vi fångar upp brister, tar hand om löpande skötsel och mindre åtgärder och följer upp det som behöver göras. Ni får återkoppling om sådant som kräver beslut eller behöver planeras vidare.",
    items: ["Inre och yttre tillsyn", "Skötsel av gemensamma utrymmen", "Yttre skötsel, exempelvis markskötsel", "Felhantering och mindre åtgärder"],
  },
  {
    icon: Wrench,
    number: "02",
    title: "Teknisk förvaltning",
    summary: "Vi håller ihop drift, underhåll och energifrågor och hjälper er att prioritera kommande insatser.",
    text: "Vi håller underhållsplaneringen aktuell, följer energianvändningen och samordnar drift, besiktningar och tekniska krav. Det som upptäcks vid tillsynen vägs in i planeringen. Ni får en bild av vad som behöver göras, när det bör ske och hur insatserna ska följas upp.",
    items: ["Planering och uppföljning av drift", "Underhållsplanering och prioritering", "Energiuppföljning", "Samordning av tekniska krav och besiktningar"],
  },
  {
    icon: Coins,
    number: "03",
    title: "Ekonomisk förvaltning & redovisning",
    summary: "Vi sköter den löpande ekonomin och bolagets redovisning, från hyresavisering till bokslut och årsredovisning.",
    text: "Vi sköter bokföring, avisering och fastighetsbolagets redovisning samt tar fram budget, bokslut och årsredovisning. Ni får löpande uppföljning av intäkter, kostnader och avvikelser. Det gör det lättare att bedöma ekonomin och fatta beslut om underhåll, investeringar och kommande behov.",
    items: ["Bokföring och avisering", "Budget och ekonomisk planering", "Ekonomisk uppföljning och rapportering", "Bokslut och årsredovisning"],
  },
  {
    icon: KeyRound,
    number: "04",
    title: "Uthyrning & hyresadministration",
    summary: "Vi arbetar med uthyrning och avtal och håller kontakten med hyresgästerna under hyrestiden.",
    text: "Vi hjälper er att hyra ut bostäder och lokaler, från marknadsföring och visningar till avtal och inflyttning. Under hyrestiden sköter vi administrationen och den löpande kontakten med hyresgästerna. Ni får stöd i uthyrningen samtidigt som hyresgästerna vet vart de ska vända sig.",
    items: ["Marknadsföring och visningar", "Hyresavtal och administration", "In- och utflyttning", "Löpande hyresgästdialog"],
  },
  {
    icon: HardHat,
    number: "05",
    title: "Projekt & entreprenad",
    summary: "Vi leder underhålls- och ombyggnadsprojekt och följer upp arbetet, kostnaderna och kvaliteten.",
    text: "Vi hjälper er att gå från ett identifierat behov till ett genomfört projekt. Vi tar fram underlag, samordnar upphandling och leder arbetet med underhåll och ombyggnad. Under genomförandet följer vi upp ekonomi och kvalitet och håller er informerade om framdrift och beslut som behöver tas.",
    items: ["Behovsanalys och upphandling", "Projektledning och samordning", "Uppföljning av genomförande", "Ekonomi- och kvalitetsuppföljning"],
  },
];

export const process = [
  ["01", "Förstå", "Vi går igenom fastigheten, ekonomin och vad ni vill ha hjälp med."],
  ["02", "Planera", "Vi kommer överens om omfattning, ansvar, prioriteringar och hur ni vill få återkoppling."],
  ["03", "Genomföra", "Vi sköter det löpande arbetet och samordnar de insatser som uppdraget kräver."],
  ["04", "Följa upp", "Vi redovisar vad som är gjort, följer upp ekonomi och behov och föreslår nästa steg."],
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
    text: "Vi hjälper er att hålla ihop fastighetens drift, ekonomi och uthyrning. Ni får löpande rapportering och underlag för att följa intäkter, kostnader och underhållsbehov. Uppdraget kan omfatta en del av förvaltningen eller ett samlat ansvar.",
    items: ["Löpande ägarrapportering", "Budget och prognos", "Driftnetto och värdeutveckling", "Samordnad leverans"],
  },
  {
    title: "Bostadsrättsföreningar",
    text: "Vi hjälper styrelsen med den löpande skötseln, ekonomin och planeringen av underhåll. Ni får underlag inför beslut och återkoppling om det arbete som görs, medan de boende får tydliga kontaktvägar för frågor och felanmälan.",
    items: ["Styrelsestöd", "Drift och fastighetsskötsel", "Underhållsplanering", "Ekonomisk överblick", "Entreprenadstöd"],
  },
];
