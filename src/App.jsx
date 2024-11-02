import Navbar from "./Navbar"
import Introduction from "./Introduction"
import Bento_ui from "./Bento_ui"
import Slide from "./Slide"
import Comming_soon from "./Comming_soon"
import Luck from "./Luck"
import Thank_you from "./Thank_you"
import Info from "./Info"
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useRef } from "react"



gsap.registerPlugin(useGSAP,ScrollTrigger);



function App() {

  const bento = useRef(null);

  useGSAP(() => {
     gsap.fromTo(
      bento.current,
      {
        opacity: 0,
        y: 100
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: bento.current,
          start: "top center",
          end: "200px center",
          markers: true,
          toggleActions: "play pause reverse pause"
        }
      }
    );
  }, []);

  return (
    <>
      <Navbar/>
      <section id="home"><Introduction /></section>
      <section id="about" ><Bento_ui ref={bento}/></section>
      <Slide/>
      <Comming_soon/>
      <Luck/>
      <Thank_you/>
      <section id="info"><Info /></section>
    </>
  )
}

export default App
