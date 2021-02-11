import React, {Component} from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import './App.css';
// my Components 
import Navbar from './Components/Navbar'
import Contact from './Components/Contact'
import Index from './Components/Index'
import Portfolio from './Components/Portfolio';
import About from './Components/About';
import Work from './Components/Work';
import Profile from './Components/Profile';
import Footer from './Components/Footer'
class App extends Component {
  render(){
    return(
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Route exact path="/ReactWebsite/" component={Index} />
          <Route path="/ReactWebsite/Contact" component={Contact} />
          <Route path="/ReactWebsite/Portfolio" component={Portfolio} />
          <Route path="/ReactWebsite/About" component={About} />
          <Route path="/ReactWebsite/Work" component={Work} />
          <Route path="/ReactWebsite/Profile" component={Profile} />
        </BrowserRouter>
        <Footer />
      </div>
    )
  }
}


export default App;
