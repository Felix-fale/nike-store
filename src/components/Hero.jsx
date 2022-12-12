import React from 'react';

function Hero({ heroapi: { title, subtitle, btntext, img, siciallinks, videos } }) {
    // console.log(heroapi);
    return (
        <>
            <div className='relative h-auto w-auto flex flex-col'>
                <div className='bg-theme clip-path h-[85vh] lg:h-[75vh] md:h-[65vh] sm:h-[55vh] w-auto absolute top-0 left-0 right-0 opacity-100 z-10' ></div>
                <div className='relative opacity-100 z-20 grid items-cente justify-items-center nike-container'>
                    <div className=' grid items-center justify-items-center mt-28 md:mt-24'>
                        <h1 className='text-6xl lg:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl font-extrabold filter text-slate-200 '>{title} </h1>
                        <h1 className='text-6xl lg:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl font-extrabold filter text-slate-200 '>{subtitle} </h1>
                        <button>{btntext} </button>
                        {/* <div className=''></div>
                        <div className=''></div> */}
                    </div>
                    <div className=''>
                        <img src={img} alt="hero-img/img" className='' />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Hero;