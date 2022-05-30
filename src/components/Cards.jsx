import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
const Cards = ({url, title, desc , source ,author,urlsource})=>{



    return(
        <AnimatePresence>

        <motion.div className="h-[80%] relative shrink-0   mt-10 snap-center text-slate-400 w-5/6 mx-auto drop-shadow-2xl  pb-0 bg-gradient-to-b from-zinc-800  to-neutral-800 rounded-2xl  "
       
       initial = { {
                    x:"-1000%"
                }}
                animate = { { x: 0, transition : { 
                    ease : "easeInOut",
                    duration :1.6, 
                    delay : 1
                    
                }}}
                
        >
      <div className="h-auto max-h-[45%]">
          <img className = "min-h-[35%] min-w-[100%] rounded-2xl"src = {url} alt = "there was supposed to be a image over here :("/>

      </div>
            <div className="mx-2 my-auto  h-auto flex flex-col last:mt-10">
            <div className="mt-2 mx-2">

                <h1 className= "text-xl font-sans text-white font-bold">
                    {title}
                </h1>
            </div>
            <div className="mt-4 mx-2 text-sm text-neutral-500">

                <p className="  text-neutral-500 ">
                {desc} 
                </p>
            </div>
                <div className="h-10 absolute w-[95%] text-sm text-slate-300 justify-items-stretch  py-3 flex flex-row justify-between bottom-2 text-center content-center pt-2  align-baseline bottom-0 ">
                <h2 className="basis-5/12 ">{source}</h2>
                
                <h2 className="basis-1 text-lg rounded-full  ">
                <a href={urlsource} target="_blank" >
                💸
                </a>
                </h2>
                <h2 className="basis-5/12 overflow-hidden">{author   ? author : "<- to read more" }</h2>

                </div>
       
            </div>
        </motion.div>
        </AnimatePresence>
    )
}

export default Cards;