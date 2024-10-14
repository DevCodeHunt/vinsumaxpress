import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ROUTES } from "./utils/routes";
import { Toaster } from "react-hot-toast";
import ScrollToTop from "./components/ScrollToTop";
import ChatBot from "./components/ChatBot";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Tools = lazy(() => import("./pages/Tools"));
const MediaCenter = lazy(() => import("./pages/MediaCenter"));
const Contact = lazy(() => import("./pages/Contact"));
const Career = lazy(() => import("./pages/Career"));

export default function App() {
  return (
    <main>
      <ChatBot />

      <Suspense fallback={<div></div>}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={ROUTES.ABOUT} element={<About />} />
          <Route path={ROUTES.SERVICES} element={<Services />} />
          <Route path={ROUTES.TOOLS} element={<Tools />} />
          <Route path={ROUTES.MEDIACENTER} element={<MediaCenter />} />
          <Route path={ROUTES.CONTACT} element={<Contact />} />
          <Route path={ROUTES.CAREER} element={<Career />} />
        </Routes>
        <Footer />
      </Suspense>
      <ScrollToTop />
      <Toaster
        toastOptions={{
          duration: 3000,
        }}
      />
    </main>
  );
}
