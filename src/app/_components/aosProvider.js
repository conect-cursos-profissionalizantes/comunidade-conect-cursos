// app/components/AosProvider.js

'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Importe o CSS do AOS

export default function AosProvider({ children }) {
  useEffect(() => {
    // Inicialização do AOS
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out', // Bom easing para sliders
    });
  }, []);

  return (
    // Renderiza os filhos. O AOS já está ativo neste ponto.
    <>
      {children}
    </>
  );
}