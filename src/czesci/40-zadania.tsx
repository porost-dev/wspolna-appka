import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export const tytul = "Zadania"
export const szeroka = true

const ZADANIA = [
  { co: "Ekran startowy", kto: "Ania", stan: "zrobione" },
  { co: "Lista rzeczy do zrobienia", kto: "Tomek", stan: "w toku" },
  { co: "Kolory i krój pisma", kto: "Zosia", stan: "w toku" },
  { co: "Formularz kontaktowy", kto: "—", stan: "czeka" },
]

export default function Zadania() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Zadania</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Co</TableHead>
              <TableHead>Kto</TableHead>
              <TableHead className="text-right">Stan</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {ZADANIA.map((z) => (
              <TableRow key={z.co}>
                <TableCell className="font-medium">{z.co}</TableCell>
                <TableCell>{z.kto}</TableCell>
                <TableCell className="text-right">
                  <Badge variant={z.stan === "zrobione" ? "default" : z.stan === "w toku" ? "secondary" : "outline"}>{z.stan}</Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
