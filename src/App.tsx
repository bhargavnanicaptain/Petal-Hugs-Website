import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import CurtainReveal, { shouldShowIntro } from "./components/CurtainReveal";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import BrandStory from "./components/BrandStory";
import ProductCollection from "./components/ProductCollection";
import WhyChooseUs from "./components/WhyChooseUs";
import Gallery from "./components/Gallery";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function App() {
  const [introDone, setIntroDone] = useState(!shouldShowIntro());

  return (
    <>
      <CurtainReveal onDone={() => setIntroDone(true)} />

      <AnimatePresence>
        {introDone && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <Navbar />
            <main>
              <HeroSection />
              <BrandStory />
              <ProductCollection />
              <WhyChooseUs />
              <Gallery />
              <ContactSection />
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
