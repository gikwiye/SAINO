import React from 'react'
import  {
    InvestmentContainer,
    InvestmentBgText,
    InvestmentTitle,
    InvestmentSubTitle,
    InvestmentTGETitle,
    InvestmentTGEText,
    InvestmentVestingTitle,
    InvestmentVestingText,
    InvestmentDEXTitle,
    InvestmentDEXText,
    InvestmentCEXTitle,
    InvestmentCEXText,
    InvestmentFgImg,
    InvestmentBtmTitle,
    InvestmentBtmText} from './InvestmentElements'
const Investment = () => {
    return (
        <>
            <InvestmentContainer>
                <InvestmentBgText>
                    Investissements
                </InvestmentBgText>
                <InvestmentTitle>
                    Lorem ipsum dolor
                </InvestmentTitle>
                <InvestmentSubTitle>
                    Lorem ipsum dolor sit amet consectetur adipis elit.
                </InvestmentSubTitle>
                <InvestmentTGETitle>
                    TGE
                </InvestmentTGETitle>
                <InvestmentTGEText>
                    Token generation event. C’est l'événement à partir 
                    duquel les tokens peuvent être vendu sur le marché.
                </InvestmentTGEText>
                <InvestmentVestingTitle>
                    Vesting
                </InvestmentVestingTitle>
                <InvestmentVestingText>
                    Distribution des tokens de manière étalé sur le temps.
                     Recevoir par exemple 10% des tokens par mois pendant 
                     10 mois.
                </InvestmentVestingText>
                <InvestmentDEXTitle>
                    DEX
                </InvestmentDEXTitle>
                <InvestmentDEXText>
                    Exchange décentralisé Uniswap.
                </InvestmentDEXText>
                <InvestmentCEXTitle>
                    CEX
                </InvestmentCEXTitle>
                <InvestmentCEXText>
                    Exchange centralisé Binance.
                </InvestmentCEXText>
                <InvestmentFgImg>
                </InvestmentFgImg>
                <InvestmentBtmTitle>
                    Lorem ipsum dolor
                </InvestmentBtmTitle>
                <InvestmentBtmText>
                    Nous estimons, qu’au jours d’aujourd’hui, les crypto-actifs 
                    constituent la classe d’actif ayant les retour sur investissement 
                    potentiels les plus important tout marchés confondu. Il est donc 
                    totalement pertinent d’investir une part relativement faible de son 
                    patrimoine dans ce type d’actif. Une faible part de son capital 
                    investit dans le secteur des crypto-actif permet une démultiplication 
                    net de la croissance de son patrimoine global dans le cas ou le secteur 
                    est haussier. Dans le cas ou le secteur est baissier, ce même portfolio 
                    ne diminuera que très peu. Risk reward
                </InvestmentBtmText>
            </InvestmentContainer>
        </>
    )
}

export default Investment
