import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import { App } from "./App"
import { Bezpiecznik } from "./Bezpiecznik"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Bezpiecznik nazwa="appka">
      <App />
    </Bezpiecznik>
  </StrictMode>,
)
