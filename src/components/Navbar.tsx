import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, Phone, ChevronDown, Mail, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import LanguageSwitcher from "./LanguageSwitcher";
import logo from "@/assets/logos/logo.png";

interface NavItem {
  label: string;
  to?: string;
  submenu?: { label: string; to: string }[];
}

const navLinks: NavItem[] = [
  { label: "Home", to: "/" },
  {
    label: "Tour Packages",
    to: "/tours",
    submenu: [
      { label: "Peru Tours", to: "/tours?country=peru" },
      { label: "Ecuador Tours", to: "/tours?country=ecuador" },
      { label: "Bolivia Tours", to: "/tours?country=bolivia" },
      { label: "Chile Tours", to: "/tours?country=chile" },
    ]
  },
  {
    label: "About Us",
    to: "/about",
    submenu: [
      { label: "Our Team", to: "/about/team" },
      { label: "Social Action Projects in Peru", to: "/about/social-action" },
      { label: "Responsible Travel", to: "/about/responsible-travel" },
    ]
  },
  { label: "Destinations", to: "/destinations" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setMobileSubmenu(null);
  }, [location.pathname]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 shadow-card border-b border-black/10">
      {/* Top Bar */}
      <div className="bg-black text-[#e6c64f] text-[10px] py-1.5 hidden lg:block border-b border-[#e6c64f]/10">
        <div className="container mx-auto px-4 lg:px-8 flex justify-end gap-6 font-bold uppercase tracking-widest">
          <a href="tel:+51984509207" className="flex items-center gap-1.5 hover:text-white transition-colors">
            <Phone className="w-3 h-3" /> +51 984 509 207
          </a>
          <a href="https://wa.me/51984509207" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-white transition-colors">
            <MessageCircle className="w-3 h-3 text-[#25D366]" /> WhatsApp Agent
          </a>
          <a href="mailto:leadingperu@gmail.com" className="flex items-center gap-1.5 hover:text-white transition-colors">
            <Mail className="w-3 h-3" /> leadingperu@gmail.com
          </a>
        </div>
      </div>

      <div className="bg-[#e6c64f] container-fluid">
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
                <div
                  key={link.label}
                  className="relative h-full flex items-center"
                  onMouseEnter={() => link.submenu && setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    to={link.to || "#"}
                    className={`text-[13px] font-bold uppercase tracking-wider transition-all hover:text-black/60 flex items-center gap-1 py-4 ${location.pathname === link.to
                      ? "text-black"
                      : "text-black/80"
                      }`}
                  >
                    {link.label}
                    {link.submenu && <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === link.label ? "rotate-180" : ""}`} />}
                  </Link>

                  {/* Submenu Desktop */}
                  <AnimatePresence>
                    {link.submenu && activeDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-0 bg-white shadow- luxury border border-black/5 py-4 min-w-[240px] rounded-b-xl z-50"
                      >
                        {link.submenu.map((sub) => (
                          <Link
                            key={sub.to}
                            to={sub.to}
                            className="block px-6 py-2.5 text-sm font-medium text-black/70 hover:text-black hover:bg-[#e6c64f]/10 transition-colors"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              <LanguageSwitcher />
              <a
                href="https://wa.me/51984509207?text=Hi!%20I'm%20interested%20in%20a%20luxury%20tour%20to%20Machu%20Picchu"
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
              className="lg:hidden p-2 text-black"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="lg:hidden fixed inset-0 top-16 bg-[#e6c64f] z-40 overflow-y-auto"
          >
            <div className="container mx-auto px-6 py-8 flex flex-col gap-2">
              {navLinks.map((link) => (
                <div key={link.label} className="border-b border-black/5 last:border-0">
                  {link.submenu ? (
                    <div className="py-2">
                      <button
                        onClick={() => setMobileSubmenu(mobileSubmenu === link.label ? null : link.label)}
                        className="w-full flex items-center justify-between py-3 text-lg font-bold text-black/80"
                      >
                        {link.label}
                        <ChevronDown className={`w-5 h-5 transition-transform ${mobileSubmenu === link.label ? "rotate-180" : ""}`} />
                      </button>
                      <AnimatePresence>
                        {mobileSubmenu === link.label && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="bg-black/5 rounded-xl overflow-hidden mt-1"
                          >
                            {link.submenu.map((sub) => (
                              <Link
                                key={sub.to}
                                to={sub.to}
                                onClick={() => setIsOpen(false)}
                                className="block px-6 py-3.5 text-base font-medium text-black/70 active:bg-black/10"
                              >
                                {sub.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={link.to || "#"}
                      onClick={() => setIsOpen(false)}
                      className={`block py-5 text-lg font-bold transition-colors ${location.pathname === link.to ? "text-black" : "text-black/70"
                        }`}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}

              <div className="pt-8 flex flex-col gap-6">
                <div className="flex justify-center">
                  <LanguageSwitcher />
                </div>
                <a
                  href="https://wa.me/51984509207?text=Hi!%20I'm%20interested%20in%20a%20luxury%20tour%20to%20Machu%20Picchu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-black text-[#e6c64f] px-5 py-4 rounded-xl text-md font-bold uppercase tracking-wider shadow-lg active:scale-95 transition-transform"
                >
                  <Phone className="w-5 h-5" />
                  Book Now
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
