import { IconArrowRight } from "@tabler/icons-react";

export default function Navbar() {
  return (
    <div>
      <nav
        className="m-auto container flex justify-between items-center pt-6 lg:pt-10 fixed px-6"
        style={{ left: "50%", transform: "translate(-50%)" }}
      >
        <div>Brand</div>
        <div className="flex items-center gap-5 lg:gap-10">
          <a className="bg-slate-300 flex items-center justify-center w-auto rounded-full gap-3 lg:text-lg py-3 px-6 font-semibold">
            Contact us
            <IconArrowRight size={20} />
          </a>
          <button>Menu</button>
        </div>
      </nav>
    </div>
  );
}
