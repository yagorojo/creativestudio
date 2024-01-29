import one from "../assets/projects/one.webp";
import two from "../assets/projects/two.webp";
import three from "../assets/projects/three.webp";

export default function Hero() {
  return (
    <div className="bg-[#f9f6f1]">
      <div className="container m-auto flex flex-col items-center justify-center h-[100vh] px-16 font-nunito font-medium">
        <div className="lg:text-lg">CREATIVE STUDIO SERVICES</div>
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
            you need{" "}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="4 11 4 2" className="inline lg:w-[225px] w-[125px] stroke-acc hover:-translate-y-2 transition-transform">
              <path
                d="M 4 12 l 4 0 M 7 11 Q 7 12 8 12 Q 7 12 7 13"
                strokeWidth="0.3"
                fill="none"
              />
            </svg>
            , just
          </div>
          <div>
            a{" "}
            <div className="w-fit inline lg:text-[1.3vw] text-[1rem] bottom-2 px-5 py-3 lg:px-8 lg:py-5 bg-acc text-white font-normal rounded-full relative lg:bottom-7 lg:hover:bottom-9 transition-all cursor-pointer hover:bottom-4">
              Contact Us
            </div>{" "}
            click away
          </div>
        </div>
      </div>
    </div>
  );
}
