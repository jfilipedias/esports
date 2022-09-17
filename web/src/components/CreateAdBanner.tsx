import { MagnifyingGlassPlus } from "phosphor-react"

function CreateAdBanner() {
  return (
    <div className="self-stretch bg-nlw-gradient pt-1 mt-8 rounded-lg overflow-hidden">
      <div className="flex justify-between items-center bg-[#2A2634] px-8 py-6 rounded-md">
        <div>
          <strong className="text-2xl text-white font-black block">
            Não encontrou seu duo?
          </strong>
          <span className="text-zinc-400 block">
            Publique um anúncio para encontrar novos players!
          </span>
        </div>

        <button className="flex items-center gap-3 px-4 py-3 bg-violet-500 text-white rounded hover:bg-violet-600 duration-200">
          <MagnifyingGlassPlus size={24} />
          Publicar anúncio
        </button>
      </div>
    </div>
  )
}

export { CreateAdBanner }