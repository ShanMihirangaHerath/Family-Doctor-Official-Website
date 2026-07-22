import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const FloatingWhatsApp = () => {
  const message = "Hello FD, I would like to know more about your services.";
  
  const encodedMessage = encodeURIComponent(message);
  
  const whatsappUrl = `https://wa.me/94765755625?text=${encodedMessage}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-[999] bg-[#25D366] p-4 rounded-full shadow-2xl text-white hover:bg-[#128C7E] transition-all duration-300"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {/* Pulse effect wrapper */}
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <MessageCircle size={32} />
      </motion.div>
    </motion.a>
  );
};

export default FloatingWhatsApp;