import '../App.css'

function Footer() {
  return (
    <>
        <div className=" bg-[#494949]/15 rounded-4xl mx-5 my-5 py-5 shadow-[0px_10px_20px_rgba(0,0,0,0.8)] font-[Lexend]">
            <div className="gap-2 grid grid-cols-1 sm:grid-cols-2 text-white justify-items-center">
                <div className="flex items-center space-x-3 sm:ms-40 lg:ms-60 xl:ms-80 2xl:ms-100">
                    <span className="text-xl">📞</span>
                    <a href="tel:+5926746188">(592) 674-6188</a>
                </div>
                <div className="flex items-center space-x-3 sm:me-40 lg:me-60 xl:me-80 2xl:me-100">
                    <span className="text-xl">✉️</span>
                    <a href="mailto:jramdeholl1@gmail.com">jramdeholl1@gmail.com</a>
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