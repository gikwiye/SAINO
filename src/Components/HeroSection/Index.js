import React from 'react'
import GlobalFonts from '../../fonts/fonts'
import {HeroContainer,ImageOv,HeroP2,HeroH1,TitleStyle1,TextContainer,HeroP3,KnowMore,KnowMoreText,NavLinks} from './HeroElements'
import {IoChevronDownCircleOutline} from 'react-icons/io5'
import { useTranslation } from 'react-i18next'



const HeroSection = () => {
    const {t} = useTranslation();
    return (
        <HeroContainer id="home">
            <ImageOv/>
            <GlobalFonts/>
            
                
            <TextContainer>
                    
                    <HeroP2>
                        {t("Founded in 2020")}<br/>{t("Dubai - UAE")}
                    </HeroP2>
                    
            
                
               <HeroH1>
                    <TitleStyle1>{t("CAPITAL")} <br/><span style={{marginLeft:83+83}}>{t("FOR")}</span>
                        
                    <br/><span style={{marginLeft:143+83+83}}>{t("GROWTH")}</span></TitleStyle1>
                </HeroH1>
                
                </TextContainer>
                <HeroP3>
                LOREM IPSUM <br/>{t("Distributed Ledger Technology")}
                </HeroP3>
                <KnowMore >
                <NavLinks to="Explore"
                            smooth={true} duration={1500} spy={true} exact='true' offset={-140}>
                    <IoChevronDownCircleOutline style= {{width:32,height:32, color:"#FFFFFF"}}/>
                </NavLinks>
                </KnowMore>
                <KnowMoreText>
                    {t("DISCOVER MORE.")}
                </KnowMoreText>
        </HeroContainer>
    )
}

export default HeroSection
