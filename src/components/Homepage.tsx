import Navbar from "../components/Navbar"
import pfp from "../assets/images/pfp.jpg"
import Card from "../components/Card"
import sign from "../assets/images/sign.png"
import signblack from "../assets/images/sign-black.png"
import idea from "../assets/images/idea.png"
import { Link } from "react-router-dom"
import { gsap } from 'gsap';
import Marquee from "react-fast-marquee"
import { useEffect, useRef } from "react"
import Desktop from "./Desktop"
import Mobile from "./Mobile"
const Homepage = ({ isDarkMode, toggleDarkMode }: { isDarkMode: boolean, toggleDarkMode: () => void }) => {

    const curtainRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (curtainRef.current) {
            gsap.to(curtainRef.current, {
                y: '100%',
                duration: 2,
                ease: 'power4.inOut',
                onComplete: () => {
                    curtainRef.current!.style.display = 'none';
                },
            });
        }
        gsap.fromTo(
            ".popup",
            { opacity: 0, scale: 0.5 },
            { opacity: 1, scale: 1, duration: 1, delay: 1, ease: 'power1.out' }
        );
    }, []);

    return (
        <div className={`${isDarkMode ? "bg-[#0f0f0f] text-white" : " bg-[#f7f9fc] text-black"} h-auto w-screen flex flex-col items-center justify-start px-4`}>

            {/* Animation Div  */}
            <div
                ref={curtainRef}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: '#131313',
                    zIndex: 1000,
                }}
            ></div>

            <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

            <div className="flex flex-col items-center justify-between xl:w-[75rem] lg:w-[60rem] w-full h-full">

                <section className="flex flex-col items-start justify-center gap-4 lg:pt-[7rem] pt-6 w-full h-full">

                    <div className="flex lg:items-start items-center lg:flex-row flex-col justify-between w-full gap-4 xl:h-[22rem] h-full ">

                        <Link to="/about" className={`popup relative group cursor-pointer xl:h-[22rem] lg:h-80 md:w-[90%] w-full flex md:flex-row flex-col items-center lg:justify-between justify-evenly md:px-6 md:py-4 p-4 gap-4 rounded-[2.5rem]  
                        ${isDarkMode ? "bg-[#1a1a1a] bg-gradient-to-br from-zinc-800 to-black shadow-none" : "bg-white shadow-lg"} `}>

                            <img src={pfp} className="xl:w-[170px] lg:w-[150px] w-[170px]" alt="" />

                            <div className="flex flex-col items-start justify-start gap-2">
                                <h3 className="text-zinc-400 font-semibold xl:text-xl lg:text-xs text-xl">A WEB DESIGNER</h3>
                                <h1 className="xl:text-4xl lg:text-3xl text-4xl font-semibold">Sabin Hamal.</h1>
                                <p className="text-zinc-400 text-xs tracking-widest md:pb-0 pb-6">I am a Web Designer based in Kathmandu Nepal.</p>
                            </div>

                            <svg className={`absolute lg:bottom-5 bottom-2 right-5 md:flex hidden cursor-pointer opacity-50 stroke-zinc-500 group-hover:opacity-100 
                                ${isDarkMode ? "group-hover:stroke-white" : "group-hover:stroke-blue-500"}  transition-all duration-500`} xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 46 42" fill="none">
                                <path className={`fill-zinc-500 stroke-zinc-500 ${isDarkMode ? "group-hover:stroke-white" : "group-hover:stroke-blue-500"} transition-all`} d="M30.9224 21.2014C25.1291 21.2014 24.618 24.7796 24.618 27.3354C24.618 21.5421 21.5509 21.2014 17.9727 21.2014C24.618 21.2014 24.618 17.2824 24.618 14.8969C24.618 20.3494 27.8554 21.2014 30.9224 21.2014Z" fill="#F4F4F4" stroke="#F4F4F4" />
                                <rect y="21.6981" width="0.999999" height="18" transform="rotate(-90 0 21.6981)" className={`stroke-zinc-500 ${isDarkMode ? "group-hover:stroke-white fill-zinc-500 " : "group-hover:stroke-blue-500 fill-blue-500 "} transition-all`} />
                                <path d="M9.93715 16.8555C10.9514 13.0701 13.2829 9.77074 16.5123 7.55063C19.7417 5.33052 23.6571 4.33531 27.5547 4.74394C31.4522 5.15258 35.0762 6.93825 37.7749 9.77989C40.4736 12.6215 42.07 16.3327 42.2771 20.2461C42.4842 24.1596 41.2884 28.0185 38.9047 31.1291C36.5211 34.2398 33.1059 36.398 29.2732 37.2157C25.4406 38.0335 21.4419 37.4571 17.9962 35.5903C14.5505 33.7234 11.8839 30.6886 10.4757 27.0314" stroke-width="1.5" stroke-linecap="round" />
                            </svg>
                        </Link>

                        <div className="flex flex-col lg:w-1/2 md:w-[90%] w-full items-center justify-start lg:gap-4 gap-6 h-full">
                            <div className={`relative popup group cursor-default overflow-hidden w-full lg:py-2 py-3 h-1/4 flex items-center justify-center rounded-full ${isDarkMode ? "bg-[#1a1a1a] bg-gradient-to-r shadow-none from-zinc-800 to-zinc-900 " : "bg-white shadow-lg "}  `}>
                                <Marquee speed={50} className="w-[90%]">
                                    <span className="text-zinc-500 uppercase text-[0.8rem]">Looking to <span className={`${isDarkMode ? "text-white" : "text-blue-500"}`}>collaborate?</span> Get in touch&nbsp;.&nbsp;</span>
                                    <span className="text-zinc-500 uppercase text-[0.8rem]">Check out my <span className={`${isDarkMode ? "text-white" : "text-blue-500"}`}>projects.</span>&nbsp;.&nbsp;</span>
                                    <span className="text-zinc-500 uppercase text-[0.8rem]">Looking to <span className={`${isDarkMode ? "text-white" : "text-blue-500"}`}>collaborate?</span> Get in touch&nbsp;.&nbsp;</span>
                                    <span className="text-zinc-500 uppercase text-[0.8rem]">Check out my <span className={`${isDarkMode ? "text-white" : "text-blue-500"}`}>projects.</span>&nbsp;.&nbsp;</span>
                                </Marquee>
                            </div>

                            <div className="flex md:flex-row flex-col items-center justify-between gap-4 w-full popup">
                                <div className="md:w-1/2 w-full relative group">
                                    <Card isDarkMode={isDarkMode} title="Credentials" destination="/about" description="more about me" />
                                    <Link to="/about">
                                        <img src={sign} className={`${isDarkMode ? "flex" : "hidden"} absolute cursor-pointer top-[40%] left-[50%] opacity-75 group-hover:opacity-100 transition-all duration-500`} style={{ transform: "translate(-50%, -60%)" }} alt="" />
                                        <img src={signblack} className={`${isDarkMode ? "hidden" : "flex"} absolute cursor-pointer top-[40%] left-[50%] opacity-75 group-hover:opacity-100 transition-all duration-500`} style={{ transform: "translate(-50%, -60%)" }} alt="" />
                                    </Link>
                                </div>
                                <div className="md:w-1/2 w-full relative popup group">
                                    <Card isDarkMode={isDarkMode} title="Projects" destination="/works" description="showcase" />
                                    <Link to="/works"><img src={idea} className="w-[170px] group-hover:brightness-100 transition-all duration-500 cursor-pointer absolute brightness-[80%] md:top-[40%] top-[50%] left-[50%]  z-[2]" style={{ transform: "translate(-50%, -60%)" }} alt="" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Desktop isDarkMode={isDarkMode} />

                    <Mobile isDarkMode={isDarkMode} />
                </section>

            </div>
        </div>
    )
}

export default Homepage