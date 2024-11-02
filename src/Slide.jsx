import Slides from "./Slides"
import robo from "./assets/17145800115341.jpeg";

export default function Slide()
{
    return(
        <>
            <div className=" px-10 py-10 h-[44rem] lg:h-[58rem] relative" style={{ backgroundImage: `url(${robo})`, backgroundSize: 'cover' }}>
                
                <Slides/>
    
                <div class="controls flex justify-between mt-10 px-20 lg:mb-32 lg:-mt-24">
                    <button id="prevButton" className="-mt-6 outline rounded-lg px-5 py-1 mr-16 -ml-6 outline-white text-white 
                    lg:ml-96 ">
                        Prev
                    </button>
                    <button id="nextButton" className="-mt-6 outline rounded-lg px-5 py-1 outline-white text-white lg:mr-96">
                        Next
                    </button>
                </div>
            </div>
             
        </>
    )
}