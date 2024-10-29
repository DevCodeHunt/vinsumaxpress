import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Input from "../components/Input";
import Textarea from "../components/Textarea";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";
import { companyDetail } from "../constants";
import AnimationWrapper from "../components/AnimationWrapper";
import * as Yup from "yup";
import { useFormik } from "formik";
import axios from "axios";

const contactSchema = Yup.object().shape({
  fullName: Yup.string().required("Full Name is required").trim(),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required")
    .trim(),
  subject: Yup.string().required("Subject is required").trim(),
  message: Yup.string().required("Message is required").trim(),
});

const initialValues = {
  fullName: "",
  email: "",
  subject: "",
  message: "",
};
const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    document.title = "Contact Us | Vinsum Axpress";
  }, []);

  const handleSendMessage = async (values, { resetForm }) => {
    setIsLoading(true);
    try {
      const requestBody = {
        name: values.fullName,
        ...values,
      };
      delete requestBody.fullName
      await axios.post(
        "https://ccptestapi.vinsumaxpress.com/api/Email/SendEmail",
        requestBody,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      toast.success(
        "Your response is recorded. we'll come back to you shortly."
      );
      resetForm();
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema: contactSchema,
    onSubmit: handleSendMessage,
  });

  const { fullName, email, subject, message } = formik.values;
  return (
    <AnimationWrapper>
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="py-20"
      >
        <motion.div
          variants={fadeIn("right", "tween", 0.2, 1)}
          className="wrapper flex flex-col items-center justify-center gap-3"
        >
          <p className="text-sm text-primary font-medium">Contact us</p>
          <h1 className="sm:text-4xl text-3xl font-bold text-center">
            Get in touch with our team
          </h1>
          <p className="text-gray-800 text-center">
            We have the team and know-how to help your scale 10x faster
          </p>
        </motion.div>
      </motion.section>

      <section className="py-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="wrapper flex lg:flex-row flex-col gap-6"
        >
          <motion.div
            variants={fadeIn("right", "tween", 0.2, 1)}
            className="lg:w-1/2 w-full p-4 bg-white rounded-xl shadow drop-shadow-md"
          >
            <div>
              <h3 className="text-xl font-bold">Address</h3>
              <p className="font-medium text-gray-700">
                {" "}
                404- Electronic City, Udyog Vihar, Phase IV, Sector 18,
                Gurugram, 122015.
              </p>
            </div>

            <div className="my-6">
              <h3 className="text-xl font-bold">Information</h3>
              <p className="font-medium text-gray-700 mt-2">
                Phone:{" "}
                <a href="tel:0124 4070191" className="ml-2">
                  0124 4070191
                </a>
              </p>
              <p className="font-medium text-gray-700 mt-2">
                Customer Care:{" "}
                <a href="tel:1800-833-3513" className="ml-2">
                  1800-833-3513
                </a>
              </p>
              <p className="font-medium text-gray-700 mt-2">
                <a href="mailto:care@vinsumaxpress.com">
                  {companyDetail.email}
                </a>
              </p>
            </div>

            <div className="my-6">
              <h3 className="text-xl font-bold">Follow Us</h3>
              <div className="flex gap-4 flex-wrap mt-2">
                <a
                  href={companyDetail.instagram}
                  target="_blank"
                  className="w-[50px] h-[50px] rounded-full flex items-center justify-center bg-[#243F2F] text-white text-lg"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a
                  href={companyDetail.facebook}
                  target="_blank"
                  className="w-[50px] h-[50px] rounded-full flex items-center justify-center bg-[#243F2F] text-white text-lg"
                >
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a
                  href={companyDetail.twitter}
                  target="_blank"
                  className="w-[50px] h-[50px] rounded-full flex items-center justify-center bg-[#243F2F] text-white text-lg"
                >
                  <i className="fa-brands fa-x-twitter"></i>
                </a>
                <a
                  href={companyDetail.youtube}
                  target="_blank"
                  className="w-[50px] h-[50px] rounded-full flex items-center justify-center bg-[#243F2F] text-white text-lg"
                >
                  <i className="fa-brands fa-youtube"></i>
                </a>
                <a
                  href={companyDetail.linkedin}
                  target="_blank"
                  className="w-[50px] h-[50px] rounded-full flex items-center justify-center bg-[#243F2F] text-white text-lg"
                >
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("left", "tween", 0.2, 1)}
            className="lg:w-1/2 w-full bg-white rounded-xl p-4 drop-shadow-md"
          >
            <h2 className="text-4xl font-bold mb-4">Get in touch</h2>
            <p>Our friendly team would love to hear from you!</p>

            <form onSubmit={formik.handleSubmit} className="space-y-4 my-8">
              <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
                <Input
                  label="Full Name"
                  id="fullName"
                  name="fullName"
                  value={fullName}
                  onChange={formik.handleChange}
                  error={formik.errors?.fullName}
                />
                <Input
                  label="Email"
                  id="email"
                  type="email"
                  name="email"
                  value={email}
                  onChange={formik.handleChange}
                  error={formik.errors?.email}
                />
              </div>
              <Input
                label="Subject"
                id="subject"
                name="subject"
                value={subject}
                onChange={formik.handleChange}
                error={formik.errors?.subject}
              />
              <Textarea
                label="Message"
                id="message"
                name="message"
                value={message}
                onChange={formik.handleChange}
                error={formik.errors?.message}
              />
              <button
                disabled={isLoading}
                type="submit"
                className="btn primary-btn"
              >
                {isLoading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </motion.div>
        </motion.div>
      </section>
    </AnimationWrapper>
  );
};

export default Contact;
