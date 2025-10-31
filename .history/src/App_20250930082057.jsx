import React from 'react'
import {useState} from 'react'

import Header from './components/Header'
import Our_experience from './components/Our_experience'
import Howtouse from './components/Howtouse'
import Splitlayout from './components/Splitlayout'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Login from './components/Login'


const App = () => {
  

  const [showLogin , setShowLogin ] = useState(false);

  const handleLoginClick =() =>{
    setShowLogin(true);
  };
  const handleCloseLogin =() =>{
    setShowLogin(false);
  };

  return (
    <div>
     <Header onLoginClick={handleLoginClick}  />
     {showLogin && <Login onClose={handleCloseLogin} />}
     <Our_experience/>
     <Howtouse/>
     <Splitlayout/>
     <Services/>
     <Contact/>
     <Footer  onLoginClick={handleLoginClick}  />
        
    </div>
  )
}

export default App