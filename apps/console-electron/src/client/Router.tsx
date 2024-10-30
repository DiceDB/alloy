import { Route, Routes } from 'react-router-dom';
import { Dashboard } from './Dashboard';
import { Home } from './Home';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}
