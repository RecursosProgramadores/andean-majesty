import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook } from "lucide-react";
import logo from "@/assets/logos/logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <img
                src={logo}
                alt="Leading Peru Travel"
                className="h-14 lg:h-16 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-background/70 text-sm leading-relaxed mb-4">
              Discover the new Wonders of Peru, enjoy your exciting South American adventure.
            </p>
            <p className="text-background/50 text-xs">
              Leading Peru Travel S.R.L.<br />
              RUC 20601234506
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4 text-accent">Explore</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-background/70 hover:text-primary transition-colors text-sm">Home</Link>
              <Link to="/tours" className="text-background/70 hover:text-primary transition-colors text-sm">Tours & Packages</Link>
              <Link to="/about" className="text-background/70 hover:text-primary transition-colors text-sm">About Us</Link>
              <Link to="/gallery" className="text-background/70 hover:text-primary transition-colors text-sm">Gallery</Link>
              <Link to="/contact" className="text-background/70 hover:text-primary transition-colors text-sm">Contact</Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4 text-accent">Contact</h4>
            <div className="flex flex-col gap-3 text-sm">
              <a href="mailto:leadingperu@gmail.com" className="flex items-center gap-2 text-background/70 hover:text-primary transition-colors">
                <Mail className="w-4 h-4 shrink-0" />
                leadingperu@gmail.com
              </a>
              <a href="https://wa.me/51941345282" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-background/70 hover:text-primary transition-colors">
                <Phone className="w-4 h-4 shrink-0" />
                +51 941 345 282
              </a>
              <div className="flex items-start gap-2 text-background/70">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                <span>Calle Fierro 478, Cercado, Cusco, Peru</span>
              </div>
            </div>
          </div>

          {/* Legal & Social */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4 text-accent">Legal</h4>
            <div className="flex flex-col gap-2 text-sm mb-6">
              <a href="#" className="text-background/70 hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="text-background/70 hover:text-primary transition-colors">Terms & Conditions</a>
              <a href="#" className="text-background/70 hover:text-primary transition-colors">Digital Claims Book</a>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/Machupicchutraveltour"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Visit our Facebook page"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 mt-10 pt-6 text-center">
          <p className="text-background/50 text-xs">
            © 2026 Leading Peru Travel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
