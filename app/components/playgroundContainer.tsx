"use client";

import { useState, useEffect } from "react";
import PlaygroundTerminal from "./PlaygroundTerminal";
import Header from "./Header";
import Footer from "./Footer";
import SearchBox from "./SearchBox";

export default function PlaygroundContainer() {
  const [command, setCommand] = useState("");
  const [output, setOutput] = useState<string[]>([]);
  const [triggers, setTriggers] = useState<number>(1000);
  const [search, setSearch] = useState("");
  const [timeLeft, setTimeLeft] = useState<number>(15 * 60);
  const [store, setStore] = useState<{ [key: string]: string }>({
    hello: "world",
  });

  const handleCommand = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const newOutput = `dice> ${command}`;
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
    <>
      <div className="min-h-screen flex flex-col bg-gray-900 text-gray-100 p-4">
        <Header />
        <main className="flex-grow flex overflow-hidden">
          <div className="w-1/2 p-4 bg-gray-800 text-white flex flex-col">
            <PlaygroundTerminal
              output={output}
              command={command}
              setCommand={setCommand}
              handleCommand={(e) => handleCommand(e)}
            />
            <Footer timeLeft={formatTime(timeLeft)} triggers={triggers} />
          </div>
          <div className="w-1/2 p-4 bg-white shadow-md overflow-auto">
            <SearchBox search={search} setSearch={setSearch} />
          </div>
        </main>
      </div>
    </>
  );
}
