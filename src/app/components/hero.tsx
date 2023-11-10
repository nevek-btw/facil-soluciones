export function Hero() {
  return (
    <section className="relative px-6 pb-8 pt-12 md:py-12 md:pb-8">
      <div className="container mx-auto max-w-4xl text-center">
        <span className="mx-auto mb-4 inline-flex items-center space-x-1 rounded-full bg-black px-4 py-1 text-sm font-medium text-white border border-[#2e2e2e]">Constructura • Inmobiliaria • Financiera</span>
      </div>

      <h1 className="bg-gradient-to-b from-white to-[#adadad] bg-clip-text text-center text-4xl font-black tracking-tight text-transparent md:text-6xl lg:text-8xl lg:tracking-tighter">Elevando Aspiraciones a través de Soluciones</h1>
      <p className="leading-1 mx-auto mt-4 text-center text-lg leading-[1.8] text-[#888] md:px-20 lg:text-xl lg:leading-normal">Atendiendo a las necesidades de las principales empresas, nuestra firma financiera, inmobiliaria y constructora ofrece soluciones integrales. Facilitamos el logro de tus objetivos, fusionando servicios financieros sólidos, experticia inmobiliaria de vanguardia y una destacada capacidad constructora. Tu éxito es nuestra prioridad, respaldado por la innovación financiera y la excelencia en bienes raíces y construcción.</p>

      <div className="flex flex-col items-center justify-center py-4 sm:flex-row md:py-8 lg:py-10">
        <button className="bg-primary border-primary hover:bg-primary hover:border-primary w-2/3 rounded-md border-2 px-8 py-2 text-center font-semibold text-white transition-all sm:w-auto">Obtener un Presupuesto</button>
      </div>

      <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-md border-2 border-[#2e2e2e] shadow-2xl">
        <iframe title="mapa" className="w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3753.9384511734875!2d-70.6918791!3d19.800206799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eb1ef6fbf987f1d%3A0x18725f39c264b1ff!2sFacil%20Soluciones!5e0!3m2!1sen!2sdo!4v1699547621185!5m2!1sen!2sdo" width="800" height="600" loading="lazy"></iframe>
      </div>
    </section>
  )
}