import Image from "next/image"
import { Star } from "lucide-react"

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Ana Rodríguez",
      position: "CEO, Empresa Innovadora",
      image: "/placeholder.svg?height=100&width=100",
      content:
        "Los servicios proporcionados superaron nuestras expectativas. El equipo fue profesional, eficiente y realmente entendió nuestras necesidades empresariales.",
      rating: 5,
    },
    {
      name: "Carlos Méndez",
      position: "Director de Marketing, TechSolutions",
      image: "/placeholder.svg?height=100&width=100",
      content:
        "Implementar estos servicios transformó completamente nuestras operaciones. Ahora somos más eficientes y podemos centrarnos en lo que realmente importa.",
      rating: 5,
    },
    {
      name: "Laura Gómez",
      position: "Gerente de Operaciones, StartupXYZ",
      image: "/placeholder.svg?height=100&width=100",
      content:
        "El soporte al cliente es excepcional. Siempre están disponibles para resolver cualquier duda y nos han ayudado a optimizar nuestros procesos.",
      rating: 4,
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Lo que dicen nuestros clientes</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Descubre por qué nuestros clientes confían en nosotros para impulsar sus negocios.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">&quot;{testimonial.content}&quot;</p>
              <div className="flex items-center">
                <div className="mr-4">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                </div>
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

