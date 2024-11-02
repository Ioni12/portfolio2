import Slides from "./Slides"
import robo from "./assets/17145800115341.jpeg";

export default function Slide()
{
    return(
        <>
            <div className=" px-10 py-10 h-[44rem] relative" style={{ backgroundImage: `url(${robo})`, backgroundSize: 'cover' }}>
                <Slides/>
    
                <div class="controls flex justify-between mt-10 px-20">
                    <button id="prevButton" className="-mt-6 outline rounded-lg px-5 py-1 mr-16 -ml-6 outline-white text-white">Prev</button>
                    <button id="nextButton" className="-mt-6 outline rounded-lg px-5 py-1 outline-white text-white">Next</button>
                </div>
            </div>
             
        </>
    )
}