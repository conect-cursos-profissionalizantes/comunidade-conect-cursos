import { CircleCheckBig } from "lucide-react";
import Image from "next/image";

const skills = [
            "Professores com experiência no mercado",
            "Metodologia prática e focada em resultados",
            "Certificado reconhecido no mercado",
            "Encaminhamento para o mercado de trabalho"
        ];
    

export function AboutUs() {
    return (
        <section className="flex justify-center items-center h-auto" id="about-us">
            <div className="h-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center" data-aos="fade-up"  data-aos-duration="800">
                    <h1 className="font-sans text-3xl font-bold pt-10">Sobre <span className="text-green-600">nós</span></h1>
                </div>

                <div className="grid grid-cols-1 justify-items-center lg:grid-cols-2 gap-6 pt-6" data-aos="fade-up"  data-aos-duration="800">
                    <div data-aos="fade-up"  data-aos-duration="800">
                        <Image
                            src="./images/girl-using-computer.svg"
                            alt="Garota usando um computador" className="w-[600px] h-[400px]"/>
                    </div>
                    <div data-aos="fade-up"  data-aos-duration="800">
                        <h2 className="w-auto text-2xl">Referência em formação profissional há mais de 10 anos</h2>

                        <p className="pt-4">
                            A Conect Cursos Profissionalizantes nasceu da necessidade de
                            oferecer capacitação de qualidade e acessível para pessoas que
                            buscam entrar rapidamente no mercado de trabalho.
                        </p>

                        <p className="pt-4">
                            Com metodologia prática e professores experientes, já formamos
                            mais de 2 mil profissionais que hoje atuam nas mais diversas
                            áreas. Nossa missão é transformar vidas atráves da educação
                            profissionalizante de qualidade.
                        </p>

                        <ul className="pt-4">
                            {
                                skills.map((skill, index) => (
                                    <li key={index} className="flex items-center gap-2 pt-2">
                                        <div className="inline-block p-2 rounded-full bg-amber-100">
                                            <CircleCheckBig color="green"/>
                                        </div>
                                        <p>{skill}</p>
                                    </li>
                                ))
                            }
                        </ul>

                    </div>
                </div>
            </div>
        </section>
    );
}