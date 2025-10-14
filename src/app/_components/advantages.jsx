import { CardAdvantages } from "./cardsAdvantages"
import Image from "next/image";

export function Advantages() {
    return (
        <section className="flex justify-center items-center w-full h-auto"
            id="advantages">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 xl:grid-cols-2 pt-18">
                <div data-aos="fade-up"  data-aos-duration="800">
                    <h2 className="font-sans tex-center text-2xl font-bold">
                        Vantagens exclusivas para membros da nossa <span className="text-green-700"> comunidade</span>
                    </h2>
                    <p className="pt-2">
                        Ao fazer parte da nossa comunidade no WhatsApp, você terá acesso a
                        diversos <br /> benefícios que impulsionarão sua carreira profissional.
                    </p>

                    <div className="w-auto xl:mr-10 flex p-6 rounded-2xl border-l-4 border-x-green-700 shadow mt-6 bg-white">

                        <div>
                            <Image src="./images/whatsapp.png" alt="Comunidade" className="w-[120px]" />
                        </div>
                        <div className="text-cyan-950 ml-4">
                            <h3 className="text-black font-bold">Comunidade ativa</h3>
                            <p className="pt-2">
                                Nossa comunidade no WhatsApp é um espaço para networking,       dúvidas, compartilhamento de vagas e dicas profissionais.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-4">
                    <CardAdvantages />
                </div>
            </div>
        </section>
    );
}