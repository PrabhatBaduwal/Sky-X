import { Lato } from "next/font/google";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400"],
});

const Details = () => {
  return (
    <div className="h-full w-full flex md:flex-row flex-col justify-between absolute top-0 md:-top-30 lg:top-0 xl-top:0 left-0 z-[50]">
      {/* Left side */}
      <div
        className={`md:h-full h-1/2 md:w-1/2 w-full flex flex-col px-[10%] py-[20%] text-5xl text-yellow-100 tracking-wider ${lato.className}`}
      >
        <h1 className="text-yellow-300 font-bold">Soft Opening</h1>
        <h1 className="md:text-xl w-full text-sm md:w-full xl:w-3/4 mt-4">
          Unveiling Our Outlets At SKYWALK Tower
        </h1>
      </div>

      {/* Right side */}
      <div
        className={`md:h-full md:w-1/2 h-1/2 w-full flex flex-col md:justify-start justify-end items-end px-[10%] py-[20%] text-5xl text-yellow-100 tracking-wider ${lato.className}`}
      >
        <h1 className="text-yellow-300 font-bold">On</h1>
        <h1 className="text-xl md:w-full xl:w-2/4 w-3/4 mt-4 text-end font-semibold">
          14th November, 3pm Onwards
        </h1>
      </div>
    </div>
  );
};

export default Details;
