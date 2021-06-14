import React from 'react'
import Logo from '../../Images/Icons/LOGO.png'
import GlobalFonts from '../../fonts/fonts'
import {Nav,NavbarContainer,NavLogo,MobileIcon,NavMenu,NavItem,NavLinks} from './NavbarElements';
import {AiOutlineBars} from 'react-icons/ai'

const Navbar= ({toggle}) => {
    return (

        
        <>
        <Nav>
            <NavbarContainer>
            <GlobalFonts/>
                <NavLogo to="/">
                    <img src={Logo} alt="Logo"/>
                </NavLogo>
                <MobileIcon onClick={toggle}>
                    <AiOutlineBars/>
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to ="Manifesto">
                         Manifesto
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to ="Manifest">
                         Investissement
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to ="Manifest">
                         Rising Funds
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to ="Manifest">
                         Team
                        </NavLinks>
                    </NavItem>
                </NavMenu>
            </NavbarContainer>
        </Nav>

        </>
    )
}

export default Navbar
