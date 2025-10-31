import React from 'react'
import {useState} from 'react'

import Header from './components/Header'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Our_experience from './components/Our_experience'
import Howtouse from './components/Howtouse'
import Splitlayout from './components/Splitlayout'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Login from './pages/Login'


const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  const handleCloseLogin = () => {
    setShowLogin(false);
  };
  
  return (
    <div className='overflow-x-hidden'>
     <Router>
     <Header onLoginClick={handleLoginClick} />
     <Switch>
     
     </Switch>
     <Footer onLoginClick={handleLoginClick} />
     </Router>   
    </div>
  )
}

export default App