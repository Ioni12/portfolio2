

export default function Slide()
{
    return(
        <>
            <div className="bg-red-400 px-10 py-10">
                <div className="w-72 h-64 outline mx-auto my-auto">
                <div class="box box01">SLIDE-01</div>
                <div class="box box02">SLIDE-02</div>
                <div class="box box03">SLIDE-03</div>
                <div class="box box04">SLIDE-04</div>
            </div>
    
            <div class="controls flex justify-between mt-10 px-20">
                <button id="prevButton">Prev</button>
                <button id="nextButton">Next</button>
            </div>
            </div>
             
        </>
    )
}