const DetailsWide = () => {
  return (
    <section className="md:h-full h-1/2 w-full md:w-1/2 flex justify-start md:-mt-[4%]  md:pl-[8%] items-start text-[#f2c34f] font-lovable">
      {/* Inner container div */}
      <div className="md:h-[95%] h-full md:w-[60%] w-full flex  flex-col justify-center items-center">
        {/* Top part */}
        <div className="h-full md:h-[30%] w-full flex flex-col justify-start gap-12 md:items-start items-center mt-20">
          <div className="flex justify-center items-center md:items-start flex-col">
            <h1 className="md:text-7xl text-5xl text-center md:text-left md:w-3/4 w-full mb-2 uppercase ">
              Soft Opening
            </h1>
            <h3 className="md:text-sm text-[0.6em]  tracking-widest uppercase">
              Unveiling Our Outlets At SKYWALK TOWER
            </h3>
          </div>

          {/* For the mobile part */}
          <div className="h-[20%] w-full flex justify-center items-center scale-y-110 md:hidden bg-black/30">
            <h2 className="text-2xl w-2/4 tracking-widest text-center">
              Elevated Club At{" "}
              <span className="text-4xl font-semibold tracking-tighter">
                256 ft
              </span>
            </h2>
          </div>
        </div>

        <div className="h-[20%] w-full hidden justify-start items-center scale-y-110 md:flex">
          <h2 className="text-3xl w-2/4 tracking-widest">
            Elevated Club At{" "}
            <span className="text-5xl font-semibold tracking-tighter">
              256 ft
            </span>
          </h2>
        </div>

        {/* Mid Part */}
        <div className="h-[20%] w-full hidden justify-start items-center scale-y-110 md:flex">
          <h2 className="text-3xl w-2/4 tracking-widest">
            Musical{" "}
            <span className="text-5xl font-semibold tracking-tighter">
              Evening
            </span>
          </h2>
        </div>

        {/* Bottom Part */}
        <div className="h-[20%] w-full hidden justify-start items-center scale-y-110 md:flex">
          <h2 className="text-3xl w-2/4 tracking-widest">
            Cocktail{" "}
            <span className="text-5xl font-semibold tracking-tighter">
              Dinner
            </span>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default DetailsWide;
