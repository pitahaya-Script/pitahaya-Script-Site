export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      
      {/* 1. FONDO ANIMADO */}
      <div 
        className="
          absolute inset-0 -z-10
          bg-gradient-to-r 
          from-indigo-500 via-purple-500 to-pink-500
          dark:from-slate-900 dark:via-indigo-950 dark:to-slate-900
          bg-[length:200%_200%]
          animate-gradient-bg
        "
      />

      {/* 2. CAPA DE SUPERPOSICIÓN (OVERLAY) */}
      {/* Garantiza legibilidad y buen contraste entre el fondo y las letras */}
      <div className="absolute inset-0 -z-10 bg-white/40 dark:bg-black/50 backdrop-blur-sm" />

      {/* 3. CONTENIDO (TEXTO AL FRENTE) */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto space-y-6">
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Construyendo proyectos{' '}
          <span className="bg-gradient-to-r from-indigo-600 to-pink-600 dark:from-indigo-400 dark:to-pink-400 bg-clip-text text-transparent">
            increíbles
          </span>
        </h1>
        
        <p className="text-lg sm:text-xl text-slate-700 dark:text-slate-300">
          Representar una forma diferente de crear páginas web: soluciones que no solo funcionan correctamente, sino que también destacan, comunican y conectan..
        </p>

        <div className="flex justify-center gap-4 pt-2">
          <button className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-medium shadow-lg transition-all active:scale-95">
            Empezar ahora
          </button>
          <button className="px-6 py-3 rounded-xl bg-white/80 dark:bg-slate-800/80 hover:bg-white dark:hover:bg-slate-800 text-slate-900 dark:text-white font-medium border border-slate-200 dark:border-slate-700 transition-all active:scale-95">
            Saber más
          </button>
        </div>
      </div>

    </section>
  );
}