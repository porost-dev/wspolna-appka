import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const tytul = "Tydzień"

const DNI = [
  ["pn", 4], ["wt", 7], ["śr", 5], ["cz", 9], ["pt", 12], ["sb", 6], ["nd", 3],
] as const
const MAX = Math.max(...DNI.map(([, v]) => v))

export default function Tydzien() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Tydzień</CardTitle>
        <CardDescription>Ile rzeczy zrobiliśmy każdego dnia</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex h-40 items-end gap-3">
          {DNI.map(([dzien, ile]) => (
            <div key={dzien} className="flex h-full flex-1 flex-col items-center gap-2">
              <div className="flex w-full flex-1 items-end">
                <div className="w-full rounded-t-md bg-primary/80" style={{ height: `${(ile / MAX) * 100}%` }} />
              </div>
              <span className="text-xs text-muted-foreground">{dzien}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
