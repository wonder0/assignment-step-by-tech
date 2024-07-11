import Image from "next/image";
import MainScene from "./main";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen w-full flex items-center justify-center">
      <div className="flex flex-col items-center justify-center bg-base-color text-white">
        <Link href="/Assignment1">
          <button className="bg-transparent border-2 border-primary text-primary px-4 py-1 rounded-md font-medium cursor-pointer min-h-[4vh] min-w-[50vw] md:min-w-[15vw] mb-4">
            Assignment 1
          </button>
        </Link>
        <Link href="/Assignment2">
          <button className="bg-transparent border-2 border-primary text-primary px-4 py-1 rounded-md font-medium cursor-pointer min-h-[4vh] min-w-[50vw] md:min-w-[15vw] mb-4">
            Assignment 2
          </button>
        </Link>
      </div>
    </main>
  );
}
