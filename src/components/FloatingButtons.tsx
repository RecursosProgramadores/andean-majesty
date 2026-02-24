import { MessageCircle, Phone } from "lucide-react";
import { motion } from "framer-motion";

const FloatingButtons = () => {
  return (
    <>
      {/* Phone - Left Side */}
      <div className="fixed bottom-6 left-6 z-50">
        <motion.a
          href="tel:+51984509207"
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="w-14 h-14 rounded-full bg-[#e6c64f] flex items-center justify-center shadow-luxury hover:scale-110 transition-transform group"
          aria-label="Call us"
        >
          <Phone className="w-6 h-6 text-black" />
          {/* Tooltip */}
          <span className="absolute left-full ml-3 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Call Us
          </span>
        </motion.a>
      </div>

      {/* WhatsApp - Right Side */}
      <div className="fixed bottom-6 right-6 z-50">
        <motion.a
          href="https://wa.me/51984509207?text=Hi!%20I'm%20interested%20in%20a%20luxury%20tour%20to%20Machu%20Picchu"
          target="_blank"
          rel="noopener noreferrer"
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-luxury hover:scale-110 transition-transform group"
          aria-label="Chat with us on WhatsApp"
        >
          <MessageCircle className="w-6 h-6 text-white" />
          {/* Tooltip */}
          <span className="absolute right-full mr-3 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            WhatsApp
          </span>
        </motion.a>
      </div>
    </>
  );
};

export default FloatingButtons;
