import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Navbar from "./components/navbar";
import About from './components/about';
import Portfolio from './components/portfolio';

const App = () => {
  return (
    <div className="dark:bg-dark bg-light w-screen h-full dark:text-dark text-light">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
