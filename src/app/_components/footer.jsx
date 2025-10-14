import { MapPin, Phone, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const courses = [
    "Informática básica",
    "Manutenção de computadores",
    "Atendente de Farmácia",
    "Rotinas Administrativas",
    "Hotelaria",
  ];

const options = [
    { label: 'Cursos', id: 'courses' },
    { label: 'Vantagens', id: 'advantages' },
    { label: 'Depoimentos', id: 'testimonials' },
    { label: 'Sobre nós', id: 'about-us' },
];

export function Footer() {
    return (
        <footer className="h-auto flex justify-center bg-neutral-800">
            <div className="w-6xl pt-18">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 justify-around">
                    <div className="w-[300px] p-6">
                        <h3 className="text-white font-bold">Conect Cursos</h3>
                        <p className="pt-2 text-gray-400">Transformando vidas através da educação profissionalizante de qualidade há mais de 10 anos.</p>

                        <ul className="flex pt-4 gap-3">
                            <li><Link href="https://www.instagram.com/conect_cursos/"><Image src="./images/instagram.png" alt="instagram" className="w-[28px] h-[28px]"/></Link></li>
                            <li><Link href="https://api.whatsapp.com/send/?phone=5582999838355&text&type=phone_number&app_absent=0"><Image src="./images/whatsapp-theme-white.png" alt="Ícone do WhatsApp na cor branca" className="w-[28px] h-[28px]"/></Link></li>
                        </ul>
                    </div>

                    <div className="p-6">

                        <h3 className="text-white font-bold">Cursos</h3>
                        <ul className="pt-2">
                            {
                                courses.map((course, index) => (
                                    <li key={index} className="text-gray-400">
                                        <a href="#courses">{course}</a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    <div className="p-6">
                        <h3 className="text-white font-bold">Links rápidos</h3>
                        <ul className="pt-2">
                            {
                                options.map((option, index) => (
                                    <li key={index} className="text-gray-400">
                                        <a href={`#${option.id}`}>{option.label}</a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    <div className="p-6">
                        <h3 className="text-white font-bold">Contato</h3>
                        <ul className="pt-2 text-gray-400">
                            <li className="flex items-center gap-2">
                                <Link href="https://maps.app.goo.gl/Fzy7935Q7vnJEzyUA">
                                    <MapPin color="green" size={24}/>
                                </Link>
                                    <div>
                                        <adress>Rua Esperidião Rodrigues <br/> nº 41-Centro- Arapiraca/AL</adress>
                                    </div>
                            </li>
                            <li className="flex items-center gap-2 pt-2">
                                <Phone color="green" size={24}/> 
                                <span>3522-1166</span>
                            </li>
                            <li className="flex items-center gap-2 pt-2">
                                <Mail color="green" size={24}/> <span>lp.conectcursos@gmail.com</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr className="border-gray-600"/>
                <div className="text-center text-sm text-white pt-4 pb-6">
                    <p>&copy; {new Date().getFullYear()} Conect Cursos Profissionalizantes. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
}