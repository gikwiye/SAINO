import React from 'react'
import {RisingFundsContainer,
    RisingFundTitle,
    RisingFundText,
    RisingFundSeats,
    RisingFundSeatsText,
    RisingFundAmount,
    RisingFundAmountText,
    RisingFundMinInvest,
    RisingFundMinInvestText,
    RisingFundMinSlider,
    RisingFundMidSlider,
    RisingFundMaxSlider,
    RisingFundSliderFilled,
    RisingFundSliderDot,
    RisingFundSliderAll,
    RisingFundSliderBigDot,
    RisingFundSliderText} from './RisingFundsElements'

const RisingFunds = () => {
    return (
        <>
            <RisingFundsContainer>
                <RisingFundTitle>
                    Explication du déroulement
                </RisingFundTitle>
                <RisingFundText>
                    Lorem ipsum dolor sit amet consectetur adipis elit.
                </RisingFundText>
                <RisingFundSeats>
                    20
                </RisingFundSeats>
                <RisingFundSeatsText>
                    place early investor restantes
                </RisingFundSeatsText>
                <RisingFundAmount>
                    88K $
                </RisingFundAmount>
                <RisingFundAmountText>
                    montant investit actuel
                </RisingFundAmountText>
                <RisingFundMinInvest>
                    100K $
                </RisingFundMinInvest>
                <RisingFundMinInvestText>
                    Investissement min actuel
                </RisingFundMinInvestText>
                <RisingFundMinSlider>
                    0
                </RisingFundMinSlider>
                <RisingFundMidSlider>
                    200K $
                </RisingFundMidSlider>
                <RisingFundMaxSlider>
                    1M $
                </RisingFundMaxSlider>
                <RisingFundSliderFilled>
            
                </RisingFundSliderFilled>
                <RisingFundSliderDot>

                </RisingFundSliderDot>
                <RisingFundSliderAll>

                </RisingFundSliderAll>
                <RisingFundSliderBigDot>
                

                </RisingFundSliderBigDot>
                <RisingFundSliderText style={{left:'-33px'}}>
                    Start <br/> Lancement
                </RisingFundSliderText>
                <RisingFundSliderText style={{left:'532px'}}>
                    objectif  <br/> phase 1
                </RisingFundSliderText>
                <RisingFundSliderText style={{left:'1091px'}}>
                    objectif <br/>phase 2  
                </RisingFundSliderText>

                
            </RisingFundsContainer>
        </>
    )
}

export default RisingFunds
