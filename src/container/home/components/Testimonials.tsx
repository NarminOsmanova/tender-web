"use client"

import * as React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem, 
  CarouselNext,
  CarouselPrevious,
} from "@/shared/components/ui/carousel"
import { Star } from "lucide-react"

const testimonials = [
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur. Ut duis felis vitae lectus amet vel enim et. Ultrices neque ac nibh neque id dui semper mattis.",
    name: "Company name",
    rating: 4,
  },
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur. Ut duis felis vitae lectus amet vel enim et. Ultrices neque ac nibh neque id dui semper mattis.",
    name: "Company name",
    rating: 5,
  },
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur. Ut duis felis vitae lectus amet vel enim et. Ultrices neque ac nibh neque id dui semper mattis.",
    name: "Company name",
    rating: 4,
  },
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur. Ut duis felis vitae lectus amet vel enim et. Ultrices neque ac nibh neque id dui semper mattis.",
    name: "Another Company",
    rating: 5,
  },
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur. Ut duis felis vitae lectus amet vel enim et. Ultrices neque ac nibh neque id dui semper mattis.",
    name: "Another Company",
    rating: 5,
  },
]

// Helper function to group testimonials
const groupTestimonials = (data: typeof testimonials, size: number) => {
  const grouped = []
  for (let i = 0; i < data.length; i += size) {
    grouped.push(data.slice(i, i + size))
  }
  return grouped
}

function StarRating({ rating }: { rating: number }) {
  const stars = []
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <Star
        key={i}
        className={`w-5 h-5 ${
          i <= rating ? "fill-yellow-400 text-yellow-400" : "text-yellow-400"
        }`}
      />
    )
  }
  return <div className="flex gap-1">{stars}</div>
}

export function Testimonials() {
  const groupedData = groupTestimonials(testimonials, 3)

  return (
    <section className="py-24" id="testimonials">
      <div className="container">
        <div className="text-center mb-16">
          <span className="inline-block text-teal-600 bg-teal-50 px-4 py-1.5 rounded-full text-lg font-medium mb-4">
            Müştəri rəyləri
          </span>
          <h2 className="text-2xl md:text-4xl font-medium text-zinc-900">
            Müştərilərimiz bizim haqqımızda nələr düşünür?
          </h2>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {groupedData.map((group, groupIndex) => (
              <CarouselItem key={groupIndex}>
                <div className="flex flex-col gap-6 p-1"> 
                  {group.map((testimonial, itemIndex) => {
                    const backgroundStyle = itemIndex % 2 === 0 
                      ? { background: 'linear-gradient(90deg, #EAFFFC 0%, #FFFFFF 100%)' }
                      : { background: 'linear-gradient(270deg, #EAFFFC 0%, #FFFFFF 100%)' };

                    return (
                      <div
                        key={itemIndex}
                        className="p-8 rounded-lg space-y-4 flex flex-col justify-center items-center"
                        style={backgroundStyle}
                      >
                        <StarRating rating={testimonial.rating} />
                        <p className="text-lg font-medium text-zinc-900">
                          {testimonial.name}
                        </p>
                        <blockquote className="text-zinc-600 italic text-center">
                          “{testimonial.quote}”
                        </blockquote>
                      </div>
                    );
                  })}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-4 mt-8">
            <CarouselPrevious className="static translate-y-0" />
            <CarouselNext className="static translate-y-0" />
          </div>
        </Carousel>
      </div>
    </section>
  )
}
