import React from "react";
import { Home, Puzzle } from "lucide-react";
import Link from "next/link";
const LeftPart = () => {
  return (
    <div className="w-1/4 h-screen p-5 flex flex-col space-y-4 bg-black">
      <h2 className="text-xl text-white leading-relaxed text-center">
        ONBOARDING
        <span className="text-green-500 text-xl">TEST</span>
      </h2>

      <div className="flex flex-row space-x-2 items-center self-start">
        <Home size={17} color="#fff" />
        <Link
          className="text-xl no-underline hover:underline text-green-500"
          href="/"
        >
          Home
        </Link>
      </div>
      <div className="flex flex-row space-x-1 items-center self-start">
        <Puzzle size={17} color="#fff" />
        <Link
          className="text-xl no-underline hover:underline text-green-500"
          href="/training"
        >
          Training
        </Link>
      </div>
    </div>
  );
};

export default LeftPart;
