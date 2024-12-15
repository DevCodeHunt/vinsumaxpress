// import { FaPlay } from "react-icons/fa";
import Card from "../../../components/Card";
import { useEffect, useRef, useState } from "react";
// import { FaPause } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../../utils/motion";
import CountUp from "react-countup";

const AboutSection2 = () => {
  const [isCounterSectionVisible, setIsCounterSectionVisible] = useState(false);
  // const [isVideoSectionVisible, setIsVideoSectionVisible] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    // Create IntersectionObserver for the counter section
    const counterSectionObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsCounterSectionVisible(true); // Start counter animation
        }
      },
      { threshold: 0.5 }
    );

    // Create IntersectionObserver for the video section
    const videoSectionObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          videoRef.current.play(); // Play video when visible
          setIsPaused(false);
        } else {
          videoRef.current.pause(); // Pause video when out of view
          setIsPaused(true);
        }
      },
      { threshold: 0.5 }
    );

    // Target the counter and video sections
    const counterSection = document.querySelector("#counterSection");
    const videoSection = document.querySelector("#videoSection");

    if (counterSection) counterSectionObserver.observe(counterSection);
    if (videoSection) videoSectionObserver.observe(videoSection);

    // Cleanup observers on unmount
    return () => {
      if (counterSection) counterSectionObserver.unobserve(counterSection);
      if (videoSection) videoSectionObserver.unobserve(videoSection);
    };
  }, []);

  // const togglePlayPause = useCallback(() => {
  //   if (videoRef.current) {
  //     if (isPaused) {
  //       videoRef.current.play();
  //     } else {
  //       videoRef.current.pause();
  //     }
  //     setIsPaused((prevState) => !prevState);
  //   }
  // }, [isPaused]);

  return (
    <section className="wrapper my-10">
      <Card hasBg>
        <div className="space-y-3 max-w-xl">
          <motion.p
            variants={fadeIn("down", "tween", 0.2, 0.5)}
            className="card-name"
          >
            Our journey
          </motion.p>
          <motion.h1
            variants={fadeIn("right", "tween", 0.2, 0.5)}
            className="card-title"
          >
            <span className="text-primary">Vinsum</span> Is One Of The Best
            Shipping And Logistics Companies.
          </motion.h1>

          <motion.p
            variants={fadeIn("right", "tween", 0.2, 0.5)}
            className="card-description"
          >
            For the past two decades, Vinsum has proudly established itself as a
            leader in the logistics industry, consistently delivering excellence
            and innovative solutions.
          </motion.p>
        </div>

        <motion.div
          id="counterSection"
          variants={fadeIn("right", "tween", 0.2, 0.5)}
          className="my-8 flex gap-8 flex-wrap"
        >
          <div className="flex flex-col gap-1">
            <h3 className="text-3xl font-bold">
              {" "}
              {isCounterSectionVisible ? (
                <CountUp end={700} duration={2} />
              ) : (
                "0"
              )}
              +
            </h3>
            <p className="text-sm text-text">Current Workforce</p>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-3xl font-bold">
              {isCounterSectionVisible ? (
                <CountUp end={60} duration={2} />
              ) : (
                "0"
              )}
              +
            </h3>
            <p className="text-sm text-text">Office Locations</p>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-3xl font-bold">
              {" "}
              {isCounterSectionVisible ? (
                <CountUp end={23} duration={2} />
              ) : (
                "0"
              )}
              +
            </h3>
            <p className="text-sm text-text">Years Experience</p>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-3xl font-bold">
              {" "}
              {isCounterSectionVisible ? (
                <CountUp end={500} duration={2} />
              ) : (
                "0"
              )}
              +
            </h3>
            <p className="text-sm text-text">Happy Clients</p>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="rounded-2xl relative lg:aspect-auto lg:h-[400px] aspect-video w-full"
        >
          <video ref={videoRef} muted autoPlay title="Video Indroduction">
            <source src="/videos/growth-track.mp4" type="video/mp4"></source>
          </video>
          <div className="absolute -bottom-1 left-0 right-0 bg-background z-10 h-4"></div>
          {/* <video
            ref={videoRef}
            muted
            loop
            autoPlay
            title="Video Indroduction"
            poster="https://cdn.pixabay.com/photo/2014/09/11/22/00/dock-441989_1280.jpg"
            className="w-full h-full absolute inset-0 z-10 object-cover rounded-2xl"
          >
            <source src="/videos/vinsum-about.mp4" type="video/mp4"></source>
          </video>
          <div className="absolute inset-0 bg-background/50 z-10 rounded-2xl flex items-center justify-center">
            <button
              onClick={togglePlayPause}
              className="w-16 h-16 flex items-center justify-center rounded-full bg-white/40 text-2xl"
            >
              {isPaused ? <FaPlay /> : <FaPause />}
            </button>
          </div> */}
        </motion.div>
      </Card>
    </section>
  );
};

export default AboutSection2;
