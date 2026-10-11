export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      
      {/* 1. FONDO ANIMADO */}
        <div 
        className="
          absolute inset-0 -z-10
          bg-[linear-gradient(to_right,#F83381,#CD5081,#BCC145,#FFFFFF)]
          dark:bg-[linear-gradient(to_right,#000000,#191A24,)]
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
          <span className="bg-gradient-to-r bg-gradient-to-r from-[#E70669] via-[#F83381] to-[#E70669] dark:from-[#E70669] dark:via-[#F83381] dark:to-[#E70669] bg-clip-text text-transparent">
            increíbles
          </span>
        </h1>
        
        <p className="text-lg sm:text-xl text-slate-700 dark:text-slate-300">
          Representar una forma diferente de crear páginas web: soluciones que no solo funcionan correctamente, sino que también destacan, comunican y conectan..
        </p>

        <div className="flex justify-center gap-4 pt-2">
          <button className="px-6 py-3 rounded-xl bg-[#E70669] hover:bg-[#BCC145] text-white font-medium shadow-lg transition-all active:scale-95  dark:bg-[#BCC145] dark:hover:bg-[#E70669]">
            Contacto
          </button>
          <button className="px-6 py-3 rounded-xl bg-white/80 dark:bg-slate-800/80 hover:bg-white dark:hover:bg-slate-800 text-slate-900 dark:text-white font-medium border border-slate-200 dark:border-slate-700 transition-all active:scale-95">
            Nuestros proyectos
          </button>
        </div>
      </div>

    </section>
  );
}