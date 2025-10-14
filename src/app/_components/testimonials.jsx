import { CardsTestimonials } from "./cardsTestimonials";

export function Testimonials() {
    return (
        <section className="flex justify-center items-center  h-auto" id="testimonials">
            <div className="h-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" data-aos="fade-up" data-aos-duration="800">
                <div className="text-center">
                    <h1 className="font-sans text-3xl font-bold pt-10">O que nossos <span className="text-green-600">alunos</span> dizem</h1>
                    <p className="pt-2"
                    >Histórias reais de alunos que transformaram suas vidas através dos
                        nossos cursos profissionalizantes.</p>
                </div>
                <div className="h-auto mt-4">
                    <CardsTestimonials/>
                </div>
            </div>
        </section>
    );
}

