import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

// Components
import Navbar from "./Navbar";
import Introduction from "./Introduction";
import BentoUI from "./Bento_ui";
import Slide from "./Slide";
import ComingSoon from "./Comming_soon";
import Luck from "./Luck";
import ThankYou from "./Thank_you";
import Info from "./Info";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const bentoRef = useRef(null);
  const containerRef = useRef(null);
  const slideRef = useRef(null);

  useGSAP(
    () => {
      // Bento animation
      gsap.fromTo(
        bentoRef.current,
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: bentoRef.current,
            start: "-100px bottom-=100",
            end: "top center",
            toggleActions: "play none none reverse",
            markers: true,
            scrub: 1,
          },
        }
      );

      // Slide animation
      gsap.fromTo(
        slideRef.current,
        {
          opacity: 0,
          x: -100, // Slide in from left
        },
        {
          opacity: 1,
          x: 0,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: slideRef.current,
            start: "center bottom-=100",
            end: "top center",
            toggleActions: "play none none reverse",
            markers: true,
            scrub: 1,
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="relative">
      <Navbar />

      <section id="home" className="min-h-screen">
        <Introduction />
      </section>

      <section id="about" className="min-h-screen">
        <div ref={bentoRef}>
          <BentoUI />
        </div>
      </section>

      <section id="features" className="min-h-screen">
        <div ref={slideRef}>
          <Slide />
        </div>
      </section>

      <section id="roadmap" className="min-h-screen">
        <ComingSoon />
      </section>

      <section id="luck" className="min-h-screen">
        <Luck />
      </section>

      <section id="thanks" className="min-h-screen">
        <ThankYou />
      </section>

      <section id="info" className="min-h-screen">
        <Info />
      </section>
    </div>
  );
};

export default App;
