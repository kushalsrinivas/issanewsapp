import React from "react";


const Scroll = ({q = "india"})=>{

return(
    <div className="flex w-screen justify-around overflow-y-scroll">
        <div className="bg-neutral-800 ml-3  hover:bg-neutral-500 transistion-all duration-700 text-sm h-auto rounded-full w-10"  onClick={()=>q("tech")}  >🤖</div>
        <div className="bg-neutral-800 ml-3 hover:bg-neutral-500 transistion-all duration-700 text-sm h-auto rounded-full w-10"  onClick={()=>q("finance")} >💰</div>
        <div className="bg-neutral-800 ml-3 hover:bg-neutral-500 transistion-all duration-700 text-sm h-auto rounded-full w-10"  onClick={()=>q("real estate")} >🏠</div>
        <div className="bg-neutral-800 ml-3 hover:bg-neutral-500 transistion-all duration-700 text-sm h-auto rounded-full w-10"  onClick={()=>q("health")} >🏥</div>
        <div className="bg-neutral-800 ml-3 hover:bg-neutral-500 transistion-all duration-700 text-sm h-auto rounded-full w-10"  onClick={()=>q("gaming")} >🎮</div>
        <div className="bg-neutral-800 ml-3 hover:bg-neutral-500 transistion-all duration-700 text-sm h-auto rounded-full w-10"  onClick={()=>q("stocks")} >📈</div>
        <div className="bg-neutral-800 ml-3 hover:bg-neutral-500 transistion-all duration-700 text-sm h-auto rounded-full w-10"  onClick={()=>q("food")} >🍔</div>
        <div className="bg-neutral-800 ml-3 hover:bg-neutral-500 transistion-all duration-700 text-sm h-auto rounded-full w-10"  onClick={()=>q("sports")} >🏆</div>
        <div className="bg-neutral-800 ml-3 hover:bg-neutral-500 transistion-all duration-700 text-sm h-auto rounded-full w-10"  onClick={()=>q("weather")} >🚗</div>
        <div className="bg-neutral-800 ml-3 hover:bg-neutral-500 transistion-all duration-700 text-sm h-auto rounded-full w-10"  onClick={()=>q("fashion")} >👗</div>
        <div className="bg-neutral-800 ml-3 hover:bg-neutral-500 transistion-all duration-700 text-sm h-auto rounded-full w-10"  onClick={()=>q("shoes")} >👟</div>




    </div>
 )

}

export default Scroll;