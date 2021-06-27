import React,{useState, useEffect } from 'react'
import Logo from '../../Images/Icons/LOGO.svg'
import GlobalFonts from '../../fonts/fonts'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks } from './NavbarElements';
import { AiOutlineBars } from 'react-icons/ai'
import { useTranslation } from 'react-i18next'
import {animateScroll as scroll} from 'react-scroll'
import { Dropdown } from 'semantic-ui-react'



const Navbar = ({ toggle }) => {
    const {t,i18n} = useTranslation()
    const [scrollNav, setScrollNav] = useState(false);
    const onChange = (event,data)=>{
        i18n.changeLanguage(data.value)
    }
    
    
    const changeNav = () => {
        if (window.scrollY >= 1) {
            setScrollNav(true)
        }
        else {
            setScrollNav(false)
        }
    }
    useEffect(()=>{
        window.addEventListener('scroll',changeNav)
    },[]);
    const languageOptions = [
  
        { key: 'English', text: 'English', value: 'en' },
        { key: 'French', text: 'Français', value: 'fr' },
      
      ]
    const toggleHome = ()=>{
        scroll.scrollToTop( 
        {smooth:'easeInSine',
        duration:3000}
        )
    
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
                            smooth='easeOutSine' duration={2500}  exact='true' offset={-140}>
                                {t("Manifesto")}
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="Investment"
                            smooth='easeOutSine' duration={2500}  exact='true' offset={-140}>
                                {t("Investment")}
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="Funds"
                            smooth='easeOutSine' duration={2500}  exact='true' offset={-140}>
                                {t("Funds")}
                        </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="Teams"
                            smooth='easeOutSine' duration={2500}  exact='true' offset={-140}>
                                {t("Team")}
                        </NavLinks>
                        </NavItem>
                        <NavItem>
                        <Dropdown
                                button
                                className='icon'
                                floating
                                labeled
                                options={languageOptions}
                                onChange={onChange}
                                defaultValue = 'English'
                            />
                            {/*<Language  name = "Language" onChange = {onChange}>
                                <option value = "en">En</option>
                                <option value ="fr">Fr</option>
                            </Language>*/}
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>

            </React.Fragment>
    )
}

export default (Navbar)
