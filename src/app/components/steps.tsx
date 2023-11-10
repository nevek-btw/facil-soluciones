import Image from "next/image"

export function Steps() {
  return (
    <section className="container mx-auto my-0 px-6 py-6 md:py-12 lg:py-20">
      <div className="flex flex-col items-center justify-center space-y-6 lg:space-y-12 bg-gradient-to-b from-[#0c0c0c] to-black rounded-2xl p-10">
        <div className="space-y-2">
          <div className="flex flex-row items-center justify-center space-x-1">
            <span className="text-white/70 text-xs lg:text-base">
            COMO TRABAJAMOS</span>
          </div>

          <div className="flex flex-row items-center text-center justify-center space-x-5">
            <h1 className="relative text-[2.25rem] font-semibold">Con Soluciones, Faciles</h1>
          </div>
        </div>

        <div className="pt-10 lg:pt-20 flex flex-col space-y-16 lg:space-y-0 lg:flex-row items-center justify-center space-x-0">
          <div className="relative flex flex-col items-center text-center  w-[300px] xl:w-[400px]">
            <Image className="w-[80px] h-[120px] lg:w-[100px] lg:h-[140px]" src="/images/1.svg" alt="1" width={80} height={120} />
            <div className="absolute bottom-[-40px] left-0 right-0 flex flex-col items-center space-y-2 justify-center p-2">
              <span className="text-[1.875rem] leading-[2.25rem] font-bold ">
                Lorem
              </span>
              <p className="space-y-2 text-base text-white/50">
                Submit as many requests as you want. Get your first design concept in 24 hours.
              </p>
            </div>
          </div>
          <Image className="rotate-90 lg:rotate-0" src="/images/arrow-scribble.svg" alt="arrow" width={50} height={50} />
          <div className="relative flex flex-col items-center text-center  w-[300px] xl:w-[400px]">

            <Image className="w-[80px] h-[120px] lg:w-[100px] lg:h-[140px]" src="images/2.svg" alt="2" width={80} height={120} />
            <div className="absolute bottom-[-40px] left-0 right-0 flex flex-col items-center space-y-2 justify-center p-2">
              <span className="text-[1.875rem] leading-[2.25rem] font-bold ">
                Lorem
              </span>
              <p className="space-y-2 text-base text-white/50">
                Submit as many requests as you want. Get your first design concept in 24 hours.
              </p>
            </div>
          </div>
          <Image className="rotate-90 lg:rotate-0" src="/images/arrow-scribble.svg" alt="arrow" width={50} height={50} />
          <div className="relative flex flex-col items-center text-center  w-[300px] xl:w-[400px]">

            <Image className="w-[80px] h-[120px] lg:w-[100px] lg:h-[140px]" src="images/3.svg" alt="3" width={80} height={120} />
            <div className="absolute bottom-[-40px] left-0 right-0 flex flex-col items-center space-y-2 justify-center p-2">
              <span className="text-[1.875rem] leading-[2.25rem] font-bold ">
                Lorem
              </span>
              <p className="space-y-2 text-base text-white/50">
                Submit as many requests as you want. Get your first design concept in 24 hours.
              </p>
            </div>
          </div>
        </div>

        <div className="pt-10 flex flex-col items-center justify-center space-y-6">
          <button className="rounded-xl bg-white text-black p-3.5 lg:p-4 px-10 lg:px-16 text-md lg:text-lg font-bold text-primary tracking-tight shadow-[inset_0_-4px_0_0_#00000040] cursor-pointer hover:scale-105 transition duration-300 ease-out">Obtener un Presupesto</button>
        </div>
      </div>
    </section>
  )
}