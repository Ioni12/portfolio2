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


gsap.registerPlugin(useGSAP);



function App() {

  return (
    <>
      <Navbar/>
      <section id="home"><Introduction /></section>
      <section id="about"><Bento_ui /></section>
      <Slide/>
      <Comming_soon/>
      <Luck/>
      <Thank_you/>
      <section id="info"><Info /></section>
    </>
  )
}

export default App
