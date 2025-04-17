import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function AboutMeContent() {
  return (
    <motion.div
      className="flex flex-col max-w-4xl mx-auto px-6 py-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-center text-gray-800 dark:text-white mb-8 leading-tight"
        variants={itemVariants}
      >
        <span className="inline-block mr-2">👋</span> Hey there! I'm Roshami Thashmantha,
        <br className="hidden md:block" /> a{" "}
        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Passionate Web Developer
        </span>{" "}
        <span className="inline-block">🚀</span>
      </motion.h1>

      <motion.p
        className="mt-4 text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
        variants={itemVariants}
      >
        I am a dedicated Full Stack Developer with expertise in building modern,
        scalable, and user-friendly web applications. My passion for technology
        and problem-solving drives me to continuously explore and learn new
        technologies. I specialize in the MERN stack and enjoy creating
        interactive, high-performance web applications.
      </motion.p>

      <motion.div variants={itemVariants}>
        <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-800 dark:text-white border-b pb-2 border-gray-200 dark:border-gray-700">
          🎓 Educational Background
        </h3>
        <ul className="mt-2 space-y-2">
          <li className="flex items-start">
            <span className="text-blue-500 mr-2 mt-1">•</span>
            <span className="text-gray-700 dark:text-gray-300">
              BSc in Physical Science (Mathematics & Computer Science) – South
              Eastern University of Sri Lanka
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-500 mr-2 mt-1">•</span>
            <span className="text-gray-700 dark:text-gray-300">
              Bachelor of Information Technology (External) – University of
              Moratuwa
            </span>
          </li>
        </ul>
      </motion.div>

      <motion.div variants={itemVariants}>
        <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-800 dark:text-white border-b pb-2 border-gray-200 dark:border-gray-700">
          � What I Do
        </h3>
        <dl className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <dt className="font-bold text-gray-800 dark:text-white">
              🔹 Web Development
            </dt>
            <dd className="text-gray-600 dark:text-gray-400 ml-6 mt-1">
              React.js, Next.js, Tailwind CSS
            </dd>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <dt className="font-bold text-gray-800 dark:text-white">
              🔹 Backend Development
            </dt>
            <dd className="text-gray-600 dark:text-gray-400 ml-6 mt-1">
              Node.js, Express.js, PHP, Laravel
            </dd>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <dt className="font-bold text-gray-800 dark:text-white">
              🔹 Database Management
            </dt>
            <dd className="text-gray-600 dark:text-gray-400 ml-6 mt-1">
              MongoDB, MySQL
            </dd>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <dt className="font-bold text-gray-800 dark:text-white">
              🔹 API Integration
            </dt>
            <dd className="text-gray-600 dark:text-gray-400 ml-6 mt-1">
              RESTful APIs, Third-party services
            </dd>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <dt className="font-bold text-gray-800 dark:text-white">
              🔹 Version Control
            </dt>
            <dd className="text-gray-600 dark:text-gray-400 ml-6 mt-1">
              Git, GitHub
            </dd>
          </div>
        </dl>
      </motion.div>

      <motion.div variants={itemVariants}>
        <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-800 dark:text-white border-b pb-2 border-gray-200 dark:border-gray-700">
          💡 Why Work With Me?
        </h3>
        <ul className="mt-2 space-y-3">
          <li className="flex items-start">
            <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full p-1 mr-3 mt-0.5">
              ✓
            </span>
            <span className="text-gray-700 dark:text-gray-300">
              I love crafting elegant, intuitive, and engaging user experiences.
            </span>
          </li>
          <li className="flex items-start">
            <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full p-1 mr-3 mt-0.5">
              ✓
            </span>
            <span className="text-gray-700 dark:text-gray-300">
              I ensure clean, maintainable, and scalable code.
            </span>
          </li>
          <li className="flex items-start">
            <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full p-1 mr-3 mt-0.5">
              ✓
            </span>
            <span className="text-gray-700 dark:text-gray-300">
              I'm passionate about continuous learning and adapting to new
              technologies.
            </span>
          </li>
          <li className="flex items-start">
            <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full p-1 mr-3 mt-0.5">
              ✓
            </span>
            <span className="text-gray-700 dark:text-gray-300">
              I collaborate well in teams and take ownership of my work.
            </span>
          </li>
        </ul>
      </motion.div>
    </motion.div>
  );
}