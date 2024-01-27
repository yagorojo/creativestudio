import { IconArrowBigRightLine } from "@tabler/icons-react";
import one from "../assets/projects/one.webp";
import two from "../assets/projects/two.webp";
import three from "../assets/projects/three.webp";

export default function Hero() {
  return (
    <div className="container m-auto flex flex-col items-center justify-center h-[100vh] px-16 font-nunito font-medium">
      <div className="lg:text-lg font-bold">CREATIVE STUDIO SERVICES</div>
      <div className="text-6xl md:text-[8vw] leading-none md:text-center font-semibold">
        <div>
          All
          <div className="inline-flex text-lg h-full">
            <div className="hero-bubble left-[20px] overflow-hidden">
              <img src={one} alt="" className="h-full w-full" />
            </div>
            <div className="hero-bubble overflow-hidden">
              <img src={two} alt="" className="h-full w-full" />
            </div>
            <div className="hero-bubble right-[20px] overflow-hidden">
              <img src={three} alt="" className="h-full w-full" />
            </div>
          </div>
          the services
        </div>
        <div>
          you need <IconArrowBigRightLine className="inline" size={20} />, just
        </div>
        <div>
          a{" "}
          <div className="w-fit md:inline lg:text-[1.5vw] bg-acc text-white rounded-full">
            Contact Us
          </div>{" "}
          click away
        </div>
      </div>
    </div>
  );
}
