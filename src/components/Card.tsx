import { Link } from "react-router-dom"

const Card = ({ description, title, destination, isDarkMode }: { description: string, title: string, destination: string, isDarkMode: boolean }) => {
    return (
        <Link to={destination} className={`relative group cursor-pointer w-full xl:h-72 h-64 flex flex-col items-start justify-end p-6 rounded-[2.5rem]
        ${isDarkMode ? "bg-[#1a1a1a] bg-gradient-to-br from-[#1f1f1f] to-[#111111] shadow-none" : "bg-white shadow-lg" }
          `}>
            <p className="uppercase text-[0.8rem] text-zinc-400">{description}</p>

            <div className="flex items-center justify-between w-full">
                <h1 className="font-semibold xl:text-2xl text-xl">{title}</h1>
                <svg className={`absolute lg:bottom-5 bottom-2 right-5 cursor-pointer opacity-50 stroke-zinc-500 group-hover:opacity-100 
                                ${isDarkMode ? "group-hover:stroke-white" : "group-hover:stroke-blue-500"}  transition-all duration-500`} xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 46 42" fill="none">
                    <path className={`fill-zinc-500 stroke-zinc-500 ${isDarkMode ? "group-hover:stroke-white" : "group-hover:stroke-blue-500"} transition-all`} d="M30.9224 21.2014C25.1291 21.2014 24.618 24.7796 24.618 27.3354C24.618 21.5421 21.5509 21.2014 17.9727 21.2014C24.618 21.2014 24.618 17.2824 24.618 14.8969C24.618 20.3494 27.8554 21.2014 30.9224 21.2014Z" fill="#F4F4F4" stroke="#F4F4F4" />
                    <rect y="21.6981" width="0.999999" height="18" transform="rotate(-90 0 21.6981)" className={`stroke-zinc-500 ${isDarkMode ? "group-hover:stroke-white fill-zinc-500 " : "group-hover:stroke-blue-500 fill-blue-500 "} transition-all`} />
                    <path d="M9.93715 16.8555C10.9514 13.0701 13.2829 9.77074 16.5123 7.55063C19.7417 5.33052 23.6571 4.33531 27.5547 4.74394C31.4522 5.15258 35.0762 6.93825 37.7749 9.77989C40.4736 12.6215 42.07 16.3327 42.2771 20.2461C42.4842 24.1596 41.2884 28.0185 38.9047 31.1291C36.5211 34.2398 33.1059 36.398 29.2732 37.2157C25.4406 38.0335 21.4419 37.4571 17.9962 35.5903C14.5505 33.7234 11.8839 30.6886 10.4757 27.0314" stroke-width="1.5" stroke-linecap="round" />
                </svg>
            </div>
        </Link>
    )
}

export default Card