import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";


gsap.registerPlugin(useGSAP);



export default function Ui({an, children})
{
    
    const containerRef = useRef(null);

    useEffect(() => {
      if (containerRef.current) {
        const boxes = containerRef.current.querySelectorAll(".box");
  
        let count = 0; 
        gsap.set(boxes, { xPercent: 100, position: "absolute", top: 0, left: 0 });
        gsap.set(boxes[0], { xPercent: 0 });
  
        function next() {
          gsap.fromTo(
            boxes[count],
            { xPercent: 0, zIndex: 0 },
            { duration: 1.2, xPercent: -100, zIndex: -10 }
          );
          count = (count + 1) % boxes.length; 
  
         
          gsap.fromTo(
            boxes[count],
            { xPercent: 100, zIndex: 1 },
            { duration: 1.2, xPercent: 0, zIndex: 0 }
          );
        }
  
        
        const interval = setInterval(next, 2000);
  
        
        return () => clearInterval(interval);
      }
    }, []);

    return(
        <>
            <div ref={containerRef} className={an + " shadow-fuchsia-300 shadow-md rounded-lg h-full w-full overflow-hidden relative"}>
                {children}
            </div>
        </>
    )
}