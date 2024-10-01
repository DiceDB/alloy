// src/app/Playground.tsx

"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import Cli from "@/components/CLI/CLI";
import SearchBox from "@/components/Search/SearchBox";
import { Dice1, Dice3, Dice5 } from "lucide-react";
import { formatTime } from "@/shared/utils/commonUtils";

export default function Playground() {
  const [search, setSearch] = useState("");
  const [timeLeft, setTimeLeft] = useState<number>(15 * 60);
  const [commandsLeft, setCommandsLeft] = useState<number>(1000);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const decreaseCommandsLeft = () => {
    setCommandsLeft((prev) => (prev > 0 ? prev - 1 : 0));
  };

  return (
      <div className="container mx-auto flex flex-col flex-grow min-h-screen bg-white text-gray-900 line-height-[1.5rem]">
        <header className="navbar flex items-center justify-between pt-5 pb-4">
          <div className="flex items-center">
            <Image
              src="https://dicedb.io/dicedb-logo-light.png"
              width={110}
              height={110}
              alt="DiceDB logo"
              className="object-contain"
            />
            <h2 className="font-light text-2xl ml-2">PlayGround</h2>
          </div>
        </header>
        <main className="flex flex-grow gap-10 overflow-hidden">
          <div className="w-1/2 flex flex-col bg">
          <div className="bg-gray-900 rounded-lg">
            <div className="bg-gray-900 px-4 py-4 flex items-center rounded-lg">
              <div className="flex space-x-2">
                <Dice5 className="w-4 h-4 bg-red-500"></Dice5>
                <Dice1 className="w-4 h-4 bg-yellow-500"></Dice1>
                <Dice3 className="w-4 h-4 bg-green-500"></Dice3>
              </div>
            </div>
            <div className="h-96 bg-gray-100 rounded-lg overflow-hidden shadow-md">
              <Cli decreaseCommandsLeft={decreaseCommandsLeft}/>
            </div>
          </div>
            <div className="flex flex-row justify-between text-gray-900 ">
              <div className="mt-4 flex justify-between border border-gray-400 text-sm bg-transparent p-3 rounded-lg">
                <span>Cleanup in : {formatTime(timeLeft)} mins</span>
              </div>
              <div className="mt-4 flex justify-between border border-gray-400 text-sm bg-transparent p-3 rounded-lg">
                <span>Command left: {commandsLeft}</span>
              </div>
            </div>
          </div>
          <div className="w-1/2 flex flex-col">
            <div className="flex-grow border border-gray-400 bg-gray-100 p-4 rounded-lg shadow-md mb-4">
              <SearchBox search={search} setSearch={setSearch} />
            </div>
          </div>
        </main>
      </div>
  );
}
