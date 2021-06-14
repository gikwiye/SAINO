import React,{useState} from 'react'
import ExploreSection from '../Components/ExploreSection'
import HeroSection from '../Components/HeroSection/Index'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar/Index'
import Manifesto from '../Components/ManifestoSection'
import Invest from'../Components/InvestSection'
import Investment from '../Components/InvestmentSection'
import RisingFunds from '../Components/RisingFundsSection/Index'
import Team from '../Components/TeamSection'
import Footer from '../Components/FooterSection'


const Home = () => {
    const [isOpen,setIsOpen] = useState(false)

    const toggle = ()=>{
        setIsOpen(!isOpen);
    }
    return (
        <>
          <Sidebar isOpen = {isOpen} toggle = {toggle}/>
          <Navbar toggle ={toggle} />  
          <HeroSection/>
          <ExploreSection/>
          <Manifesto/>
          <Invest/>
          <Investment/>
          <RisingFunds/>
          <Team/>
          <Footer/>
        </>
    )
}

export default Home
