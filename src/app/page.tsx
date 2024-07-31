import Image from "next/image";
import StarsCanvas from "../components/StarBackground";

export default function Home() {
  return (
    <>
      <StarsCanvas />
      <main className="z-10 absolute w-full  ">
        <section className="flex">
          <nav className="flex-[2] h-screen w-full bg-gray-0 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 shadow-md shadow-gray-50 mx-5"></nav>
          <div className="flex-[8] h-[1000px] ">
            <h1>Hello</h1>
          </div>
        </section>
      </main>
    </>
  );
}  
