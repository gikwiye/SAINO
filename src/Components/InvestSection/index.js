import React from 'react'
import CustomizedAccordions from '../../MaterialUI/Accordion'
import {
    InvestContainer,
    InvestTitle,
    InvestSubtitle,
    InvestBgText,
    InvestTypeBlock,
    InvestBlock,
    InvestLastBlock,
    InvestBlockTitleSeed,
    InvestBlockTitlePrivateSale,
    InvestBlockTitleDex,
    InvestUnderline,
    InvestSubTitle,
    InvestBottomPart,
    InvestBlockText,
    InvestWrapper,
    InvestBtmText,
    InvestHeading,
    InvestBtmSubTitle,
    InvestBtmSubText
} from './InvestElements'
import GlobalFonts from '../../fonts/fonts'
const Invest = () => {
    return (
        <React.Fragment>
            <InvestContainer>
                <GlobalFonts/>
                <InvestWrapper>
                <InvestTitle>
                    Types d’investissements
                </InvestTitle>
                <InvestSubtitle>
                    Lorem ipsum dolor sit amet consectetur adipis elit.
                </InvestSubtitle>
                
                <InvestBgText>
                    Investissements
                </InvestBgText>
                <InvestTypeBlock>
                    <InvestBlock>
                        <InvestBlockTitleSeed>
                            Seed
                        </InvestBlockTitleSeed>
                        <InvestUnderline>
                        </InvestUnderline>
                        <InvestSubTitle>
                        Ipsum dolor <br/>LOREM IPSUM DOLOR
                        </InvestSubTitle>
                        <InvestBlockText>
                            Investissement au plus tôt. Une seed permet potentiellement d’obtenir 
                            le token au meilleur prix. De plus, ce sont des sales fortement exclusives, 
                            elle ne sont souvent accessibles qu’à une très faible minorité de fonds 
                            d’investissement. Les retour sur investissement potentiels sont hors 
                            catégories. Le risque est par contre beaucoup plus important ainsi que 
                            le vesting.
                        </InvestBlockText>
                    </InvestBlock>
                    <InvestBlock>
                        <InvestBlockTitlePrivateSale>
                            Private Sale
                        </InvestBlockTitlePrivateSale>
                        <InvestUnderline>
                        </InvestUnderline>
                        <InvestSubTitle>
                        Ipsum dolor <br/>LOREM IPSUM DOLOR
                        </InvestSubTitle>
                        <InvestBlockText>
                            Similaires au Seed à la différence que le vesting est moins important. Le prix 
                            est souvent légèrement supérieur au prix d’une seed mais dispose aussi d’un immense 
                            retour sur investissement potentiel. Le risque reste important. Il est accessible à 
                            un plus grand nombre de fonds d’investissement.
                        </InvestBlockText>
                    </InvestBlock>
                    <InvestLastBlock >
                        <InvestBlockTitleDex>
                            DEX & CEX
                        </InvestBlockTitleDex>
                        <InvestUnderline>
                        </InvestUnderline>
                        <InvestSubTitle>
                        Ipsum dolor <br/>LOREM IPSUM DOLOR
                        </InvestSubTitle>
                        <InvestBlockText>
                            Les retour sur investissement sont en moyenne bien moins élevés mais permettent de 
                            croitre très rapidement car il n’y a pas de vesting. Il est également possible en période 
                            de bear market sur le moyen ou le long terme d’obtenir des prix d’achat encore plus bas que 
                            sur les seed. Ici l’analyse technique est très importante.
                        </InvestBlockText>
                    </InvestLastBlock>
                </InvestTypeBlock>
                <InvestBottomPart>
                    <InvestBtmText>
                     <InvestHeading>
                        Types d’investissements
                     </InvestHeading>
                     <InvestBtmSubTitle>
                        Lorem ipsum dolor sit.
                     </InvestBtmSubTitle>
                     <InvestBtmSubText>
                        Une combinaison de ces 3 types d’investissement 
                        permet d’obtenir des retour sur investissement 
                        potentiels extrêmement importants pour un risque 
                        le plus faible possible dans le secteur des 
                        crypto-actifs.
                     </InvestBtmSubText>
                     <InvestHeading>
                        Types d’investissements
                     </InvestHeading>
                     <InvestBtmSubTitle>
                        Lorem ipsum dolor sit.
                     </InvestBtmSubTitle>
                     <InvestBtmSubText>
                        Nous estimons, qu’au jours d’aujourd’hui, les 
                        crypto-actifs constituent la classe d’actif ayant 
                        les retour sur investissement potentiels les plus 
                        important tout marchés confondu. Il est donc totalement 
                        pertinent d’investir une part relativement faible de son 
                        patrimoine dans ce type d’actif. Une faible part de son 
                        capital investit dans le secteur des crypto-actif permet 
                        une démultiplication net de la croissance de son patrimoine 
                        global dans le cas ou le secteur est haussier. Dans le cas ou 
                        le secteur est baissier, ce même portfolio ne diminuera que très 
                        peu. Risk reward
                     </InvestBtmSubText>
                    </InvestBtmText>
                    <CustomizedAccordions/>
                
                </InvestBottomPart>
                
               

                </InvestWrapper>
            </InvestContainer>
        </React.Fragment>
    )
}

export default Invest
