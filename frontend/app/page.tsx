import SKYXSHOT from "../videos/SKYXSHOT.mp4";
import BackgroundVideo from "next-video/background-video";
import BottomDetails from "./components/BottomDetails";
import Container from "./components/Container";

const Home = () => {
  return (
    <div className="h-screen w-screen relative overflow-hidden">
      {/* Background Video Component */}
      <BackgroundVideo
        className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover"
        src={SKYXSHOT}
        preload="auto"
        minResolution="1080p"
      ></BackgroundVideo>

      {/* The overlay to darken the background video*/}
      <div className="h-full w-full bg-black/20 absolute top-0 left-0 z-20"></div>

      <Container />

      {/* The details on the bottom part */}
      <BottomDetails />
    </div>
  );
};

export default Home;
