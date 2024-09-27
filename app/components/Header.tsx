'use client';

import DiceIcon from './DiceIcon';

export default function Header() {
  return (
    <header className="flex items-center mb-4">
      <DiceIcon />
      <h1 className="text-2xl font-bold">DiceDB PlayGround</h1>
    </header>
  );
}