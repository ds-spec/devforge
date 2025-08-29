"use client";

import { useSession } from "next-auth/react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const { data: session } = useSession();
  console.log(session);
  const router = useRouter();
  if (session?.user) return null;
  return (
    <div className="absolute z-50 w-full h-14 flex items-center justify-end px-4">
      <div className="flex items-center gap-4">
        <Button
          onClick={() => router.push("/sign-in")}
          className="!cursor-pointer bg-gray-200 hover:bg-gray-100 rounded-full text-black"
        >
          Login
        </Button>
        <Button
          onClick={() => router.push("/sign-in")}
          className="!cursor-pointer bg-neutral-600 hover:bg-neutral-700 rounded-full text-white"
        >
          Sign Up
        </Button>
      </div>
    </div>
  );
}
