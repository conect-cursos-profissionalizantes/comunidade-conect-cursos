import { LaptopMinimalCheck, MonitorCog, Pill, NotebookPen, Coffee, Check} from "lucide-react";
import Link from "next/link";

const courses = [
  {
    title: "Informática Básica",
    description: "Aprenda os fundamentos da informática, desde o uso do sistema operacional até os aplicativos mais utilizados no mercado de trabalho.",
    image: <div className="inline-block p-2 rounded bg-blue-200"><LaptopMinimalCheck color='blue'/></div>,
    alt: "Informática Básica",
    topics: [
      "Windows",
      "Word",
      "Excel",
      "PowerPoint",
      "Internet" 
    ]
  },
  {
    title: "Manutenção de Computadores",
    description: "Domine as técnicas de manutenção preventiva e corretiva de computadores, notebooks e periféricos.",
    image: <div className="inline-block p-2 rounded bg-green-200"><MonitorCog color="green"/></div>,
    alt: "Manutenção de Computadores",
    topics: [
     "Hardware",
     "Software",
     "Formatação",
     "Limpeza",
     "Diagnótico"
    ]
  },
  {
    title: "Atendente de Farmácia",
    description: "Prepare-se para atuar no atendimento e rotinas essenciais de farmácias e drogarias, com foco em excelência e ética.",
    image: <div className="inline-block p-2 rounded bg-blue-200"><Pill color="blue" /></div>,
    alt: "Curso Atendente de Farmácia",
    topics: [
      "Atendimento ao cliente",
      "Serviços farmacêuticos",
      "Ética profissional",
      "Primeiros socorros",
      "Organização de estoque" // Adicionei um tópico relevante
    ]
  },
  {
    title: "Rotinas Administrativas",
    description: "Capacite-se para atuar em setores administrativos, apredendo processos essenciais para o funcionamento de qualquer empresa.",
    image: <div className="inline-block p-2 rounded bg-amber-100"><NotebookPen color="#B45309"/></div>,
    alt: "Rotinas Administrativas",
    topics: [
      "Gestão de documentos",
      "Atendimento",
      "Arquivamento",
      "Organização",
      "Processos" 
    ]
  },
  {
    title: "Hotelaria",
    description: "Prepare-se para trabalhar em hotéis e pousadas, dominando técnicas de atendimento, organização e gestão hoteleira.",
    image: <div className="inline-block p-2 rounded bg-blue-100"><Coffee color="#7E22CE"/></div>,
    alt: "Hotelaria",
    topics: [
      "Recepção",
      "Governança",
      "Eventos",
      "Restaurante",
      "Reservas"
    ]
  }
];

export function CardsCourses() {
  return (
    <div className="grid grid-cols-1 justify-items-center sm:grid-cols-2 md:justify-items-center xl:grid-cols-3 gap-4 mt-8" data-aos="fade-up"  data-aos-duration="800"> 

      {courses.map((course, index) => (
        <div
          key={index}
          className="p-4 rounded-md w-[300px] shadow-md bg-gray-900 flex flex-col justify-between">
          <div>
            {course.image}
            <div>
              <h3 className="text-lg font-bold">{course.title}</h3>
              <p className="text-sm mb-3">{course.description}</p>
            </div>
            <ul className="space-y-1 mb-3">
              {course.topics.map((topic, id) => (
                <li key={id} className="flex items-center">
                  <Check/>
                  <span>{topic}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="py-2">
            <Link href="https://api.whatsapp.com/send/?phone=5582999838355&text&type=phone_number&app_absent=0"
            className="w-full inline-flex justify-center text-white px-3 py-1 rounded bg-green-700 hover:bg-green-800 active:bg-green-800 md:active:bg-green-700">
                Fazer matrícula
             
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}