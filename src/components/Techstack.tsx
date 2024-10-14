import Navbar from "./Navbar"
import vscode from "../assets/images/vscode.png"
import brave from "../assets/images/brave.png"
import windows from "../assets/images/windows11.png"
import react from "../assets/images/react.png"
import html from "../assets/images/html.png"
import css from "../assets/images/css.png"
import tailwind from "../assets/images/tailwind.png"
import vercel from "../assets/images/vercel.png"
import github from "../assets/images/github.png"
import node from "../assets/images/node.png"
import prisma from "../assets/images/prisma.png"
import express from "../assets/images/express.png"
import mongodb from "../assets/images/mongodb.png"
import javascript from "../assets/images/javascript.png"
import typescript from "../assets/images/typescript.png"
import { useEffect, useRef } from "react"
import gsap from "gsap"

const Techstack = ({ isDarkMode, toggleDarkMode }: { isDarkMode: boolean, toggleDarkMode: () => void }) => {

    const tools = [
        { name: "VSCode", icon: vscode },
        { name: "Brave", icon: brave },
        { name: "Windows 11", icon: windows },
        { name: "HTML", icon: html },
        { name: "CSS", icon: css },
        { name: "Javascript", icon: javascript },
        { name: "Typescript", icon: typescript },
        { name: "Tailwind", icon: tailwind },
        { name: "React", icon: react },
        { name: "Node", icon: node },
        { name: "Express", icon: express },
        { name: "MongoDB", icon: mongodb },
        { name: "Prisma", icon: prisma },
        { name: "Github", icon: github },
        { name: "Vercel", icon: vercel },

    ]


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
        <div className={`${isDarkMode ? "bg-[#0f0f0f] text-white" : " bg-[#f7f9fc] text-black"} h-auto w-full overflow-hidden pb-12 flex flex-col items-center justify-start px-4`}>

            {/* Animation Div  */}
            <div
                className={`${isDarkMode ? "bg-[#131313]" : "bg-white"}`}
                ref={curtainRef}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 1000,
                }}
            ></div>

            <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

            <div className="flex flex-col items-start justify-start gap-12 xl:w-[75rem] w-[90%] h-full md:pt-[12rem] pt-[8rem] ">
                <div className="flex flex-col items-start gap-4 md:pb-6">
                    <h1 className={`font-semibold md:text-5xl text-3xl`}>Techstack & Tools</h1>
                    <p className="md:text-[1rem] text-xs text-zinc-400">Though the list is always changing. Here are the tools I use on day-to-day basis.</p>
                </div>

                <div className="flex flex-col items-start gap-4">
                    <h1 className={`font-semibold md:text-4xl text-2xl ${isDarkMode ? " text-zinc-100" : "text-black"}`}>System</h1>

                    <div className="flex items-center gap-4 flex-wrap">

                        {tools.slice(0, 3).map((item, idx) => {
                            return (
                                <div key={idx} className={`flex flex-col items-center justify-center md:gap-5 gap-2 ${isDarkMode ? "bg-zinc-900 shadow-none" : "bg-white shadow-lg"} md:w-36 md:h-32 w-24 h-20 cursor-pointer hover:scale-105 transition-all rounded-xl`}>
                                    <img className={`${isDarkMode ? "grayscale-[100]" : "grayscale-[50%]"}  md:w-[50px] w-[30px]`} src={item.icon} alt="" />
                                    <p className="text-xs text-zinc-400">{item.name}</p>
                                </div>
                            )
                        })}

                    </div>

                </div>

                <div className="flex flex-col items-start gap-4">
                    <h1 className={`font-semibold md:text-4xl text-2xl ${isDarkMode ? " text-zinc-100" : "text-black"}`}>Techstack</h1>

                    <div className="flex items-center justify-start gap-4 md:max-w-[50rem] flex-wrap">

                        {tools.slice(3, 13).map((item, idx) => {
                            return (
                                <div key={idx} className={`flex flex-col items-center justify-center md:gap-5 gap-2 ${isDarkMode ? "bg-zinc-900 shadow-none" : "bg-white shadow-lg"} md:w-36 md:h-32 w-24 h-20 cursor-pointer hover:scale-105 transition-all rounded-xl`}>
                                    <img className={`${isDarkMode ? "grayscale-[100]" : "grayscale-[50%]"}  md:w-[50px] w-[30px]`} src={item.icon} alt="" />
                                    <p className="text-xs text-zinc-400">{item.name}</p>
                                </div>
                            )
                        })}

                    </div>

                </div>

                <div className="flex flex-col items-start gap-4">
                    <h1 className={`font-semibold md:text-4xl text-2xl ${isDarkMode ? " text-zinc-100" : "text-black"}`}>Others</h1>

                    <div className="flex items-center justify-start gap-4 max-w-[50rem] flex-wrap">

                        {tools.slice(13, 16).map((item, idx) => {
                            return (
                                <div key={idx} className={`flex flex-col items-center justify-center md:gap-5 gap-2 ${isDarkMode ? "bg-zinc-900 shadow-none" : "bg-white shadow-lg"} md:w-36 md:h-32 w-24 h-20 cursor-pointer hover:scale-105 transition-all rounded-xl`}>
                                    <img className={`${isDarkMode ? "grayscale-[100]" : "grayscale-[50%]"}  md:w-[50px] w-[30px]`} src={item.icon} alt="" />
                                    <p className="text-xs text-zinc-400">{item.name}</p>
                                </div>
                            )
                        })}

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Techstack