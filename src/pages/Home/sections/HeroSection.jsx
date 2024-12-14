import Input from "../../../components/Input";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../../utils/motion";
import { useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import { useTrackShipmentStore } from "../../../stores";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { LuArrowRight } from "react-icons/lu";
import { ROUTES } from "../../../utils/routes";
//1000033772
const HeroSection = () => {
  const [isTracking, setIsTracking] = useState(false);
  const [loading, setLoading] = useState(false);
  const trackShipment = useTrackShipmentStore();

  const handleToggleTracking = () =>
    setIsTracking((prevTracking) => !prevTracking);

  const formik = useFormik({
    initialValues: {
      docketNumber: "",
    },
    onSubmit: (values, { resetForm }) => {
      if (values.docketNumber === "") {
        toast.error(
          isTracking
            ? "Please enter your docket number"
            : "Please enter your invoice number"
        );
        return;
      }
      if (values.docketNumber !== "") {
        setLoading(true);
        axios
          .get(
            `https://testwebsiteapi.vinsumaxpress.com/api/DocketTracking?docketno=${values.docketNumber}&isDocket=${isTracking}`
          )
          .then((res) => {
            trackShipment.setShipment(res.data);
            trackShipment.onOpen();
            setLoading(false);
            resetForm();
          });
      }
    },
  });

  return (
    <>
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="md:pt-[700px] pb-28  pt-[700px] max-[327px]:pt-[840px] relative"
      >
        <div className="wrapper text-white absolute inset-0 z-10 flex flex-col justify-center md:pt-40 min-[526px]:pt-40 pt-44">
          <div className="flex items-start gap-4">
            <motion.div
              variants={fadeIn("right", "tween", 0.2, 0.5)}
              className="flex-1"
            >
              <h1 className="md:text-6xl sm:text-4xl text-3xl font-bold uppercase leading-tight">
                WE WILL <span className="text-primary">DELIVER</span>{" "}
                <br className="md:inline-block hidden" /> YOUR PACKAGE ALL{" "}
                <br className="md:inline-block hidden" /> OVER{" "}
                <span className="text-primary">THE WORLD.</span>
              </h1>

              <h1 className="slider_catchphrase bg-foreground rounded p-1 px-1 sm:w-fit w-full mt-5 isolate bg-white/20 shadow-lg ring-1 ring-black/5">
                <span className="slider">
                  <span className="slider__word">
                    “Lightning-fast delivery!”
                  </span>
                  <span className="slider__word">
                    “Efficient. Accurate. On-Time.”
                  </span>
                  <span className="slider__word">
                    “From Us to You, Absolutely Flawless!”
                  </span>
                </span>
              </h1>
            </motion.div>
            <motion.img variants={fadeIn("left", "tween", 0.2, 0.5)} src="/images/23-YEARS-10.png" alt="23-YEARS-10.png"  className="h-80 absolute right-20 top-28 object-contain lg:inline-flex hidden" />
          </div>

          <div className="py-10 grid md:grid-cols-2 gap-6 ">
            <motion.div
              variants={fadeIn("up", "tween", 0.2, 0.5)}
              className="max-w-96 w-full border rounded-2xl p-4 space-y-10 bg-white text-black isolate bg-white/20 shadow-lg ring-1 ring-black/5"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="text-sm font-medium text-white">
                  Invoice Search
                </span>
                <label className="inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isTracking}
                    onChange={handleToggleTracking}
                    className="sr-only peer"
                  />
                  <div className="relative w-[52px] h-7 bg-neutral-200 rounded-full cursor-pointer peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-primary after:rounded-full after:h-6 after:w-6 after:transition-all"></div>
                </label>
                <span className="text-sm font-medium text-white">
                  Docket Search
                </span>
              </div>

              <form
                onSubmit={formik.handleSubmit}
                className="bg-background rounded-2xl p-4 space-y-3 isolate bg-white/20 shadow-lg ring-1 ring-black/5"
              >
                <h3 className="font-medium text-white">
                  {isTracking ? "Track Shipment" : "Track Shipment"}
                </h3>
                <Input
                  id="docketNumber"
                  name="docketNumber"
                  value={formik.values.docketNumber}
                  onChange={formik.handleChange}
                  placeholder={
                    isTracking
                      ? "Enter your docket number"
                      : "Enter your invoice number"
                  }
                />

                <button
                  type="submit"
                  className="primary-btn text-sm px-6 py-3.5 w-full rounded-2xl font-medium !mt-3"
                >
                  {loading ? (
                    <div role="flex items-center gap-1">
                      <svg
                        aria-hidden="true"
                        className="inline w-5 h-5 text-gray-200 animate-spin dark:text-gray-600 fill-red-600"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="currentColor"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="currentFill"
                        />
                      </svg>
                      <span className="ml-2 text-sm">Loading...</span>
                    </div>
                  ) : (
                    "Track Now"
                  )}
                </button>
              </form>
            </motion.div>

           
            <motion.div
              variants={fadeIn("left", "tween", 0.2, 0.5)}
              className="space-y-6 md:ml-auto h-fit"
            >
              <p className="max-w-72">
                Become a franchisee, and invest in  a promising partnership.
              </p>
              <Link
                to={ROUTES.FRANCHISE}
                role="button"
                className="btn primary-btn cursor-pointer w-fit"
              >
                JOIN TODAY
                <LuArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </div>

        <video
          muted
          loop
          autoPlay
          title="Video Indroduction"
          poster="https://cdn.pixabay.com/photo/2014/09/11/22/00/dock-441989_1280.jpg"
          className="w-full h-full absolute inset-0 object-cover brightness-50"
        >
          <source src="/videos/hero.mp4" type="video/mp4"></source>
        </video>
      </motion.section>
    </>
  );
};

export default HeroSection;
