'use client';
import { incrementCounter } from './actions';

export default function Counter({ count }: { count: number }) {
  const handleClick = async () => {
    await incrementCounter();
  };
  return (
    <div>
      <p>Counter: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}
