import { motion } from "framer-motion";

export const ActivityFeed = () => {
  const items = [
    { id: 1, title: "New AI Lab", date: "Oct 26, 2023" },
    { id: 2, title: "Hypersonic Research", date: "Oct 25, 2023" },
    { id: 3, title: "Solar Microgrid", date: "Oct 24, 2023" },
  ];

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <motion.div
          key={item.id}
          className="glass p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: item.id * 0.2 }}
        >
          <div className="flex items-start">
            <div className="text-blue-400 mr-2">•</div>
            <div>
              <h4 className="font-bold text-lg">{item.title}</h4>
              <p className="text-gray-400">{item.date}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
