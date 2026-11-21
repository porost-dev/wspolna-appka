import type { ComponentType } from "react"
import { LayoutDashboard, Search } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Bezpiecznik } from "./Bezpiecznik"

// Dashboard. Każdy plik w src/czesci/ to jedna sekcja: pojawia się sam, w kolejności nazw plików (numer na początku
// ustawia miejsce), i sam dostaje pozycję w menu po lewej. Nowa sekcja = nowy plik, więc 20 osób rzadko pisze
// w tym samym pliku. W pliku: `export default` (sekcja), `export const tytul` (napis w menu), `export const szeroka = true`
// (sekcja na całą szerokość zamiast połowy).
type Czesc = { default?: ComponentType; tytul?: string; szeroka?: boolean }
const czesci = Object.entries(import.meta.glob<Czesc>("./czesci/*.tsx", { eager: true }))
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([sciezka, modul]) => {
    const nazwa = sciezka.slice("./czesci/".length, -".tsx".length)
    return { nazwa, modul, tytul: modul.tytul ?? nazwa.replace(/^\d+-/, "").replace(/-/g, " ") }
  })

export function App() {
  return (
    <div className="flex min-h-screen bg-background text-foreground">
      <aside className="sticky top-0 hidden h-screen w-60 shrink-0 flex-col border-r bg-card md:flex">
        <div className="flex items-center gap-2 px-5 py-5 font-semibold">
          <LayoutDashboard className="size-5" /> Nasza appka
        </div>
        <nav className="flex flex-col gap-0.5 px-3">
          {czesci.map((c) => (
            <a key={c.nazwa} href={`#${c.nazwa}`} className="rounded-md px-3 py-2 text-sm capitalize text-muted-foreground hover:bg-muted hover:text-foreground">
              {c.tytul}
            </a>
          ))}
        </nav>
        <p className="mt-auto px-5 py-4 text-xs text-muted-foreground">Budujemy ją razem, na żywo.</p>
      </aside>
      <div className="flex min-w-0 flex-1 flex-col">
        <header className="sticky top-0 z-10 flex items-center gap-4 border-b bg-background/90 px-6 py-3 backdrop-blur">
          <h1 className="text-lg font-semibold">Pulpit</h1>
          <div className="relative ml-auto w-64">
            <Search className="absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Szukaj…" className="pl-8" />
          </div>
          <Avatar>
            <AvatarFallback>DIY</AvatarFallback>
          </Avatar>
        </header>
        <main className="grid gap-4 p-6 md:grid-cols-2">
          {czesci.map(({ nazwa, modul }) => {
            const Sekcja = modul.default
            return (
              <section key={nazwa} id={nazwa} className={`scroll-mt-20 ${modul.szeroka ? "md:col-span-2" : ""}`}>
                <Bezpiecznik nazwa={nazwa}>{Sekcja ? <Sekcja /> : null}</Bezpiecznik>
              </section>
            )
          })}
        </main>
      </div>
    </div>
  )
}
