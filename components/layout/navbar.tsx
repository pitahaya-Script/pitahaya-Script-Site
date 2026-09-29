import Link from 'next/link';
import { ThemeSelector } from './ThemeSelector';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md dark:border-gray-800 dark:bg-gray-950/80">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Lado Izquierdo: Logo */}
            <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2 text-xl font-bold text-gray-900 dark:text-white">
                {/* Puedes poner un icono SVG o una imagen aquí */}
                <span className="rounded-lg bg-fuchsia-500 px-2.5 py-1 text-white">My</span>
                <span>Pitahaya</span>
            </Link>
            </div>

            {/* Lado Derecho: Input de Búsqueda */}
            <div className="flex items-center">
                <div className="relative w-48 sm:w-64 md:w-80">
                    {/* Icono de Lupa dentro del Input */}
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg
                        className="h-4 w-4 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                    </div>

                    {/* Input */}
                    <input
                    type="search"
                    placeholder="Buscar..."
                    className="w-full rounded-full border border-gray-300 bg-gray-50 py-1.5 pl-9 pr-4 text-sm text-gray-900 outline-none transition-colors focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-400"
                    />

                </div>
            </div>
            <div>
                <ThemeSelector />
            </div>
        </div>
    </header>
  );
}