import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export const tytul = "Cele"

const CELE = [
  { nazwa: "Pierwsza wersja", procent: 80 },
  { nazwa: "Wygląd", procent: 45 },
  { nazwa: "Teksty", procent: 30 },
]

export default function Cele() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Cele</CardTitle>
        <CardDescription>Jak daleko jesteśmy</CardDescription>
      </CardHeader>
      <CardContent className="space-y-5">
        {CELE.map((c) => (
          <div key={c.nazwa} className="space-y-1.5">
            <div className="flex justify-between text-sm">
              <span>{c.nazwa}</span>
              <span className="tabular-nums text-muted-foreground">{c.procent}%</span>
            </div>
            <Progress value={c.procent} />
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
