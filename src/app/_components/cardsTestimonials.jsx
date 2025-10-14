const testimonials = [
  {
    name: "Aninha",
    role: "Assistente Administrativo",
    image: "./images/ana.jpg",
    rating: "★★★★★",
    testimonial:
      "Os cursos da Conect mudaram minha vida profissional. Consegui meu primeiro emprego apenas 2 semanas após a conclusão do curso de Rotinas Administrativas.",
  },
  {
    name: "Paulo Mendes",
    role: "Técnico em Informática",
    image: "./images/cat.jpg",
    rating: "★★★★★",
    testimonial:
      "A qualidade do ensino e a atenção dos professores são incomparáveis. Hoje trabalho em uma grande empresa de tecnologia graças ao curso de Manutenção de Computadores.",
  },
  {
    name: "Carla Oliveira",
    role: "Recepcionista de Hotel",
    image: "./images/carla.jpg",
    rating: "★★★★★",
    testimonial:
      "O curso de Hotelaria foi fundamental para meu crescimento profissional. Aprendi na prática como lidar com os desafios do dia a dia no setor hoteleiro.",
  },
  {
    name: "Roberto Almeida",
    role: "Suporte Técnico",
    image: "./images/roberto.jpg",
    rating: "★★★★☆",
    testimonial:
      "Depois do curso de Informática Básica, consegui me atualizar e voltar ao mercado de trabalho. A metodologia prática fez toda a diferença no meu aprendizado.",
  },
];

export function CardsTestimonials() {
  return (
    <div className="grid grid-cols-1 gap-6 p-8">
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6" data-aos="fade-up"  data-aos-duration="800">
          <div className="flex items-center gap-4 mb-4">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-14 h-14 rounded-full object-cover border border-gray-300"
            />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">{testimonial.name}</h3>
              <p className="text-sm text-gray-500">{testimonial.role}</p>
              <div className="text-yellow-400 text-sm mt-1">{testimonial.rating}</div>
            </div>
          </div>
          <p className="text-gray-700 text-sm leading-relaxed">{testimonial.testimonial}</p>
        </div>
      ))}
    </div>
  );
}
