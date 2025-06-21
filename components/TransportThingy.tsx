"use client";
import PixelTransition from "./PixelTransition/PixelTransition";

export default function TransportThingy() {
    return (
        <section className="text-center pt-10 pb-28 font-satoshi">
            {/* <h2 className="text-center font-satoshi text-5xl pb-16 text-whitex/95">Getting Around</h2> */}
            <h2 className="text-center font-satoshi text-5xl pb-16 text-whitex/95">So, How Do We Get Around?</h2>
            {/* <p className="mt-4 text-xl">Choose your ride — Car, Bike, Train, or Bus.</p> */}
            
            <div className="hidden md:block relative">
            <span className="absolute top-[-3rem] right-[0%] translate-x-1/2 rotate-12 text-whitex/70 animate-pulse text-xl italic pointer-events-none">
                Hover over a card.
            </span>
            {/* Your cards or other content here */}
            </div>
            
            <span className="md:hidden block text-whitex text-xl pb-8 animate-pulse">Click on a card.</span>
            
            <div className="flex md:flex-row  items-center flex-col gap-20 mb-12">
            <PixelTransition
                firstContent={
                    <img
                    src="/kerala2.jpg"
                    alt="Train."
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                }
                secondContent={
                    <div
                    style={{
                        width: "100%",
                        height: "100%",
                        display: "grid",
                        placeItems: "center",
                        backgroundColor: "#efdcc7"
                    }}
                    >
                    <p style={{ fontWeight: 900, fontSize: "3rem", color: "#991634" }}>🚂<br></br>Train</p>
                    </div>
                }
                gridSize={12}
                pixelColor='#991634'
                animationStepDuration={0.4}
                className="custom-pixel-card text-redx"
            />

            <PixelTransition
                firstContent={
                    <img
                    src="/kerala3.jpg"
                    alt="Bike."
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                }
                secondContent={
                    <div
                    style={{
                        width: "100%",
                        height: "100%",
                        display: "grid",
                        placeItems: "center",
                        backgroundColor: "#efdcc7"
                    }}
                    >
                    <p style={{ fontWeight: 900, fontSize: "3rem", color: "#991634" }}>🏍️<br></br>Bike</p>
                    </div>
                }
                gridSize={12}
                pixelColor='#991634'
                animationStepDuration={0.4}
                className="custom-pixel-card"
            />

            <PixelTransition
                firstContent={
                    <img
                    src="/kerala1.jpg"
                    alt="Bus."
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                }
                secondContent={
                    <div
                    style={{
                        width: "100%",
                        height: "100%",
                        display: "grid",
                        placeItems: "center",
                        backgroundColor: "#efdcc7"
                    }}
                    >
                    <p style={{ fontWeight: 900, fontSize: "3rem", color: "#991634" }}>🚌<br></br>Bus</p>
                    </div>
                }
                gridSize={12}
                pixelColor='#991634'
                animationStepDuration={0.4}
                className="custom-pixel-card"
            />
            </div>
            <p className="mt-2 text-3xl font-semibold text-whitex/95">Dealer’s choice.</p>
            <p className="mt-1 text-xl text-whitex/60 italic">You’ll enjoy the ride, no matter what.</p>
        </section>
    );
}