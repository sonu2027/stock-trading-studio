import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateStrategy from './pages/CreateStrategy';
import InstrumentPage from './pages/InstrumentPage';
import SavedScannerComponnet from './pages/SavedScannerComponnet';
import Portfolio from './pages/Portfolio';

const App: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<CreateStrategy />} />
      <Route path="/instruments" element={<InstrumentPage />} />
      <Route path="/savedscannerstep" element={< SavedScannerComponnet />} />
      <Route path="/portfolio" element={< Portfolio />} />
    </Routes>
  </Router>
);

export default App;