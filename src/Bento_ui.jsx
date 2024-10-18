import Ui from "./Ui"

export default function Bento_ui()
{
    
    return(
        <>
            <div className="grid grid-cols-8 grid-rows-8 gap-4 mx-auto my-auto pl-12 pt-8 w-full h-[26rem]">
                <Ui an="row-span-2 col-span-5 bg-white">
                    <div className="box w-full h-full  px-1">
                        <h1 className="text-[15px] py-4 ml-2 text-zinc-900 font-bold">Frontend Web Development</h1>
                        <h5 className="text-sm ml-2 -mt-3">React Js, Javascript, Html, Css</h5>
                    </div>
                    <div className="box w-full h-full ">
                        <h1 className="ml-10 mt-2 text-zinc-900 font-bold">Cybersecurity Studies</h1>
                        <svg className="mt-4 ml-20" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-lock-keyhole"><circle cx="12" cy="16" r="1"/><rect x="3" y="10" width="18" height="12" rx="2"/><path d="M7 10V7a5 5 0 0 1 10 0v3"/></svg>
                    </div>
                    <div className="box w-full h-full ">
                        <h1 className="ml-16 mt-2 text-zinc-900 font-bold">IoT Projects</h1>
                        <h5 className="text-[12px] ml-2 mt-1">Developed projects using Arduino and Raspberry Pi</h5>
                    </div>
                    <div className="box w-full h-full ">
                        <h1 className="ml-10 mt-2 text-zinc-900 font-bold">Competition Mentor</h1>
                        <h5 className="text-[12px] ml-4">Volunteered as a mentor for fellow students in a robotics competition</h5>
                    </div>
                </Ui>
                <Ui an="row-span-5 col-span-2 bg-white"/>
                <Ui an="row-span-5 col-span-3 bg-white">
                    <div className="box w-full h-full">1</div>
                    <div className="box">2</div>
                    <div className="box">3</div>
                    <div className="box">4</div>
                </Ui>
                <Ui an="row-span-3 col-span-2 bg-white">
                    <div className="box">1</div>
                    <div className="box">2</div>
                    <div className="box">3</div>
                    <div className="box">4</div>
                </Ui>
                <Ui an="row-span-2 col-span-2 bg-white"/>
                <Ui an="row-span-2 col-span-2 bg-white"/>
            </div>
        </>
    )
}