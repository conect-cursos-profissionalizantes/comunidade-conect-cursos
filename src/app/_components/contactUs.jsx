import { Form } from "./form";
import { Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function ContactUs() {
    return (
        <section className="flex justify-center items-center w-full h-auto pb-28" id="contact-us">
            <div className="w-full h-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center" data-aos="fade-up"  data-aos-duration="800">
                    <h1 className="font-sans pt-10 text-3xl font-bold">Fale <span className="text-green-600">conosco</span></h1>
                    <p className='pt-2'>Estamos prontos para atender você e tirar todas as <br/> suas dúvidas sobre nossos cursos profissionalizantes.</p>
                </div>
                <div className="grid grid-cols-1 justify-center lg:flex xl:flex pt-8" data-aos="fade-up"  data-aos-duration="800">
                    <div className="lg:w-1/2">
                        <Form/>
                    </div>
                    <div>
                        <div className="rounded-2xl shadow-2xl m-4 p-4 ">
                            <h3 className="font-bold">Informações de contato</h3>
                            <div className="flex items-center gap-4 mt-4">
                                <div className="inline-block p-2 rounded-full bg-green-200">
                                    <Phone color="green"/>
                                </div>
                                    <div>
                                        <h4 className="font-bold">Telefone</h4>
                                        <p>3522-1166</p>
                                    </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="inline-block p-2 rounded-full bg-green-100 "><Mail color="green"/></div>
                                    <div>
                                        <h4 className="font-bold">E-mail</h4>
                                        <p>lp.conectcursos@gmail.com</p>
                                    </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <Link href="https://maps.app.goo.gl/Fzy7935Q7vnJEzyUA" className="inline-block p-2 rounded-full bg-green-100">
                                    <MapPin color="green"/>
                                </Link>
                                    <div>
                                        <h4 className="font-bold">Endereço</h4>
                                        <adress>Endereço: Rua Esperidião Rodrigues <br/> nº 41-Centro- Arapiraca/AL</adress>
                                    </div>
                            </div>
                        </div>
                        <div className="h-auto flex rounded-2xl gap-2 shadow-2xl m-4 p-4 bg-green-800">
                            <div className="pt-4">
                                <Image src="./images/whatsapp-theme-white.png" alt="Ícone do WhatsApp" className="w-[50px]"/>
                            </div>
                            <div className="p-4 text-white">
                                <h3 className="font-bold">Entre para nossa comunidade</h3>
                                <p className="mt-4">Receba ofertas exclusivas, dicas profissionais e <br/>oportunidades de emprego diretamente no seu WhatsApp.</p>

                                <div className="pt-8">
                                    <Link href="https://chat.whatsapp.com/BdHrhoU0rLWJOAoWfNnvA5" 
                                    type="submit" 
                                    className="rounded-2xl p-4 text-orange-700 bg-neutral-800 hover:bg-neutral-900 active:bg-neutral-900 md:active:bg-neutral-800">Entrar agora mesmo</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}