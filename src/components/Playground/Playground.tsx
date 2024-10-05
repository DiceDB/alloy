'use client';

// Components
import Cli from '@/components/CLI/CLI';
import SearchBox from '@/components/Search/SearchBox';
import { Dice1, Dice3, Dice5, Info } from 'lucide-react';

// utils
import { formatTime } from '@/shared/utils/commonUtils';

// images and icons
import Image from 'next/image';
import { usePlayground } from './hooks/usePlayground';

export default function Playground() {
  const { decreaseCommandsLeft, search, timeLeft, commandsLeft, setSearch } =
    usePlayground();

  return (
    <div className="container mx-auto flex flex-col flex-grow min-h-screen bg-white text-gray-900">
      <header className="navbar flex items-center justify-between py-5">
        <div className="flex items-center">
          <Image
            src="https://dicedb.io/dicedb-logo-light.png"
            width={110}
            height={110}
            priority={true}
            alt="DiceDB logo"
            className="object-contain"
          />
          <h2 className="font-light text-2xl ml-2">PlayGround</h2>
        </div>
      </header>

      <main className="flex flex-col lg:flex-row gap-10 flex-grow overflow-hidden px-4">
        <div className="w-full lg:w-7/12 flex flex-col">
          <div className="bg-gray-900 rounded-lg">
            <div className="bg-gray-900 px-4 py-4 flex items-center rounded-lg">
              <div className="flex space-x-2">
                <Dice5 className="w-4 h-4 bg-red-500" />
                <Dice1 className="w-4 h-4 bg-yellow-500" />
                <Dice3 className="w-4 h-4 bg-green-500" />
              </div>
            </div>
            <div className="h-64 md:h-[30rem] bg-gray-100 rounded-lg overflow-hidden shadow-md">
              <Cli decreaseCommandsLeft={decreaseCommandsLeft} />
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex flex-row justify-between text-gray-900 mt-4">
              <div className="flex justify-between border border-gray-400 text-sm bg-transparent p-3 rounded-lg">
                <span>Cleanup in : {formatTime(timeLeft)} mins</span>
              </div>
              <div className="flex justify-between border border-gray-400 text-sm bg-transparent p-3 rounded-lg">
                <span>Commands left: {commandsLeft}</span>
              </div>
            </div>
            <div className="flex flex-row items-start mt-5">
              <Info className="w-4 h-4 text-gray-500 mr-1" />
              <p className="text-sm text-gray-500">
                DiceDB instance is shared across all users.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-5/12 flex flex-col">
          <div className="flex-grow border border-gray-400 bg-gray-100 p-4 rounded-lg shadow-md mb-4">
            <SearchBox search={search} setSearch={setSearch} />
          </div>
        </div>
      </main>
    </div>
  );
}
