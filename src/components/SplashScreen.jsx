import { motion } from "framer-motion";
import { staggerContainer, textContainer, textVariant2 } from "../utils/motion";

const SplashScreen = () => {
  return (
    <div className="bg-foreground z-50 fixed inset-0 flex items-center justify-center">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="flex items-center gap-2"
      >
        <img
          src="/images/logo.png"
          alt="logo"
          className="w-11 h-11 object-contain"
        />
        <motion.p variants={textContainer}>
          {Array.from("VINSUM").map((letter, index) => (
            <motion.span
              className="text-4xl font-bold"
              variants={textVariant2}
              key={index}
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </motion.p>
      </motion.div>
    </div>
  );
};

export default SplashScreen;
