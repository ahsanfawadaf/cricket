import React from 'react'
import cric_logo from '../assets/cric_logo.png'



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
    <div className='flex flex-col py-10 items-center'>

        <h2 className='font-bold mb-2'>Our Services</h2>
        <h1 className='text-4xl font-semibold'>What We Offer?</h1>

     <div className='flex flex-row m-4 '>
        
            <div className='flex flex-col justify-center mb-4'>

            { crds.slice(0,2).map((card , index) =>(
               
               <div key={index} className='bg-white shadow-lg rounded-lg p-6 w-72'>
                 <img src={card.image} alt={card.title} />
                 <h3>{card.title}</h3>
                 <p>{card.description}</p>
               </div>
             ))}
        </div>
        
        <div>

            <img src={cric_logo} alt="Cricinsight" />



        </div>


        <div className='flex flex-cols justify-center mb-4'>

            { crds.slice(2).map((card , index) =>(
               
               <div key={index} className='bg-white shadow-lg rounded-lg p-6 w-72'>
                 <img src={card.image} alt={card.title} />
                 <h3>{card.title}</h3>
                 <p>{card.description}</p>
               </div>
             ))}
        </div>   
        
        </div> 
        





    </div>
  )
}

export default Services