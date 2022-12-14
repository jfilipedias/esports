import { FormEvent, useEffect, useState } from "react";
import axios from "axios";
import { CaretDown, Check, GameController } from "phosphor-react";

import * as Checkbox from "@radix-ui/react-checkbox";
import * as Dialog from "@radix-ui/react-dialog";
import * as Select from "@radix-ui/react-select";
import * as ToggleGroup from "@radix-ui/react-toggle-group";

import { Input } from "./Form/Input";
import { Game } from "../App";

export function CreateAdModal() {
  const [games, setGames] = useState<Game[]>([]);
  const [selectedGame, setSelectedGame] = useState<string>();
  const [weekDays, setWeekDays] = useState<string[]>([]);
  const [useVoiceChannel, setUseVoiceChannel] = useState(false);

  useEffect(() => {
    axios("http://localhost:3333/games").then((response) =>
      setGames(response.data)
    );
  }, []);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    const data = Object.fromEntries(formData);

    try {
      axios.post(`http://localhost:3333/games/${selectedGame}/ads`, {
        name: data.name,
        yearsPlaying: Number(data.yearsPlaying),
        discord: data.discord,
        weekDays: weekDays.map(Number),
        hourStart: data.hourStart,
        hourEnd: data.hourEnd,
        useVoiceChannel,
      });

      alert("Anúncio criado com sucesso");
    } catch (err) {
      console.error(err);
      alert("Erro ao criar o anúncio");
    }
  }

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/60 inset-0 fixed" />

      <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] px-10 py-8 text-white bg-[#2A2634] shadow-lg shadow-black/25">
        <Dialog.Title className="text-3xl text-white font-black">
          Publique um anúncio
        </Dialog.Title>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-8">
          <div className="flex flex-col gap-2">
            <label htmlFor="game" className="font-semibold">
              Qual o game?
            </label>

            <Select.Root value={selectedGame} onValueChange={setSelectedGame}>
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
            <Input
              name="name"
              id="name"
              placeholder="Como te chamam dentro do game?"
            />
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="yearsPlaying">Joga há quantos anos?</label>
              <Input
                name="yearsPlaying"
                id="yearsPlaying"
                type="number"
                placeholder="Tudo bem ser ZERO"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="discord">Qual o seu discord?</label>
              <Input name="discord" id="discord" placeholder="Usuario#0000" />
            </div>
          </div>

          <div className="flex gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="weekDays">Quando costuma jogar?</label>

              <ToggleGroup.Root
                type="multiple"
                value={weekDays}
                onValueChange={setWeekDays}
                className="grid grid-cols-4 gap-1"
              >
                <ToggleGroup.Item
                  value="0"
                  title="Domingo"
                  className="w-9 h-9 rounded bg-zinc-900 radix-state-on:bg-violet-500"
                >
                  D
                </ToggleGroup.Item>

                <ToggleGroup.Item
                  value="1"
                  title="Segunda"
                  className="w-9 h-9 rounded bg-zinc-900 radix-state-on:bg-violet-500"
                >
                  S
                </ToggleGroup.Item>

                <ToggleGroup.Item
                  value="2"
                  title="Terça"
                  className="w-9 h-9 rounded bg-zinc-900 radix-state-on:bg-violet-500"
                >
                  T
                </ToggleGroup.Item>

                <ToggleGroup.Item
                  value="3"
                  title="Quarta"
                  className="w-9 h-9 rounded bg-zinc-900 radix-state-on:bg-violet-500"
                >
                  Q
                </ToggleGroup.Item>

                <ToggleGroup.Item
                  value="4"
                  title="Quinta"
                  className="w-9 h-9 rounded bg-zinc-900 radix-state-on:bg-violet-500"
                >
                  Q
                </ToggleGroup.Item>

                <ToggleGroup.Item
                  value="5"
                  title="Sexta"
                  className="w-9 h-9 rounded bg-zinc-900 radix-state-on:bg-violet-500"
                >
                  S
                </ToggleGroup.Item>

                <ToggleGroup.Item
                  value="6"
                  title="Sábado"
                  className="w-9 h-9 rounded bg-zinc-900 radix-state-on:bg-violet-500"
                >
                  S
                </ToggleGroup.Item>
              </ToggleGroup.Root>
            </div>

            <div className="flex flex-col gap-2 flex-1">
              <label htmlFor="hourStart">Qual horário do dia?</label>

              <div className="grid grid-cols-2 gap-2">
                <Input
                  name="hourStart"
                  id="hourStart"
                  type="time"
                  placeholder="De"
                />
                <Input
                  name="hourEnd"
                  id="hourEnd"
                  type="time"
                  placeholder="Até"
                />
              </div>
            </div>
          </div>

          <label className="flex items-center gap-2 mt-2 text-sm">
            <Checkbox.Root
              checked={useVoiceChannel}
              onCheckedChange={(checked) => {
                if (checked === "indeterminate" || !checked) {
                  setUseVoiceChannel(false);
                } else {
                  setUseVoiceChannel(true);
                }
              }}
              className="w-6 h-6 p-1 rounded bg-zinc-900"
            >
              <Checkbox.Indicator>
                <Check className="w-4 h-4 text-emerald-400" />
              </Checkbox.Indicator>
            </Checkbox.Root>
            Costumo me conectar ao chat de voz
          </label>

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
