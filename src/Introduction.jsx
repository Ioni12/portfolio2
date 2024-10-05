import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";


gsap.registerPlugin(useGSAP);


export default function Introduction()
{

    useGSAP(() => {
        gsap.from(".bg-yellow-300", {y: 500,  width: 20, opacity: 0.2})
    })
    return(
        <>
            <div className=" mx-auto my-auto px-2 py-10">
                <div className="bg-white py-5">
                    <div className="bg-green-500 rounded-full h-40 w-40 mx-auto my-auto">
                    </div>
                    <div className="mx-10 my-10">
                        <h1 className="font-body text-3xl font-bold">Enkeljon Gjeta</h1>
                    : Code Maestro & Tech Explorer
                    🚀 Second-year software engineering dynamo with a toolkit that packs a punch:

                    C, JavaScript, Python, C#, React? Check!
                    IoT whiz kid? You bet! (Arduino & Raspberry Pi are my playground)
                    Cybersecurity buff by day, frontend artist by night

                    🏆 Hackathon warrior, RoboTech mentor, and full-stack adventurer
                    From bits to bots, I'm not just coding the future – I'm engineering it. Ready to turn your next big idea into digital reality? Let's connect and create some tech magic! 💻✨
                    </div>
                </div>

            </div>
        </>
    )
}