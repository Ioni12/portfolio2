import ScratchCard from "./Scratch_card";
import seven from "./assets/777-removebg-preview.svg";

export default function Luck() {
  return (
    <>
      <div
        className="h-80 py-12 lg:h-[30rem] lg:-mt-32"
        style={{ backgroundImage: `url(${seven})`, backgroundSize: "cover" }}
      >
        <ScratchCard />
      </div>
    </>
  );
}
