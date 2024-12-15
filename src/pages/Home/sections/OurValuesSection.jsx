import { motion } from "framer-motion";
import { homeOurValues, homeServices } from "../../../constants";
import { fadeIn, fadeInOpacity, staggerContainer } from "../../../utils/motion";

const OurValuesSection = () => {
  return (
    <>
      <section className=" my-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
        >
          <motion.div
            variants={fadeIn("top", "tween", 0.2, 0.5)}
            className="uppercase bg-primary text-white w-max p-2 px-4 mb-6 mx-auto font-semibold text-lg rounded-tr-3xl rounded-bl-3xl"
          >
            OUR VALUES
          </motion.div>

          <div className="wrapper flex flex-wrap items-center justify-center xl:gap-10 gap-4  mx-auto">
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
                      ? "w-28 h-24"
                      : "w-24 h-24"
                  } object-contain`}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="bg-primary py-10">
        <motion.div
          variants={fadeIn("top", "tween", 0.2, 0.5)}
          className="wrapper grid lg:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-x-4 gap-y-6 max-w-screen-lg mx-auto"
        >
          {homeServices.map(({ image, title }, index) => (
            <motion.div
              variants={fadeInOpacity(index * 0.2)}
              key={index}
              className="text-white space-y-3"
            >
              <div className="w-24 border-[3px] p-2 border-white rounded-full mx-auto">
                <img src={image} alt={title} className="object-contain p-1" />
              </div>
              <h2 className="font-semibold text-center text-sm mx-auto max-w-[150px] w-full">
                {title}
              </h2>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </>
  );
};

export default OurValuesSection;
