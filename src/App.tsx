import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateStrategy from './pages/CreateStrategy';
import InstrumentPage from './pages/InstrumentPage';

const App: React.FC = () => (
  <Router>
    <Routes>
      {/* <Route path="/" element={<StrategyList />} /> */}
      <Route path="/createstrategy" element={<CreateStrategy />} />
      <Route path="/instruments" element={<InstrumentPage />} />
    </Routes>
  </Router>
);

export default App;