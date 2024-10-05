'use client';

import React from 'react';
import { Button } from '@/shared/components/Button';
import { Twitter } from '@mui/icons-material';
import GitHub from '@mui/icons-material/GitHub';
import People from '@mui/icons-material/People';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-gray-500 font-semibold mb-4">DiceDB</h3>
            <Button className="!bg-red-600 hover:!bg-red-700 !text-white">
              Get Started →
            </Button>
            <Button
              variant="outline"
              className="!w-full mt-2 !border-1 !border-gray-700 bg-blue-50 hover:text-blue text-black hover:text-blue-600"
            >
              <GitHub className="mr-2 h-4 w-4" /> GitHub (4k+)
            </Button>
          </div>

          <div>
            <h3 className="text-gray-500 font-semibold mb-4">Developers</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Quickstart
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Commands
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Examples
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-gray-500 font-semibold mb-4">Examples</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Real-time Leaderboard
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-gray-500 font-semibold mb-4">Us and Socials</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Contact Us
                </a>
              </li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <a
                href="#"
                className="text-gray-400 hover:text-gray-600"
                aria-label="People"
              >
                <People className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-gray-600"
                aria-label="Twitter"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="#"
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
