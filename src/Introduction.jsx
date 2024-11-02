import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from "react";



gsap.registerPlugin(useGSAP);


export default function Introduction()
{

    const photo = useRef();
    useGSAP(() => {
        gsap.from(photo.current, {y: 500,  width: 20, opacity: 0.2})
    });

    return(
        <>
            <div id="home" ref={photo} className=" mx-auto my-auto px-2 py-10">
                <div className="bg-white py-5">
                    <div className="bg-green-500 rounded-full h-40 w-40  lg:h-72 lg:w-72 mx-auto my-auto">
                    </div>
                    <div className="mx-10 my-10">
                        <h1 className="font-body text-3xl font-bold text-center">Enkeljon Gjeta</h1>
                        <h2 className="text-center">Code Maestro & Tech Explorer</h2>
                        <p className="lg:mt-14 lg:text-center">
                            🚀 Second-year software engineering dynamo with a toolkit that packs a punch:
                            <ul className="list-disc mx-auto ml-8 lg:mt-10">
                                <li className="lg:mt-4">C, JavaScript, Python, C#, React? Check!</li>
                                <li className="lg:mt-4">IoT whiz kid? You bet! (Arduino & Raspberry Pi are my playground)</li>
                                <li className="lg:mt-4 lg:mb-8">Cybersecurity buff by day, frontend artist by night</li>
                            </ul>
                            
                            🏆 Hackathon warrior, RoboTech mentor, and full-stack adventurer
                            From bits to bots, I'm not just coding the future – I'm engineering it. Ready to turn your next big idea into digital reality? Let's connect and create some tech magic! 💻✨
                        </p>
                        
                    
                    </div>
                </div>

            </div>
        </>
    )
}