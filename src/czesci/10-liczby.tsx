import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const tytul = "Liczby"
export const szeroka = true

const LICZBY = [
  { nazwa: "Osoby", wartosc: "20", zmiana: "+4" },
  { nazwa: "Pomysły", wartosc: "37", zmiana: "+12" },
  { nazwa: "Zrobione", wartosc: "8", zmiana: "+3" },
  { nazwa: "Do zrobienia", wartosc: "29", zmiana: "−2" },
]

export default function Liczby() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {LICZBY.map((l) => (
        <Card key={l.nazwa}>
          <CardHeader>
            <CardDescription>{l.nazwa}</CardDescription>
            <CardTitle className="flex items-baseline justify-between text-3xl tabular-nums">
              {l.wartosc} <Badge variant="secondary">{l.zmiana}</Badge>
            </CardTitle>
          </CardHeader>
        </Card>
      ))}
    </div>
  )
}
