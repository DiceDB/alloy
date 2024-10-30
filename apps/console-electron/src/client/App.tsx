import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { AppRoutes } from './Router';

const App: React.FC = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

export default App;
