import { Phone } from "../icons/phone";
import { values } from "../lib/utils";

export function Values() {
  return (
    <section id="valores" className="container mx-auto my-0 px-6 py-6 md:py-12 lg:py-20">
      <div className="grid gap-6 items-center">
        <div className="flex flex-col justify-center space-y-8 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
            Valores de Nuestra Empresa
          </h1>
          <p className="max-w-[600px] text-white/50 md:text-xl mx-auto">Nuestros valores nos hacen más humanos y más cercanos a ti.</p>
        </div>

        <div className="w-full max-w-full space-y-4 mx-auto">
          <div className="grid grid-cols-3 gap-8">
            {values.map((value, index) => (
            <div key={index} className="flex flex-col items-center space-y-2 p-5 rounded-lg">
              <div className="p-2">
                <value.icon className="text-white h-6 w-6 mb-2 opacity-75" />
              </div>
              <h2 className="text-xl font-bold text-white text-center">{value.title}</h2>
              <p className="text-zinc-200 dark:text-zinc-100 text-center">{value.content}</p>
            </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}