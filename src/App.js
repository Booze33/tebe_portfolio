import { Route, Routes, BrowserRouter, useLocation } from 'react-router-dom';
import Navbar from "./components/navbar";
import Message from './features/message';
import About from './components/about';
import Portfolio from './components/portfolio';
import RoverApp from './components/projects/rover';
import ExpenseTracker from './components/projects/expense';
import RecipeApp from './components/projects/recipe';
import Book from './components/projects/book';
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
            <Route path="/projects/rover-app" element={<RoverApp />} />
            <Route path="/projects/book-store" element={<Book />} />
            <Route path="/projects/recipe-app" element={<RecipeApp />} />
            <Route path="/projects/expense-tracker" element={<ExpenseTracker />} />
          </Routes>
          <Message />
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