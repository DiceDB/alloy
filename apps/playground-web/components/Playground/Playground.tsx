'use client';

import Image from 'next/image';
import SearchBox from '@/components/Search/SearchBox';
import { TerminalUI } from './TerminalUI';
import Link from 'next/link';
import { Button } from '@dicedb/ui/button';
import GitHub from "@mui/icons-material/GitHub";

// utils

export default function Playground() {
  return (
    <div
      data-testid="playground"
      className="container mx-auto p-4 lg:p-0 flex flex-col flex-grow h-screen bg-white text-gray-900"
    >
      <Header />

      <main
        data-testid="playground-main"
        className="h-full flex flex-col lg:flex-row gap-10 flex-grow overflow-hidden"
      >
        <div className="h-4/6 lg:h-full w-full lg:w-[60%] flex flex-col">
          <TerminalUI />
        </div>
        <div
          data-testid="searchbox-container"
          className="h-2/6 lg:h-full w-full lg:w-[40%] flex flex-col pb-4"
        >
          <div
            data-testid="searchbox-wrapper"
            className="h-full w-full flex-grow border border-gray-400 bg-gray-100 p-4 pb-0 rounded-lg shadow-md"
          >
            <SearchBox />
          </div>
        </div>
      </main>
    </div>
  );
}

function Header() {
  return (
    <header
      data-testid="playground-header"
      className="navbar flex items-center justify-between py-5"
    >
      <div className="flex items-center">
        <Image
          src="/images/dicedb-logo-light.png"
          width={110}
          height={110}
          priority={true}
          alt="DiceDB logo"
          className="object-contain"
          unoptimized
        />
        <h2 className="font-light text-2xl ml-2">PlayGround</h2>
      </div>
        <Link
          href="https://github.com/DiceDB/playground-mono/issues/new"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Submit an issue or feedback"
          data-testid="submit-issue-link"
        >
          <Button
            variant="outline"
            className="!w-full mt-2 !border-1 !border-gray-700 bg-blue-50 hover:text-blue text-black hover:text-blue-600 flex items-center justify-center"
            data-testid="submit-issue-button"
          >
            Submit an Issue
            <GitHub className="ml-2 h-4 w-4" /> 
          </Button>
        </Link>
    </header>
  );
}
