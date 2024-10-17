import Slides from "./Slides"

export default function Slide()
{
    return(
        <>
            <div className="bg-red-400 px-10 py-10 h-[36rem] relative">
                <Slides/>
    
                <div class="controls flex justify-between mt-10 px-20">
                    <button id="prevButton">Prev</button>
                    <button id="nextButton">Next</button>
                </div>
            </div>
             
        </>
    )
}