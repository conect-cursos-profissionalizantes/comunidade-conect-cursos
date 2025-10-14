import { CardsCourses } from "./cardsCourses.jsx";
import Image from "next/image.js";
import ArrowIcon from "../../../public/images/arrow.png";

export function Courses() {
    return (
        <section className="h-auto flex justify-center items-center" id="courses">
           <div className="h-full justify-items-center mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Image src={ArrowIcon} alt="Seta de indicação de mais conteúdo ao rolar página" className="pt-8 opacity-95 animate-bounce duration-1000" width={40} height={40}/>

             <h1 className="font-sans text-center text-3xl font-bold pt-10" data-aos="fade-up" data-aos-duration="800">Nossos <span className="text-green-500">cursos</span></h1>
             
             <p className="text-center pt-2" data-aos="fade-up" data-aos-duration="800">Oferecemos cursos práticos e atualizados com o que o mercado precisa. Comece sua jornada profissional agora mesmo.</p>

             <div>
              <CardsCourses/>
             </div>

           </div>
        </section>
    );
}