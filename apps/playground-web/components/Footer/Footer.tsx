'use client';

import React from 'react';
import { Twitter } from '@mui/icons-material';
import GitHub from '@mui/icons-material/GitHub';
import People from '@mui/icons-material/People';
import { Button } from '@dicedb/ui/button';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-gray-500 font-semibold mb-4 text-center">
              DiceDB
            </h3>
            <Link
              href="https://dicedb.io/get-started/installation/"
              target="_blank"
            >
              <Button className="w-full !bg-red-600 hover:!bg-red-700 !text-white">
                Get Started →
              </Button>
            </Link>
            <Link href="https://github.com/dicedb/dice" target="_blank">
              <Button
                variant="outline"
                className="!w-full mt-2 !border-1 !border-gray-700 bg-blue-50 hover:text-blue text-black hover:text-blue-600"
              >
                <GitHub className="mr-2 h-4 w-4" /> GitHub (4k+)
              </Button>
            </Link>
          </div>

          <div className="text-center">
            <h3 className="text-gray-500 font-semibold mb-4">Developers</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://dicedb.io/get-started/installation"
                  target="_blank"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Quickstart
                </a>
              </li>
              <li>
                <a
                  href="https://dicedb.io/commands/get"
                  target="_blank"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Commands
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/DiceDB/dice/tree/master/examples/leaderboard-go"
                  target="_blank"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Examples
                </a>
              </li>
            </ul>
          </div>

          <div className="text-center">
            <h3 className="text-gray-500 font-semibold mb-4">Examples</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com/DiceDB/dice/tree/master/examples/leaderboard-go"
                  target="_blank"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Real-time Leaderboard
                </a>
              </li>
            </ul>
          </div>

          <div className="text-center">
            <h3 className="text-gray-500 font-semibold mb-4">Us and Socials</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:arpit@dicedb.io"
                  target="_blank"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Contact Us
                </a>
              </li>
            </ul>
            <div className="space-x-4 mt-4 items-center justify-items-center">
              <a
                href="https://discord.gg/6r8uXWtXh7"
                target="_blank"
                className="text-gray-400 hover:text-gray-600"
                aria-label="People"
              >
                <People className="h-6 w-6" />
              </a>
              <a
                href="https://twitter.com/thedicedb"
                target="_blank"
                className="text-gray-400 hover:text-gray-600"
                aria-label="Twitter"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="https://github.com/dicedb/dice"
                target="_blank"
                className="text-gray-400 hover:text-gray-600"
                aria-label="GitHub"
              >
                <GitHub className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
