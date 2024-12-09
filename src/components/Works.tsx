import Navbar from "./Navbar"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import star from "../assets/images/star.png"
import bluestar from "../assets/images/star-blue.png"

const Works = ({ isDarkMode, toggleDarkMode }: { isDarkMode: boolean, toggleDarkMode: () => void }) => {

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

  const projects = [
    { name: "Sabin UI", sourceCode: "https://github.com/maybesabin/SabinUI", livePreview: "https://sabinui.vercel.app/" },
    { name: "SaaS Website", sourceCode: "https://github.com/maybesabin/SwiftOps", livePreview: "https://swiftops.vercel.app/" },
    { name: "E-Commerce Website", sourceCode: "https://github.com/maybesabin/Trendora-Ecommerce", livePreview: "https://trendora-shop.vercel.app/" },
    { name: "Crypto Website", sourceCode: "https://github.com/maybesabin/Crypto-Website", livePreview: "https://crypto-website-sabin.vercel.app/" },
    { name: "School Website", sourceCode: "https://github.com/maybesabin/Apple-Academy", livePreview: "https://apple-academy-iota.vercel.app/" },
    { name: "Product Landing Page", sourceCode: "https://github.com/maybesabin/Product-Landing-Page", livePreview: "https://product-landing-page-sabin.vercel.app/" },
    { name: "Old Portfolio", sourceCode: "https://github.com/maybesabin/Old-Portfolio", livePreview: "https://codersabin.netlify.app/" }
  ]

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

      <div className="flex flex-col items-start justify-start gap-12 xl:w-[75rem] w-[90%] h-full md:pt-[10rem] pt-[8rem]">

        <div className="flex flex-col md:items-start items-center justify-start popup h-full gap-4 w-full pb-9">
          <div className="flex items-center justify-center md:gap-9 gap-4">
            <img src={isDarkMode ? star : bluestar} className="xl:w-[70px] md:w-[50px] w-[30px]" alt="" />
            <h1 className="font-semibold uppercase xl:text-7xl md:text-5xl text-3xl">all-projects</h1>
            <img src={isDarkMode ? star : bluestar} className="xl:w-[70px] md:w-[50px] w-[30px]" alt="" />
          </div>
          <p className="text-zinc-600 text-xs md:w-1/2 w-full md:text-left text-center">I love creating visually stunning & responsive websites using latest cutting edge technologies. Here are some of my projects that I've worked upon. 👇</p>
        </div>

        <ul className="grid md:gap-24 gap-12 items-start grid-cols-1 md:grid-cols-2">

          {projects.map((item, idx) => {
            return (
              <li key={idx} className="popup font-semibold md:text-3xl text-2xl flex flex-col items-start justify-center gap-1">
                <div className="flex items-center justify-start gap-4">
                  <h1>{item.name}</h1>
                  <a href={item.sourceCode} target="_blank" className="cursor-pointer opacity-50 hover:opacity-100 transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none">
                      <path d="M16 10L17.2265 11.0572C17.7422 11.5016 18 11.7239 18 12C18 12.2761 17.7422 12.4984 17.2265 12.9428L16 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M8 10L6.77346 11.0572C6.25782 11.5016 6 11.7239 6 12C6 12.2761 6.25782 12.4984 6.77346 12.9428L8 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M13 9L11 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  </a>
                </div>
                <div className="flex items-end justify-start">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none">
                    <path d="M13 13L6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M15.541 17.9172L14.2992 17.8043C12.2873 17.6214 11.2814 17.53 11.0447 16.8761C10.8079 16.2223 11.5222 15.508 12.9507 14.0795L14.0795 12.9507C15.508 11.5222 16.2223 10.8079 16.8761 11.0447C17.53 11.2814 17.6214 12.2873 17.8043 14.2992L17.9172 15.541C18.0273 16.7523 18.0824 17.358 17.7202 17.7202C17.358 18.0824 16.7523 18.0273 15.541 17.9172Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <a href={item.livePreview} target="_blank" className="text-xs text-blue-500 hover:underline ml-2">{item.livePreview}</a>
                </div>
              </li>
            )
          })}

        </ul>

      </div>
    </div>
  )
}

export default Works