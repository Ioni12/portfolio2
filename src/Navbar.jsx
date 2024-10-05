import Navbar_inside from "./Navbar_inside"

export default function Navbar()
{
    return(
        <>
           <div className="container mx-auto px-10 mt-14 sticky top-2 z-10">
            <div className="flex justify-between items-center rounded-lg sm:rounded-full bg-white outline shadow-fuchsia-300 shadow-md p-2 sm:p-4 sticky top-0">
                <Navbar_inside text="Home" />
                <Navbar_inside text="About" />
                <Navbar_inside text="Contact" />
            </div>
            </div>
        </>
    )
}