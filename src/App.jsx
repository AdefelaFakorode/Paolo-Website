import About from "./views/About"
import Brands from "./views/Brands"
import Landing from "./views/Landing"
import Footer from "./views/Footer";
import Contact from "./views/Contact";
import Navbar from "./components/Navbar";

import {useEffect, useState} from "react"
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
    <div className="main">
      <AnimatePresence mode="wait">
        {isLoading && <TransitionPage key="transition" />}
      </AnimatePresence>

      {!isLoading && (
        <>
          <section id="navbar"><Navbar /></section>
          <section id="home"><Landing /></section>
          <section id="about"><About /></section>
          <section id="brands"><Brands /></section>
          <section id="contact"><Contact /></section>
          <section id="footer"><Footer /></section>
        </>
      )}
    </div>
  );
}

export default App
