import Card from "../../../components/Card";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../../utils/motion";
import { clients } from "../../../constants";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay } from "swiper/modules";

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
            <span className="text-primary"> 500+ HAPPY CLIENTS</span> — VINSUM
            ELEVATED THE CREDIBILITY BAR HIGH
          </h1>
          <p className="card-description w-[50%]">
            Over 21+ years of experience in logistics and supply chain
            management with a base of 500+ satisfied customers incluing but not
            limited to:
          </p>
          <Clients />
        </motion.div>
      </Card>
    </section>
  );
};

const Clients = () => {
  const breakpoints = {
    0: {
      slidesPerView: 2,
    },
    540: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 6,
    },
    1024: {
      slidesPerView: 7,
    },
  };
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <motion.div variants={fadeIn("right", "tween", 0.2, 1)}>
        <div className="bg-gray-200 content-center rounded p-1 px-1 w-full mt-10 mb-8 ">
          <p className="text-center text-base antialiased my-2 w-full tracking-wider text-red-600">
            Vinsum is the trusted choice of industry leaders for accelerating
            revenue growth.
          </p>
        </div>
        <Swiper
          spaceBetween={50}
          slidesPerView={5}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          fade={true}
          modules={[Autoplay]}
          breakpoints={breakpoints}
        >
          {clients.map((client, index) => (
            <SwiperSlide key={index} className="py-4">
              <div className="flex overflow-y-hidden overflow-x-scroll border-1 p-4 bg-gray-50">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-16 w-full"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </motion.section>
  );
};

export default OfficeSection;
