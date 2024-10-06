import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";


gsap.registerPlugin(useGSAP);



export default function Ui({an, children})
{
    // const [ count, setCount ] = useState(0)
    const containerRef = useRef(null);

    useEffect(() => {
      if (containerRef.current) {
        const boxes = containerRef.current.querySelectorAll(".box");
  
        let count = 0; // track the current box index
  
        // Initial GSAP setup for the boxes
        gsap.set(boxes, { xPercent: 100 });
        gsap.set(boxes[0], { xPercent: 0 });
  
        function next() {
          // Animate the current box out and the next one in
          gsap.fromTo(
            boxes[count],
            { xPercent: 0, zIndex: 0 },
            { duration: 1.2, xPercent: -100, zIndex: -10 }
          );
          count = (count + 1) % boxes.length; // update the count
  
          // Animate the next box in from the right
          gsap.fromTo(
            boxes[count],
            { xPercent: 100, zIndex: 1 },
            { duration: 1.2, xPercent: 0, zIndex: 0 }
          );
        }
  
        // Trigger the animation every 2 seconds (as an example)
        const interval = setInterval(next, 2000);
  
        // Clean up the interval when the component unmounts
        return () => clearInterval(interval);
      }
    }, []);

    return(
        <>
            <div ref={containerRef} className={an + " shadow-fuchsia-300 shadow-md rounded-lg"}>
                {children}
            </div>
        </>
    )
}