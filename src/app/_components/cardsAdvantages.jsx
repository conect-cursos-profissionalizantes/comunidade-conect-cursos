import { Star, IdCardLanyard, Medal, Users } from "lucide-react";

const advantages = [
    {
        image: <div className="inline-block p-2 rounded bg-amber-100"><Star color="#B45309"/></div>,
        title: "Descontos exclusivos",
        descrition: "Membros da nossa comunidade têm acesso a descontos especiais em todos os nossos cursos e materiais didáticos."
    },
    {
        image: <div className="inline-block p-2 rounded bg-emerald-100"><IdCardLanyard color="green"/></div>,
        title: "Oportunidades de emprego",
        descrition: "Temos parceria com empresas locais que buscam profissionais qualificados para compor suas equipes."
    },
    {
        image: <div className="inline-block p-2 rounded bg-blue-100"><Medal color="#7E22CE"/></div>,
        title: "Conteúdo exclusivo",
        descrition: "Acesso a workshops online, e-books e tutoriais que complementam o aprendizado dos cursos presenciais."
    },
    {
        image:<div className="inline-block p-2 rounded bg-blue-100"> <Users color="#943EDE"/></div>,
        title: "Networking profissional",
        descrition: "Conecte-se com outros profissionais da área e amplie sua rede de contatos para futuras oportunidades."
    }
]

export function CardAdvantages() {
    return (
        <div className="h-auto grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
            {
                advantages.map((advantages, index) => (
                    <div key={index} className="flex justify-between w-auto h-auto m-2 p-4 rounded-md shadow bg-white" data-aos="fade-up"  data-aos-duration="800">
                        <div className="w-[20%] h-full">
                            {advantages.image}
                        </div>
                        <div className="w-[80%] text-cyan-950">
                            <h3 className="text-black font-bold mt-2">{advantages.title}</h3>
                            <p className="pt-2">{advantages.descrition}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}