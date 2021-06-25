import React from 'react'
import GlobalFonts from '../../fonts/fonts'
import {
    ManifestoContainer,
    ManifestoTitle,
    ManifestoTitleContainer,
    ManifestoText,
    ManifestoWrapper,
    ManifestoBgText,
    ManifestoFgImg,
    ManifestoTitleTpRight,
    ManifestoTextTpRight,
    ManifestoTitleBtmLeft,
    ManifestoTextBtmLeft,
    ManifestoTitleBtmRight,
    ManifestoTextBtmRight } from './ManifestoElements'
    import { useTranslation } from 'react-i18next'
    


const Manifesto = () => {
    const {t} = useTranslation();
    return (
        <React.Fragment>
            <ManifestoContainer id="Manifesto">
            <GlobalFonts/>
            <ManifestoWrapper>
             <ManifestoTitleContainer>
                <ManifestoTitle>
                    {t("Lorem ipsum")}
                </ManifestoTitle>
                <ManifestoText>
                    {t("At the moment, we are still developing the protocols for future DLTs, which will potentially become international standards. We are therefore mainly investing in protocol-type projects. We also believe that DeFi (decentralized finance) and NFT platforms are the first smart contract applications with a real impact and undeniable disruptive power.")}
                </ManifestoText>
                
             </ManifestoTitleContainer>
            
             <ManifestoBgText>
                    {t("Manifesto")}
            </ManifestoBgText>
                
                <ManifestoFgImg>

                </ManifestoFgImg>
                <ManifestoTitleTpRight>
                    Lorem ipsum dolor
                </ManifestoTitleTpRight>
                <ManifestoTextTpRight>
                {t("We therefore also invest mainly in this type of project. Interoperability is also an essential point to allow the evolution of this ecosystem. We therefore invest mainly in projects with this notion of interoperability, such as the Polkadot or Cosmos ecosystems. These three axes constitute the heart of our investments at present")}
                </ManifestoTextTpRight>
                <ManifestoTitleBtmLeft>
                    DLT
                </ManifestoTitleBtmLeft>
                <ManifestoTextBtmLeft>
                    {t("Distributed ledger technology or more commonly and by abuse of language called \"blockchain technologies\". The blockchain is only one DLT among others.")}
                </ManifestoTextBtmLeft>
                <ManifestoTitleBtmRight>
                    DAG
                </ManifestoTitleBtmRight>
                <ManifestoTextBtmRight>
                {t("Distributed ledger technology or more commonly and by abuse of language called \"blockchain technologies\". The blockchain is only one DLT among others.")}
                </ManifestoTextBtmRight>
            </ManifestoWrapper>
            </ManifestoContainer>
            
            </React.Fragment>
    )
}

export default Manifesto
