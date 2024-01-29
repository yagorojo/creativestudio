import { IconArrowRight } from "@tabler/icons-react";

export default function Navbar() {
  return (
    <div>
      <nav
        className="flex m-auto container justify-between items-center pt-6 lg:pt-10 fixed px-6"
        style={{ left: "50%", transform: "translate(-50%)" }}
      >
        <div className="font-bold text-lg">B R A N D</div>
        <div className="flex items-center gap-5 lg:gap-10">
          <a className="bg-acc text-white flex items-center justify-center w-auto rounded-full gap-3 lg:text-lg py-3 px-6 cursor-pointer">
            Contact us
            <IconArrowRight size={20} />
          </a>
          <button>Menu</button>
        </div>
      </nav>
    </div>
  );
}
