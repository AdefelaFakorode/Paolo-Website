import About from "./views/About"
import Brands from "./views/Brands"
import Landing from "./views/Landing"
import Navbar from "./components/Navbar";

import {useEffect, useState} from "react"
import { BrowserRouter } from "react-router-dom";
import AnimatedRoutes from "./components/AnimatedRoutes";
import TransitionPage from "./views/TransitionPage"; // My PreLoader
import { AnimatePresence } from "framer-motion";


function App() {
    // State for preloader
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
      window.scrollTo(0, 0);
    }, 1100);

    return () => clearTimeout(timeout);
  }, []);

return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {isLoading && <TransitionPage key="transition" />}
      </AnimatePresence>

      {!isLoading && (
        <>
          <Navbar />
          <section id="home"><Landing /></section>
          <section id="about"><About /></section>
          <section id="brands"><Brands /></section>
        </>
      )}
    </div>
  );
}

export default App
