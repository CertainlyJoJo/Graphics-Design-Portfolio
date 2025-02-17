import { useEffect } from "react";
import "../App.css";
import {motion} from 'framer-motion'

const projectData = [
  { img: "SantaAd.jpeg", alt: "Santa Ad", title: "Meet & Greet Santa Ad", animation: {y: -100} },
  { img: "FuelCleaner-AD.jpg", alt: "Fuel Cleaner Ad", title: "Motorcycle Fuel Cleaner Ad", animation: {y: -100} },
  { img: "IphoneAd.jpg", alt: "iPhone 12 Ad", title: "iPhone 12 Ad", animation: {y: -100} },
  { img: "Galaxy-A55-5G Poster.jpg", alt: "A55-5G Ad", title: "Samsung Galaxy A55-5G Ad", animation: {y: -100} },
  { img: "SummerPrintPoster.jpeg", alt: "Summer Prints Ad", title: "Summer Photos Print Service Ad", animation: {y: -100} },
  { img: "s22ad.jpg", alt: "S22 Ad", title: "Samsung Galaxy S22 Ad", animation: {y: -100} },
];

function Projects() {

  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }

  useEffect(() =>{
    window.scrollTo(0,0)
  }, [])

  return (
    <>
      <div className="bg-[radial-gradient(circle,_rgba(18,76,85,0.6)_0%,_rgba(203,69,84,0.1)_100%)] pb-6 sm:pb-3 ms-6 me-6 mt-3 mb-5 rounded-4xl animate-[mainGlow_4s_ease-in-out_infinite] font-[Lexend] overflow-hidden">
        <motion.h1 

          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{duration:0.75, ease: "easeOut", delay: 0.2}}
          className="text-white text-lg sm:text-2xl 2xl:text-4xl text-center pt-6 px-2 mb-7">
          These are some designs I created for a few businesses...
        </motion.h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 justify-items-center gap-y-10">
          {projectData.map((project, index) =>(
            <motion.div
              key={index}
              initial={{opacity:0, ...project.animation}}
              animate={{opacity:1, x:0, y:0}}
              transition={{duration:0.75, ease: "easeOut", delay: index * 0.2}}
              className="h-fit w-10/12 sm:w-5/6 border-2 p-2 text-white shadow-[0px_10px_20px_rgba(0,0,0,0.8)]"
            >
              <img src={`/Project Images/Projects Files/${project.img}`} alt={project.alt} />
              <span className="text-white justify-center border-t mt-2 flex">{project.title}</span>
            </motion.div>
          ))}
        </div>

      </div>
        
    </>
  );
}

export default Projects;
