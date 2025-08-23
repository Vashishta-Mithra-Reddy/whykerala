import { InfiniteSlider } from "./motion-primitives/infinite-slider";

export default function ImagesThingy() {
    return (
            <section className="my-40 max-w-vw">
                {/* <h2 className="text-center font-satoshi text-5xl pb-16 text-whitex/95">Great Views</h2> */}
                <h2 className="text-center font-satoshi text-5xl pb-16 text-whitex/95 p-8 sm:p-20">What's There To See? Mannn..<span className="text-sm italic">scroll a little</span></h2>
                <div className='flex-row space-y-4'>
                <InfiniteSlider direction='horizontal'>
                    <img
                    src='/kerala15.jpg'
                    alt='Dean blunt - Black Metal 2'
                    className='aspect-square object-fit w-[280px] rounded-[4px]'
                    />
                    <img
                    src='/kerala2.jpg'
                    alt='Jungle Jack - JUNGLE DES ILLUSIONS VOL 2'
                    className='aspect-square w-[280px] object-cover rounded-[4px]'
                    />
                    <img
                    src='/kerala3.jpg'
                    alt='Yung Lean - Stardust'
                    className='aspect-square w-[280px] object-cover rounded-[4px]'
                    />
                    <img
                    src='/kerala4.jpg'
                    alt='DAYS BEFORE RODEO - Travis Scott'
                    className='aspect-square w-[280px] object-cover rounded-[4px]'
                    />
                    <img
                    src='/kerala5.jpg'
                    alt="You're in My System - TORYONTHEBEAT"
                    className='aspect-square w-[280px] object-cover rounded-[4px]'
                    />
                    <img
                    src='/kerala6.jpg'
                    alt="You can't tell me - People Make the World Go Round"
                    className='aspect-square w-[280px] object-cover rounded-[4px]'
                    />
                    <img
                    src='/kerala.jpg'
                    alt="You can't tell me - People Make the World Go Round"
                    className='aspect-square w-[280px] object-cover rounded-[4px]'
                    />
                </InfiniteSlider>
                <InfiniteSlider direction='horizontal' reverse>
                    <img
                    src='/kerala7.jpg'
                    alt='DAYS BEFORE RODEO - Travis Scott'
                    className='aspect-square w-[280px] object-cover rounded-[4px]'
                    />
                    <img
                    src='/kerala8.jpg'
                    alt="You're in My System - TORYONTHEBEAT"
                    className='aspect-square w-[280px] rounded-[4px]'
                    />
                    <img
                    src='/kerala18.jpg'
                    alt="You can't tell me - People Make the World Go Round"
                    className='aspect-square w-[280px] rounded-[4px]'
                    />
                    <img
                    src='/kerala14.jpg'
                    alt='DAYS BEFORE RODEO - Travis Scott'
                    className='aspect-square w-[280px] object-cover rounded-[4px]'
                    />
                    <img
                    src='/kerala10.jpg'
                    alt="You're in My System - TORYONTHEBEAT"
                    className='aspect-square w-[280px] object-cover rounded-[4px]'
                    />
                    <img
                    src='/kerala12.jpg'
                    alt="You can't tell me - People Make the World Go Round"
                    className='aspect-square w-[280px] object-cover rounded-[4px]'
                    />
                    <img
                    src='/kerala13.jpg'
                    alt="You can't tell me - People Make the World Go Round"
                    className='aspect-square w-[280px] object-cover rounded-[4px]'
                    />
                </InfiniteSlider>
                </div>
            </section>
    );
}