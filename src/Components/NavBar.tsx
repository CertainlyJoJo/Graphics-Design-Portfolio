import { useState } from "react"
import "../App.css"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "react-router-dom"
import { useFooterGlowStore } from "../States/FooterGlowState"

function NavBar() {

  const setGlow = useFooterGlowStore((state) => state.setGlow)
  const [isActive, setIsActive] = useState(false)

  const scrollToBottom = () => {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
    })
    setGlow()
  }

  return (
    <>
        <div className="font-[Lexend]">
            <nav className="flex justify-between p-3 text-white mt-1">
              <h1 className="flex text-2xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl items-center ms-3"><Link to={'/'}>Graphics Design Portfolio</Link></h1>
              <ul className="hidden sm:flex items-center justify-between sm:w-5/12 md:w-4/12 lg:w-3/10 xl:w-2/10 2xl:w-2/12 me-3">
                  <li className="hover:scale-105"><Link to={'/'}>Home</Link></li>
                  <li className="hover:scale-105"><Link to={'my-projects'}>Projects</Link></li>
                  <li onClick={scrollToBottom}><button className="cursor-pointer p-1.5 rounded-xl text-black bg-white hover:text-white hover:bg-transparent border border-transparent hover:border-white">Contact Me</button></li>
              </ul>
              <button 
                onClick={() => setIsActive(!isActive)} 
                className="block sm:hidden border border-transparent hover:border-white rounded-full p-1"><img src="/Project Images/NavBar Items/menu.svg" alt="Menu" />
              </button>
            </nav>

            <div className="flex justify-end pe-3 z-10">
              <AnimatePresence>
                {isActive && (
                  <motion.ul
                    initial={{opacity:0, x:150}}
                    animate={{opacity:1, x:0}}
                    exit={{opacity:0, x:150}}
                    className={`bg-black/75 text-white text-center ${isActive ? "fixed" : "hidden"} sm:hidden p-5 z-50`}>
                    <li onClick={() => setIsActive(false)} className="hover:scale-105"><Link to={'/'}>Home</Link></li>
                    <li onClick={() => setIsActive(false)} className="hover:scale-105"><Link to={'my-projects'}>Projects</Link></li>
                    <li onClick={() => {scrollToBottom(); setIsActive(false)}} className="hover:scale-105"><a className="cursor-pointer">Contact Me</a></li>
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
        </div>
    </>
  )
}

export default NavBar