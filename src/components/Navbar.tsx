"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "./ui/button";

export default function Navbar() {
  const { data: session } = useSession();
  if (session?.user) return null;
  return (
    <div className="absolute z-50 w-full h-14 flex items-center justify-end px-4">
      <div className="flex items-center gap-4">
        <Button
          onClick={() => signIn("google")}
          className="!cursor-pointer bg-gray-200 hover:bg-gray-100 rounded-full text-black"
        >
          Login
        </Button>
        <Button
          onClick={() => signIn("google")}
          className="!cursor-pointer bg-neutral-600 hover:bg-neutral-700 rounded-full text-white"
        >
          Sign Up
        </Button>
      </div>
    </div>
  );
}
