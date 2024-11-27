import { useCallback, useState } from "react";
import Card from "../../../components/Card";
import { serviceQuestions } from "../../../constants";
import { LuArrowDownRight } from "react-icons/lu";
import { motion } from "framer-motion";
import { fadeIn, fadeInOpacity, zoomIn } from "../../../utils/motion";
import { Link } from "react-router-dom";
import { MoveRight } from "lucide-react";
import { ROUTES } from "../../../utils/routes";

const ServiceSection = () => {
  const [active, setActive] = useState();

  const handleActive = useCallback(
    (index) => setActive((prevActive) => (prevActive === index ? null : index)),
    []
  );

  return (
    <section className="wrapper my-10">
      <Card>
        <div className="space-y-3 max-w-xl">
          <motion.p
            variants={fadeIn("down", "tween", 0.2, 0.5)}
            className="card-name"
          >
            Our Service
          </motion.p>
          <motion.h1
            variants={fadeIn("right", "tween", 0.2, 0.5)}
            className="card-title"
          >
            Manage Your Package From Local To{" "}
            <span className="text-primary">The World</span>
          </motion.h1>
          <motion.p
            variants={fadeIn("right", "tween", 0.2, 0.5)}
            className="card-description"
          >
            Vinsum is a logistics provider of integrated freight solutions.
            vinsum provides dedicated freight solution including: Less Than
            Truck Load, Full Truck Load, Wraehousing/Fullfillment, Drayage, and
            transloading
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 md:gap-12 gap-10 mt-8">
          <motion.div
            variants={zoomIn(0.06, 1)}
            className="w-full h-[380px] overflow-hidden rounded-2xl"
          >
            <video
              muted
              loop
              autoPlay
              title="Video Indroduction"
              poster="https://cdn.pixabay.com/photo/2014/09/11/22/00/dock-441989_1280.jpg"
              className="rounded-2xl object-cover w-full h-full brightness-75"
            >
              <source src="/videos/service-pannel.mp4" type="video/mp4"></source>
            </video>
          </motion.div>
          <div className="space-y-4">
            {serviceQuestions.map((service, index) => {
              const title = service.title.split(" ");
              const isActive = active === index;
              return (
                <motion.div
                  variants={fadeInOpacity(index * 0.6)}
                  key={index}
                  onClick={() => handleActive(index)}
                  className="border-t last:border-b border-text py-6"
                >
                  <div className="flex items-center justify-between cursor-pointer">
                    <h1 className="text-3xl font-semibold">
                      <span className="text-primary">{title[0]} </span>
                      {title[1]} {title[2]} {title[3]}
                    </h1>
                    <LuArrowDownRight
                      size={38}
                      className={`${
                        isActive ? "-rotate-90" : "rotate-0"
                      } transition duration-500`}
                    />
                  </div>
                  {isActive && (
                    <div onClick={e => e.stopPropagation()} className="space-y-4 pt-6">
                      <p className="text-text mb-4">{service.description}</p>
                      <Link to={`${ROUTES.SERVICE}#service-id`} className="flex items-center gap-1 hover:text-primary transition duration-300">
                        Learn more <MoveRight size={18} />
                      </Link>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </Card>
    </section>
  );
};

export default ServiceSection;
