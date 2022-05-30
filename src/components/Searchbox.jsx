
import { useState } from "react";

const Searchbox = (props)=>
{
    const [query , setQuery] = useState("");
    return(
<>

<div className="h-1/3 w-5/6 mx-auto p-2 flex">

        <input type="text" placeholder="newssss" className=" sm:h-1/3  sm:w-full p-3  basis-5/6 rounded-l-2xl  bg-neutral-800  text-white text-md border-none outline-none" value={query} 
        onChange={(e)=>{
            const {value} = e.target;
            setQuery(value)

            }
            }/>
        <button className="basis-1/4 h-full w-5 text-center bg-neutral-700 rounded-r-2xl px-3 py-1" onClick=  {()=>{props.queryPOST(query)}} >Q</button>
</div>
</>
    )
}


export default Searchbox;