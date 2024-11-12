import Navbar from "./Navbar"
import { useEffect, useRef } from "react";
import gsap from "gsap"
import sword from "../assets/images/sowrd.png"
import swordlight from "../assets/images/swordLight.png"

const Contact = ({ isDarkMode, toggleDarkMode }: { isDarkMode: boolean, toggleDarkMode: () => void }) => {

    const contactInfo = [
        {
            title: "mail me",
            data: "highsabin987@gmail.com",
            svg: <svg xmlns="http://www.w3.org/2000/svg" className={`${isDarkMode ? "text-white" : "text-black"}`} viewBox="0 0 24 24" width="34" height="34" fill="none">
                <path d="M2 6L8.91302 9.91697C11.4616 11.361 12.5384 11.361 15.087 9.91697L22 6" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
                <path d="M2.01577 13.4756C2.08114 16.5412 2.11383 18.0739 3.24496 19.2094C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634C11.0393 20.5122 12.9607 20.5122 14.9012 20.4634C18.0497 20.3843 19.6239 20.3448 20.7551 19.2094C21.8862 18.0739 21.9189 16.5412 21.9842 13.4756C22.0053 12.4899 22.0053 11.5101 21.9842 10.5244C21.9189 7.45886 21.8862 5.92609 20.7551 4.79066C19.6239 3.65523 18.0497 3.61568 14.9012 3.53657C12.9607 3.48781 11.0393 3.48781 9.09882 3.53656C5.95033 3.61566 4.37608 3.65521 3.24495 4.79065C2.11382 5.92608 2.08114 7.45885 2.01576 10.5244C1.99474 11.5101 1.99475 12.4899 2.01577 13.4756Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
            </svg>
        },
        {
            title: "contact me",
            data: "+977 9709778018",
            svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="34" height="34" fill="none">
                <path d="M9.1585 5.71223L8.75584 4.80625C8.49256 4.21388 8.36092 3.91768 8.16405 3.69101C7.91732 3.40694 7.59571 3.19794 7.23592 3.08785C6.94883 3 6.6247 3 5.97645 3C5.02815 3 4.554 3 4.15597 3.18229C3.68711 3.39702 3.26368 3.86328 3.09497 4.3506C2.95175 4.76429 2.99278 5.18943 3.07482 6.0397C3.94815 15.0902 8.91006 20.0521 17.9605 20.9254C18.8108 21.0075 19.236 21.0485 19.6496 20.9053C20.137 20.7366 20.6032 20.3131 20.818 19.8443C21.0002 19.4462 21.0002 18.9721 21.0002 18.0238C21.0002 17.3755 21.0002 17.0514 20.9124 16.7643C20.8023 16.4045 20.5933 16.0829 20.3092 15.8362C20.0826 15.6393 19.7864 15.5077 19.194 15.2444L18.288 14.8417C17.6465 14.5566 17.3257 14.4141 16.9998 14.3831C16.6878 14.3534 16.3733 14.3972 16.0813 14.5109C15.7762 14.6297 15.5066 14.8544 14.9672 15.3038C14.4304 15.7512 14.162 15.9749 13.834 16.0947C13.5432 16.2009 13.1588 16.2403 12.8526 16.1951C12.5071 16.1442 12.2426 16.0029 11.7135 15.7201C10.0675 14.8405 9.15977 13.9328 8.28011 12.2867C7.99738 11.7577 7.85602 11.4931 7.80511 11.1477C7.75998 10.8414 7.79932 10.457 7.90554 10.1663C8.02536 9.83828 8.24905 9.56986 8.69643 9.033C9.14586 8.49368 9.37058 8.22402 9.48939 7.91891C9.60309 7.62694 9.64686 7.3124 9.61719 7.00048C9.58618 6.67452 9.44362 6.35376 9.1585 5.71223Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
            </svg>
        },
        {
            title: "location",
            data: "Kathmandu, Nepal",
            svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="34" height="34" fill="none">
                <path d="M13.6177 21.367C13.1841 21.773 12.6044 22 12.0011 22C11.3978 22 10.8182 21.773 10.3845 21.367C6.41302 17.626 1.09076 13.4469 3.68627 7.37966C5.08963 4.09916 8.45834 2 12.0011 2C15.5439 2 18.9126 4.09916 20.316 7.37966C22.9082 13.4393 17.599 17.6389 13.6177 21.367Z" stroke="currentColor" stroke-width="1.5" />
                <path d="M15.5 11C15.5 12.933 13.933 14.5 12 14.5C10.067 14.5 8.5 12.933 8.5 11C8.5 9.067 10.067 7.5 12 7.5C13.933 7.5 15.5 9.067 15.5 11Z" stroke="currentColor" stroke-width="1.5" />
            </svg>
        }

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

            <div className="flex items-start md:flex-row flex-col md:gap-0 gap-12 justify-between xl:px-6 px-0 xl:w-[75rem] w-[90%] h-full md:pt-[12rem] pt-[8rem]">
                <div className="flex flex-col items-start gap-9">
                    <h1 className="uppercase text-[1rem] font-semibold popup">contact info</h1>
                    {contactInfo.map((item, idx) => {
                        return (
                            <div key={idx} className="flex items-center justify-start gap-4 popup">
                                <div className={`p-6 ${isDarkMode ? "bg-zinc-900" : "bg-white shadow-sm"} rounded-xl cursor-pointer`}>
                                    {item.svg}
                                </div>
                                <div className="flex flex-col items-start">
                                    <h1 className="uppercase text-[1rem] text-zinc-500">{item.title}</h1>
                                    <a href="#" className="lg:text-[1rem] text-xs">{item.data}</a>
                                </div>
                            </div>
                        )
                    })}

                    <h1 className="uppercase text-[1rem] font-semibold pt-6 popup">social info</h1>
                    <div className="flex items-center gap-6 popup">
                        <div className={`${isDarkMode ? "bg-zinc-800" : " bg-white shadow-sm"} cursor-pointer rounded-full xl:p-5 p-3 social-div`}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={`${isDarkMode ? "text-white" : "text-blue-500"} xl:w-[44px] xl:h-[44px] w-[30px] h-[30px]`} fill="none">
                                <path d="M2 18.5C3.76504 19.521 5.81428 20 8 20C14.4808 20 19.7617 14.8625 19.9922 8.43797L22 4.5L18.6458 5C17.9407 4.37764 17.0144 4 16 4C13.4276 4 11.5007 6.51734 12.1209 8.98003C8.56784 9.20927 5.34867 7.0213 3.48693 4.10523C2.25147 8.30185 3.39629 13.3561 6.5 16.4705C6.5 17.647 3.5 18.3488 2 18.5Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <div className={`${isDarkMode ? "bg-zinc-800" : " bg-white shadow-sm"} rounded-full xl:p-5 p-3 social-div cursor-pointer`}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={`${isDarkMode ? "text-white" : "text-blue-500"} xl:w-[44px] xl:h-[44px] w-[30px] h-[30px]`} fill="none">
                                <path d="M10 20.5675C6.57143 21.7248 3.71429 20.5675 2 17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M10 22V18.7579C10 18.1596 10.1839 17.6396 10.4804 17.1699C10.6838 16.8476 10.5445 16.3904 10.1771 16.2894C7.13394 15.4528 5 14.1077 5 9.64606C5 8.48611 5.38005 7.39556 6.04811 6.4464C6.21437 6.21018 6.29749 6.09208 6.31748 5.9851C6.33746 5.87813 6.30272 5.73852 6.23322 5.45932C5.95038 4.32292 5.96871 3.11619 6.39322 2.02823C6.39322 2.02823 7.27042 1.74242 9.26698 2.98969C9.72282 3.27447 9.95075 3.41686 10.1515 3.44871C10.3522 3.48056 10.6206 3.41384 11.1573 3.28041C11.8913 3.09795 12.6476 3 13.5 3C14.3524 3 15.1087 3.09795 15.8427 3.28041C16.3794 3.41384 16.6478 3.48056 16.8485 3.44871C17.0493 3.41686 17.2772 3.27447 17.733 2.98969C19.7296 1.74242 20.6068 2.02823 20.6068 2.02823C21.0313 3.11619 21.0496 4.32292 20.7668 5.45932C20.6973 5.73852 20.6625 5.87813 20.6825 5.9851C20.7025 6.09207 20.7856 6.21019 20.9519 6.4464C21.6199 7.39556 22 8.48611 22 9.64606C22 14.1077 19.8661 15.4528 16.8229 16.2894C16.4555 16.3904 16.3162 16.8476 16.5196 17.1699C16.8161 17.6396 17 18.1596 17 18.7579V22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <div className={`${isDarkMode ? "bg-zinc-800" : " bg-white shadow-sm"} rounded-full xl:p-5 p-3 social-div cursor-pointer`}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={`${isDarkMode ? "text-white" : "text-blue-500"} xl:w-[44px] xl:h-[44px] w-[30px] h-[30px]`} fill="none">
                                <path d="M7 10V17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M11 13V17M11 13C11 11.3431 12.3431 10 14 10C15.6569 10 17 11.3431 17 13V17M11 13V10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M7.00801 7L6.99902 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
                            </svg>
                        </div>
                    </div>
                </div>

                <div className={`${isDarkMode ? "bg-gradient-to-br" : "bg-white shadow-sm"} popup flex flex-col items-start justify-evenly md:gap-6 lg:w-[40rem] md:w-[30rem] w-full rounded-3xl px-6  from-[#202020] to-[#111111] md:h-[37rem] h-[32rem]`}>

                    <div className="flex items-center justify-between w-full">
                        <h1 className="font-bold lg:text-5xl sm:text-3xl text-2xl">Want a<span className="text-[#585198]"> website ?</span> <br />Give me a call<span className="text-[#585198]">.</span></h1>
                        <img src={isDarkMode ? sword : swordlight} className="lg:w-[40px] w-[30px]" alt="" />
                    </div>

                    <form className="flex flex-col items-start justify-center w-full gap-5">
                        <input type="text" name="name" placeholder="Your Name *" className={`w-full h-14 rounded-xl p-4 text-xs  from-[#262626] to-[#161616] ${isDarkMode ? "bg-gradient-to-r" : "bg-[#f7f9fc]"} outline-none`} />
                        <input type="email" name="email" placeholder="Your Email *" className={`w-full h-14 rounded-xl p-4 text-xs  from-[#262626] to-[#161616] ${isDarkMode ? "bg-gradient-to-r" : "bg-[#f7f9fc]"} outline-none`} />
                        <textarea placeholder="Your Message *" className={`w-full h-32 rounded-xl p-4 text-xs  from-[#262626] to-[#161616] ${isDarkMode ? "bg-gradient-to-r" : "bg-[#f7f9fc]"} outline-none`} name="message" style={{ resize: "none" }}></textarea>
                        <button type="submit" className={`w-full flex items-center justify-center h-14 text-white ${isDarkMode ? "hover:bg-white hover:text-black" : " hover:bg-blue-500"}  text-xs transition-all bg-zinc-800 rounded-xl duration-500`}>Send Message</button>
                    </form>
                </div>
            </div>
        </div >
    )
}

export default Contact