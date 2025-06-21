import PixelTransition from "./PixelTransition/PixelTransition";

export default function TransportThingy() {
    return (
        <section className="text-center py-10 font-satoshi">
            <h2 className="text-center font-satoshi text-5xl pb-16 text-whitex/95">Getting Around</h2>
            {/* <p className="mt-4 text-xl">Choose your ride — Car, Bike, Train, or Bus.</p> */}
            <div className="flex md:flex-row  items-center flex-col gap-20 mb-12">
            <PixelTransition
                firstContent={
                    <img
                    src="/kerala2.jpg"
                    alt="default pixel transition content, a cat!"
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
                        backgroundColor: "#111"
                    }}
                    >
                    <p style={{ fontWeight: 900, fontSize: "3rem", color: "#ffffff" }}>🚂<br></br>Train?</p>
                    </div>
                }
                gridSize={12}
                pixelColor='#ffffff'
                animationStepDuration={0.4}
                className="custom-pixel-card"
            />

            <PixelTransition
                firstContent={
                    <img
                    src="/kerala3.jpg"
                    alt="default pixel transition content, a cat!"
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
                        backgroundColor: "#111"
                    }}
                    >
                    <p style={{ fontWeight: 900, fontSize: "3rem", color: "#ffffff" }}>🏍️<br></br>Bike?</p>
                    </div>
                }
                gridSize={12}
                pixelColor='#ffffff'
                animationStepDuration={0.4}
                className="custom-pixel-card"
            />

            <PixelTransition
                firstContent={
                    <img
                    src="/kerala1.jpg"
                    alt="default pixel transition content, a cat!"
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
                        backgroundColor: "#111"
                    }}
                    >
                    <p style={{ fontWeight: 900, fontSize: "3rem", color: "#ffffff" }}>🚌<br></br>Bus?</p>
                    </div>
                }
                gridSize={12}
                pixelColor='#ffffff'
                animationStepDuration={0.4}
                className="custom-pixel-card"
            />
            </div>
            <p className="mt-2 text-3xl font-semibold text-whitex/95">Dealer’s choice.</p>
            <p className="mt-1 text-xl text-whitex/60 italic">You’ll enjoy the ride, no matter what.</p>
        </section>
    );
}