const Detials = () => {
  return (
    <div className="absolute bottom-[10%] md:hidden h-[60%] w-full flex justify-between text-[#f2c34f]">
      {/* Mid Part */}
      <div className="h-[80%] w-1/2 justify-center items-center scale-y-110 flex">
        <h2 className="text-xl w-2/4 tracking-widest">
          Musical{" "}
          <span className="text-3xl font-semibold tracking-tighter">
            Evening
          </span>
        </h2>
      </div>

      {/* Bottom Part */}
      <div className="h-[80%] w-1/2 justify-center items-center scale-y-110 flex">
        <h2 className="text-xl w-2/4 tracking-widest">
          Cocktail{" "}
          <span className="text-3xl font-semibold tracking-tighter">
            Dinner
          </span>
        </h2>
      </div>
    </div>
  );
};

export default Detials;
