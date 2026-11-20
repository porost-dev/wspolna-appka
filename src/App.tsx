import type { ComponentType } from "react"
import { Bezpiecznik } from "./Bezpiecznik"

// Jedna appka, jedna strona. Każdy plik w src/czesci/ to kawałek tej strony: pojawia się sam, w kolejności nazw plików
// (numer na początku nazwy ustawia miejsce). Nowy kawałek = nowy plik, więc 20 osób rzadko pisze w tym samym pliku.
const czesci = import.meta.glob<{ default?: ComponentType }>("./czesci/*.tsx", { eager: true })

export function App() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {Object.entries(czesci)
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([sciezka, modul]) => {
          const Czesc = modul.default
          return (
            <Bezpiecznik key={sciezka} nazwa={sciezka.slice("./czesci/".length, -".tsx".length)}>
              {Czesc ? <Czesc /> : null}
            </Bezpiecznik>
          )
        })}
    </main>
  )
}
