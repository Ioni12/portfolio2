import Ui from "./Ui"
import robo from "./assets/images.png"
import javascript from "./assets/logo-javascript.svg"
import python from"./assets/python-5.svg"
import react from "./assets/react-2.svg"

export default function Bento_ui()
{
    
    return(
        <>
            <div className="grid grid-cols-8 grid-rows-8 gap-4 mx-auto my-auto pl-12 pt-8 w-full h-[26rem] lg:h-[42rem] lg:ml-20">
                <Ui an="row-span-2 col-span-5 bg-white">
                    <div className="box w-full h-full  px-1">
                        <h1 className="text-[15px] py-4 ml-2 text-zinc-900 font-bold lg:px-80 lg:mt-10 lg:ml-10">Frontend Web Development</h1>
                        <h5 className="text-sm ml-2 -mt-3 lg:px-80 lg:mt-1 lg:ml-12">React Js, Javascript, Html, Css</h5>
                    </div>
                    <div className="box w-full h-full ">
                        <h1 className="ml-10 mt-2 text-zinc-900 font-bold lg:px-80 lg:mt-10 lg:ml-10">Cybersecurity Studies</h1>
                    </div>
                    <div className="box w-full h-full ">
                        <h1 className="ml-16 mt-2 text-zinc-900 font-bold lg:px-80 lg:mt-10 lg:ml-10">IoT Projects</h1>
                        <h5 className="text-[12px] ml-2 mt-1 lg:px-60 lg:mt-1 lg:ml-12">Developed projects using Arduino and Raspberry Pi</h5>
                    </div>
                    <div className="box w-full h-full ">
                        <h1 className="ml-10 mt-2 text-zinc-900 font-bold lg:px-80 lg:mt-10 lg:ml-10">Competition Mentor</h1>
                        <h5 className="text-[12px] ml-4 lg:px-60 lg:mt-1 lg:ml-10">Volunteered as a mentor for fellow students in a robotics competition</h5>
                    </div>
                </Ui>
                <Ui an="row-span-5 col-span-2 bg-white"/>
                <Ui an="row-span-5 col-span-3 bg-white">
                    <div className="box w-full h-full py-10">
                        <img src={robo} alt="" />
                        <h1 className="ml-9">Mentor</h1>
                    </div>
                    <div className="box">2</div>
                    <div className="box">3</div>
                    <div className="box">4</div>
                </Ui>
                <Ui an="row-span-3 col-span-2 bg-white">
                    <div className="box py-8 px-4 lg:px-20 lg:py-36 lg:-mt-36">
                        <img src={javascript} alt="" className="mt-3 lg:w-48"/>
                    </div>
                    <div className="box py-8 px-4 lg:px-20 lg:py-36 lg:-mt-36">
                        <img src={python} alt="" className="mt-3 lg:w-48"/>
                    </div>
                    <div className="box py-8 px-4 lg:px-20 lg:py-36 lg:-mt-36">
                        <img src={react} alt="" className="mt-3 lg:w-48"/>
                    </div>
                </Ui>
                <Ui an="row-span-2 col-span-2 bg-white"/>
                <Ui an="row-span-2 col-span-2 bg-white"/>
            </div>
        </>
    )
}