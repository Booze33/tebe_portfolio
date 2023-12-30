import Navbar from "./components/navbar";
import Footer from './components/footer';

const App = () => {
  return (
    <div className="dark:bg-dark bg-light w-screen h-screen dark:text-dark text-light">
      <Navbar />
      <Footer />
    </div>
  );
}

export default App;
