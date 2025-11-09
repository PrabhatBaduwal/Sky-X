import SkyXElement from "./components/SkyXElement";
import SkyXShot from "../videos/SkyXShot_compressed.mp4";
import BackgroundVideo from "next-video/background-video";
import Details from "./components/Details";
import BottomDetails from "./components/BottomDetails";

const Home = () => {
  return (
    <div className="h-screen w-screen relative overflow-hidden">
      {/* Background Video Component */}
      <BackgroundVideo
        className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover"
        src={SkyXShot}
      ></BackgroundVideo>

      {/* The overlay and SKYX element */}
      <div className="h-full w-full bg-black/20 absolute top-0 left-0 z-[20]"></div>
      <SkyXElement />

      {/* The left side panel for details */}
      <Details />

      {/* The details on the bottom part */}
      <BottomDetails />
    </div>
  );
};

export default Home;
