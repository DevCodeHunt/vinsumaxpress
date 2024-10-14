import { Link } from "react-router-dom";
import { leadershipTeams, missionVisonValues } from "../constants";
import { ROUTES } from "../utils/routes";
import { ChevronLeft, ChevronRight, MoveRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import { useCallback, useRef } from "react";

const About = () => {
  return (
    <>
      <section className="py-10">
        <div className="wrapper grid md:grid-cols-2 gap-6">
          <div className="">
            <div className="bg-foreground rounded p-1 px-2 w-fit">
              Books for those curious about the world
            </div>
            <h1 className="lg:text-6xl sm:text-5xl text-3xl font-bold my-4">
              An astonishing encyclopedia of historical curiosoties
            </h1>
            <div>
              <p className="text-lg">Do you know that</p>
              <ul className="pl-4 list-disc mt-2 space-y-1">
                <li className="">
                  the oldest discovering dog remains are 32,000 years old?
                </li>
                <li>Flushing toilets have been around over 4,000 years?</li>
                <li>The Persiants invented the freezer in 400 BC?</li>
                <li>
                  The Romans sometimes filled the Colosseum with water and
                  recreated sea battels?
                </li>
                <li>
                  Did Nepoleon tell Europeans to drive on the right side of the
                  road?
                </li>
              </ul>
            </div>
            <a href="#mission-values" className="btn primary-btn mt-6 w-fit">
              Learn More <MoveRight size={18} />
            </a>
          </div>

          <div></div>
        </div>
      </section>

      <section id="mission-values" className="py-20">
        <div className="wrapper space-y-20">
          <h1 className="text-3xl font-bold text-center">
            Do you know that...
          </h1>

          <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
            {missionVisonValues.map((obj, index) => (
              <div
                key={index}
                className="p-4 rounded-lg bg-white border h-full hover:bg-foreground transition duration-300"
              >
                <img
                  src={obj.image}
                  alt={obj.name}
                  className="w-32 object-cover"
                />
                <h1 className="pt-6 text-2xl font-bold">{obj.name}</h1>

                <ul className="space-y-2 pt-4 pl-2 list-disc">
                  {obj.lists.map((list, idx) => (
                    <li key={idx} className="text-sm opacity-65">
                      {list}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="wrapper space-y-20">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl uppercase font-bold">Leadership</h1>
            <p className="opacity-60 max-w-lg text-center mt-2">
              We&#39;re led by a team who constantly queations, tinkers, and
              challengers to unlock great creativity around every turn.
            </p>
          </div>

          <Team />
        </div>
      </section>

      <section className="bg-foreground py-20">
        <div className="wrapper grid md:grid-cols-2 gap-6">
          <div>
            <h1 className="text-3xl font-bold text-center">
              Join Our Team Now
            </h1>
            <p className="opacity-60 mt-2 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              dolorem quasi maiores molestias quisquam dolore sint dignissimos
              voluptates magnam laborum.
            </p>
          </div>

          <div className="flex items-center md:justify-end gap-4">
            <Link
              to={ROUTES.CAREER}
              className="btn border hover:bg-primary hover:text-white transition duration-300"
            >
              Learn More
              <MoveRight size={18} />
            </Link>
            <Link to={ROUTES.CAREER} className="btn primary-btn">
              Get Started
              <MoveRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

const Team = () => {
  const swiperRef = useRef(null);
  const breakpoints = {
    0: {
      slidesPerView: 1,
    },
    540: {
      slidesPerView: 2,
    },
    968: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  };

  const prevSlide = useCallback(() => {
    swiperRef.current?.swiper.slidePrev();
  }, []);

  const nextSlide = useCallback(() => {
    swiperRef.current?.swiper.slideNext();
  }, []);
  
  return (
    <div className="relative">
      <button
        type="button"
        onClick={prevSlide}
        className="absolute top-1/2 sm:-left-4 -left-3 w-8 h-8 rounded-full flex items-center justify-center border z-10 bg-white hover:bg-primary hover:text-white transition duration-300"
      >
        <ChevronLeft size={18} />
      </button>
      <button
        type="button"
        onClick={nextSlide}
        className="absolute top-1/2 sm:-right-4 -right-3 w-8 h-8 rounded-full flex items-center justify-center border z-10 bg-white hover:bg-primary hover:text-white transition duration-300"
      >
        <ChevronRight size={18} />
      </button>
      <Swiper
        ref={swiperRef}
        spaceBetween={20}
        slidesPerView={4}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        fade={true}
        modules={[Autoplay, Navigation]}
        breakpoints={breakpoints}
      >
        {leadershipTeams.map((team, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col justify-center items-center border hover:border-0 hover:bg-foreground p-4 rounded-lg hover:drop-shadow transition duration-300 cursor-pointer">
              <img
                src={team.image}
                alt={team.name}
                className="w-32 h-32 rounded-full object-cover"
              />

              <div className="mt-6 space-y-2">
                <h3 className="font-semibold text-center">{team.name}</h3>
                <p className="text-sm opacity-60 text-center">
                  {team.position}
                </p>

                <div className="w-full flex items-center gap-4 justify-center pt-1">
                  <a href={team.instagram} target="_blank" className="">
                    <i className="fa-brands fa-instagram"></i>
                  </a>

                  <a href={team.twitter} target="_blank" className="">
                    <i className="fa-brands fa-x-twitter"></i>
                  </a>

                  <a href={team.linkedin} target="_blank" className="">
                    <i className="fa-brands fa-linkedin-in opacity-70"></i>
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default About;
