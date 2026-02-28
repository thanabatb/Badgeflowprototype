import { Star } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const testimonials = [
  {
    quote:
      "BadgeFlow transformed how we recognize our learners. The engagement has increased by 300% since we started using digital badges!",
    author: "Sarah Chen",
    role: "Director of Learning, TechEdu",
    image:
      "https://images.unsplash.com/photo-1770364286848-14b7892dd26a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHNtaWxpbmclMjBhc2lhbnxlbnwxfHx8fDE3NzE2Nzg4MTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    quote:
      "The easiest credential platform we've ever used. Setup took minutes, and our team loves the beautiful badge designs.",
    author: "Michael Rodriguez",
    role: "HR Manager, Innovation Corp",
    image:
      "https://images.unsplash.com/photo-1764084051711-45a3b7c84c06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBzbWlsaW5nJTIwY2F1Y2FzaWFufGVufDF8fHx8MTc3MTY3ODgxMXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    quote:
      "Finally, a badge platform that feels modern and actually motivates people. The analytics help us improve our programs continuously.",
    author: "Aisha Johnson",
    role: "VP of Talent Development, GlobalTech",
    image:
      "https://images.unsplash.com/photo-1632054890505-dcfb97d25fe0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGFmcmljYW4lMjBhbWVyaWNhbnxlbnwxfHx8fDE3NzE2MDQ1OTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-sm text-amber-700 font-medium mb-3 tracking-wide">
            TESTIMONIALS
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-gray-900">
            Loved by teams around the world
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-3xl p-8 hover:bg-gray-100 transition-colors"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-8 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-3">
                <ImageWithFallback
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-900">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
