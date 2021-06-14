import React from 'react'
import Logo from '../../Images/Icons/LOGO.png'
import {FooterContainer,FooterLogo,FooterContentTitle,FooterContentText,FooterSocial} from './FooterElements'
import {FiInstagram,FiFacebook,FiTwitter,FiLinkedin} from 'react-icons/fi'

const Footer = () => {
    return (
        <>
            <FooterContainer>
                <FooterLogo>
                    <img src={Logo} alt="Logo"/>
                </FooterLogo>
                <FooterContentTitle style = {{top:'105px',left:'385px'}}>
                    Lorem ipsum
                </FooterContentTitle>
                <FooterContentText style = {{top:'145px',left:'385px'}}>
                LOREM IPSUM DOLOR
                LOREM IPSUM
                LOREM IPSUM DOLOR
                LOREM IPSUM LOREM 
                </FooterContentText>
                <FooterContentTitle style = {{top:'105px',left:'615px'}}>
                    Lorem ipsum
                </FooterContentTitle>
                <FooterContentText style = {{top:'145px',left:'615px'}}>
                LOREM IPSUM DOLOR
                LOREM IPSUM
                LOREM IPSUM DOLOR
                LOREM IPSUM LOREM 
                </FooterContentText>
                <FooterContentTitle style = {{top:'105px',left:'845px'}}>
                    Lorem ipsum
                </FooterContentTitle>
                <FooterContentText style = {{top:'145px',left:'845px'}}>
                LOREM IPSUM DOLOR
                LOREM IPSUM
                LOREM IPSUM DOLOR
                LOREM IPSUM LOREM 
                </FooterContentText>
                <FooterSocial>
                <FiInstagram/>
                <FiFacebook/>
                <FiTwitter/>
                <FiLinkedin/>
                </FooterSocial>

            </FooterContainer>
        </>
    )
}

export default Footer
