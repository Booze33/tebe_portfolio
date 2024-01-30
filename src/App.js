import { Route, Routes, BrowserRouter, useLocation } from 'react-router-dom';
import Navbar from "./components/navbar";
import About from './components/about';
import Portfolio from './components/portfolio';
import { AnimatePresence } from 'framer-motion';

const App = () => {
  return (
    <div className="dark:bg-dark bg-light w-screen h-full dark:text-dark text-light">
      <AnimatePresence>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <LocationHandler />
        </BrowserRouter>
      </AnimatePresence>
    </div>
  );
}

const LocationHandler = () => {
  const location = useLocation();
  return <Routes location={location} key={location.key} />;
}

export default App;