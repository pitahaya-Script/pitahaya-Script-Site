'use client';

import { ReactNode } from 'react';
import { ReactLenis } from 'lenis/react';

interface SmoothScrollProps {
  children: ReactNode;
}

export function SmoothScroll({ children }: SmoothScrollProps) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,        // Intensidad de la inercia (0.1 es el valor suave por defecto)
        duration: 1.2,     // Duración de la animación del scroll
        smoothWheel: true, // Activa el smooth scroll para la rueda del ratón
      }}
    >
      {children}
    </ReactLenis>
  );
}