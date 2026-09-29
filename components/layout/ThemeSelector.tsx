"use client"

import { useTheme } from "next-themes"

export function ThemeSelector() {
  const { theme, setTheme } = useTheme()

  return (
    <select
      value={theme}
      onChange={(event) => setTheme(event.target.value)}
      className="rounded-md border-md bg-background px-3 py-2 text-sm text-foreground outline-none"
    >
      <option value="light">Claro</option>
      <option value="dark">Oscuro</option>
      <option value="system">Sistema</option>
    </select>
  )
}