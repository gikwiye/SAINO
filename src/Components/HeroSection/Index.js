import React from 'react'
import GlobalFonts from '../../fonts/fonts'
import {HeroContainer,HeroBg,ImageBg,ImageOv,HeroP2,HeroH1,HeroP1,TitleStyle1,HeroItalic} from './HeroElements'
import Rectangle_1 from '../../Images/Pictures/Rectangle_1.jpg'



const HeroSection = () => {
    
    return (
        <HeroContainer>
            <GlobalFonts/>

            <HeroBg>

                <ImageBg src={Rectangle_1}/>
                <ImageOv/>
                <HeroP2>
                Fondé en 2020<br/>Dubai - UAE
                </HeroP2>
            </HeroBg>
            
               <HeroH1>
                    <TitleStyle1>Capital <HeroItalic>for</HeroItalic>
                        
                    <br/>Growth</TitleStyle1>
                </HeroH1>

                 <HeroP1>
                    Saino Ventures est une entreprise de 
                    capital risque axé exclusivement sur 
                    les Distributed Ledger Technologie. 
                    Nous avons un role d’incubateur auprès des 
                    projets ayant le potentiel de structurer l’écosysteme 
                    Blockchain.
                </HeroP1>

            
        </HeroContainer>
    )
}

export default HeroSection
