scaleffolding


mi-proyecto/
├── app/                  # Solo definición de rutas y layouts
│   ├── layout.tsx        # HTML base, fuentes, metadatos globales
│   ├── page.tsx          # Landing page (Ruta: /)
│   ├── about/            # Subruta /about
│   │   └── page.tsx
│   └── globals.css       # Estilos globales / Tailwind
│
├── components/           # Componentes visuales organizados
│   ├── ui/               # Componentes atómicos/reutilizables (Botones, Modales, Inputs)
│   ├── sections/         # Secciones completas de la Landing Page
│   │   ├── hero.tsx
│   │   ├── features.tsx
│   │   ├── pricing.tsx
│   │   └── footer.tsx
│   └── layout/           # Componentes estructurales (Navbar, Sidebar)
│       └── navbar.tsx
│
├── lib/                  # Utilidades, utilidades de clases (clsx/cn), clientes de API
│   └── utils.ts
│
├── public/               # Imágenes estáticas, SVG, favicon, etc.
│   ├── logo.svg
│   └── hero-banner.webp
│
└── types/                # Definiciones de TypeScript
    └── index.ts