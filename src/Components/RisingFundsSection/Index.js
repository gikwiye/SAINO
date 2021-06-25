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
import { useTranslation } from 'react-i18next'
const RisingFunds = () => {
    const {t} = useTranslation();
    return (
        <React.Fragment>
            <RisingFundsContainer id="Funds">
                <GlobalFonts/>
                <RisingFundWrapper>
                    <TextWrapper>
                        <RisingFundTitle>
                        {t("Types of investments")}
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
                            {t("Early investor remaining seats")}
                            </RisingFundSeatsText>
                        </Num1Wrapper>
                        <Num2Wrapper>
                            <Num3Wrapper>
                                <RisingFundAmount>
                                    88K $
                                </RisingFundAmount>
                                <RisingFundAmountText>
                                    {t("Current invested amount")}
                                </RisingFundAmountText>
                            </Num3Wrapper>
                            <Num3Wrapper>
                                <RisingFundMinInvest>
                                    100K $
                                </RisingFundMinInvest>
                                <RisingFundMinInvestText>
                                    {t("CURRENT MINIMUM INVESTMENT")}
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
