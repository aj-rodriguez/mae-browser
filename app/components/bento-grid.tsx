import { motion } from "framer-motion";

export const BentoGrid = () => {
  const gridItems = [
    { id: 1, title: "Robotics", color: "bg-gradient-to-r from-blue-900 to-indigo-900" },
    { id: 2, title: "Aerospace", color: "bg-gradient-to-r from-purple-900 to-pink-900" },
    { id: 3, title: "Sustainable Energy", color: "bg-gradient-to-r from-yellow-900 to-amber-900" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {gridItems.map((item) => (
        <motion.div
          key={item.id}
          className={`bento-card ${item.color}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: item.id * 0.1 }}
        >
          <h3 className="text-xl font-bold text-white">{item.title}</h3>
        </motion.div>
      ))}
    </div>
  );
};
