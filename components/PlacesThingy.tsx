import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
export default function PlacesThingy() {
    return (
      <section className="flex-row items-center justify-center my-48 p-8 sm:p-20">
        <h2 className="text-center font-satoshi text-5xl text-whitex/95">Places To Visit?</h2>
        <p className="text-xl text-center font-satoshi text-whitex/70 pt-1">Got that sorted tooo.</p>
        {/* <iframe src="https://www.google.com/maps/d/u/0/edit?mid=1uEbXqK40hcYwOBvyXWTOfen-88TKfRA&usp=sharing"></iframe> */}
        <div className="flex items-center justify-center transition-all duration-500">
          <Link
            href="https://www.google.com/maps/d/u/0/edit?mid=1uEbXqK40hcYwOBvyXWTOfen-88TKfRA&usp=sharing"
            target="_blank"
            className="group w-full bg-whitex/90 px-6 py-4 rounded-xl mt-12 hover:bg-whitex text-center text-redx text-xl transition-all duration-500 active:scale-95 hover:scale-105 max-w-2xl"
          >
            Open Map
            <ArrowUpRight className="inline-block ml-1 mb-1 transition-all duration-500 group-hover:translate-x-1" />
          </Link>
        </div>

      </section>  
    );
}