'use client';

import { useState, useEffect, useRef } from 'react';
import { Search, Dice1 } from 'lucide-react';

export default function Component() {
  const [command, setCommand] = useState('');
  const [output, setOutput] = useState<string[]>([]);
  const [triggers, setTriggers] = useState<number>(1000);
  const [search, setSearch] = useState('');
  const [timeLeft, setTimeLeft] = useState<number>(15 * 60); // 15 minutes in seconds
  const terminalRef = useRef<HTMLDivElement>(null);
  const [store, setStore] = useState<{ [key: string]: string }>({
    hello: 'world'
  });

  const handleCommand = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const newOutput = `dice> ${command}`;
      let result = '';

      const [cmd, ...args] = command.split(' ');

      switch (cmd.toUpperCase()) {
        case 'GET':
          result = store[args[0]] || '(nil)';
          break;
        case 'SET':
          if (args.length === 2) {
            const [key, value] = args;
            setStore((prevStore) => ({ ...prevStore, [key]: value }));
            result = 'OK';
          } else {
            result = 'Invalid command. Usage: SET key value';
          }
          break;
        default:
          result = `Unknown command: ${cmd}`;
      }

      setOutput([...output, newOutput, result]);
      setCommand('');
      setTriggers((prev) => prev - 1);
    }
  };

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [output]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-gray-100 p-4">
      <header className="flex items-center mb-4">
        <Dice1 className="w-8 h-8 text-red-500 mr-2" />
        <h1 className="text-2xl font-bold">DiceDB PlayGround</h1>
      </header>
      <main className="flex-grow flex overflow-hidden">
        <div className="w-1/2 p-4 bg-gray-800 text-white flex flex-col">
          <div
            ref={terminalRef}
            className="flex-grow overflow-auto mb-4 font-mono"
          >
            {output.map((line, index) => (
              <div
                key={index}
                className={line.startsWith('dice>') ? 'text-blue-400' : 'text-green-400'}
              >
                {line}
              </div>
            ))}
          </div>
          <div className="flex items-center bg-gray-700 rounded px-2 mb-4">
            <Dice1 className="w-4 h-4 text-green-500 mr-2" />
            <span className="text-green-500">dice&gt;</span>
            <input
              type="text"
              value={command}
              onChange={(e) => setCommand(e.target.value)}
              onKeyDown={handleCommand}
              placeholder="Enter DiceDB command..."
              className="bg-transparent border-none outline-none w-full py-2 text-white placeholder-gray-500 ml-2"
            />
          </div>
          <div className="bg-gray-100 rounded-lg p-4 text-gray-900 text-sm">
            <div className="flex justify-between items-center">
              <span>Cleanup in: {formatTime(timeLeft)} mins</span>
              <span>Command Triggers left: {triggers}</span>
            </div>
          </div>
        </div>
        <div className="w-1/2 p-4 bg-white shadow-md overflow-auto">
          <div className="mb-4">
            <div className="flex items-center bg-gray-100 rounded px-2">
              <Search className="text-gray-400 mr-2" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search commands..."
                className="bg-transparent border-none outline-none w-full py-2 text-gray-900 placeholder-gray-500"
              />
            </div>
          </div>
          <div className="space-y-2">
            {['SET', 'GET', 'DEL'].map((cmd) => (
              <button
                key={cmd}
                className="w-full text-left bg-gray-700 hover:bg-gray-600 rounded p-2 transition-colors"
              >
                {cmd}
              </button>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}