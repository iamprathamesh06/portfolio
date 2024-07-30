import Image from "next/image";
import StarsCanvas from "../components/StarBackground";

export default function Home() {
  return (
    <>
      <StarsCanvas />
      <main className="z-10 absolute w-full border-2 border-white">
        <h1>Hello</h1>
        {/* Content will go here */}
      </main>
    </>
  );
}  
