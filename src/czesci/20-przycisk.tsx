import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function Przycisk() {
  const [klikniecia, setKlikniecia] = useState(0)

  return (
    <section className="px-8 py-6">
      <Button onClick={() => setKlikniecia(klikniecia + 1)}>
        Kliknij mnie
      </Button>
      <p className="mt-2 text-muted-foreground">Kliknięcia: {klikniecia}</p>
    </section>
  )
}
