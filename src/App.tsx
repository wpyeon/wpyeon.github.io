import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import ProjectBinanceTrader from './pages/ProjectBinanceTrader';
import ProjectTimerBlocks from './pages/ProjectTimerBlocks';
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/binance-trader" element={<ProjectBinanceTrader />} />
          <Route path="/timer-blocks" element={<ProjectTimerBlocks />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
