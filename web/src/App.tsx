import { MagnifyingGlassPlus } from "phosphor-react";

import logoImg from "./assets/logo-esports.svg";
import { GameBanner, GameBannerProps } from "./components/GameBanner";

import "./styles/main.css";

const gameBanners: GameBannerProps[] = [
  { image: "/game-1.png", name: "League of Legends", ads: 4 },
  { image: "/game-2.png", name: "Apex Legends", ads: 4 },
  { image: "/game-3.png", name: "Counter Strike", ads: 4 },
  { image: "/game-4.png", name: "World of Warcraft", ads: 4 },
  { image: "/game-5.png", name: "Dota 2", ads: 4 },
  { image: "/game-6.png", name: "Fortnite", ads: 4 },
];

function App() {
  return (
    <div className="flex flex-col items-center max-w-[1344px] mx-auto my-20">
      <img src={logoImg} alt="Logo NLW eSports" />

      <h1 className="mt-20 text-6xl text-white font-black">
        Seu{" "}
        <span className="bg-nlw-gradient bg-clip-text text-transparent">
          duo
        </span>{" "}
        está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        {gameBanners.map((gameBanner) =>
          <GameBanner key={gameBanner.name} {...gameBanner} />
        )}
      </div>

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
    </div>
  );
}

export default App;
