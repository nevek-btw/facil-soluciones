export function Mision() {
  return (
    <section id="mision" className="container mx-auto my-0 px-6 py-6 md:py-12 lg:py-20">
      <div className="flex flex-col items-center justify-center space-y-6 lg:space-y-12 bg-gradient-to-b from-black to-[#0c0c0c] rounded-2xl">
      <div className="space-y-2">
          <div className="flex flex-row items-center justify-center space-x-1">
            <span className="text-white/70 text-xs lg:text-base">NUESTRA MISIÓN & VISIÓN</span>
          </div>

          <div className="flex flex-row items-center text-center justify-center space-x-5">
            <h1 className="relative text-[2.25rem] font-semibold">Buscamos llevar soluciones hacía a ti</h1>
          </div>

          <div className="pt-10 lg:pt-20 flex flex-col space-y-16 lg:space-y-0 lg:flex-row items-center justify-center space-x-0">
            <p className="leading-1 mx-auto mt-2 text-center text-lg text-white/50 px-4 pb-6">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis corrupti fugit autem necessitatibus dignissimos aspernatur minima. Deserunt, nulla fugit aliquid doloribus sint beatae error tempora atque optio architecto eaque distinctio molestiae labore voluptatum repellat accusantium? Sed fugiat, obcaecati mollitia neque minus tempora omnis esse. Reiciendis non facilis nesciunt id laudantium repellat accusamus voluptates cumque aperiam? Quibusdam unde, rem adipisci dolorum accusamus, reiciendis culpa quos dignissimos necessitatibus similique cumque incidunt voluptatibus.</p>
          </div>
        </div>

        {/* <div className="pt-10 flex flex-col items-center justify-center space-y-6">
          <a 
            aria-label="Hacer una llamada"
            href="tel:+1809-586-0708" 
            className="rounded-xl bg-white text-black p-3.5 lg:p-4 px-10 lg:px-16 text-md lg:text-lg font-bold text-primary tracking-tight shadow-[inset_0_-4px_0_0_#00000040] cursor-pointer hover:scale-105 transition duration-300 ease-out"
          >
            Llamar Ahora
          </a>
        </div> */}
      </div>
    </section>
  )
}