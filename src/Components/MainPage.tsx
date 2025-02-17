import "../App.css"
import {motion} from "framer-motion"
import { Link } from "react-router-dom"
import { useEffect } from "react"
import { useFooterGlowStore } from "../States/FooterGlowState";

const projectImages: string[] = [
    "/Project Images/Projects Files/SantaAd.jpeg",
    "/Project Images/Projects Files/FuelCleaner-AD.jpg",
    "/Project Images/Projects Files/IphoneAd.jpg",
    "/Project Images/Projects Files/Galaxy-A55-5G Poster.jpg",
    "/Project Images/Projects Files/SummerPrintPoster.jpeg",
    "/Project Images/Projects Files/s22ad.jpg",
  ];

const preloadImages = (images:string[]): void => {
    images.forEach((src) =>{
        const img = new Image()
        img.src = src
    })
}

function MainPage() {

    const setGlow = useFooterGlowStore((state) => state.setGlow)

    useEffect(() =>{
        preloadImages(projectImages)
    }, [])

    const scrollToBottom = () => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth"
        })
        setGlow()
    }

    return(
        <>
            <div className=" bg-[radial-gradient(circle,_rgba(18,76,85,0.6)_0%,_rgba(203,69,84,0.1)_100%)] flex justify-between h-120 xl:h-130 2xl:h-150 ms-6 me-6 mt-3 rounded-4xl animate-[mainGlow_4s_ease-in-out_infinite] overflow-hidden z-[-10]">
                <div className="flex-col ms-5 mt-5 2xl:ms-50 text-white font-[Lexend]">
                    <div className="pt-5">
                        <motion.p 
                            initial={{opacity:0, x:-100}}
                            animate={{opacity:1, x:0}}
                            transition={{duration: 0.75, ease: "easeOut", delay:0.2}}
                            className="text-xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                            Hello, <span className="bg-linear-to-b from-[#af2f2f] via-[#9946bc] to-[#914eef] bg-clip-text text-transparent ">I'm Joseph</span>.<br/>
                            A Junior Graphics Designer<br/>
                            from Guyana.
                        </motion.p>
                    </div>
                    <div className="mt-5 text-base sm:text-2xl w-auto sm:w-auto md:w-auto lg:w-xl">
                        <motion.p 
                            initial={{opacity:0}}
                            animate={{opacity:1}}
                            transition={{duration: 2, ease:"easeOut", delay:0.6}}
                            className="text-sm">
                            Having worked on a couple of my own projects for a few years, along with some graphics design work for a few companies, 
                            I have built up a wide knowledge of Figma and the Adobe Suite.
                        </motion.p>
                    </div>
                    <div>
                        <div className="flex mt-10 w-45 sm:w-52 justify-between text-sm sm:text-base">
                            <Link to={'my-projects'}>
                                <motion.p
                                    initial={{opacity:0, y:50}}
                                    animate={{opacity:1, y:0}}
                                    transition={{duration:0.7, ease:'easeOut', delay:0.5}}
                                    className="text-white bg-blue-800 border rounded-xl p-2 hover:scale-105 hover:shadow-[0px_10px_20px_rgba(0,0,0,0.8)]">My Work
                                </motion.p>
                            </Link>

                            <a 
                                onClick={scrollToBottom}
                                className="cursor-pointer">
                                <motion.button
                                    initial={{opacity:0, y:50}}
                                    animate={{opacity:1, y:0}}
                                    transition={{duration:0.7, ease:'easeOut', delay:0.7}}
                                    className="border border-white rounded-xl p-2 hover:scale-105 hover:shadow-[0px_10px_20px_rgba(0,0,0,0.8)]">Contact Me
                                </motion.button>
                            </a>
                        </div>
                    </div>
                </div>

                <motion.img
                    initial={{opacity:0, x:100}}
                    animate={{opacity:0.70, x:0}}
                    transition={{duration:0.80, ease:"easeOut", delay:0.4}}
                    className=" rounded-4xl w-4/12 sm:w-3/12 h-4/6 sm:h-5/6 mt-5 mb-5 ms-5 me-5 2xl:me-50 shadow-[-15px_15px_20px_rgba(0,0,0)] object-cover" src="/Grad.jpg" alt="Graduaton Pic"
                />

            </div>
            
        </>
    )

}

export default MainPage