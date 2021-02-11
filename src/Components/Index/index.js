import './style.css';
import Home from './../Home'
import About from './../About'
import Portfolio from './../Portfolio'
import Profile from './../Profile'
import Work from './../Work'
import SocailMedia from './../SocailMedia'


function Index() {
  return (
    <div className="Index">
        <Home />
        <Work />
        <Portfolio />
        <Profile />
        <About />
        <SocailMedia />
    </div>
  );
}

export default Index;
