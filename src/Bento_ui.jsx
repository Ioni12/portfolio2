import Ui from "./Ui"

export default function Bento_ui()
{
    return(
        <>
            <div className="grid grid-cols-8 grid-rows-8 gap-4 bg-slate-600 mx-auto my-auto pl-12 pt-8 w-full h-80">
                <Ui an="row-span-2 col-span-5 bg-white"/>
                <Ui an="row-span-5 col-span-2 bg-white"/>
                <Ui an="row-span-5 col-span-3 bg-white"/>
                <Ui an="row-span-3 col-span-2 bg-white"/>
                <Ui an="row-span-2 col-span-2 bg-white"/>
                <Ui an="row-span-2 col-span-2 bg-white"/>
            </div>
        </>
    )
}