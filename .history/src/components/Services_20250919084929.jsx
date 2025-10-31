import React from 'react'


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

        <div className='flex flex-wrap justify-center mb-4'>

            { crds.map((cards , index))




            }



        </div>






    </div>
  )
}

export default Services