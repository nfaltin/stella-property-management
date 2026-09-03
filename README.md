# Stella Property Management

Källkod till webbplatsen för Stella Property Management AB.

## Öppna projektet i Codex

1. Packa upp ZIP-filen.
2. Öppna mappen `Stella-Property-Management` som ett lokalt projekt i Codex.
3. Be Codex installera beroenden och starta utvecklingsmiljön, eller kör kommandona nedan i terminalen.

```bash
npm install
npm run dev
```

Terminalen visar vilken lokal adress sidan körs på.

## Viktiga filer

- `app/page.tsx` - sidans innehåll, sektioner och tjänstetexter.
- `app/globals.css` - färger, typografi och gemensam formgivning.
- `app/layout.tsx` - sidtitel, beskrivning och övrig metadata.
- `public/favicon.svg` - Stellas symbol.
- `public/stella-hero.png` - huvudbilden på startsidan.

## Kontrollera ändringar

```bash
npm run build
```

## Bra första instruktion till Codex

> Läs README.md och projektets befintliga kod. Behåll Stellas grafiska profil och svenska tonalitet. Starta sidan lokalt och hjälp mig sedan genomföra mina önskade ändringar. Kontrollera att sidan fungerar i både mobil och dator innan du avslutar.

## Innan skarp lansering

Kontrollera och uppdatera den föreslagna kontaktadressen `kontakt@stellapm.se` i `app/page.tsx`. Koppla därefter projektet till den hosting- och domänlösning som ska användas långsiktigt.
