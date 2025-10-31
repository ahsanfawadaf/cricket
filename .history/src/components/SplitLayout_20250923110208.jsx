import React from 'react'
import bgpic from '../assets/bgpic.png'
import {motion} from "framer-motion"

const Splitlayout = () => {
  return (
    <motion.div 
    
    initial={{opacity:0 , y:100}}
    whileInView={{opacity:1 , y:0}}
    transition={{duration:1.5}}
    viewport={{once:false , amount:0.2}}

    
    
    
    
    className='w-full h-75vh flex flex-col md:flex-row'>

        <div className='w-[65%] h-full bg-black flex flex-col items-start p-20 justify-center'>
            <h3 className='text-4xl font-semibold text-white mb-6'>Why CricInsight?</h3>
            <p className='text-md font-semibold text-white inline-block mb-6'>CricInsight offers cutting-edge video analysis tools, empowering users to delve deep into cricket match insights. With advanced shot detection and classification, CricInsight provides a comprehensive understanding of player performance and playing areas. Its adaptive learning feature offers personalized feedback, making it a must-have for cricket enthusiasts seeking to improve their game.</p>
           <div className=' flex gap-4'>

             <button className='cursor-pointer hover:bg-blue-200 border rounded-full bg-white py-2 px-6'>TRY NOW</button>
            <button className='border rounded-full text-white border-white bg-black px-4 py-2'>CONTACT US</button>
           </div>
        </div>

        <div className='w-[35%] h-full  flex bg-gray-300'>
          

          <img className='object-cover  w-full inset-0 h-full' src={bgpic} alt="Description of img" />
        </div>






    </motion.div>
  )
}

export default Splitlayout