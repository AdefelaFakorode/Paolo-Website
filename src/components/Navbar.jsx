import { useEffect, useState } from "react";
import Hamburger from "hamburger-react";
import { Link } from "react-scroll";

function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false)

  const navLinks = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Brands", id: "brands" },
    { label: "Contact", id: "contact" }, // Optional if you add this section
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Adjust 100 to match your landing page height threshold
      setScrolled(scrollY > window.innerHeight * 0.8);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <nav
      className={`w-full fixed text-white flex justify-end items-center px-4 md:py-8 py-4 z-50 top-0 drop-shadow-xl transition-colors duration-10 ${
        scrolled ? "bg-black" : "bg-transparent"
      }`}
    >
      {/* Hamburger */}
      <button onClick={() => setOpen(!isOpen)} className="md:hidden focus:outline-none">
        <Hamburger toggled={isOpen} toggle={setOpen} size={20} />
      </button>

      {/* Desktop Links */}
      <ul className="hidden md:flex gap-6 md:text-[18px] text-sm font-extrabold">
        {navLinks.map((link) => (
          <li key={link.id}>
            <Link
              to={link.id}
              smooth={true}
              duration={500}
              offset={-80}
              className="cursor-pointer transition-opacity duration-300 hover:opacity-60"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu */}
      <div
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
        } absolute top-14 left-0 w-full flex flex-col gap-2 px-4 md:hidden text-center bg-black`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.id}
            to={link.id}
            smooth={true}
            duration={500}
            offset={-80}
            onClick={() => setOpen(false)}
            className="cursor-pointer py-2"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
