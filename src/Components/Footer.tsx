import '../App.css'
import { useFooterGlowStore } from '../States/FooterGlowState'

function Footer() {

    const triggerGlow = useFooterGlowStore((state) => state.triggerGlow)

    return (
      <>
          <div className={`bg-zinc-600/30 rounded-4xl mx-7 my-5 py-5 font-[Lexend] ${triggerGlow ? "animate-[breathing_2s_ease-in-out]": ""} shadow-[0px_10px_20px_rgba(0,0,0,0.8)]`}>
              <div className="gap-2 grid grid-cols-1 sm:grid-cols-2 text-white justify-items-center">
                  <div className="flex items-center space-x-3 md:ms-40 lg:ms-60 xl:ms-80 2xl:ms-100">
                      <span className="text-xl"><img src="/phone1.svg" alt="Phone" /></span>
                      <a href="tel:+5926746188">(592) 674-6188</a>
                  </div>
                  <div className="flex items-center space-x-3 md:me-40 lg:me-60 xl:me-80 2xl:me-100">
                      <span className="text-xl"><img src="/mail.svg" alt="Email" /></span>
                      <a href="mailto:jramdeholl1@gmail.com">jramdeholl1@gmail.com</a>
                  </div>
              </div>
              <div className='text-white place-self-center my-3'>
                  <div className='flex gap-9 sm:gap-12 2xl:gap-20 place-content-center place-items-center'>
                      <a href='https://github.com/CertainlyJoJo' target='_blank' className='h-auto w-1/12 sm:w-1/9'><img className='' src="/github-mark-white.svg" alt="Github Profile" /></a>
                      <a href='https://www.instagram.com/certainly.jojo/' target='_blank' className='h-auto w-1/10 sm:w-1/7'><img className='' src="/icons8-instagram.svg" alt="Instagram Profile" /></a>
                      <a href='https://www.linkedin.com/in/joseph-ramdeholl/' target='_blank' className='h-auto w-1/10 sm:w-1/7'><img className='' src="/linkedin.svg" alt="Linkedin Profile" /></a>
                  </div>
              </div>
              <div className='text-white text-xs opacity-40 place-self-center w-4/6 text-center mt-3 border-t pt-3 mx-auto'>
                  <p>Made by myself using React, Tailwind CSS and Framer Motion</p>
              </div>
          </div>
      </>
    )
}

export default Footer