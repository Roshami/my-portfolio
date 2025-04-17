import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant } from "../utils/motion";

export default function HomePage() {
  return (
    <motion.div
      variants={staggerContainer()}
      initial="hidden"
      animate="show"
      className="flex w-full h-full min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50 px-8"
    >
      {/* Text Content */}
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="flex flex-col justify-center items-start w-full lg:w-[69%] h-full px-4 lg:px-12"
      >
        <motion.div variants={textVariant(0.4)}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
            Hi, I'm Roshami Thashmantha{" "}
            <motion.span
              animate={{ rotate: [0, 20, -10, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2, repeatDelay: 3 }}
              className="inline-block"
            >
              👋
            </motion.span>
          </h1>
        </motion.div>

        <motion.div variants={textVariant(0.6)}>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-indigo-600 mt-4 mb-6">
            A Passionate Full Stack Developer{" "}
            <motion.span
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="inline-block"
            >
              🚀
            </motion.span>
          </h2>
        </motion.div>

        <motion.p
          variants={fadeIn("up", "tween", 0.8, 1)}
          className="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed"
        >
          I specialize in building modern, responsive, and interactive web
          applications using React, Next.js, Tailwind CSS, and Node.js. I love
          creating visually appealing and highly functional websites that provide
          a seamless user experience.
        </motion.p>

        <motion.div
          variants={fadeIn("up", "tween", 1, 1)}
          className="mt-8 flex gap-4"
        >
          <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-all shadow-lg hover:shadow-indigo-300">
            View My Work
          </button>
          <button className="px-6 py-3 border-2 border-indigo-600 text-indigo-600 rounded-lg font-medium hover:bg-indigo-50 transition-all">
            Contact Me
          </button>
        </motion.div>
      </motion.div>

      {/* Profile Image */}
      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className="hidden lg:flex w-[29%] h-full items-center justify-center"
      >
        <div className="relative">
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            src="/profile/dp.jpeg"
            alt="Roshami Thashmantha"
            className="w-[320px] h-[320px] rounded-full object-cover select-none pointer-events-none border-8 border-white shadow-2xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.1, 1.1, 1, 1],
              rotate: [0, 0, 270, 270, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 8,
              ease: "linear",
            }}
            className="absolute inset-0 rounded-full border-4 border-dashed border-indigo-300 -z-10"
          ></motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}