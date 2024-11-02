import gmail from "./assets/gmail-icon.svg"
import linkedin from "./assets/linkedin-icon-2.svg"
import instagram from "./assets/instagram-glyph.svg"

export default function Info()
{
    return(
        <>
            <div className=" h-40">
                <div className="flex lg:justify-center lg:align-middle">
                    <div className=" mt-5 ml-5 ">
                        <h2 className="flex p-4">
                            <img src={gmail} alt="" className="w-4 h-4 mt-1 mr-1"/>email: enkeljongjeta@gmail.com
                        </h2>
                        <br />
                        <h2 className="flex p-4 -mt-8">
                            <img src={linkedin} alt="" className="w-4 h-4 mt-1 mr-1"/>linkedin:  <a href="https://www.linkedin.com/in/enkeljon-gjeta-7b137214b/">Enkeljon Gjeta</a>
                        </h2>
                        <br />
                        <h2 className="flex p-4 -mt-8">
                            <img src={instagram} alt="" className="w-4 h-4 mt-1 mr-1"/>instagram: enkeljon_gjeta
                        </h2>
                       
                    </div>
                </div>
            </div>
        </>
    )
}