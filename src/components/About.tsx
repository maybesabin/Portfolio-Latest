import Navbar from "./Navbar"
import wave from "../assets/images/wave.png"
import star from "../assets/images/star.png"
import bluestar from "../assets/images/star-blue.png"
import sword from "../assets/images/sowrd.png"
import { useEffect, useRef } from "react"
import gsap from "gsap"

const About = ({ isDarkMode, toggleDarkMode }: { isDarkMode: boolean, toggleDarkMode: () => void }) => {

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

      <div className="flex flex-col items-start justify-start gap-6 xl:w-[75rem] w-[90%] h-full pt-[8rem]">

        <div className="flex items-center lg:flex-row flex-col justify-between gap-6 w-full lg:h-[22rem]">

          <img src={wave} className="xl:w-[280px] w-[200px] popup" alt="" />

          <div className="flex flex-col items-center justify-start h-full gap-4 lg:w-[65%] w-full">
            <div className="flex items-center justify-center md:gap-9 gap-4 popup">
              <img src={isDarkMode ? star : bluestar} className="xl:w-[70px] md:w-[50px] w-[30px]" alt="" />
              <h1 className="font-semibold uppercase xl:text-7xl md:text-5xl text-3xl">Self-Summary</h1>
              <img src={isDarkMode ? star : bluestar} className="xl:w-[70px] md:w-[50px] w-[30px]" alt="" />
            </div>

            <div className={`${isDarkMode ? "bg-gradient-to-br from-[#212121] to-[#121212]" : "bg-white shadow-lg"} px-6 flex flex-col items-start gap-6 lg:h-full h-auto lg:pb-0 pb-6 rounded-3xl popup`}>
              <img src={sword} width={'40px'} alt="" />
              <div className="flex flex-col items-start gap-6">
                <h1 className={`${isDarkMode ? "text-white" : "text-black"} md:text-5xl text-3xl font-semibold`}>Sabin Hamal</h1>
                <p className="md:text-[1rem] text-xs text-gray-400 md:leading-5">A front-end developer based in Kathmandu, Nepal. I specialize in modern frameworks like React and TypeScript. I love bringing ideas to life through clean, efficient code, and I'm always eager to take on new challenges!</p>
              </div>
            </div>
          </div>

        </div>

        <div className="flex items-center md:flex-row flex-col justify-between w-full gap-6 lg:h-[22rem]">

          <div className={`${isDarkMode ? "bg-gradient-to-br from-[#212121] to-[#121212]" : "bg-white shadow-lg"} p-6 flex flex-col items-start lg:justify-between justify-center lg:gap-0 gap-7 h-full md:w-1/2 w-full rounded-3xl popup`}>
            <h1 className="uppercase lg:text-xl text-[1rem] font-bold">Experience</h1>
            <div className="flex flex-col gap-3 items-start">
              <p className="text-zinc-400 lg:text-[1rem] text-xs">2024-Now</p>
              <h1 className={`lg:text-xl ${isDarkMode ? "text-white" : "text-blue-500"}`}>Back End Development</h1>
              <h3 className="text-zinc-400 lg:text-[1rem] text-xs">Self Learned</h3>
            </div>
            <div className="flex flex-col gap-3 items-start">
              <p className="text-zinc-400 lg:text-[1rem] text-xs">2022-2024</p>
              <h1 className={`text-xl ${isDarkMode ? "text-white" : "text-blue-500"}`}>Front End Development</h1>
              <h3 className="text-zinc-400 lg:text-[1rem] text-xs">Self Learned</h3>
            </div>
          </div>

          <div className={`${isDarkMode ? "bg-gradient-to-br from-[#212121] to-[#121212]" : "bg-white shadow-lg"} p-6 flex flex-col items-start lg:justify-between justify-center lg:gap-0 gap-7 h-full md:w-1/2 w-full rounded-3xl popup`}>
            <h1 className="uppercase lg:text-xl text-[1rem] font-bold">Education</h1>
            <div className="flex flex-col gap-3 items-start">
              <p className="text-zinc-400 lg:text-[1rem] text-xs">2024-Ongoing</p>
              <h1 className={`lg:text-xl ${isDarkMode ? "text-white" : "text-blue-500"}`}>Bachelors in Computer Science</h1>
              <h3 className="text-zinc-400 lg:text-[1rem] text-xs">Himalaya College of Engineering</h3>
            </div>
            <div className="flex flex-col gap-3 items-start">
              <p className="text-zinc-400 lg:text-[1rem] text-xs">2022-2024</p>
              <h1 className={`text-xl ${isDarkMode ? "text-white" : "text-blue-500"}`}>SLC</h1>
              <h3 className="text-zinc-400 lg:text-[1rem] text-xs">Gurukul Academy</h3>
            </div>
          </div>

        </div>

      </div>
    </div >
  )
}

export default About