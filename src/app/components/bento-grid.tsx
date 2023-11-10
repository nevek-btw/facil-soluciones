export function BentoGrid() {
  return (
    <section className="container mx-auto my-0 px-6 py-6 md:py-12 lg:py-20">
      <div className="flex flex-col items-center justify-start">
        <div className="flex flex-col items-center justify-start gap-4 md:flex-row md:items-baseline pb-3">
          <h2 className="bg-gradient-to-b from-white to-[#adadad] bg-clip-text text-[32px] font-bold tracking-[-0.04em] text-transparent">¿Qué es Facil Solcuiones?</h2>
          <p className="text-center text-[20px] leading-[1.5] tracking-[-0.01em] text-[#888]">Todo lo que necesitas para tu negocio</p>
        </div>
      </div>

      <div className="grid auto-rows-[192px] grid-cols-3 gap-4">
        {[...Array(7)].map((_, i) => (
        <div
          key={i}
          className={`row-span-1 rounded-xl border-2 border-slate-400/10 bg-neutral-900 ${
            i === 3 || i === 6 ? "col-span-2" : ""
          }`}
          ></div>
        ))}
      </div>
    </section>
  )
}