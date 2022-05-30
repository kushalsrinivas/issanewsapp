import React, { useEffect, useState } from "react";
import Cards from "../components/Cards";
import Searchbox from "../components/Searchbox";
import { AnimatePresence, motion } from "framer-motion";
import Scroll from "../components/Scroll";
import { BarLoader } from "react-spinners";
const Home = ()=>{
    const [news, SetNews] = useState();
    const [ready, setReady] = useState(false);
    const [newsReady , setNewsReady] = useState(false);
    const [query ,setQuery] = useState("india")

    const handleQuery = (q)=>{
        setQuery(q);
    }

    const getnews = async (q)=>{
    await fetch (`https://newsapi.org/v2/everything?q=${q}&apiKey=c4893ccca20c490c9363fbaa12969983`)
    .then(res => res.json())
    .then(res => 
        {


            SetNews(res.articles)
            setNewsReady(true)

        })
    }

    useEffect(()=>{

        setReady(false)
        setNewsReady(false)
        getnews(query)
        setReady(true);



    },[query])
    const scrollquery=(q)=> setQuery(q)

    return(
     <>

<AnimatePresence>

        <div className="h-auto w-screen dark relative bg-black">
                <div className="h-1/5 z-50 fixed  w-screen text-slate-50 content-center text-center justify-center basis-[25%]">
                     <Searchbox queryPOST = {handleQuery}/>
                <div className="w-[90%] h-10 overflow-scroll mx-auto">
                <Scroll  q= {scrollquery}/>
                </div>
                </div>
            <div className="h-screen  text-slate-50 -z-2 flex flex-row overflow-hidden align-middle">
                <motion.div 
                className=" h-auto mt-10 w-screen scroll-smooth overscroll-auto flex flex-row gap-6 overflow-scroll snap-x snap-mandatory before:shrink-0 before:w-[30vw] after:shrink-0 after:w-[30vw]"
            
                
              >
                
                {
                    ready && 
                    newsReady ? 
                    news.map((items, id)=> { 
                        return(    
                            <Cards 
                    key = {id}        
                    url = {items.urlToImage} 
                    title ={items.title} 
                    desc = {items.content}
                    source = {items.source.name}
                    author = {items.author}
                    urlsource = {items.url}



                    />)

                    })
                 : 
                    <div className=" flex flex-col h-screen justify-center ">
                    <BarLoader height="4" width="100" color="#075be3" loading={ready} ></BarLoader>
                    fetching data bro
                    </div>
                } 
                </motion.div>

            </div>
            <p className= "absolute bottom-2  w-screen mx-auto  text-center text-gray-900">mobile only</p>
        </div>

</AnimatePresence>
     </>

    )

}



export default Home;