'use client';

import { Dice5 } from 'lucide-react';

export default function DiceIcon({ size = 8, color = 'text-red-500' }) {
  return <Dice5 className={`w-${size} h-${size} ${color} mr-2`} />;
}