'use client'

import { Check } from "lucide-react";
import Link from "next/link";
import { Orbitron } from "next/font/google";
import { ImageHero } from "./imageHero";
import Image from "next/image";
import { useState, useEffect } from "react";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: "800"
})

const features = [
  'Certificado reconhecido pelo mercado',
  'Professores especialistas e atuantes',
  'Acompanhamento personalizado',
];

export function Hero() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Isso garante que o estado mude APENAS após a montagem inicial do lado do cliente
    setIsMounted(true);
  }, []);

  // Define a classe de entrada condicionalmente
  const heroTextClasses = isMounted 
    ? "animate-in slide-in-from-left duration-1000" // Com animação
    : "opacity-0 translate-x-[-100%]"; // Posição inicial escondida

  const heroImageClasses = isMounted 
    ? "animate-in slide-in-from-right duration-1000" // Com animação
    : "opacity-0 translate-x-[100%]"; // Posição inicial escondida

  return (
    <section className="h-auto w-full flex justify-center items-center">
      {/*Conteúdo principal */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:flex lg:px-8">
        
        {/* Imagem fixa para telas mobile */}
        <div className={`flex-1 h-auto lg:hidden animate-in slide-in-from-right duration-1000 ${heroImageClasses}`}>
            <ImageHero/>
        </div>

        <div className={`flex-1 flex items-center animate-in slide-in-from-left duration-1000 ${heroTextClasses}`}>
          <div className="grid grid-cols-1 text-center gap-2 lg:text-left">
            <h1 className={`${orbitron.className} text-3xl m-auto md:text-4xl font-bold leading-snug text-white`}>
              <span className="text-green-500">Conecte-se</span> à melhor instituição
              de ensino de Arapiraca e
              <span className="text-orange-500"> transforme</span> o seu <span className="text-blue-600">futuro</span>
            </h1>
            <p className="text-base mb-auto text-gray-400">
              Aprenda habilidades práticas e conquiste as melhores <br className="hidden md:inline" />
              oportunidades no mercado de trabalho com a Conect Cursos Profissionalizantes.
            </p>
            <div className="grid justify-items-center lg:flex">
              <ul className="hidden space-y-1 mb-auto text-gray-400">
                {features.map((item, index) => (
                  <li key={index} className="flex items-center md:justify-start gap-2">
                    <Check color="green"/>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="py-6">
              <Link
                href="https://chat.whatsapp.com/BdHrhoU0rLWJOAoWfNnvA5"
                className="inline-flex items-center gap-2 text-white px-10 py-2 rounded font-bold bg-green-700 hover:bg-green-800 active:bg-green-800 md:active:bg-green-700 animate-wave"
              >
                ENTRE AGORA E TIRE SUAS DÚVIDAS!
                <Image src="./images/whatsapp-theme-white.svg" alt="Botão Entre para a comunidade" width={30} height={30}/>
              </Link>
            </div>
          </div>
        </div>

        {/* Imagem fixa para telas grandes */}
        <div className={`flex-1 h-auto hidden lg:block animate-in slide-in-from-right duration-1000 ${heroImageClasses}`}>
            <ImageHero/>
        </div>
      </div>
    </section>
  );
}

