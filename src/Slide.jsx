import Slides from "./Slides"
import robo from "./assets/1714580011534.jpeg";

export default function Slide()
{
    return(
        <>
            <div className=" px-10 py-10 h-[44rem] relative" style={{ backgroundImage: `url(${robo})`, backgroundSize: 'cover' }}>
                <Slides/>
    
                <div class="controls flex justify-between mt-10 px-20">
                    <button id="prevButton" className="-mt-6">Prev</button>
                    <button id="nextButton" className="-mt-6">Next</button>
                </div>
            </div>
             
        </>
    )
}