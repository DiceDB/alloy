"use client";

import Image from "next/image";
import React from "react";
import { useState, useEffect } from "react";
import Cli from "@/components/CLI/CLI";
import SearchBox from "@/components/Search/SearchBox";

export default function Playground() {
  const [command, setCommand] = useState("");
  const [output, setOutput] = useState<string[]>([]);
  const [triggers, setTriggers] = useState<number>(998);
  const [search, setSearch] = useState("");
  const [timeLeft, setTimeLeft] = useState<number>(14 * 60 + 40);
  const [store, setStore] = useState<{ [key: string]: string }>({});

  const handleCommand = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const newOutput = `dice > ${command}`;
      let result = "";

      const [cmd, ...args] = command.split(" ");

      switch (cmd.toUpperCase()) {
        case "GET":
          result = store[args[0]] || "(nil)";
          break;
        case "SET":
          if (args.length === 2) {
            const [key, value] = args;
            setStore((prevStore) => ({ ...prevStore, [key]: value }));
            result = "OK";
          } else {
            result = "Invalid command. Usage: SET key value";
          }
          break;
        default:
          result = `Unknown command: ${cmd}`;
      }

      setOutput([...output, newOutput, result]);
      setCommand("");
      setTriggers((prev) => prev - 1);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      <div className="container mx-auto flex flex-col flex-grow px-2 py-6">
        <header className="mb-6 flex items-center justify-between w-10 h-10">
          <div className="flex items-center">
            <Image
              src="https://dicedb.io/dicedb-logo-light.png"
              width={100}
              height={100}
              alt="DiceDB logo"
              className="object-contain"
            />
            <h1 className="font-ariel font-light text-xl">PlayGround</h1>
          </div>
        </header>
        <main className="flex flex-grow gap-2 overflow-hidden">
          <div className="w-1/2 flex flex-col">
            <div className="h-80 border border-gray-300 bg-gray-100 rounded-lg overflow-hidden shadow-md">
              <Cli
                output={output}
                command={command}
                setCommand={setCommand}
                handleCommand={handleCommand}
              />
            </div>
            <div className="flex flex-row justify-between text-gray-900 ">
              <div className="mt-4 flex justify-between border border-gray-400 text-sm bg-transparent p-3 rounded-lg">
                <span>Cleanup in : {formatTime(timeLeft)} mins</span>
              </div>
              <div className="mt-4 flex justify-between border border-gray-400 text-sm bg-transparent p-3 rounded-lg">
                <span>Command left: {triggers}</span>
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
    </div>
  );
}
