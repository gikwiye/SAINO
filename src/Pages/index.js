import React,{useState} from 'react'
import ExploreSection from '../Components/ExploreSection'
import HeroSection from '../Components/HeroSection/Index'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar/Index'
import Manifesto from '../Components/ManifestoSection'
import Invest from'../Components/InvestSection'
import RisingFunds from '../Components/RisingFundsSection/Index'
import Team from '../Components/TeamSection'
import Footer from '../Components/FooterSection'
const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

const Home = () => {
    const [isOpen,setIsOpen] = useState(false)

    const toggle = ()=>{
        setIsOpen(!isOpen);
    }
    return (
        <React.Fragment>
          <Sidebar isOpen = {isOpen} toggle = {toggle}/>
          <Navbar toggle ={toggle}/>  
          <HeroSection/>
          <ExploreSection/>
          <Manifesto/>
          <Invest/>
          <RisingFunds/>
          <Team/>
          <Footer/>
        </React.Fragment>
    )
}

export default Home
