import { AnimatePresence, motion } from "framer-motion";
import { useRef } from "react";

export const Carousel = ({ items }) => {
  const scrollRef = useRef(null);
  
  const handleScroll = () => {
    // Scroll handler logic
  };

  return (
    <div
      ref={scrollRef}
      className="relative w-full overflow-hidden"
      onScroll={handleScroll}
    >
      <div className="flex items-center justify-center">
        <AnimatePresence>
          <motion.div
            key="carousel"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="flex space-x-8"
          >
            {items.map((item) => (
              <motion.div
                key={item.id}
                className="glass w-96 h-64 flex flex-col items-center justify-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.date}</p>
                  <a
                    href={item.link}
                    className="mt-4 text-blue-400 hover:text-blue-200"
                    aria-label={`View details about ${item.title}`}
                  >
                    View Details
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
