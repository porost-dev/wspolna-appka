import { Component, type ReactNode } from "react"

// Granica błędu: gdy jedna część appki wywróci się w trakcie działania, reszta strony zostaje na rzutniku.
type Wlasciwosci = { nazwa: string; children: ReactNode }

export class Bezpiecznik extends Component<Wlasciwosci, { blad: string | null }> {
  state = { blad: null as string | null }

  static getDerivedStateFromError(e: unknown) {
    return { blad: e instanceof Error ? e.message : String(e) }
  }

  render() {
    if (this.state.blad)
      return (
        <div className="m-4 rounded-md border border-destructive/40 bg-destructive/5 p-3 text-sm text-destructive">
          Część „{this.props.nazwa}” się wywróciła: {this.state.blad}
        </div>
      )
    return this.props.children
  }
}
