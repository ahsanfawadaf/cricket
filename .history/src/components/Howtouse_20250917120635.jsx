import React from 'react'

const Howtouse = () => {

   const cards = [

    {
      id:1,
      title:'Signup / Login',
      description:'Create an account first on the CricInsight platform or log in if you already have an account.'
    },
    {
      id:2,
      title:'Upload Videos',
      description:'Upload your cricket match videos for analysis. You can trim videos and merge multiple videos as well.'
    },
    {
      id:3,
      title:'Data Analytics',
      description:'Analyze your game and get highlights of your gameplay and get an overview of all the shots you play.'
    },
    {
      id:4,
      title:'Area Calculation',
      description:'Calculates the percentage distribution of shots across different fielding areas for insightful analysis'
    },
    {
      id:5,
      title:'Adaptive Learning',
      description:'Get tailored solutions to enhance cricket skills based on identified technical flaws from your gameplay.'
    },
    {
      id:6,
      title:'AI Assistant',
      description:'Get all your queries answered, have some cricket tips, and be guided to the CricInsight features.'
    },
    
   ];

  return (
    <div className='bg-gray-200 py-10'>
        <h2 className='text-5xl text-center font-semibold mb-4 '>How to Use?</h2>
        <p className='px-2 text-center'>Discover CricInsight for in-depth cricket analysis. Whether you're a player, coach, or team manager, it provides insights to enhance your cricket experience.</p>
  

      <div className='max-w-6xl mx-auto px-4 gird gird-cols-1 md:'>









      </div>






    </div>
  )
}

export default Howtouse