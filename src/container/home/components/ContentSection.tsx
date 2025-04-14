"use client";

import Image from "next/image";

const projects = [
  {
    id: 1,
    image: "/aboutimage5.svg",
    alt: "About Image 1",
    size: "small", // 240x240
    className: "col-span-1"
  },
  {
    id: 2,
    image: "/aboutimage4.svg",
    alt: "About Image 2",
    size: "large", // 320x320
    className: "col-span-1"
  },
  {
    id: 3,
    image: "/aboutimage1.svg",
    alt: "About Image 3",
    size: "small", // 240x240
    className: "col-span-1"
  },
  {
    id: 4,
    image: "/aboutimage2.svg",
    alt: "About Image 4",
    size: "large", // 320x320
    className: "col-span-1"
  },
  {
    id: 5,
    image: "/aboutimage3.svg",
    alt: "About Image 5",
    size: "small", // 240x240
    className: "col-span-1"
  }
];

export default function ContentSection() {
  return (
    <section className="py-10 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <span className="inline-block text-teal-600 bg-teal-50 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            Haqqımızda
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-zinc-900 mb-6">
            Title text here
          </h2>
          <p className="text-zinc-600 max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet consectetur. Urna condimentum at id eu. Et est dignissim tristique integer nullam fringilla.
            Sed in scelerisque ornare nullam nibh sit. Porttitor facilisis imperdiet amet elementum laoreet lectus risus.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* First row */}
          <div className="col-span-2 flex justify-center gap-6 items-end">
            <div className="relative rounded-2xl overflow-hidden w-[96px] h-[96px] md:w-[240px] md:h-[240px]">
              <Image
                src={projects[0].image}
                alt={projects[0].alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden w-[120px] h-[120px] md:w-[320px] md:h-[320px]">
              <Image
                src={projects[1].image}
                alt={projects[1].alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          {/* Second row */}
          <div className="col-span-2 flex justify-center gap-6 items-start flex-wrap">
            <div className="relative rounded-2xl overflow-hidden w-[96px] h-[96px] md:w-[240px] md:h-[240px]">
              <Image
                src={projects[2].image}
                alt={projects[2].alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden w-[120px] h-[120px] md:w-[320px] md:h-[320px]">
              <Image
                src={projects[3].image}
                alt={projects[3].alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden w-[96px] h-[96px] md:w-[240px] md:h-[240px]">
              <Image
                src={projects[4].image}
                alt={projects[4].alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
