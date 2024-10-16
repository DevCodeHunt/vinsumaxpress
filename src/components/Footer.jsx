import { Link } from "react-router-dom";
import { ROUTES } from "../utils/routes";
import { social } from "../constants";
import { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { fadeIn, staggerContainer } from "../utils/motion";
import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email) {
      toast.error("Email field is required");
      return;
    }
    // validate email
    if (!/^\S+@\S+\.\S+$/i.test(email)) {
      toast.error("Invalid email address");
      return;
    }

    alert(JSON.stringify(email));
    setEmail("");
  };
  const menuLink =
    "hover:text-primary text-sm text-gray-700 transition duration-300";

  const socialLink =
    "text-lg text-background bg-[#F3F4F6] w-10 h-10 rounded-full flex items-center justify-center cursor-pointer";
  return (
    <motion.footer
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="py-20"
    >
      <motion.div
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="wrapper space-y-12"
      >
        <div className="pb-8 border-b border-neutral-200 flex md:items-center md:flex-row flex-col md:gap-4 gap-8">
          <div className="md:w-1/2 w-full">
            <h3 className="text-lg font-semibold">Let&#39;s Connect ️‍🔥</h3>
            <p className="max-w-lg text-sm opacity-70 mt-4\2">
              - Connecting Ideas, Creating Possibilities!
            </p>
          </div>

          <div className="md:w-1/2 w-full">
            <form
              onSubmit={handleSubmit}
              className="bg-foreground pr-2 pl-4 py-1 h-10 rounded-full flex md:max-w-md md:ml-auto "
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email Address"
                className="flex-1 outline-none border-none h-full bg-transparent gap-4 text-sm font-medium"
              />
              <button
                type="submit"
                className="bg-primary text-white rounded-full text-sm cursor-pointer px-4"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        <div>
          <div className="grid md:grid-cols-5 sm:grid-cols-2 grid-cols-1 gap-6">
            <div className="sm:col-span-2">
              <div className="flex items-center gap-2">
                <img
                  src="/images/logo.png"
                  alt="logo"
                  className="w-8 h-8 object-contain"
                />
                <span className="text-2xl font-bold">VINSUM</span>
              </div>
              <p className="my-2 font-semibold">
                Vinsum Axpress India Private Limited.
              </p>
              <p className="text-sm opacity-70 mt-2 max-w-xs">
                Moving You Forward: Delivering More Than Just Freight!
              </p>

              <a
                href="tel:1800-833-3513"
                className="flex gap-2 items-center opacity-70 my-4"
              >
                <Phone size={20} />
                1800-833-3513
              </a>
              <a
                href="mailto:care@vinsumaxpress.com"
                className="flex gap-2 items-center opacity-70 my-4"
              >
                <Mail size={20} />
                care@vinsumaxpress.com
              </a>

              <div
                href="mailto:care@vinsumaxpress.com"
                className="flex gap-2  opacity-70 my-4"
              >
                <MapPin size={20} />
                <span className="flex-1">
                  404- Electronic City, Udyog Vihar, Phase IV, Sector 18,
                  Gurugram, 122015.
                </span>
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
                  <Link to="#" className={menuLink}>
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

            <div>
              <h3 className="font-semibold">Get in touch</h3>
              <a
                href="mailto:care@vinsumaxpress.com"
                className="text-sm opacity-70 my-2"
              >
                care@vinsumaxpress.com
              </a>
              <div className="flex items-center flex-wrap gap-2 mt-4">
                <a
                  href={social.instagram}
                  target="_blank"
                  className={socialLink}
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a
                  href={social.facebook}
                  target="_blank"
                  className={socialLink}
                >
                  <i className="fa-brands fa-facebook-f text-sm text-gray-800"></i>
                </a>
                <a href={social.twitter} target="_blank" className={socialLink}>
                  <i className="fa-brands fa-x-twitter text-sm text-gray-800"></i>
                </a>
                <a href={social.youtube} target="_blank" className={socialLink}>
                  <i className="fa-brands fa-youtube text-sm text-gray-800"></i>
                </a>
                <a
                  href={social.linkedin}
                  target="_blank"
                  className={socialLink}
                >
                  <i className="fa-brands fa-linkedin-in text-sm text-gray-800"></i>
                </a>
              </div>
            </div>
          </div>

          <p className="mt-8 text-sm text-gray-600">
            © Copyright 2022
            <span className=" ml-1">Vinsum Axpress</span>. All Rights Reserved
          </p>
        </div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
