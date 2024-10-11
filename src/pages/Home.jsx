import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/effect-fade";
import { clients, faqs } from "../constants";
import { Check, ChevronDown, ChevronUp, MoveRight } from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import { Link } from "react-router-dom";
import { useCallback, useRef, useState } from "react";

const Hero = () => {
  return (
    <section>
      <div className="wrapper grid md:grid-cols-2 grid-cols-1 items-center md:gap-6 gap-10 py-10">
        <div>
          <h1 className="md:text-5xl sm:text-4xl text-3xl md:leading-snug leading-tight">
            A Revolutionaru and Reiable Solution for{" "}
            <br className="md:block hidden" />{" "}
            <span className="opacity-40">Global Finance</span>
          </h1>
          <p className="my-4 max-w-md w-full opacity-70">
            We provide sustinable and open global financial solutions throughout
            the world
          </p>

          <div className="flex items-center gap-2">
            <button className="btn primary-btn">
              Learn More
              <MoveRight />
            </button>
            <button className="btn secondary-btn">View Live Demo</button>
          </div>
        </div>

        <div>
          <video
            muted
            loop
            autoPlay
            title="Video Indroduction"
            className="w-[320px] h-[580px] rounded-3xl object-cover mx-auto border-none overflow-hidden"
          >
            <source src="/videos/vinsum-explore.mp4" type="video/mp4"></source>
          </video>
        </div>
      </div>
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
    <section className="py-20">
      <div className="wrapper">
        <p className="text-center opacity-70 mb-6">
          Industry leaders trust Payooble to grow their revenue
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
      </div>
    </section>
  );
};

const Stories = () => {
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
    <section className="bg-background text-white py-20 mt-10">
      <div className="wrapper flex items-center gap-10">
        <div>
          <div className="h-[320px] w-[320px] rounded-lg relative">
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
            {/* <img
              src={strory.image}
              alt={strory.author}
              className="w-full h-full object-cover rounded-lg"
            /> */}
          </div>
        </div>
        <div>
          <p className="text-4xl">Designed Based on</p>
          <p className="text-4xl text-slate-500">Our Consumers Needs</p>
          <p className="my-6 max-w-xl">{strory.description}</p>
          <small className="opacity-60">- {strory.author}</small>
        </div>
      </div>
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
    <div className="max-w-xl mx-auto  w-full flex flex-col gap-6">
      {faqs.map((faq, index) => {
        const isActive = active === index;
        return (
          <div
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
          </div>
        );
      })}
    </div>
  );
};

const Home = () => {
  return (
    <>
      <Hero />
      <Clients />
      <section className="py-10">
        <div className="wrapper space-y-10">
          <SectionHeader
            title="Our Customer Platform"
            subTitle="Everyone's Business"
          />

          <div className="grid lg:grid-cols-3 min-[576px]:grid-cols-2 gap-6 ">
            <div className="bg-[#E4EBF0] rounded-lg p-4">
              <div className="w-full bg-white rounded-lg h-48"></div>
              <div className="mt-8 pb-2">
                <p className="p-1 rounded bg-[#D0D6DB] text-xs font-medium px-2 mb-2 w-fit">
                  Account Managment
                </p>
                <h2 className="text-2xl">Accounts payable & purchase orders</h2>
                <p className="my-3 opacity-70">
                  Ent-to-end accounts payable software including purchase
                  orders, invoice
                </p>
                <Link to="#" className="border-b-2 border-background">
                  Learn more
                </Link>
              </div>
            </div>

            <div className="bg-[#F4F2EB] rounded-lg p-4">
              <div className="w-full bg-white rounded-lg h-48"></div>
              <div className="mt-8 pb-2">
                <p className="p-1 rounded bg-[#D0D6DB] text-xs font-medium px-2 mb-2 w-fit">
                  Cash Managment
                </p>
                <h2 className="text-2xl">All your spend. One platform</h2>
                <p className="my-3 opacity-70">
                  Automate your most tedious tasks like manual data entry,
                  correcting mistakes.
                </p>
                <Link to="#" className="border-b-2 border-background">
                  Learn more
                </Link>
              </div>
            </div>

            <div className="bg-[#D0E4DB] rounded-lg p-4">
              <div className="w-full bg-white rounded-lg h-48"></div>
              <div className="mt-8 pb-2">
                <p className="p-1 rounded bg-[#D0D6DB] text-xs font-medium px-2 mb-2 w-fit">
                  Multiple Currencies
                </p>
                <h2 className="text-2xl">Dedicated in multiple currencies</h2>
                <p className="my-3 opacity-70">
                  Dedicated IBANs in multiple currencies safegurding of funds in
                  line with PSD2.
                </p>
                <Link to="#" className="border-b-2 border-background">
                  Learn more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Stories />

      <section className="py-20 bg-foreground">
        <div className="wrapper space-y-20">
          <SectionHeader
            title="Everything you need to Manage"
            subTitle="and control Global Spend"
          />

          <div className="grid lg:grid-cols-3 min-[576px]:grid-cols-2 min-[576px]:gap-14 gap-8">
            {/* Card 1 */}
            <div className="bg-white h-full rounded-lg p-6">
              <h1 className="text-3xl">Premium Cards</h1>
              <p className="my-2 text-sm text-neutral-500">
                Provides a simple and convenient interface for you to bill
                customers
              </p>

              <div className="my-4">
                <p className="text-2xl font-bold leading-none">$90</p>
                <small className="font-semibold text-xs">
                  Per Active USER/Month
                </small>
              </div>

              <button className="btn primary-btn w-full">
                Get started free
              </button>

              <div className="mt-4 space-y-2">
                <p className="text-sm text-neutral-600">Features</p>
                <ul className="space-y-2">
                  <li className="text-sm text-neutral-600 flex items-center gap-1">
                    <Check size={16} />
                    <span className="flex-1">Dedicated bank 1 accounts</span>
                  </li>
                  <li className="text-sm text-neutral-600 flex items-center gap-1">
                    <Check size={16} />
                    <span> Visa Credit and Debit cards</span>
                  </li>
                  <li className="text-sm text-neutral-600 flex items-center gap-1">
                    <Check size={16} />
                    <span>Automated motifications</span>
                  </li>
                  <li className="text-sm text-neutral-600 flex items-center gap-1">
                    <Check size={16} />
                    <span>Advanced card controls and spend policies</span>
                  </li>
                  <li className="text-sm text-neutral-600 flex items-center gap-1">
                    <Check size={16} />
                    <span>Carbon emissions tracking on card spend</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-lg p-6 border-2 border-primary min-[576px]:scale-110 relative">
              <div className="w-full py-3 text-sm absolute left-0 right-0 top-0 bg-primary text-white text-center">
                MOST POPULAR ️‍🔥
              </div>
              <h1 className="text-3xl pt-10">All-In-One Spend</h1>
              <p className="my-2 text-sm text-neutral-500">
                Scale up your business by atomating your payouts
              </p>

              <div className="my-4">
                <p className="text-2xl font-bold leading-none">$39</p>
                <small className="font-semibold text-xs">
                  Per Active USER/Month
                </small>
              </div>

              <button className="btn primary-btn w-full">
                Get started free
              </button>

              <div className="mt-4 space-y-2">
                <p className="text-sm text-neutral-600">Features</p>
                <ul className="space-y-2">
                  <li className="text-sm text-neutral-600 flex items-center gap-1">
                    <Check size={16} />
                    <span className="flex-1">Dedicated bank 1 accounts</span>
                  </li>
                  <li className="text-sm text-neutral-600 flex items-center gap-1">
                    <Check size={16} />
                    <span> Visa Credit and Debit cards</span>
                  </li>
                  <li className="text-sm text-neutral-600 flex items-center gap-1">
                    <Check size={16} />
                    <span>Automated motifications</span>
                  </li>
                  <li className="text-sm text-neutral-600 flex items-center gap-1">
                    <Check size={16} />
                    <span>Advanced card controls and spend policies</span>
                  </li>
                  <li className="text-sm text-neutral-600 flex items-center gap-1">
                    <Check size={16} />
                    <span>Carbon emissions tracking on card spend</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white h-full rounded-lg p-6">
              <h1 className="text-3xl">Enterprise</h1>
              <p className="my-2 text-sm text-neutral-500">
                Enable recuring payments with e-wallets, credit cards and direct
                debt
              </p>

              <div className="my-4">
                <p className="text-2xl font-bold leading-none">$69</p>
                <small className="font-semibold text-xs">
                  Per Active USER/Month
                </small>
              </div>

              <button className="btn primary-btn w-full">
                Get started free
              </button>

              <div className="mt-4 space-y-2">
                <p className="text-sm text-neutral-600">Features</p>
                <ul className="space-y-2">
                  <li className="text-sm text-neutral-600 flex items-center gap-1">
                    <Check size={16} />
                    <span className="flex-1">Dedicated bank 1 accounts</span>
                  </li>
                  <li className="text-sm text-neutral-600 flex items-center gap-1">
                    <Check size={16} />
                    <span> Visa Credit and Debit cards</span>
                  </li>
                  <li className="text-sm text-neutral-600 flex items-center gap-1">
                    <Check size={16} />
                    <span>Automated motifications</span>
                  </li>
                  <li className="text-sm text-neutral-600 flex items-center gap-1">
                    <Check size={16} />
                    <span>Advanced card controls and spend policies</span>
                  </li>
                  <li className="text-sm text-neutral-600 flex items-center gap-1">
                    <Check size={16} />
                    <span>Carbon emissions tracking on card spend</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="wrapper space-y-12">
          <div className="flex flex-col items-center justify-center gap-3">
            <h1 className="text-3xl text-center">FAQs</h1>
            <p className="text-sm text-gray-600 text-center max-w-sm">
              Giving you the control, observability, and flexibility you need to
              build your card program your way.
            </p>
          </div>
          <Faqs />
        </div>
      </section>

      <section className="flex md:flex-row flex-col">
        <div className="relative md:w-1/2 h-80">
          <div className="absolute inset-0 z-10 p-6  bg-background/30 text-white flex items-end">
            <div className="flex flex-col justify-center items-start gap-2 ">
              <h3 className="text-lg">Direct Network Integration</h3>
              <p className="text-sm">The only platform where you can gp live</p>
              <button className="btn border-2 border-white mt-3">
                Learn more
              </button>
            </div>
          </div>
          <img
            src="https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt="image"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative md:w-1/2 h-80">
          <div className="absolute inset-0 z-10 p-6 bg-background/30 text-white flex items-end">
            <div className="flex flex-col justify-center items-start gap-2 ">
              <h3 className="text-lg">Scalable Card Platform</h3>
              <p className="text-sm">The only platform where you can gp live</p>
              <button className="btn border-2 border-white mt-3">
                Learn more
              </button>
            </div>
          </div>
          <img
            src="https://images.pexels.com/photos/1267697/pexels-photo-1267697.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt="image"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      <section className="bg-background text-white py-20">
        <div className="wrapper space-y-6 flex flex-col items-center justify-center">
          <SectionHeader
            title="Access Financial Technology With"
            subTitle="Maxium Security Form Your Hands"
          />
          <p className="text-sm opacity-80">
            Everything you need to build the credit, debit, or payooble product
            you want
          </p>
          <button className="btn border-2 border-white">
            Get Started Now <MoveRight size={18} />
          </button>
        </div>
      </section>
    </>
  );
};

export default Home;
