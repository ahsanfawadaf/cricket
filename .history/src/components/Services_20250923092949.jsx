import React from 'react'
import cric_logo from '../assets/cric_logo.png'
import {motion} from "framer-motion"



const Services = () => {

   const crds = [
     
    {
        title:'Game Analysis',
        description:'Decode practice videos with precision, gaining deeper insights into player tactics and game dynamics.',
        image:'/one.png',
    },
    {
        title:'Data Visualization',
        description:'Get a user-friendly visual representation of all the shots you play with their percentages.',
        image:'/two.png',
    },
    {
        title:'Technique Improvement',
        description:'Identify flaws in your shot techniques and get improvement plans tailored for each shot.',
        image:'/three.png',
    },
    {
        title:'Field Calculation',
        description:'Visualize shot distribution, analyzing fielding positions and percentages with precision.',
        image:'/four.png',
    },

   ]

  return (
    <div className='flex flex-col py-10 items-center' id='Services'>

        <h2 className='font-bold mb-2 text-[#030946]'>Our Services</h2>
        <motion.h1 
        
        initial={{opacity:0 , y:-40}}
        whileInView={{opacity:1 , y:0}}
        transition={{duration:1.5}}
        viewport={{once:false , amount:0.4}}
        
        
        
        className='text-4xl font-semibold'>What We Offer?</motion.h1>

     <div className='flex flex-row m-4 gap-6'>
        
            <motion.div
            
            initial={{opacity:0 , x:-100}}
            whileInView={{opacity:1 , x:0}}
            transition={{duration:1}}
            
            
            
            
            className='flex flex-col justify-center gap-16 mb-4'>

            { crds.slice(0,2).map((card , index) =>(
               
               <div key={index} className='bg-gray-200 shadow-lg rounded-lg p-6 w-72'>
                 <img src={card.image} alt={card.title} />
                 <h3 className='text-xl font-semibold'>{card.title}</h3>
                 <p className='text-sm'>{card.description}</p>
               </div>
             ))}
        </motion.div>
        
        <div className='bg-[#030946] w-72 rounded-lg h-99 mt-12'>

            <img src={cric_logo} alt="Cricinsight" />



        </div>


        <div className='flex flex-col justify-center gap-16 mb-4'>

            { crds.slice(2).map((card , index) =>(
               
               <div key={index} className='bg-gray-200 shadow-lg rounded-lg p-6 w-72'>
                 <img className='color-[#030946]' src={card.image} alt={card.title} />
                 <h3 className='text-xl font-semibold'>{card.title}</h3>
                 <p className='text-sm'>{card.description}</p>
               </div>
             ))}
        </div>   
        
        </div> 
        





    </div>
  )
}

export default Services