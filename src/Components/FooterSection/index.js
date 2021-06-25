import React from 'react'
import Logo from '../../Images/Icons/LOGO.png'
import {FooterContainer,FooterLogo,FooterContentTitle,FooterContentText,FooterSocial,FooterText} from './FooterElements'
import {FiInstagram,FiFacebook,FiTwitter,FiLinkedin} from 'react-icons/fi'

const Footer = () => {
    return (
        <React.Fragment>
            <FooterContainer>
                <FooterLogo>
                    <img src={Logo} alt="Logo"/>
                </FooterLogo>
                <FooterText>
                    <FooterContentTitle >
                        Lorem ipsum
                    </FooterContentTitle>
                    <FooterContentText >
                    LOREM IPSUM DOLOR
                    LOREM IPSUM
                    LOREM IPSUM DOLOR
                    LOREM IPSUM LOREM 
                    </FooterContentText>
                </FooterText>
                <FooterText>
                    <FooterContentTitle >
                        Lorem ipsum
                    </FooterContentTitle>
                    <FooterContentText >
                    LOREM IPSUM DOLOR
                    LOREM IPSUM
                    LOREM IPSUM DOLOR
                    LOREM IPSUM LOREM 
                    </FooterContentText>
                </FooterText>
                <FooterText>
                    <FooterContentTitle >
                        Lorem ipsum
                    </FooterContentTitle>
                    <FooterContentText >
                    LOREM IPSUM DOLOR
                    LOREM IPSUM
                    LOREM IPSUM DOLOR
                    LOREM IPSUM LOREM 
                    </FooterContentText>
                </FooterText>
                <FooterSocial>
                <FiInstagram/>
                <FiFacebook/>
                <FiTwitter/>
                <FiLinkedin/>
                </FooterSocial>

            </FooterContainer>
        </React.Fragment>
    )
}

export default Footer
