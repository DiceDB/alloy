
'use client';

export default function Footer({ timeLeft, triggers }: { timeLeft: string, triggers: number }) {
  return (
    <div className="bg-gray-100 rounded-lg p-4 text-gray-900 text-sm">
      <div className="flex justify-between items-center">
        <span>Cleanup in: {timeLeft} mins</span>
        <span>Command Triggers left: {triggers}</span>
      </div>
    </div>
  );
}