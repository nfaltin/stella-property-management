"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function MaintenanceRequestForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget));
    console.info("Felanmälan redo för API", data);
    setSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 shadow-sm sm:p-8 lg:p-10">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Namn</Label>
          <Input id="name" name="name" autoComplete="name" required className="h-12 rounded-[0.15rem] bg-white" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Telefonnummer</Label>
          <Input id="phone" name="phone" type="tel" autoComplete="tel" required className="h-12 rounded-[0.15rem] bg-white" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">E-post</Label>
          <Input id="email" name="email" type="email" autoComplete="email" required className="h-12 rounded-[0.15rem] bg-white" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="apartment">Lägenhetsnummer</Label>
          <Input id="apartment" name="apartment" className="h-12 rounded-[0.15rem] bg-white" />
        </div>
        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="address">Adress</Label>
          <Input id="address" name="address" autoComplete="street-address" required className="h-12 rounded-[0.15rem] bg-white" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="issueType">Vad gäller felet?</Label>
          <select
            id="issueType"
            name="issueType"
            required
            className="h-12 w-full border border-[#d6dfdc] bg-white px-3 text-base outline-none transition focus:border-[#6f9291] focus:ring-[3px] focus:ring-[#6f9291]/50 md:text-sm"
          >
            <option value="">Välj kategori</option>
            <option>Värme eller ventilation</option>
            <option>Vatten eller avlopp</option>
            <option>El</option>
            <option>Vitvara</option>
            <option>Lås, dörr eller fönster</option>
            <option>Skadedjur</option>
            <option>Gemensamt utrymme</option>
            <option>Annat</option>
          </select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="urgency">Hur brådskande är det?</Label>
          <select
            id="urgency"
            name="urgency"
            required
            className="h-12 w-full border border-[#d6dfdc] bg-white px-3 text-base outline-none transition focus:border-[#6f9291] focus:ring-[3px] focus:ring-[#6f9291]/50 md:text-sm"
          >
            <option value="">Välj nivå</option>
            <option>Akut</option>
            <option>Behöver åtgärdas snart</option>
            <option>Ej brådskande</option>
          </select>
        </div>
        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="description">Beskriv felet</Label>
          <Textarea
            id="description"
            name="description"
            required
            rows={6}
            className="min-h-36 rounded-[0.15rem] bg-white"
            placeholder="Beskriv vad som har hänt, var i bostaden felet finns och när du upptäckte det."
          />
        </div>
      </div>

      <label className="mt-6 flex gap-3 text-sm leading-6 text-[#4f686e]">
        <input name="accessPermission" type="checkbox" value="yes" className="mt-1 h-4 w-4 accent-[#18343b]" />
        Stella eller anlitad entreprenör får gå in med huvudnyckel om jag inte är hemma.
      </label>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
        <Button type="submit" className="h-12 rounded-[0.15rem] bg-[#18343b] px-6 text-white hover:bg-[#2d4b52]">
          Skicka felanmälan <Send size={17} />
        </Button>
        {submitted && (
          <p className="flex items-center gap-2 text-sm font-medium text-[#2d6b55]">
            <CheckCircle2 size={18} /> Tack, formuläret är redo att kopplas till API.
          </p>
        )}
      </div>
    </form>
  );
}
