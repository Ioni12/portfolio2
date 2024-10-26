import { Link } from "react-scroll"
export default function Nabar_inside({text, to})
{
    return(
        <>
            <div className="mx-auto font-serif font-semibold text-sm sm:text-base md:text-lg lg:text-xl text-gray-800 whitespace-nowrap overflow-hidden text-ellipsis">
            <Link to={to} smooth={true} duration={500}>
                {text}
            </Link>
                
            </div>
        </>
    )
}