import { motion } from "framer-motion";
import AboutMeContent from "./contentPages/aboutMeConternt";


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      when: "beforeChildren"
    }
  }
};

const imageVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const contentVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

export default function About() {
  return (
    <motion.div
      className="flex w-full h-full min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Content Section */}
      <motion.div
        className="w-[79%] lg:w-[79%] h-full p-4 md:p-8 flex flex-col overflow-auto scrollbar scrollbar-container"
        variants={contentVariants}
      >
        <div className="max-w-6xl mx-auto w-full">
          <AboutMeContent />
        </div>
      </motion.div>

      {/* Image Section */}
      <motion.div
        className="hidden lg:flex w-[21%] h-full overflow-auto justify-center items-center sticky top-0"
        variants={imageVariants}
      >
        <div className="relative group">
          <img
            src="/profile/dp.jpeg"
            alt="Profile picture"
            className="w-[300px] h-[300px] rounded-full object-cover select-none pointer-events-none p-4 border-4 border-white dark:border-gray-700 shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <span className="text-white font-bold text-lg bg-black/50 px-4 py-2 rounded-full">
              Roshami Thashmantha
            </span>
          </div>
        </div>
      </motion.div>

      {/* Mobile Image (shown only on small screens) */}
      <motion.div
        className="lg:hidden w-full flex justify-center items-center py-8 scrollbar-hidden "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <div className="relative group">
          <img
            src="/profile/dp.jpeg"
            alt="Profile picture"
            className="w-[200px] h-[200px] rounded-full object-cover select-none pointer-events-none border-4 border-white dark:border-gray-700 shadow-xl"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}