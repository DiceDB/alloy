import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div>
      <h1>This is Home Page</h1> <Link to="/dashboard">Dashboard</Link>
    </div>
  );
}
