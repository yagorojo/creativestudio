import one from "../assets/tailored/one.webp";
import two from "../assets/tailored/two.webp";
import three from "../assets/tailored/three.webp";
import four from "../assets/tailored/four.webp";

export default function Tailored() {
  return (
    <div className="flex justify-center items-center flex-col h-[90vh] lg:flex-row overflow-hidden my-[2rem]">
      <div className="w-full h-full relative">
        <img className="t-img t-img-1" src={two} alt="" />
        <img className="t-img t-img-2" src={one} alt="" />
        <img className="t-img t-img-3" src={three} alt="" />
        <img className="t-img t-img-4" src={four} alt="" />
      </div>
      <div className="absolute text-center p-6 flex flex-col items-center">
        <div className="text-5xl lg:text-7xl mb-14 font-semibold max-w-[400px]">
          Tailored for <span className="text-[#60C7F5] underline">you</span>.
        </div>
        <div className="text-[#555555] max-w-[400px]">
          The Cocoon app connects you quickly and effortlessly with a pool of
          amazing therapists that will meet your specific needs.
        </div>
      </div>
    </div>
  );
}
