import { motion } from "framer-motion";
import { homeOurValues, homeServices } from "../../../constants";
import { fadeIn, fadeInOpacity, staggerContainer } from "../../../utils/motion";

const OurValuesSection = () => {
  return (
    <section className=" my-10">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <motion.div variants={fadeIn("top", "tween", 0.2, 0.5)} className="uppercase bg-primary text-white w-max p-2 px-4 mb-6 mx-auto font-semibold text-lg rounded-tr-3xl rounded-bl-3xl">
          OUR VALUES
        </motion.div>

        <div className="wrapper flex flex-wrap items-center justify-center md:gap-10 gap-6  mx-auto">
          {homeOurValues.map(({ image, title }, index) => (
            <motion.div
              variants={fadeInOpacity(index * 0.1)}
              key={index}
              className="flex flex-col items-center justify-center"
            >
              <h3
                className={`font-semibold mt-4 ${
                  index % 2 === 0 ? "text-primary" : ""
                }`}
              >
                {title}
              </h3>
              <img
                src={image}
                alt={title}
                className={`${
                  index === homeOurValues.length - 1
                    ? "w-28 h-28"
                    : "w-24 h-24 "
                } object-contain`}
              />
            </motion.div>
          ))}
        </div>

        <motion.div variants={fadeIn("top", "tween", 0.2, 0.5)} className="bg-primary my-6 py-10 flex sm:gap-10 gap-8 flex-wrap items-center justify-center">
          {homeServices.map(({ image, title }, index) => (
            <motion.div
              variants={fadeInOpacity(index * 0.2)}
              key={index}
              className="flex flex-col items-center justify-center"
            >
              <img
                src={image}
                alt={title}
                className="w-24 h-24 object-contain rounded-full border-[3px] border-white"
              />
              <h3 className="font-semibold max-w-[200px] uppercase text-sm text-center w-full mt-4 text-white">
                {title}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default OurValuesSection;
