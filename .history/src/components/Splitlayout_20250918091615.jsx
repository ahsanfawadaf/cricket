import React from 'react'

const Splitlayout = () => {
  return (
    <div className='w-full h-25vh flex flex-col md:flex-row'>

        <div className='w-[65%] h-full bg-black flex items-center justify-center'>
            <h3 className='text-xl font-bold text-white'>Why CricInsight?</h3>
            <p className='text-md font-bold text-white'>CricInsight offers cutting-edge video analysis tools, empowering users to delve deep into cricket match insights. With advanced shot detection and classification, CricInsight provides a comprehensive understanding of player performance and playing areas. Its adaptive learning feature offers personalized feedback, making it a must-have for cricket enthusiasts seeking to improve their game.</p>
            <button className='border rounded-full '>TRY NOW</button>
            <button>CONTACT US</button>
        </div>

        <div className='w-[35%] h-full flex bg-gray-300'>

        </div>






    </div>
  )
}

export default Splitlayout