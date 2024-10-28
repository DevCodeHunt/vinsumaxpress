import Card from "../../../components/Card";
import { motion } from "framer-motion";
import { fadeIn } from "../../../utils/motion";

const OfficeSection = () => {
  return (
    <section className="wrapper my-10">
      <Card hasBg>
        <motion.div
          variants={fadeIn("right", "tween", 0.2, 1)}
          className="space-y-3"
        >
          <h1 className="card-title w-[60%]">
            WITH OVER
            <span className="text-primary"> 500+ HAPPY CLIENTS</span> —
             VINSUM ELEVATED THE CREDIBILITY BAR HIGH
          </h1>
          <p className="card-description w-[50%]">
            Over 21+ years of experience in logistics and supply chain management with 
            a base of 500+ satisfied customers incluing but not limited to:
          </p>
        </motion.div>
        <div className="mt-10"></div>
      </Card>
    </section>
  );
};

export default OfficeSection;
