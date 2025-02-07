'use client';

import Image from 'next/image';
import { TerminalUI } from './TerminalUI';
import Link from 'next/link';
import { Button } from '@dicedb/ui/button';
import GitHub from '@mui/icons-material/GitHub';
import { Terminal } from 'lucide-react';
import CommandProvider, { useCommandContext } from '@/context/command';
import CommandPanel from '../Overlays/CommandPanel';

// utils

function PlaygroundUI() {
  const { isOpen } = useCommandContext();
  return (
    <>
      <div
        data-testid="playground"
        className={`p-4  lg:p-0 lg:pl-[5%] transition-all duration-300 flex flex-col flex-grow h-screen bg-white text-gray-900 ${
          isOpen ? 'w-[73%]' : 'w-[95%]'
        }`}
      >
        <Header />

        <main
          data-testid="playground-main"
          className="h-full flex flex-col lg:flex-row gap-10 flex-grow overflow-hidden"
        >
          <div className="w-full flex flex-col flex-grow">
            <TerminalUI />
          </div>
        </main>
      </div>
      <CommandPanel />
    </>
  );
}

export default function Playground() {
  return (
    <CommandProvider>
      <PlaygroundUI />
    </CommandProvider>
  );
}

function Header() {
  const { setIsOpen, isOpen } = useCommandContext();
  return (
    <header
      data-testid="playground-header"
      className="navbar flex items-center justify-between py-5"
    >
      <div className="flex gap-2 items-center">
        <Link
          href="https://dicedb.io"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="DiceDB web URL"
          data-testid="dicedb-url-link"
        >
          <Image
            src="/images/dicedb-logo-light.png"
            width={110}
            height={110}
            priority={true}
            alt="DiceDB logo"
            className="object-contain"
            unoptimized
          />
        </Link>
        <h2 className="font-light text-2xl">PlayGround</h2>
      </div>
      <div className="flex items-center gap-2">
        <Link
          href="https://github.com/DiceDB/playground-mono/issues/new/choose"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Submit an issue or feedback"
          data-testid="submit-issue-link"
        >
          <Button
            variant="outline"
            className="w-full mt-2 gap-2 border-1 border-gray-700 text-gray-700 hover:scale-95 transition  flex items-center justify-center rounded-lg"
            data-testid="submit-issue-button"
          >
            <GitHub fontSize="small" />
            Submit an Issue
          </Button>
        </Link>
        {!isOpen ? (
          <Button
            onClick={() => setIsOpen(true)}
            variant="outline"
            className="mt-2 w-fit gap-2 border-1 border-gray-700 !bg-gray-700 hover:scale-95 transition text-white  flex items-center justify-center rounded-lg"
            data-testid="submit-issue-button"
          >
            <Terminal className="h-4 w-4" />
            Commands
          </Button>
        ) : null}
      </div>
    </header>
  );
}
