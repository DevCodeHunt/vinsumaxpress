import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, EffectFade } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/effect-fade";
import { cardData, clients, faqs } from "../constants";
import {
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  MoveRight,
} from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import { Link } from "react-router-dom";
import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  fadeIn,
  roateVariant,
  staggerContainer,
  zoomIn,
} from "../utils/motion";
import AnimationWrapper from "../components/AnimationWrapper";
import { useMediaQuery } from "react-responsive";
import SplashScreen from "../components/SplashScreen";
import { ROUTES } from "../utils/routes";

const Hero = ({ tablet }) => {
  return (
    <section className="min-h-screen overflow-hidden">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="wrapper grid md:grid-cols-2 grid-cols-1 items-center md:gap-6 gap-10 py-10"
      >
        <motion.div
          variants={
            tablet
              ? fadeIn("right", "tween", 0.2, 1)
              : fadeIn("up", "tween", 0.2, 1)
          }
        >
          <h1 className="md:text-5xl sm:text-4xl text-3xl md:leading-snug leading-tight">
            A Revolutionary and Steadfast Solution for the
            <br className="md:block hidden" />{" "}
            <span className="opacity-40">Global Supply Chain</span>
          </h1>
          <p className="my-4 max-w-md w-full opacity-70">
            We are committed to delivering sustainable and transparent supply
            chain solutions on a global scale.
          </p>

          <div className="flex items-center gap-2">
            <Link to={ROUTES.SERVICES} className="btn primary-btn">
              Our Services
              <MoveRight />
            </Link>
            <Link to={ROUTES.CONTACT} className="btn secondary-btn">
              Contact us
            </Link>
          </div>
        </motion.div>

        <motion.div
          variants={
            tablet
              ? fadeIn("left", "tween", 0.3, 1)
              : fadeIn("up", "tween", 0.3, 1)
          }
        >
          <div className="relative rounded-3xl w-[320px] h-[580px] mx-auto hero drop-shadow-lg shadow-lg">
            <video
              muted
              loop
              autoPlay
              title="Video Indroduction"
              className="w-full absolute inset-0 z-10 h-full rounded-3xl object-cover border-none overflow-hidden"
            >
              <source
                src="/videos/vinsum-explore.mp4"
                type="video/mp4"
              ></source>
            </video>
            {/* circle */}
            <div className="xl:block hidden w-[180px] h-[180px] rounded-full bg-neutral-50 opacity-30 absolute -left-10 top-10 -z-2"></div>
            <div className="xl:block hidden w-[220px] h-[220px] rounded-full bg-neutral-50 opacity-20 -z-2 absolute -left-40 bottom-4"></div>
            {/* Rectangle */}
            <div className="xl:block hidden w-[230px] h-[230px] rounded-xl bg-neutral-50 opacity-25 absolute -right-24 bottom-20 -z-2 rotate-45"></div>

            {/* Left Box */}
            <div className="xl:block hidden absolute top-28  h-[65%] bg-none border-2  rounded-xl w-[28.5rem] -left-16"></div>
            <div className="xl:block hidden h-[240px] w-56 bg-white rounded-xl absolute  top-1/2 -translate-y-1/2 -left-44 z-10">
              <div className="w-4 h-4 rounded-full bg-white shadow flex items-center border border-primary justify-center absolute -top-2 left-1/2 -translate-x-1/2">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
              </div>
              <video
                muted
                loop
                autoPlay
                title="Video Indroduction"
                className="w-full absolute inset-0 z-10 h-full rounded-xl object-cover border-none overflow-hidden"
              >
                <source
                  src="/videos/global_network.mp4"
                  type="video/mp4"
                ></source>
              </video>
            </div>

            <div className="xl:block hidden h-24 w-60 rounded-xl bg-white absolute -right-48 top-[4.5rem] z-10">
              <img
                src="/gifs/aeroplane.gif"
                alt="aeroplane"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            <div className="xl:block hidden w-60 h-28 rounded-xl bg-white absolute -right-48 bottom-16 z-10">
              <div className="w-4 h-4 rounded-full bg-white border border-primary shadow flex items-center justify-center absolute -top-2 left-1/2 -translate-x-1/2">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
              </div>
              <img
                src="/gifs/train.gif"
                alt="train"
                className="w-full h-full object-cover rounded-xl"
              />
              <div className="xl:block hidden h-12 w-48 left-6 bg-foreground rounded-xl rotate-6 absolute -bottom-9"></div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

const Clients = () => {
  const breakpoints = {
    0: {
      slidesPerView: 3,
    },
    540: {
      slidesPerView: 5,
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
      className="py-20"
    >
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="wrapper"
      >
        <p className="text-center opacity-70 mb-6">
          Vinsum is the trusted choice of industry leaders for accelerating
          revenue growth.
        </p>
        <Swiper
          spaceBetween={20}
          slidesPerView={4}
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
              <img src={client.logo} alt={client.name} className="w-20" />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </motion.section>
  );
};

const Stories = ({ tablet }) => {
  const stories = [
    {
      image:
        "https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg?auto=compress&cs=tinysrgb&w=600",
      description:
        "I have been using Financial Solution for my business, and I must say, it has been a game-changer. Payoobel, the name itself speaks volumes about the insight and data-driven approach of this platform. It has helped me.",
      author: "Robin Sharma, CEO & Founder of wibowe.inc",
    },
    {
      image:
        "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=600",
      description:
        "I have been using Financial Solution for my business, and I must say, it has been a game-changer. Payoobel, the name itself speaks volumes about the insight and data-driven approach of this platform. It has helped me.",
      author: "Mohit Sharma, CEO & Founder of walmart.com",
    },
    {
      image:
        "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600",
      description:
        "I have been using Financial Solution for my business, and I must say, it has been a game-changer. Payoobel, the name itself speaks volumes about the insight and data-driven approach of this platform. It has helped me.",
      author: "Naveen Sharma, CEO & Founder of woocomerce.in",
    },
  ];
  const sliderRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [progressWidth, setProgressWidth] = useState(0);
  const [complete, setComplete] = useState(false);

  const strory = stories.find((_, id) => id === currentIndex);

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
    if (complete && swiper.isEnd) {
      setComplete(false);
      setCurrentIndex(0);
      setProgressWidth(0);
    }
  }, [complete]);
  return (
    <section className="bg-background text-white min-h-screen flex items-center py-20 mt-10">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="wrapper flex items-center md:flex-row flex-col gap-10"
      >
        <div>
          <motion.div
            variants={zoomIn(0.4, 1)}
            className="md:h-[450px] h-[350px] md:w-[400px] w-[320px] rounded-lg relative"
          >
            <div className="flex flex-col justify-end pb-8 px-4 pl-6 gap-3 absolute inset-0 bg-background/20 text-white z-10">
              <p className="text-sm opacity-90 ">Consumer Stories</p>
              <div className="flex gap-2">
                {new Array(stories?.length).fill(0).map((_, idx) => (
                  <div
                    key={idx}
                    onClick={() => onActiveSlide(idx)}
                    className="h-1 sm:w-12 w-8 rounded-full bg-neutral-400 overflow-hidden cursor-pointer"
                  >
                    <div
                      className={` rounded-full h-full ${
                        idx === currentIndex ? "bg-foreground" : ""
                      }`}
                      style={{ width: `${progressWidth}%` }}
                    ></div>
                  </div>
                ))}
              </div>
            </div>
            <Swiper
              ref={sliderRef}
              slidesPerView={1}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              navigation
              effect={"fade"}
              modules={[EffectFade, Autoplay]}
              onAutoplayTimeLeft={onAutoplayTimeLeft}
              onSlideChange={onSlideChange}
              onSwiperTransitionEnd={onSwiperTransitionEnd}
              className="w-full h-full"
            >
              {stories.map((obj, i) => (
                <SwiperSlide key={i} className="py-4">
                  <img
                    src={obj.image}
                    alt={obj.author}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
        <motion.div
          variants={
            tablet
              ? fadeIn("up", "tween", 0.2, 1)
              : fadeIn("down", "tween", 0.2, 1)
          }
        >
          <p className="text-4xl">Designed Based on</p>
          <p className="text-4xl text-slate-500">Our Consumers Needs</p>
          <p className="my-6 max-w-xl">{strory.description}</p>
          <small className="opacity-60">- {strory.author}</small>
        </motion.div>
      </motion.div>
    </section>
  );
};

const Faqs = () => {
  const [active, setActive] = useState(null);

  const handleActive = useCallback(
    (index) => setActive((prevActive) => (prevActive === index ? null : index)),
    []
  );
  return (
    <motion.div
      variants={fadeIn("up", "tween", 0.2, 1)}
      className="max-w-xl mx-auto  w-full flex flex-col gap-6"
    >
      {faqs.map((faq, index) => {
        const isActive = active === index;
        return (
          <AnimationWrapper
            transition={{ duration: 1, delay: index * 0.2 }}
            onClick={() => handleActive(index)}
            key={index}
            className="border rounded-lg p-4 space-y-4 transition-all duration-1000"
          >
            <div className="flex items-center justify-between cursor-pointer">
              <p className={isActive && "font-semibold"}>{faq.question}</p>
              <button>
                {isActive ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
            </div>
            <div
              className={`text-sm opacity-70 ${isActive ? "block" : "hidden"}`}
            >
              {faq.answer}
            </div>
          </AnimationWrapper>
        );
      })}
    </motion.div>
  );
};

const Card = ({
  title,
  description,
  price,
  priceLabel,
  features,
  isActive,
}) => {
  return (
    <div
      className={`bg-white h-full rounded-lg p-6 ${
        isActive ? "border-2 border-primary" : ""
      }`}
    >
      <h1 className="text-3xl">{title}</h1>
      <p className="my-2 text-sm text-neutral-500">{description}</p>

      <div className="my-4">
        <p className="text-2xl font-bold leading-none">{price}</p>
        <small className="font-semibold text-xs">{priceLabel}</small>
      </div>

      <Link to={ROUTES.SERVICES} className="btn primary-btn w-full">
        Learn more
      </Link>

      <div className="mt-4 space-y-2">
        <p className="text-sm text-neutral-600">Features</p>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li
              key={index}
              className="text-sm text-neutral-600 flex items-center gap-1"
            >
              <Check size={16} />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Cards = () => {
  const swiperRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const breakpoints = {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  };

  const onSlideChange = (swiper) => {
    setCurrentIndex(swiper.activeIndex);
  };

  const prevSlide = useCallback(() => {
    swiperRef.current?.swiper.slidePrev();
  }, []);

  const nextSlide = useCallback(() => {
    swiperRef.current?.swiper.slideNext();
  }, []);

  return (
    <div className="relative">
      <div className="min-[640px]:hidden flex items-center gap-4 justify-end mb-6">
        <button
          onClick={prevSlide}
          className="w-8 h-8 flex items-center justify-center border-2 border-primary text-primary hover:bg-primary hover:text-white transition duration-300 rounded-full"
        >
          <ChevronLeft size={20} className="" />
        </button>
        <button
          onClick={nextSlide}
          className="w-8 h-8 flex items-center justify-center border-2 border-primary text-primary hover:bg-primary hover:text-white transition duration-300 rounded-full"
        >
          <ChevronRight />
        </button>
      </div>
      <Swiper
        ref={swiperRef}
        spaceBetween={20}
        slidesPerView={3}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        onSlideChange={onSlideChange}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[Autoplay, EffectCoverflow]}
        breakpoints={breakpoints}
      >
        {cardData.map((card, index) => (
          <SwiperSlide key={index}>
            <Card
              isActive={currentIndex === index}
              title={card.title}
              description={card.description}
              price={card.price}
              priceLabel={card.priceLabel}
              features={card.features}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const Home = () => {
  const isTabletScreen = useMediaQuery({ query: "(max-width: 768px)" });
  const isMobileScreen = useMediaQuery({ query: "(max-width: 576px)" });
  const [showSplash, setShowSplash] = useState(false);

  useEffect(() => {
    const splashShown = localStorage.getItem("splashShown");

    if (splashShown) {
      setShowSplash(true); // Show splash screen if it's not shown before
      const timer = setTimeout(() => {
        setShowSplash(false); // Hide splash screen after 5 seconds
        localStorage.setItem("splashShown", "true");
      }, 2000);

      return () => clearTimeout(timer); // Cleanup the timer on component unmount
    }
  }, []);

  return (
    <>
      {showSplash && <SplashScreen />}
      <Hero tablet={isTabletScreen} />
      <Clients />
      <section className="py-10  overflow-hidden min-h-screen">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="wrapper space-y-10"
        >
          <motion.div variants={fadeIn("right", "tween", 0.2, 1)}>
            <SectionHeader
              title="Why Us?"
              subTitle="top choice for everyone because..."
            />
          </motion.div>

          <div className="grid lg:grid-cols-3 min-[576px]:grid-cols-2 gap-6 ">
            <motion.div
              variants={
                isMobileScreen
                  ? fadeIn("right", "tween", 0.2, 1)
                  : fadeIn("up", "tween", 0.2, 1)
              }
              className="bg-[#E4EBF0] rounded-lg p-4"
            >
              <motion.div
                variants={roateVariant(0.5, 1, -19)}
                className="w-full bg-white rounded-lg h-48 p-2"
              >
                <img
                  src="/images/one_stop_solution.png"
                  alt="one_stop_solution"
                  className="w-full h-full object-contain"
                />
              </motion.div>
              <div className="mt-8 pb-2">
                <p className="p-1 rounded bg-[#D0D6DB] text-xs font-medium px-2 mb-2 w-fit">
                  Project Managment
                </p>
                <h2 className="text-2xl">Single Window Solution</h2>
                <p className="my-3 opacity-70">
                  Discover our comprehensive supply chain solutions, covering
                  MMT, warehousing, 3PL, inventory management, returnable
                  packaging, 4PL, in-plant logistics, and project management.
                </p>
                <Link to="#" className="border-b-2 border-background">
                  Learn more
                </Link>
              </div>
            </motion.div>

            <motion.div
              variants={
                isMobileScreen
                  ? fadeIn("right", "tween", 0.5, 1.5)
                  : fadeIn("up", "tween", 0.3, 1.2)
              }
              className="bg-[#F4F2EB] rounded-lg p-4"
            >
              <motion.div
                variants={roateVariant(0.7, 1.2, -19)}
                className="w-full bg-white rounded-lg h-48 p-2"
              >
                <img
                  src="/images/product_management.png"
                  alt="product_management"
                  className="w-full h-full object-contain"
                />
              </motion.div>
              <div className="mt-8 pb-2">
                <p className="p-1 rounded bg-[#D0D6DB] text-xs font-medium px-2 mb-2 w-fit">
                  Product Managment
                </p>
                <h2 className="text-2xl">
                  Reliability, Expertise, Flexibility: The Ultimate Combination!
                </h2>
                <p className="my-3 opacity-70">
                  With 18 years of tech-driven logistics and supply chain
                  management expertise, we&#39;ve served over 1000 satisfied
                  customers with flexible and customized products and services.
                </p>
                <Link to="#" className="border-b-2 border-background">
                  Learn more
                </Link>
              </div>
            </motion.div>

            <motion.div
              variants={
                isMobileScreen
                  ? fadeIn("right", "tween", 0.8, 1.6)
                  : fadeIn("up", "tween", 0.4, 1.4)
              }
              className="bg-[#D0E4DB] rounded-lg p-4"
            >
              <motion.div
                variants={roateVariant(0.9, 1.3, -19)}
                className="w-full bg-white rounded-lg h-48 p-2"
              >
                <img
                  src="/images/cost_effective.png"
                  alt="cost_effective"
                  className="w-full h-full object-contain"
                />
              </motion.div>
              <div className="mt-8 pb-2">
                <p className="p-1 rounded bg-[#D0D6DB] text-xs font-medium px-2 mb-2 w-fit">
                  Cost Managment
                </p>
                <h2 className="text-2xl">Cost-effective & Sustainable</h2>
                <p className="my-3 opacity-70">
                  We offer cost-effective solutions that are designed to stand
                  the test of time.
                </p>
                <Link to="#" className="border-b-2 border-background">
                  Learn more
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <Stories tablet={isTabletScreen} />

      <section className="py-20 bg-foreground min-h-screen">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="wrapper space-y-20"
        >
          <motion.div variants={fadeIn("right", "tween", 0.2, 1)}>
            <SectionHeader
              title="Everything you need to Manage"
              subTitle="and control Global Spend"
            />
          </motion.div>
          <Cards />
        </motion.div>
      </section>

      <section className="py-20 min-h-screen overflow-hidden">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="wrapper space-y-12"
        >
          <motion.div
            variants={fadeIn("right", "tween", 0.2, 1)}
            className="flex flex-col items-center justify-center gap-3"
          >
            <h1 className="text-3xl text-center">FAQs</h1>
            <p className="text-sm text-gray-600 text-center max-w-sm">
              Questions on Your Mind? Let&#39;s Solve Them Together!
            </p>
          </motion.div>
          <Faqs />
        </motion.div>
      </section>

      <section>
        

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className=" text-white py-20 min-h-screen relative"
        >
          <video
            muted
            loop
            autoPlay
            title="Video Indroduction"
            className="w-full h-full absolute inset-0 z-10 object-cover"
          >
            <source src="/videos/vinsum-about.mp4" type="video/mp4"></source>
          </video>
          <div className="absolute inset-0 bg-black/30 z-10  flex items-center justify-center">
            <motion.div
              variants={fadeIn("up", "tween", 0.2, 1)}
              className="wrapper space-y-6 flex flex-col items-center justify-center "
            >
              <SectionHeader
                title="Access Financial Technology With"
                subTitle="Maxium Security Form Your Hands"
              />
              <p className="text-sm text-center">
                Everything you need to build the credit, debit, or payooble
                product you want
              </p>
              <Link to={ROUTES.SERVICES} className="btn border-2 border-white hover:bg-primary transition duration-300">
                Get Started Now <MoveRight size={18} />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Home;
