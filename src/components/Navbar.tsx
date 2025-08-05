import Image from "next/image";
import { jetbrains_mono } from "./fonts";
import { Button } from "./ui/button";
import { Rocket, User2 } from "lucide-react";

export default function Navbar() {
  return (
    <nav
      className={`${jetbrains_mono.className} antialiased h-20 shadow-xl px-5 py-2 flex justify-between items-center backdrop-blur-lg`}
    >
      <div className="flex items-center gap-1">
        <Image src="/images/logo.svg" alt="devforge" width={30} height={30} />
        <h3 className="text-lime-300 font-bold text-2xl leading-tighter drop-shadow-[0_0_1px_#22c55e,0_0_5px_#22c55e]">
          devforge
        </h3>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <Button className="flex items-center gap-4 px-7 py-6 font-bold rounded-sm cursor-pointer bg-transparent group hover:bg-green-400/10 border-none backdrop-blur-lg tracking-wider">
            <span>
              <User2 className="group-hover:text-green-400" />
            </span>
            <h4 className="text-md group-hover:text-green-400">Login</h4>
          </Button>
          <Button className="flex items-center gap-4 px-7 py-6 font-bold rounded-sm cursor-pointer group bg-green-400 border-none backdrop-blur-lg text-black hover:shadow-xl hover:shadow-green-400/30 tracking-wider">
            <span>
              <Rocket className="group-hover:text-green-400" />
            </span>
            <h4 className="text-md group-hover:text-green-400">Sign Up</h4>
          </Button>
        </div>
      </div>
    </nav>
  );
}
