import React from 'react'
import GlobalFonts from '../../fonts/fonts'
import Slider from '../../MaterialUI/Slider'
import {RisingFundsContainer,
    RisingFundTitle,
    RisingFundText,
    RisingFundSeats,
    RisingFundSeatsText,
    RisingFundAmount,
    RisingFundAmountText,
    RisingFundMinInvest,
    RisingFundMinInvestText,
    RisingFundSliderText,
    RisingFundWrapper,
    TextWrapper,
    Num1Wrapper,
    NumberWrapper,
    Num2Wrapper,
    Num3Wrapper,
    SliderWrapper,
    SliderTextWrapper,
    
    
RisingFundSliderContainer} from './RisingFundsElements'
const RisingFunds = () => {
    
    return (
        <React.Fragment>
            <RisingFundsContainer>
                <GlobalFonts/>
                <RisingFundWrapper>
                    <TextWrapper>
                        <RisingFundTitle>
                            Types d’investissements
                        </RisingFundTitle>
                        <RisingFundText>
                            Lorem ipsum dolor sit amet consectetur adipis elit.
                        </RisingFundText>
                    </TextWrapper>
                    <NumberWrapper>
                        <Num1Wrapper>
                            <RisingFundSeats>
                                20
                            </RisingFundSeats>
                            <RisingFundSeatsText>
                                place early investor restantes
                            </RisingFundSeatsText>
                        </Num1Wrapper>
                        <Num2Wrapper>
                            <Num3Wrapper>
                                <RisingFundAmount>
                                    88K $
                                </RisingFundAmount>
                                <RisingFundAmountText>
                                    montant investit actuel
                                </RisingFundAmountText>
                            </Num3Wrapper>
                            <Num3Wrapper>
                                <RisingFundMinInvest>
                                    100K $
                                </RisingFundMinInvest>
                                <RisingFundMinInvestText>
                                    Investissement min actuel
                                </RisingFundMinInvestText>
                            </Num3Wrapper>
                        </Num2Wrapper>
                    </NumberWrapper>
                    <SliderWrapper>
                            
                            <RisingFundSliderContainer>
                           
                                    <Slider/>
                           
                                   
                                
                            </RisingFundSliderContainer>
                            <SliderTextWrapper>
                                <RisingFundSliderText >
                                    Start <br/> Lancement
                                </RisingFundSliderText>
                                <RisingFundSliderText >
                                    objectif  <br/> phase 1
                                </RisingFundSliderText>
                                <RisingFundSliderText >
                                    objectif <br/>phase 2  
                                </RisingFundSliderText>
                            </SliderTextWrapper>
                    </SliderWrapper>
                    </RisingFundWrapper>
                
            </RisingFundsContainer>
        </React.Fragment>
    )
}

export default RisingFunds
