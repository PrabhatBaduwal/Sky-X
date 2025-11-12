const DetailsWide = () => {
  return (
    <section className="md:h-full h-1/2 w-full md:w-1/2 flex justify-start md:pl-[8%] items-start md:pt-[2%] text-[#f2c34f] font-lovable">
      {/* Inner container div */}
      <div className="md:h-[80%] h-full md:w-[60%] w-full flex  flex-col justify-center items-center">
        {/* Top part */}
        <div className="h-[45%] w-full flex flex-col justify-center md:items-start items-center mt-20">
          <h1 className="md:text-7xl text-5xl text-center md:text-left md:w-3/4 w-full mb-2 uppercase ">
            Soft Opening
          </h1>
          <h3 className="md:text-sm text-[0.6em]  tracking-widest uppercase">
            Unveiling Our Outlets At SKYWALK TOWER
          </h3>
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
