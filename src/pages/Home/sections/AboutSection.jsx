import Card from "../../../components/Card";

import { aboutCards } from "../../../constants";
import { motion } from "framer-motion";
import { fadeIn, fadeInOpacity } from "../../../utils/motion";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../utils/routes";

const AboutSection = () => {
  const navigate = useNavigate();
  const handleClick = (index) => {
    if (index === aboutCards.length - 1) {
      navigate(ROUTES.CONTACT);
    } else if (index === 0) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate(ROUTES.SERVICE);
    }
  };
  return (
    <section className="wrapper my-10 mt-24">
      <Card hasBg>
        <div className="space-y-3 max-w-xl">
          <motion.p
            variants={fadeIn("down", "tween", 0.2, 1)}
            className="card-name"
          >
            About us
          </motion.p>
          <motion.h1
            variants={fadeIn("right", "tween", 0.2, 1)}
            className="card-title"
          >
            WHY US.
          </motion.h1>

          <motion.p
            variants={fadeIn("right", "tween", 0.2, 1)}
            className="card-description"
          >
            Innovative Solutions for Every Journey: From real-time tracking to
            customized logistics plans, we adapt to your needs for maximum
            efficiency and transparency.
          </motion.p>
        </div>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-4 mt-10">
          {aboutCards.map((obj, index) => {
            return (
              <motion.div
                variants={fadeInOpacity(index * 0.6)}
                key={index}
                onClick={() => handleClick(index)}
                className={`bg-white  border drop-shadow w-full rounded-2xl p-6 space-y-4 hover:bg-primary hover:text-white transition duration-300 group cursor-pointer`}
              >
                <img src={obj.image} alt="about-image" className="w-14" />
                <h1 className="font-semibold text-2xl">{obj.title}</h1>
                <p className="text-text text-sm group-hover:text-white">
                  {obj.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Card>
    </section>
  );
};

export default AboutSection;
