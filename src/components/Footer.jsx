import { Link } from "react-router-dom";
import { LuArrowRight } from "react-icons/lu";
import { ROUTES } from "../utils/routes";
import { companyDetail } from "../constants";
import { FaMapMarkedAlt, FaPhoneAlt } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";
import { FaFacebookF, FaYoutube, FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const menuLink =
    "hover:text-primary text-sm text-text transition duration-300";
  return (
    <footer className="wrapper my-10 overflow-hidden">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className=" bg-foreground p-8 py-14 rounded-2xl"
      >
        <motion.div
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="flex flex-col mx-auto items-center justify-center gap-10 w-full"
        >
          <h1 className="antialiased tracking-normal text-base text-center w-full">
            Unlock Tech driven solutions on the go—download our app from the{" "}
            <span className="text-primary">Play Store!</span>
          </h1>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link
              to="https://play.google.com/store/apps/developer?id=Vinsum&hl=en_IN"
              className="btn primary-btn rounded-full cursor-pointer px-8 py-3 w-fit font-medium "
            >
              DOWNLOAD APP
              <LuArrowRight />
            </Link>

            <Link
              to={ROUTES.PRIVACY_POLICY}
              className="btn bg-white text-black cursor-pointer border rounded-full px-8 py-3 w-fit font-medium "
            >
              Privacy (Data) Policy
              <LuArrowRight />
            </Link>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="w-full h-[2px] bg-neutral-300 my-8 rounded-full"
        ></motion.div>

        <motion.div
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="grid md:grid-cols-5 sm:grid-cols-2  gap-6"
        >
          <div className="sm:col-span-2 ">
            <div className="flex items-center gap-1">
              <img
                src="/images/logo.png"
                alt="logo"
                className="w-8 h-8 object-contain"
              />
              <h1 className="text-3xl font-bold">
                <span className="text-primary">VIN</span>SUM
              </h1>
            </div>

            <p className="text-lg antialiased font-semibold tracking-wider text-black my-2 max-w-sm w-full">
              Vinsum Axpress India Private Limited.
            </p>
            <div className="bg-black rounded p-0 px-1 w-fit">
              <p className="text-sm tantialiased my-2 max-w-sm w-full tracking-wider text-white">
                Delivering Satisfaction Around The Globe
              </p>
            </div>
            <div className="py-2 max-w-sm w-full">
              <a
                href="tel:1800-833-3513"
                className="flex gap-2 items-center text-sm text-text my-4 hover:text-primary transition duration-300"
              >
                <FaPhoneAlt size={18} />
                1800-833-3513
              </a>
              <a
                href="mailto:care@vinsumaxpress.com"
                className="flex gap-2 items-center text-sm text-text my-4 hover:text-primary transition duration-300"
              >
                <MdMail size={18} />
                care@vinsumaxpress.com
              </a>

              <div
                href="mailto:care@vinsumaxpress.com"
                className="flex gap-2 text-sm text-text my-4 hover:text-primary transition duration-300"
              >
                <FaMapMarkedAlt size={18} />
                <span className="flex-1 text-sm">
                  404- Electronic City, Udyog Vihar, Phase IV, Sector 18,
                  Gurugram, 122015.
                </span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold">Menu</h3>
            <ul className="space-y-2 mt-2">
              <li>
                <Link to="/" className={menuLink}>
                  Home
                </Link>
              </li>
              <li>
                <Link to={ROUTES.ABOUT} className={menuLink}>
                  About us
                </Link>
              </li>
              <li>
                <Link to={ROUTES.SERVICES} className={menuLink}>
                  Our Services
                </Link>
              </li>
              <li>
                <Link to={ROUTES.CAREER} className={menuLink}>
                  Career
                </Link>
              </li>
              <li>
                <Link to={ROUTES.MEDIACENTER} className={menuLink}>
                  Blog
                </Link>
              </li>
              <li>
                <Link to={ROUTES.CONTACT} className={menuLink}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">Resources</h3>
            <ul className="space-y-2 mt-2">
              <li>
                <Link to="#" className={menuLink}>
                  Help & Support
                </Link>
              </li>
              <li>
                <Link to={ROUTES.MEDIACENTER} className={menuLink}>
                  Blog
                </Link>
              </li>
              <li>
                <Link to="#" className={menuLink}>
                  Terms
                </Link>
              </li>
              <li>
                <Link to={ROUTES.PRIVACY_POLICY} className={menuLink}>
                  Privacy
                </Link>
              </li>
              <li>
                <Link to="#" className={menuLink}>
                  Licenses
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex">
            <figure className="w-fit">
              <img
                src="/images/QR.png"
                alt="qr-code"
                className="md:w-auto md:h-auto w-40 h-40 object-contain"
              />
              {/* <figcaption className="text-xs text-text text-center">
                Scan this QR code to download our app
              </figcaption> */}
            </figure>

            {/* <h3 className="font-semibold">Social Media</h3>
             */}
          </div>
        </motion.div>

        <div className="flex justify-between">
          <motion.p
            variants={fadeIn("right", "tween", 0.2, 1)}
            className="mt-8 text-sm text-text"
          >
            © Copyright 2024
            <span className="text-primary ml-1">Vinsum Axpress</span>. All
            Rights Reserved
          </motion.p>
          <motion.ul
            variants={fadeIn("left", "tween", 0.2, 1)}
            className="mt-2 flex items-center gap-4"
          >
            <li>
              <a
                href={companyDetail.facebook}
                target="_blank"
                className={`w-8 h-8 rounded-full flex items-center justify-center bg-zinc-200 hover:bg-primary hover:text-white transition duration-300 focus:bg-primary focus:text-white`}
              >
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a
                href={ROUTES.MEDIACENTER}
                target="_blank"
                className={`w-8 h-8 rounded-full flex items-center justify-center bg-zinc-200 hover:bg-primary hover:text-white transition duration-300 focus:bg-primary focus:text-white`}
              >
                <FaInstagram />
              </a>
            </li>
            <li>
              <a
                href={companyDetail.linkedin}
                target="_blank"
                className={`w-8 h-8 rounded-full flex items-center justify-center bg-zinc-200 hover:bg-primary hover:text-white transition duration-300 focus:bg-primary focus:text-white`}
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li>
              <a
                href={companyDetail.twitter}
                target="_blank"
                className={`w-8 h-8 rounded-full flex items-center justify-center bg-zinc-200 hover:bg-primary hover:text-white transition duration-300 focus:bg-primary focus:text-white`}
              >
                <FaXTwitter />
              </a>
            </li>
            <li>
              <a
                href={companyDetail.youtube}
                target="_blank"
                className={`w-8 h-8 rounded-full flex items-center justify-center bg-zinc-200 hover:bg-primary hover:text-white transition duration-300 focus:bg-primary focus:text-white`}
              >
                <FaYoutube />
              </a>
            </li>
          </motion.ul>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
