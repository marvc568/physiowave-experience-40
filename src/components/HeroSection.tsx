import { motion } from "framer-motion";
import { useState } from "react";
import BookingDialog from "./BookingDialog";

const HeroSection = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <section className="hero-gradient min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2 text-white text-center md:text-right"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              خدمات العلاج الطبيعي في المنزل
            </h1>
            <p className="text-lg md:text-xl mb-8 text-white/90">
              نقدم خدمات علاج طبيعي متخصصة في منزلك، مع فريق من الخبراء المؤهلين
              لمساعدتك في استعادة صحتك وحيويتك
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-accent text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-accent/90 transition-colors"
              onClick={() => setIsBookingOpen(true)}
            >
              احجز الآن
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:w-1/2 mt-8 md:mt-0"
          >
            <img
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3"
              alt="Physical Therapy"
              className="rounded-lg shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
      <BookingDialog open={isBookingOpen} onOpenChange={setIsBookingOpen} />
    </section>
  );
};

export default HeroSection;