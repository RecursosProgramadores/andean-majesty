import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import LanguageSwitcher from "./LanguageSwitcher";
import logo from "@/assets/logos/logo.png";


const navLinks = [
  { label: "Home", to: "/" },
  { label: "Tours", to: "/tours" },
  { label: "About Us", to: "/about" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#e6c64f] shadow-card border-b border-black/10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="Leading Peru Travel"
              className="h-10 lg:h-14 w-auto object-contain transition-transform hover:scale-105"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-semibold uppercase tracking-wider transition-all hover:text-black/60 ${location.pathname === link.to
                  ? "text-black border-b-2 border-black pb-1"
                  : "text-black/80"
                  }`}
              >
                {link.label}
              </Link>
            ))}
            <LanguageSwitcher />
            <a
              href="https://wa.me/51941345282?text=Hi!%20I'm%20interested%20in%20a%20luxury%20tour%20to%20Machu%20Picchu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-black text-[#e6c64f] px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-black/80 transition-all shadow-lg transform hover:-translate-y-0.5"
            >
              <Phone className="w-3.5 h-3.5" />
              Book Now
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#e6c64f] border-t border-black/10"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className={`py-3 text-lg font-semibold border-b border-black/5 last:border-0 transition-colors ${location.pathname === link.to ? "text-black" : "text-black/70"
                    }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="py-2">
                <LanguageSwitcher />
              </div>
              <a
                href="https://wa.me/51941345282?text=Hi!%20I'm%20interested%20in%20a%20luxury%20tour%20to%20Machu%20Picchu"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-black text-[#e6c64f] px-5 py-3.5 rounded-full text-sm font-bold uppercase tracking-wider mt-4 shadow-lg"
              >
                <Phone className="w-4 h-4" />
                Book Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
