import { Link } from 'react-router-dom';

export function Dashboard() {
  return (
    <div
      className={`grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <h1 className="text-2xl font-bold text-blue-600">Dashboard</h1>{' '}
      <Link to="/">Home</Link>
    </div>
  );
}
