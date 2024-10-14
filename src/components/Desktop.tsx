import sword from '../assets/images/sowrd.png'
import swordlight from '../assets/images/swordLight.png'
import { Link } from "react-router-dom"
import coding from '../assets/images/coding.png'
import Card from "../components/Card"

const Desktop = ({ isDarkMode }: { isDarkMode: boolean }) => {
    return (
        <div className="lg:flex hidden items-start justify-between gap-4 w-full xl:h-[22rem] h-auto ">

            <div className="w-1/4 relative group popup">
                <Card isDarkMode={isDarkMode} title="Tech Stack" destination="/techstack" description="what i use ?" />
                <Link to="/techstack"><img src={coding} className="w-[150px] absolute cursor-pointer top-[40%] left-[50%] opacity-75 group-hover:opacity-100 transition-all duration-500" style={{ transform: "translate(-50%, -60%)" }} alt="" />
                </Link>
            </div>

            <Link to="/contact" className={`w-2/4 xl:h-[18rem] lg:h-[16rem] ${isDarkMode ? "bg-[#131313] shadow-none " : "bg-white shadow-lg "} group cursor-pointer flex flex-col items-start justify-center gap-10 xl:text-5xl text-4xl font-semibold rounded-[2.5rem] px-6 relative popup`}>
                <img src={isDarkMode ? sword : swordlight} width={'50px'} alt="" />
                <div className="flex items-center justify-between w-full">
                    <h1>Let's <br /> work <span className="text-[#585198]">together.</span></h1>
                    <svg className={`absolute lg:bottom-5 bottom-2 right-5 cursor-pointer opacity-50 stroke-zinc-500 group-hover:opacity-100 
                                ${isDarkMode ? "group-hover:stroke-white" : "group-hover:stroke-blue-500"}  transition-all duration-500`} xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 46 42" fill="none">
                        <path className={`fill-zinc-500 stroke-zinc-500 ${isDarkMode ? "group-hover:stroke-white" : "group-hover:stroke-blue-500"} transition-all`} d="M30.9224 21.2014C25.1291 21.2014 24.618 24.7796 24.618 27.3354C24.618 21.5421 21.5509 21.2014 17.9727 21.2014C24.618 21.2014 24.618 17.2824 24.618 14.8969C24.618 20.3494 27.8554 21.2014 30.9224 21.2014Z" fill="#F4F4F4" stroke="#F4F4F4" />
                        <rect y="21.6981" width="0.999999" height="18" transform="rotate(-90 0 21.6981)" className={`stroke-zinc-500 ${isDarkMode ? "group-hover:stroke-white fill-zinc-500 " : "group-hover:stroke-blue-500 fill-blue-500 "} transition-all`} />
                        <path d="M9.93715 16.8555C10.9514 13.0701 13.2829 9.77074 16.5123 7.55063C19.7417 5.33052 23.6571 4.33531 27.5547 4.74394C31.4522 5.15258 35.0762 6.93825 37.7749 9.77989C40.4736 12.6215 42.07 16.3327 42.2771 20.2461C42.4842 24.1596 41.2884 28.0185 38.9047 31.1291C36.5211 34.2398 33.1059 36.398 29.2732 37.2157C25.4406 38.0335 21.4419 37.4571 17.9962 35.5903C14.5505 33.7234 11.8839 30.6886 10.4757 27.0314" stroke-width="1.5" stroke-linecap="round" />
                    </svg>
                </div>
            </Link>

            <div className="w-1/4 h-full relative group popup">
                <Card isDarkMode={isDarkMode} title="Profiles" destination="/contact" description="connect with me" />

                <div className={`absolute ${isDarkMode ? "bg-gradient-to-b from-[#212121] to-[#121212]" : "bg-none"}  flex items-center justify-between px-6 cursor-pointer top-[35%] left-[50%] w-[80%] xl:h-32 h-28 rounded-3xl group`} style={{ transform: "translate(-50%, -50%)" }}>

                    <div className={`${isDarkMode ? "bg-zinc-800" : " bg-whit shadow-lg"} rounded-full xl:p-5 p-3 social-div`}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={`${isDarkMode ? "text-white" : "text-blue-500"} xl:w-[44px] xl:h-[44px] w-[30px] h-[30px]`} fill="none">
                            <path d="M2 18.5C3.76504 19.521 5.81428 20 8 20C14.4808 20 19.7617 14.8625 19.9922 8.43797L22 4.5L18.6458 5C17.9407 4.37764 17.0144 4 16 4C13.4276 4 11.5007 6.51734 12.1209 8.98003C8.56784 9.20927 5.34867 7.0213 3.48693 4.10523C2.25147 8.30185 3.39629 13.3561 6.5 16.4705C6.5 17.647 3.5 18.3488 2 18.5Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
                        </svg>
                    </div>
                    <div className={`${isDarkMode ? "bg-zinc-800" : " bg-white shadow-lg"} rounded-full xl:p-5 p-3 social-div`}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={`${isDarkMode ? "text-white" : "text-blue-500"} xl:w-[44px] xl:h-[44px] w-[30px] h-[30px]`} fill="none">
                            <path d="M10 20.5675C6.57143 21.7248 3.71429 20.5675 2 17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M10 22V18.7579C10 18.1596 10.1839 17.6396 10.4804 17.1699C10.6838 16.8476 10.5445 16.3904 10.1771 16.2894C7.13394 15.4528 5 14.1077 5 9.64606C5 8.48611 5.38005 7.39556 6.04811 6.4464C6.21437 6.21018 6.29749 6.09208 6.31748 5.9851C6.33746 5.87813 6.30272 5.73852 6.23322 5.45932C5.95038 4.32292 5.96871 3.11619 6.39322 2.02823C6.39322 2.02823 7.27042 1.74242 9.26698 2.98969C9.72282 3.27447 9.95075 3.41686 10.1515 3.44871C10.3522 3.48056 10.6206 3.41384 11.1573 3.28041C11.8913 3.09795 12.6476 3 13.5 3C14.3524 3 15.1087 3.09795 15.8427 3.28041C16.3794 3.41384 16.6478 3.48056 16.8485 3.44871C17.0493 3.41686 17.2772 3.27447 17.733 2.98969C19.7296 1.74242 20.6068 2.02823 20.6068 2.02823C21.0313 3.11619 21.0496 4.32292 20.7668 5.45932C20.6973 5.73852 20.6625 5.87813 20.6825 5.9851C20.7025 6.09207 20.7856 6.21019 20.9519 6.4464C21.6199 7.39556 22 8.48611 22 9.64606C22 14.1077 19.8661 15.4528 16.8229 16.2894C16.4555 16.3904 16.3162 16.8476 16.5196 17.1699C16.8161 17.6396 17 18.1596 17 18.7579V22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Desktop