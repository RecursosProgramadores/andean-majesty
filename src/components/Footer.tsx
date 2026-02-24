import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import logo from "@/assets/logos/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-[#f5f5f5] pt-16 pb-8 border-t border-white/5">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Column 1: Membership/Brand */}
          <div className="space-y-6">
            <Link to="/" className="inline-block transform transition-hover hover:scale-105">
              <img
                src={logo}
                alt="Andean Majesty"
                className="h-16 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-white/50 text-xs leading-relaxed max-w-xs font-medium uppercase tracking-wider">
              Discover the new Wonders of Peru, enjoy your exciting South American adventure with our premium handcrafted tours.
            </p>
            <div className="pt-4 flex flex-wrap gap-4 opacity-50 grayscale hover:grayscale-0 transition-all">
              {/* Membership Logos Placeholders */}
              <div className="w-12 h-12 bg-white/10 rounded flex items-center justify-center text-[8px] font-bold text-center p-1 uppercase">Sernanp</div>
              <div className="w-12 h-12 bg-white/10 rounded flex items-center justify-center text-[8px] font-bold text-center p-1 uppercase">Dircetur</div>
              <div className="w-12 h-12 bg-white/10 rounded flex items-center justify-center text-[8px] font-bold text-center p-1 uppercase">Promperu</div>
            </div>
          </div>

          {/* Column 2: Customer Service */}
          <div>
            <h4 className="text-[#e6c64f] font-heading font-bold text-sm uppercase tracking-[0.2em] mb-8 border-b border-white/10 pb-2 inline-block">
              Customer Service
            </h4>
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-xs font-bold text-white/80 uppercase tracking-widest">USA Office</p>
                <div className="flex items-start gap-3 text-white/50 group">
                  <MapPin className="w-4 h-4 shrink-0 transition-colors group-hover:text-primary" />
                  <span className="text-xs leading-relaxed">123 Market St, San Francisco, CA 94103, United States</span>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-xs font-bold text-white/80 uppercase tracking-widest">Peru Office</p>
                <div className="flex items-start gap-3 text-white/50 group">
                  <MapPin className="w-4 h-4 shrink-0 transition-colors group-hover:text-primary" />
                  <span className="text-xs leading-relaxed">Calle Fierro 478, Cercado, Cusco, Peru</span>
                </div>
              </div>
              <div className="pt-4 space-y-3">
                <a href="mailto:leadingperu@gmail.com" className="flex items-center gap-3 text-white/50 hover:text-primary transition-colors text-xs font-medium group">
                  <Mail className="w-4 h-4 shrink-0 group-hover:scale-110 transition-transform" />
                  leadingperu@gmail.com
                </a>
                <a href="tel:+51984509207" className="flex items-center gap-3 text-white/50 hover:text-primary transition-colors text-xs font-medium group">
                  <Phone className="w-4 h-4 shrink-0 group-hover:scale-110 transition-transform" />
                  +51 984 509 207
                </a>
                <a href="https://wa.me/51984509207" className="flex items-center gap-3 text-[#25D366] hover:brightness-110 transition-all text-sm font-bold group">
                  <MessageCircle className="w-5 h-5 shrink-0 group-hover:rotate-12 transition-transform" />
                  WhatsApp Travel Agent
                </a>
              </div>
            </div>
          </div>

          {/* Column 3: Company Links */}
          <div>
            <h4 className="text-[#e6c64f] font-heading font-bold text-sm uppercase tracking-[0.2em] mb-8 border-b border-white/10 pb-2 inline-block">
              Company
            </h4>
            <nav className="flex flex-col gap-4">
              {[
                { label: "About Us", to: "/about" },
                { label: "Our Team", to: "/about/team" },
                { label: "Social Action Projects in Peru", to: "/about/social-action" },
                { label: "Responsible Travel", to: "/about/responsible-travel" },
                { label: "Accreditations & Awards", to: "/about#awards" },
                { label: "Register your travel agencies", to: "/contact" }
              ].map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="text-white/50 hover:text-white transition-colors text-xs font-medium uppercase tracking-widest flex items-center gap-2 group"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/0 group-hover:bg-primary transition-all scale-0 group-hover:scale-100" />
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 4: Policies and Legal */}
          <div>
            <h4 className="text-[#e6c64f] font-heading font-bold text-sm uppercase tracking-[0.2em] mb-8 border-b border-white/10 pb-2 inline-block">
              Policies and Legal
            </h4>
            <div className="space-y-6">
              <nav className="flex flex-col gap-4">
                <Link to="#" className="text-white/50 hover:text-white transition-colors text-xs font-medium uppercase tracking-widest">Privacy Policy</Link>
                <Link to="#" className="text-white/50 hover:text-white transition-colors text-xs font-medium uppercase tracking-widest">Terms & Conditions</Link>
              </nav>
              <div className="pt-4">
                <p className="text-[10px] text-white/30 uppercase tracking-[0.3em] font-bold mb-4">Official Protection</p>
                <a href="#" className="inline-block bg-white/5 border border-white/10 rounded-lg p-4 hover:bg-white/10 transition-all group">
                  <span className="text-[10px] font-bold text-white/70 group-hover:text-white block uppercase tracking-widest mb-1">
                    Digital Claims Book
                  </span>
                  <div className="h-1 w-full bg-primary/20 rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-1/3" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/20 text-[10px] uppercase font-bold tracking-[0.4em]">
            © 2026 Andean Majesty - All rights reserved
          </p>
          <div className="flex gap-8">
            {/* Simple social icons could go here if needed, but per request "Sin redes sociales visibles en footer principal" */}
            <span className="text-white/10 text-[10px] uppercase font-bold tracking-widest">Premium Travel Experiences</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
