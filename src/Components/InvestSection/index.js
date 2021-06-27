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
    
    InvestBtmText,
    InvestHeading,
    InvestBtmSubTitle,
    InvestBtmSubText,
    InvestAccordion
} from './InvestElements'
import GlobalFonts from '../../fonts/fonts'
import { useTranslation } from 'react-i18next'
const Invest = () => {
    const {t} = useTranslation();
    return (
        <div>
            <InvestContainer id="Investment">
                <GlobalFonts/>
                
                <InvestTitle>
                    {t("Types of investments")}
                </InvestTitle>
                <InvestSubtitle>
                    Lorem ipsum dolor sit amet consectetur adipis elit.
                </InvestSubtitle>
                
                <InvestBgText>
                    {t("Investment")}
                </InvestBgText>
                <InvestTypeBlock>
                    <InvestBlock>
                        <InvestBlockTitleSeed>
                            {t("Seed")}
                        </InvestBlockTitleSeed>
                        <InvestUnderline>
                        </InvestUnderline>
                        <InvestSubTitle>
                        Ipsum dolor <br/>LOREM IPSUM DOLOR
                        </InvestSubTitle>
                        <InvestBlockText>
                            {t("Early investment. A seed potentially allows to get the token at the best price. Moreover, these are highly exclusive sales, they are often accessible only to a very small minority of investment funds. The potential return on investment is out of category. The risk is on the other hand much higher as well as the vesting.")}
                        </InvestBlockText>
                    </InvestBlock>
                    <InvestBlock>
                        <InvestBlockTitlePrivateSale>
                            {t("Private Sale")}
                        </InvestBlockTitlePrivateSale>
                        <InvestUnderline>
                        </InvestUnderline>
                        <InvestSubTitle>
                        Ipsum dolor <br/>LOREM IPSUM DOLOR
                        </InvestSubTitle>
                        <InvestBlockText>
                            {t("Similar to Seed with the difference that the vesting is less important. The price is often slightly higher than the price of a seed but also has a huge potential return on investment. The risk remains high. It is accessible to a larger number of investment funds.")}
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
                            {t("The return on investment is on average much lower but allows to grow very quickly because there is no vesting. It is also possible in a bear market period on the medium or long term to obtain even lower purchase prices than on the seed. Here the technical analysis is very important.")}
                        </InvestBlockText>
                    </InvestLastBlock>
                </InvestTypeBlock>
                <InvestBottomPart>
                    <InvestBtmText>
                     <InvestHeading>
                     {t("Types of investments")}
                     </InvestHeading>
                     <InvestBtmSubTitle>
                        Lorem ipsum dolor sit.
                     </InvestBtmSubTitle>
                     <InvestBtmSubText>
                        {t("A combination of these 3 types of investment allows for extremely high potential returns for the lowest possible risk in the crypto asset sector.")}
                     </InvestBtmSubText>
                     <InvestHeading>
                     {t("Types of investments")}
                     </InvestHeading>
                     <InvestBtmSubTitle>
                        Lorem ipsum dolor sit.
                     </InvestBtmSubTitle>
                     <InvestBtmSubText>
                        {t("We believe that, as of today, crypto-assets are the asset class with the highest potential return on investment of any market. It is therefore totally relevant to invest a relatively small portion of one's wealth in this type of asset. A small part of one's capital invested in the crypto-asset sector allows a net multiplication of the growth of one's global wealth in the case where the sector is bullish. In case the sector is bearish, this same portfolio will only decrease a little. Risk reward")}
                     </InvestBtmSubText>
                    </InvestBtmText>
                    <InvestAccordion>
                        <CustomizedAccordions/>
                    </InvestAccordion>
                </InvestBottomPart>
                
               

                
            </InvestContainer>
        </div>
    )
}

export default Invest
