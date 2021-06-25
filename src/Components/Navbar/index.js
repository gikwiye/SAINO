import React,{useState, useEffect } from 'react'
import Logo from '../../Images/Icons/LOGO.svg'
import GlobalFonts from '../../fonts/fonts'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks,Language } from './NavbarElements';
import { AiOutlineBars } from 'react-icons/ai'
import { useTranslation } from 'react-i18next'
import {animateScroll as scroll} from 'react-scroll'


const Navbar = ({ toggle }) => {
    const {t,i18n} = useTranslation()
    const [scrollNav, setScrollNav] = useState(false);
    const onChange = (event)=>{
        i18n.changeLanguage(event.target.value)
    }
    
    
    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true)
        }
        else {
            setScrollNav(false)
        }
    }
    useEffect(()=>{
        window.addEventListener('scroll',changeNav)
    },[]);

    const toggleHome = ()=>{
        scroll.scrollToTop()
    }

    return (


        <React.Fragment>
            <Nav scrollNav = {scrollNav}>
                <NavbarContainer>
                    <GlobalFonts />
                    <NavLogo to = '/' onClick = {toggleHome}>
                        
                            <img src={Logo} alt="Logo"/>
                        
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <AiOutlineBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>

                            <NavLinks to="Manifesto"
                            smooth={true} duration={1500} spy={true} exact='true' offset={-140}>
                                {t("Manifesto")}
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="Investment"
                            smooth={true} duration={1500} spy={true} exact='true' offset={-140}>
                            {t("Investment")}
                        </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="Funds"
                            smooth={true} duration={1500} spy={true} exact='true' offset={-140}>
                                {t("Funds")}
                        </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="Teams"
                            smooth={true} duration={1500} spy={true} exact='true' offset={-140}>
                                {t("Team")}
                        </NavLinks>
                        </NavItem>
                        <NavItem>
                            <Language  name = "Language" onChange = {onChange}>
                                <option value = "en">En</option>
                                <option value ="fr">Fr</option>
                            </Language>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>

            </React.Fragment>
    )
}

export default (Navbar)
