import React from 'react'

const Our_experience = () => {
  return (
    <div className='bg-gray-200 py-10' id='Experience'>
          <h2 className='text-center font-bold text-5xl text-gray-800 mb-8'>Our Expertise and Experience</h2>
          
          
          <div className='max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
               
               <div className='bg-white shadow-lg rounded-lg  min-h-[450px]' style={{backgroundImage:"url('/onebg.png')" , backgroundSize: 'cover'}}>
                   <div className='p-4'>
                    <h3 className='text-xl mb-2 text-white font-semibold '>Shots Visualization</h3>
                    <p className='text-white'>Classify shots accurately, revealing player strategies and enhancing performance analysis.</p>

                   </div>

               </div>
               <div className='bg-white shadow-lg rounded-lg ' style={{backgroundImage:"url('/twobg.png')" , backgroundSize: 'cover' , backgroundPosition: 'center'}}>
                   <div className='p-4'>
                    <h3 className='text-xl mb-2 text-white font-semibold '>Area Calculation</h3>
                    <p className='text-white'>Visualize shot distribution, analyzing fielding positions and percentages with precision</p>

                   </div>

               </div>
               <div className='bg-white shadow-lg rounded-lg 'style={{backgroundImage:"url('/threebg.png')" , backgroundSize: 'cover'}}>
                   <div className='p-4'>
                    <h3 className='text-xl mb-2 text-white font-semibold '>Adaptive Learning</h3>
                    <p className='text-white'>Identify flaws in your techniques and get improvement plans tailored for each shot.</p>

                   </div>

               </div>
               <div className='bg-white shadow-lg rounded-lg ' style={{backgroundImage:"url('/fourbg.png')" , backgroundSize: 'cover'}} >
                   <div className='p-4'>
                    <h3 className='text-xl mb-2 text-blue-900 font-semibold '>AI Assitant</h3>
                    <p className='text-blue-300'>Leverage our AI Assistant for instant analysis, intelligent responses, and seamless interaction.</p>

                   </div>

               </div>







          </div>









    </div>
  )
}

export default Our_experience