import Image from "next/image"

export function Testimonials() {
  return (
    <section className="pt-20 lg:pt-[10rem] text-center flex flex-col items-center justify-center">
      <div className="w-4/5 space-y-10">
        <h2 className="text-white font-bold text-2xl lg:text-4xl xl:text-4xl leading-normal lg:leading-relaxed xl:leading-normal">
        “He trabajado con Fácil Soluciones con dos empresas diferentes y son fenomenales. El nombre coincide con el rendimiento, ¡son increíblemente rápidos!”
        </h2>

        <div className="flex flex-row items-center justify-center space-x-3">
          <Image className="rounded-full" src="/images/testimonial-face.jpg" alt="testimonial" width={70} height={70} decoding="async" />

          <div className="flex flex-col items-start space-y-1">
            <span className="text-white text-sm lg:text-lg font-semibold">
              Beth Pintel
            </span>
            <span className="text-[#B2AEAE] text-xs lg:text-sm">Foundadora de T&U</span>
          </div>
        </div>
      </div>
    </section>
  )
}