import Ui from "./Ui"

export default function Bento_ui()
{
    return(
        <>
            <div className="grid grid-cols-8 grid-rows-8 gap-4 mx-auto my-auto pl-12 pt-8 w-full h-[26rem]">
                <Ui an="row-span-2 col-span-5 bg-white">
                    <div className="box">1</div>
                    <div className="box">2</div>
                    <div className="box">3</div>
                    <div className="box">4</div>
                </Ui>
                <Ui an="row-span-5 col-span-2 bg-white"/>
                <Ui an="row-span-5 col-span-3 bg-white"/>
                <Ui an="row-span-3 col-span-2 bg-white"/>
                <Ui an="row-span-2 col-span-2 bg-white"/>
                <Ui an="row-span-2 col-span-2 bg-white"/>
            </div>
        </>
    )
}