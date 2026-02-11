import { MessageCircle, Phone } from "lucide-react";
import { motion } from "framer-motion";

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* Phone */}
      <motion.a
        href="tel:+51941345282"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-luxury hover:scale-110 transition-transform"
        aria-label="Call us"
      >
        <Phone className="w-6 h-6 text-primary-foreground" />
      </motion.a>

      {/* WhatsApp */}
      <motion.a
        href="https://wa.me/51941345282?text=Hi!%20I'm%20interested%20in%20a%20luxury%20tour%20to%20Machu%20Picchu"
        target="_blank"
        rel="noopener noreferrer"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center shadow-luxury hover:scale-110 transition-transform"
        aria-label="Chat with us on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 text-secondary-foreground" />
      </motion.a>
    </div>
  );
};

export default FloatingButtons;
