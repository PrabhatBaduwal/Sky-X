import DetailsWide from "./DetailsWide";
import SkyXInteractive from "./SkyXInteractive";
import Border from "./Border";

const Container = () => {
  return (
    <div className="h-screen w-screen absolute top-0 left-0 z-30 flex md:flex-row  flex-col justify-center items-center">
      <DetailsWide />
      <SkyXInteractive />

      {/* The details part only if on mobile devices */}

      {/* The top left border */}
      {/* <Border classes="h-[25%] w-[25%] md:h-[10%] md:w-[10%] absolute md:top-4 md:left-4 top-2 left-2" /> */}

      {/* Bottom left border */}
      <Border classes="h-[25%] w-[25%] md:h-[10%] md:w-[10%] absolute transform scale-y-[-1] md:bottom-4 md:left-4 bottom-2 hidden md:block left-2" />

      {/* Top Right border for mobile devices */}
      {/* <Border classes="h-[25%] w-[25%] md:h-[10%] md:w-[10%] absolute top-2 right-2 transform scale-x-[-1] md:hidden" /> */}

      {/* Bottom right border for desktop views */}
      {/* <Border classes="h-[10%] w-[10%] absolute bottom-4 right-4 transform rotate-180 hidden md:block" /> */}

      {/* Top right border for desktop views */}
      <Border classes="h-[25%] w-[25%] md:h-[10%] md:w-[10%] absolute md:top-4 scale-x-[-1] hidden md:block md:right-4 top-2 right-2" />
    </div>
  );
};

export default Container;
