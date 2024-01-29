import one from "../assets/projects/one.webp";
import two from "../assets/projects/two.webp";
import three from "../assets/projects/three.webp";
import { IconArrowUpRight } from "@tabler/icons-react";

export default function Projects() {
  const projects = [
    {
      name: "Amazing Project: The best of the best",
      img: one,
    },
    {
      name: "Another One?: Maybe it's enough",
      img: two,
    },
    {
      name: "Oh god: Stop with these!",
      img: three,
    },
  ];

  return (
    <div className="bg-bg rounded-b-[4rem]">
      <div className="container m-auto py-[10rem] px-6">
        <div className="text-sm text-dim">
          Explore our visionary projects now!
        </div>
        <div className="flex justify-between pb-6 py-2 items-center">
          <div className="text-4xl font-semibold">
            Turn your <span className="text-acc">cool ideas</span> into reality!
          </div>
          <button className="hidden lg:block py-2 px-6 bg-acc text-white rounded-full">
            See all
          </button>
        </div>
        <div className="flex flex-wrap lg:flex-nowrap gap-10 justify-center">
          {projects.map((project) => (
            <div key={project.name}>
              <img className="rounded-2xl" src={project.img} alt="" />
              <p className="pt-4">{project.name}</p>
              <div className="py-2 flex items-center gap-3">
                <div className="font-semibold text-xs">READ MORE</div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="75"
                  height="24"
                  viewBox="0 0 76 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M0 12l75 0" />
                  <path d="M71 16l4 -4" />
                  <path d="M71 8l4 4" />
                </svg>
              </div>
            </div>
          ))}
        </div>
        <button className="m-auto flex gap-2 justify-between items-center mt-10 lg:hidden py-2 px-6 bg-acc text-white rounded-full">
          See all
          <IconArrowUpRight size={16} />
        </button>
      </div>
    </div>
  );
}
