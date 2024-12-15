import {
  ArrowUpRight,
  Box,
  CheckCheck,
  EarthLock,
  Layers,
  MessageSquareText,
  NotebookText,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { multimodalTransPortations, serviceData } from "../constants";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/effect-fade";
import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";
import { useMediaQuery } from "react-responsive";
import AnimationWrapper from "../components/AnimationWrapper";
import { useLocation, useNavigate } from "react-router-dom";
import { ROUTES } from "../utils/routes";

const Services = () => {
  const desktop = useMediaQuery({ query: "(min-width: 768px)" });
  const navigate = useNavigate();
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);
  return (
    <>
      <section className="w-full relative">
        <figure className="w-full md:h-[450px] h-[400px] object-cover brightness-75">
          <img
            src="/images/warehouse-climate-control.jpg"
            alt="wharehouse control"
            className="h-full w-full object-cover"
          />
        </figure>
        <img
          src="/images/warehouse-service-control.png"
          alt="warehouse-control-service"
          className="absolute xl:-bottom-28 lg:-bottom-24 md:-bottom-20 sm:-bottom-16 -bottom-10"
        />
      </section>

      <section className="py-16 md:mt-32 mt-24">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="wrapper space-y-8"
        >
          <motion.div
            variants={fadeIn("top", "tween", 0.2, 0.5)}
            className="uppercase bg-primary text-white w-max p-2 px-4 mx-auto font-semibold text-lg rounded-tr-3xl rounded-bl-3xl"
          >
            SERVICES
          </motion.div>

          <motion.div
            variants={fadeIn("top", "tween", 0.2, 0.5)}
            className="grid sm:grid-cols-3 py-4  bg-background rounded"
          >
            <ul className="list-disc px-6">
              <li>Inbound Stroe management</li>
              <li>Warehouse operation</li>
              <li>Distribution Management</li>
              <li>Picking/Packing & CKD/CBU packing</li>
              <li>Assemble line operation</li>
            </ul>

            <ul className="list-disc px-6">
              <li>Quality inspection</li>
              <li>Store/SPO/PG Warehouse Management</li>
              <li>Sequencing Project</li>
              <li>VMI Warehouse</li>
              <li>Fulfilment center</li>
            </ul>

            <ul className="list-disc px-6">
              <li>Stack receipt</li>
              <li>Supply chain consultancy</li>
              <li>
                Production Plan - Pull out servicing, kit loading, tralley
                loading, double veining & tralley line-up.
              </li>
              <li>Contract Logistics</li>
            </ul>
          </motion.div>
        </motion.div>
      </section>

      <section className="py-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          className="wrapper"
          viewport={{ once: false, amount: 0.25 }}
        >
          <motion.div
            variants={fadeIn("top", "tween", 0.2, 0.5)}
            className="uppercase bg-primary text-white w-max p-2 px-4 mb-6 mx-auto font-semibold text-lg rounded-tr-3xl rounded-bl-3xl"
          >
            MULTIMODAL TRANSPORTATION
          </motion.div>

          <motion.div
            variants={fadeIn("right", "tween", 0.2, 0.5)}
            className="mt-10 grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4"
          >
            {multimodalTransPortations.map(
              ({ title, description, offers, image }, index) => (
                <div key={index}>
                  <img
                    src={image}
                    alt={title}
                    className="h-[200px] rounded-xl shadow mb-2 brightness-90"
                  />
                  <div className="">
                    <h3 className="text-primary">{title}</h3>
                    <p className="text-sm my-2">{description}</p>
                    <p className="text-primary">We offer:</p>
                    <ul className="list-disc pl-6">
                      {offers.map((offer, index) => (
                        <li key={index} className="text-sm text-text">
                          {offer}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            )}
          </motion.div>
        </motion.div>
      </section>

      <section className="py-16">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="wrapper bg-background space-y-8 grid md:grid-cols-2 items-center gap-4 py-4"
        >
          <motion.figure variants={fadeIn("right", "tween", 0.2, 0.5)}>
            <img
              src="/images/2-10.png"
              alt="image"
              className="w-[80%] mx-auto"
            />
          </motion.figure>

          <motion.div variants={fadeIn("left", "tween", 0.2, 0.5)} className="">
            <ul className="list-outside marker:text-primary  list-disc px-6">
              <li>Smart Tag Trace returanable Packaging Asset Management.</li>
              <li>
                Utilizes state-of-the-art globally standardized technologies
                such as QR Code,RFID, sensors, and gateways.
              </li>
              <li>
                Helps monitor the lifecycle management of packing equipment.
              </li>
              <li>
                Provides real-time visibility of stock across all locations.
              </li>
              <li>
                Monitors critical parameters like stock levels, stock aging,
                retention time, and cycle days.
              </li>
              <li>Sets thresholds for controlledandseamlessoperations.</li>
              <li>
                Identifies and improves the performance of non-movingRPE
                (Returnable Packaging Equipment).
              </li>
              <li>Reducesthe number of RPE lost in the supply chain.</li>
            </ul>
          </motion.div>
        </motion.div>
      </section>

      <section id="service-id" className="py-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="wrapper"
        >
          <motion.h1
            variants={fadeIn("right", "tween", 0.2, 1)}
            className="text-center text-4xl max-w-md mx-auto mb-12"
          >
            See how we solve problems,{" "}
            <span className="opacity-50">right on target</span>
          </motion.h1>

          <Cards />
        </motion.div>
      </section>

      <section className="py-16">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="wrapper space-y-12"
        >
          <motion.div
            variants={fadeIn("left", "tween", 0.2, 0.5)}
            className="flex flex-col items-center justify-center gap-2"
          >
            <h2 className="md:text-5xl text-3xl font-bold">PACKAGING</h2>
            <p className="text-center text-text">
              We have Completely Returnable packaging solutions& Images of all
              ditf.Types of packaging
            </p>
          </motion.div>

          <motion.div
            variants={fadeIn("left", "tween", 0.2, 0.5)}
            className=" grid md:grid-cols-2 gap-6"
          >
            <div>
              <h4 className="text-lg text-primary font-medium mb-2">
                Visual Packaging Solution Design
              </h4>
              <p>
                We have a dedicated solution design tem that specializes in
                material-tevel knowledge and can design solutions based on
                inputs provided by the customers about the component/part
                produce feasibility reports for all your packaging needs
                consultation.
              </p>
            </div>

            <div>
              <h4 className="text-lg text-primary font-medium mb-2">
                Packaging Product Manufactureing & Development
              </h4>
              <p>
                The range of products and services by VINSUM AXPRESS are
                designed keeping in mind the flexible and customized needs of a
                customer as per their demand. We offer customized solutions in
                various materials i.e. PP, Plastic (HDP/LDP), Metal (Iron,
                Steel, Wire mesh), Wood & Paper Corrugated etc.
              </p>
            </div>

            <div>
              <h4 className="text-lg text-primary font-medium mb-2">
                OPEX Modal - Product Rent (Per Trip Basis)
              </h4>
              <p>
                The returanable packaging/Pooling Concept Services in a way that
                VINSUM AXPRESS owned product provided on Rental as a Service. A
                norminal rent is charged for the use of product on per trip
                basis with Reverse logistics facilities. It is a growing service
                to reduce capital expenditures and improves Day to Day Supply
                Chain Operations for Customers.
              </p>
            </div>

            <div>
              <h4 className="text-lg text-primary font-medium mb-2">
                CAPEX Modal - Product on Sale
              </h4>
              <p>
                In capex Modal, we design and develop Customized packaging
                product for their specific needs. The ownership of the packaging
                product lies with the customer as it is a one time sale by
                VINSUM AXPRESS and the services for reverse logistics to keep
                the supply chain moving can be managed by VINSUM AXPRESS
              </p>
            </div>

            <div>
              <h4 className="text-lg text-primary font-medium mb-2">
                Product on Fix Rental
              </h4>
              <p>
                The returanable packaging/Pooling Concept Services, VINSUM
                AXPRESS owned product provided on rental as a Service. A fix
                rent is charged for the use of product on monthly basis with
                Non-Reverse facilities. It is a growing service method to reduce
                capital expenditures and improve Day to Day Supply Chain
                Operations for Customers.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="py-20 bg-foreground"
      >
        <motion.div
          variants={fadeIn("right", "tween", 0.2, 1)}
          className="wrapper mb-16"
        >
          <h1 className="text-center sm:text-4xl text-3xl max-w-md mx-auto">
            We offer quality,{" "}
            <span className="opacity-50">
              with the best materials and service
            </span>
          </h1>
        </motion.div>
        <motion.div
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="wrapper grid lg:grid-cols-3 sm:grid-cols-2"
        >
          <div className="bg-white rounded-tl-xl p-4 py-6 border border-neutral-200">
            <Layers className="text-primary" />
            <div className="mt-6">
              <h3 className="text-lg font-semibold">Layered securily</h3>
              <p className="text-sm opacity-60 mt-2">
                Packaging Solution Greeen returnable & Custmized Packaging
                Solution
              </p>
            </div>
          </div>

          <div className="bg-white p-4 py-6 border border-neutral-200 border-l-0 border-r-0">
            <CheckCheck className="text-primary" />
            <div className="mt-6">
              <h3 className="text-lg font-semibold">
                Quality control of each part
              </h3>
              <p className="text-sm opacity-60 mt-2">
                Multi-modal Transportation Surface Train & Air
              </p>
            </div>
          </div>

          <div className="bg-white rounded-tr-xl p-4 py-6 border border-neutral-200">
            <MessageSquareText className="text-primary" />
            <div className="mt-6">
              <h3 className="text-lg font-semibold">
                Reliable customer service
              </h3>
              <p className="text-sm opacity-60 mt-2">
                Warehouse Management Dashboard Enables WMS
              </p>
            </div>
          </div>

          <div className="bg-white rounded-bl-xl p-4 py-6 border border-neutral-200 border-t-0">
            <NotebookText className="text-primary" />
            <div className="mt-6">
              <h3 className="text-lg font-semibold">Maintenance</h3>
              <p className="text-sm opacity-60 mt-2">
                Value Added Service ownership of Quality People & Processess
              </p>
            </div>
          </div>

          <div className="bg-white  p-4 py-6 border border-neutral-200 border-t-0 border-l-0 border-r-0">
            <Box className="text-primary" />
            <div className="mt-6">
              <h3 className="text-lg font-semibold">Delivered safely</h3>
              <p className="text-sm opacity-60 mt-2">
                Every unit we send arrives safely and quickly, without any
                obstacles or drama
              </p>
            </div>
          </div>

          <div className="bg-white rounded-br-xl p-4 py-6 border border-neutral-200 border-t-0">
            <EarthLock className="text-primary" />
            <div className="mt-6">
              <h3 className="text-lg font-semibold">Based on integrated</h3>
              <p className="text-sm opacity-60 mt-2">
                Consultancy Design & Implement Integrated Solution
              </p>
            </div>
          </div>
        </motion.div>
      </motion.section>

      <section className="py-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="wrapper grid md:grid-cols-2 md:gap-8 gap-14"
        >
          <div className="flex flex-col gap-8 justify-between">
            <motion.div variants={fadeIn("right", "tween", 0.2, 1)}>
              <h1 className="text-2xl">
                Trusted service,{" "}
                <span className="opacity-60">for your various needs</span>
              </h1>
              <button className="btn primary-btn mt-4">
                Get in touch <ArrowUpRight size={20} />
              </button>
            </motion.div>

            <motion.div
              variants={fadeIn("up", "tween", 0.2, 1)}
              className="grid sm:grid-cols-2 gap-4"
            >
              <div className="bg-white p-4 rounded-lg shadow drop-shadow">
                <p className="text opacity-40 font-semibold">01</p>
                <p className="text-lg font-semibold">Solar panels for home</p>
                <button className="border-b-2 text-sm mt-2">
                  View Details
                </button>
              </div>
              <div className="bg-white p-4 rounded-lg shadow drop-shadow">
                <p className="text opacity-40 font-semibold">01</p>
                <p className="text-lg font-semibold">Solar panels for home</p>
                <button className="border-b-2 text-sm mt-2">
                  View Details
                </button>
              </div>
              <div className="bg-white p-4 rounded-lg shadow drop-shadow">
                <p className="text opacity-40 font-semibold">01</p>
                <p className="text-lg font-semibold">Solar panels for home</p>
                <button className="border-b-2 text-sm mt-2">
                  View Details
                </button>
              </div>
              <div className="bg-white p-4 rounded-lg shadow drop-shadow">
                <p className="text opacity-40 font-semibold">01</p>
                <p className="text-lg font-semibold">Solar panels for home</p>
                <button className="border-b-2 text-sm mt-2">
                  View Details
                </button>
              </div>
            </motion.div>
          </div>

          <motion.div variants={fadeIn("up", "tween", 0.2, 1)}>
            <img
              src="https://cdn.pixabay.com/photo/2024/03/26/11/57/solar-8656654_1280.jpg"
              alt="image"
              className="rounded-xl h-[500px] object-cover"
            />
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

const Cards = () => {
  const sliderRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [progressWidth, setProgressWidth] = useState(0);

  const onSlideChange = (swiper) => {
    setCurrentIndex(swiper.activeIndex);
  };
  const onActiveSlide = (index) => {
    sliderRef.current?.swiper.slideTo(index);
  };

  const onAutoplayTimeLeft = useCallback((swiper, time) => {
    const autoplay = swiper.params.autoplay;
    if (autoplay && typeof autoplay === "object" && "delay" in autoplay) {
      const slideDuration = autoplay.delay;
      const width = (1 - time / slideDuration) * 100;
      setProgressWidth(width);
    }
  }, []);
  const onSwiperTransitionEnd = useCallback(() => {
    const swiper = this.refs.sliderRef.current?.swiper;
    if (swiper.isEnd) {
      setCurrentIndex(0);
      setProgressWidth(0);
    }
  }, []);

  return (
    <div className="space-y-6">
      <Swiper
        ref={sliderRef}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        effect={"fade"}
        modules={[EffectFade, Autoplay]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        onSlideChange={onSlideChange}
        onSwiperTransitionEnd={onSwiperTransitionEnd}
      >
        {serviceData.map((obj, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="bg-foreground rounded-lg p-2 grid md:grid-cols-2 gap-6">
                <motion.div
                  variants={fadeIn("up", "tween", 0.2, 1)}
                  className="flex flex-col justify-between gap-6 py-8 pl-4"
                >
                  <div>
                    <h1 className="text-lg font-semibold">{obj.name}</h1>
                    <p className="mt-6 text-s">{obj.description}</p>
                    <button className="btn primary-btn mt-3">
                      View case study
                    </button>
                  </div>
                  <p>
                    Jeniffer Koiolbaly-{" "}
                    <span className="opacity-60">CTO EV Medironic</span>
                  </p>
                </motion.div>
                <motion.img
                  variants={fadeIn("up", "tween", 0.2, 1)}
                  src={obj.image}
                  alt={obj.name}
                  className="rounded-lg object-cover aspect-video my-auto"
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className="flex gap-4 items-center justify-center">
        {serviceData.map((obj, idx) => (
          <div key={idx} className="flex flex-col gap-2">
            <div
              onClick={() => onActiveSlide(idx)}
              className="h-1 sm:w-full w-8 rounded-full bg-neutral-300 w-full overflow-hidden cursor-pointer"
            >
              <div
                className={` rounded-full h-full ${
                  idx === currentIndex ? "bg-primary" : ""
                }`}
                style={{ width: `${progressWidth}%` }}
              ></div>
            </div>

            <p
              className={`text-sm ${
                currentIndex === idx ? "" : "text-gray-400"
              }`}
            >
              {obj.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
