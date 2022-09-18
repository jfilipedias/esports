import { useEffect, useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'

import { CreateAdBanner } from './components/CreateAdBanner'
import { GameBanner } from './components/GameBanner'
import logoImg from './assets/logo-esports.svg'

import './styles/main.css'

interface Game {
  id: string
  title: string
  bannerUrl: string
  _count: {
    ads: number
  }
}

function App() {
  const [games, setGames] = 
    useState<Game[]>([])

  useEffect(() => {
    fetch('http://localhost:3333/games')
      .then(response => response.json())
      .then(data => setGames(data))
  }, [])

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
        {games.map((game) =>
          <GameBanner key={game.id} ads={game._count.ads} {...game} />
        )}
      </div>

      <Dialog.Root>
        <CreateAdBanner />

        <Dialog.Portal>
          <Dialog.Overlay className="bg-black/60 inset-0 fixed"/>

          <Dialog.Content className="fixed bg-[#2A2634]">
            <Dialog.Title>Publique um anúncio</Dialog.Title>

            <Dialog.Content>
              asdadasd
            </Dialog.Content>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}

export default App;
