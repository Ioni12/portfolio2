
export default function Nabar_inside({text})
{
    return(
        <>
            <div className="mx-auto font-serif font-semibold text-sm sm:text-base md:text-lg lg:text-xl text-gray-800 whitespace-nowrap overflow-hidden text-ellipsis">
                <button>{text}</button>
                
            </div>
        </>
    )
}