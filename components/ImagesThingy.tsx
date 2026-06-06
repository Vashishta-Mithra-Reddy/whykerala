import { InfiniteSlider } from "./motion-primitives/infinite-slider";

export default function ImagesThingy() {
    return (
            <section className="my-40 max-w-screen">
                {/* <h2 className="text-center font-satoshi text-5xl pb-16 text-whitex/95">Great Views</h2> */}
                <h2 className="text-center font-satoshi text-5xl pb-16 text-whitex/95 p-8 sm:p-20">What's There To See? Mannn..<span className="text-sm italic">scroll a little</span></h2>
                <div className='flex-row space-y-4'>
                <InfiniteSlider direction='horizontal'>
                    <img
                    src='/kerala15.jpg'
                    alt='Scenic view of Kerala'
                    className='aspect-square object-fit w-[280px] rounded-[4px]'
                    />
                    <img
                    src='/kerala2.jpg'
                    alt='Backwaters of Kerala'
                    className='aspect-square w-[280px] object-cover rounded-[4px]'
                    />
                    <img
                    src='/kerala3.jpg'
                    alt='Lush green hills in Kerala'
                    className='aspect-square w-[280px] object-cover rounded-[4px]'
                    />
                    <img
                    src='/kerala4.jpg'
                    alt='Houseboat on the Kerala backwaters'
                    className='aspect-square w-[280px] object-cover rounded-[4px]'
                    />
                    <img
                    src='/kerala5.jpg'
                    alt='Kerala beach at sunset'
                    className='aspect-square w-[280px] object-cover rounded-[4px]'
                    />
                    <img
                    src='/kerala6.jpg'
                    alt='Tea plantations in Munnar, Kerala'
                    className='aspect-square w-[280px] object-cover rounded-[4px]'
                    />
                    <img
                    src='/kerala.jpg'
                    alt='Palm-lined coast of Kerala'
                    className='aspect-square w-[280px] object-cover rounded-[4px]'
                    />
                </InfiniteSlider>
                <InfiniteSlider direction='horizontal' reverse>
                    <img
                    src='/kerala7.jpg'
                    alt='Traditional Kerala houseboat cruise'
                    className='aspect-square w-[280px] object-cover rounded-[4px]'
                    />
                    <img
                    src='/kerala8.jpg'
                    alt='Coconut palms along a Kerala waterway'
                    className='aspect-square w-[280px] rounded-[4px]'
                    />
                    <img
                    src='/kerala18.jpg'
                    alt='Misty hills of the Western Ghats in Kerala'
                    className='aspect-square w-[280px] rounded-[4px]'
                    />
                    <img
                    src='/kerala14.jpg'
                    alt='Kerala temple architecture'
                    className='aspect-square w-[280px] object-cover rounded-[4px]'
                    />
                    <img
                    src='/kerala10.jpg'
                    alt='Waterfall in the Kerala countryside'
                    className='aspect-square w-[280px] object-cover rounded-[4px]'
                    />
                    <img
                    src='/kerala12.jpg'
                    alt='Sunset over the Arabian Sea in Kerala'
                    className='aspect-square w-[280px] object-cover rounded-[4px]'
                    />
                    <img
                    src='/kerala13.jpg'
                    alt='Rice paddy fields in rural Kerala'
                    className='aspect-square w-[280px] object-cover rounded-[4px]'
                    />
                </InfiniteSlider>
                </div>
            </section>
    );
}