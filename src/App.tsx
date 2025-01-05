import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import ProjectBinanceTrader from './pages/ProjectBinanceTrader';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/binance-trader" element={<ProjectBinanceTrader />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
