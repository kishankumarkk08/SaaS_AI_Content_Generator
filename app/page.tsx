import { Button } from "@/components/ui/button";
import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gray-200 h-screen">
      <div className="flex justify-between items-center border-b-2 shadow-md p-4">

        <img src="./logo.svg" alt="logo" />
        <h2 className="font-bold text-2xl">AutoGenerator</h2>
        <Link href="/dashboard">
          <Button className="bg-indigo-600 hover:bg-indigo-700">Get Started</Button>
        </Link>
      </div>
    </div>
  );
}
