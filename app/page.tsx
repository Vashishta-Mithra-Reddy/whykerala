// "use client";
import ImagesThingy from "@/components/ImagesThingy";
import TransportThingy from "@/components/TransportThingy";
import WeatherThingy from "@/components/WeatherThingy";
import Image from "next/image";
// import Loading from "./loading";
// import { useState, useEffect } from "react";

export default function Home() {
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsLoading(false);
  //   }, 2500); 
    
  //   return () => clearTimeout(timer); // Cleanup the timer
  // }, []);

  return (
    <>
    {/* {isLoading && <Loading />}  */}
    <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-satoshi">
      <section className="flex flex-col gap-20 md:flex-row items-center justify-between">
      
      <div className="text-center md:text-left text-whitex/95 bg-radial from-whitex/10 to-transparent via-transparent">
        <h1 className="text-6xl font-semibold mb-4 animate-fade-right duration-500">
          Why Kerala<span>?</span>
        </h1>
        <p className="text-2xl text-balance text-whitex/70 animate-fade-right duration-1000 animate-delay-100">
          Now we'll learn reasons on why to visit Kerala
        </p>
      </div>

      <div>
      <Image
        src="/kerala1.jpg"
        alt="Kerala"
        width={700}
        height={600}
        priority
        className="rounded-xl shadow-2xl animate-fade-left duration-500 animate-ease-in dark:brightness-95 hover:sepia-50"
      />
      </div>
          
      </section>
      <ImagesThingy />
      <TransportThingy />
      <WeatherThingy />
    </div>
    </>
  );
}
