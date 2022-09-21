import { useEffect, useState } from "react";
import { CaretDown, Check, GameController } from "phosphor-react";

import * as Checkbox from "@radix-ui/react-checkbox";
import * as Dialog from "@radix-ui/react-dialog";
import * as Select from "@radix-ui/react-select";

import { Input } from "./Form/Input";
import { Game } from "../App";

export function CreateAdModal() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    fetch("http://localhost:3333/games")
      .then((response) => response.json())
      .then((data) => setGames(data));
  }, []);

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/60 inset-0 fixed" />

      <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] px-10 py-8 text-white bg-[#2A2634] shadow-lg shadow-black/25">
        <Dialog.Title className="text-3xl text-white font-black">
          Publique um anúncio
        </Dialog.Title>

        <form className="flex flex-col gap-4 mt-8">
          <div className="flex flex-col gap-2">
            <label htmlFor="game" className="font-semibold">
              Qual o game?
            </label>

            <Select.Root>
              <Select.Trigger className="flex items-center justify-between bg-zinc-900 px-4 py-3 rounded text-sm radix-placeholder:text-zinc-500">
                <Select.Value placeholder="Selecione o game que deseja jogar" />
                <Select.Icon>
                  <CaretDown className="w-6 h-6 text-zinc-500" />
                </Select.Icon>
              </Select.Trigger>

              <Select.Portal>
                <Select.Content>
                  <Select.Viewport className="gap-2 bg-zinc-900 px-2 py-3 rounded">
                    {games.map((game) => (
                      <Select.Item
                        key={game.id}
                        className="flex items-center px-8 py-2 rounded text-white hover:bg-zinc-800"
                        value={game.id}
                      >
                        <Select.ItemIndicator className="absolute left-4">
                          <Check className="w-4 h-4" />
                        </Select.ItemIndicator>
                        <Select.ItemText>{game.title}</Select.ItemText>
                      </Select.Item>
                    ))}
                  </Select.Viewport>
                </Select.Content>
              </Select.Portal>
            </Select.Root>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="name">Seu nome (ou nickname)</label>
            <Input id="name" placeholder="Como te chamam dentro do game?" />
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="yearsPlaying">Joga há quantos anos?</label>
              <Input
                id="yearsPlaying"
                type="number"
                placeholder="Tudo bem ser ZERO"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="discord">Qual o seu discord?</label>
              <Input id="discord" placeholder="Usuario#0000" />
            </div>
          </div>

          <div className="flex gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="weekDays">Quando costuma jogar?</label>

              <div className="grid grid-cols-4 gap-1">
                <button title="Domingo" className="w-9 h-9 rounded bg-zinc-900">
                  D
                </button>

                <button title="Segunda" className="w-9 h-9 rounded bg-zinc-900">
                  S
                </button>

                <button title="Terça" className="w-9 h-9 rounded bg-zinc-900">
                  T
                </button>

                <button title="Quarta" className="w-9 h-9 rounded bg-zinc-900">
                  Q
                </button>

                <button title="Quinta" className="w-9 h-9 rounded bg-zinc-900">
                  Q
                </button>

                <button title="Sexta" className="w-9 h-9 rounded bg-zinc-900">
                  S
                </button>

                <button title="Sábado" className="w-9 h-9 rounded bg-zinc-900">
                  S
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-2 flex-1">
              <label htmlFor="hourStart">Qual horário do dia?</label>

              <div className="grid grid-cols-2 gap-2">
                <Input id="hourStart" type="time" placeholder="De" />
                <Input id="hourEnd" type="time" placeholder="Até" />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 mt-2 text-sm">
            <Checkbox.Root className="w-6 h-6 p-1 rounded bg-zinc-900">
              <Checkbox.Indicator>
                <Check className="w-4 h-4 text-emerald-400" />
              </Checkbox.Indicator>
            </Checkbox.Root>
            Costumo me conectar ao chat de voz
          </div>

          <footer className="flex justify-end gap-4 mt-4">
            <Dialog.Close className="bg-zinc-500 h-12 px-5 rounded-md font-semibold hover:bg-zinc-600">
              Cancelar
            </Dialog.Close>

            <button
              type="submit"
              className="flex items-center gap-3 bg-violet-500 h-12 px-5 rounded-md font-semibold hover:bg-violet-600"
            >
              <GameController size={24} />
              Encontrar duo
            </button>
          </footer>
        </form>
      </Dialog.Content>
    </Dialog.Portal>
  );
}
