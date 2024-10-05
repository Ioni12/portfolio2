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
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias fugit earum, vel debitis impedit similique adipisci quasi suscipit dolores eligendi unde quaerat! Ab assumenda deserunt minima atque et corrupti libero.lo
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias et esse facilis ullam voluptatibus architecto illo impedit similique! Vitae odio perspiciatis et ratione quaerat ipsam consequatur earum. Tempore, iusto voluptatibus.
                    </div>
                </div>

            </div>
        </>
    )
}