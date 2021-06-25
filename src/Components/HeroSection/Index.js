import React from 'react'
import GlobalFonts from '../../fonts/fonts'
import {HeroContainer,ImageOv,HeroP2,HeroH1,TitleStyle1,TextContainer,HeroP3} from './HeroElements'

import { useTranslation } from 'react-i18next'



const HeroSection = () => {
    const {t} = useTranslation();
    return (
        <HeroContainer>
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

        </HeroContainer>
    )
}

export default HeroSection
